import { create, test, enforce, only } from 'vest';
  
    const suite = create((data = {}, currentField) => {
        only(currentField);

        test('name', 'This field is required', () => {
            enforce(data.name).isNotBlank();
        });
    
        test('name', 'Please enter a valid name.', () => {
            enforce(data.name).matches(/^[A-Za-z][A-Za-z]*$/);
        });

        test('email', 'This field is required', () => {
            enforce(data.email).isNotBlank();
        });

        test('email', 'Please enter a valid email address.', () => {
            enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
        });

        test('contactnumber', 'This field is required', () => {
            enforce(data.contactnumber).isNotBlank();
        });

        test('contactnumber', 'Please enter a valid contact number', () => {
            enforce(data.contactnumber).matches(/^(\+91|\+91\-|0)?[789]\d{9}$/)
        });

    });

export default suite;
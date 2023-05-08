import { create, test, enforce, only } from 'vest';
  
    const suite = create((data = {}, currentField) => {
        only(currentField);

        test('name', 'This field is required', () => {
            enforce(data.name).isNotBlank();
        });
    
        test('name', 'Please enter a valid name', () => {
            enforce(data.name).isNotNumber().matches(/^[A-Za-z]+([ ][A-Za-z]+){0,2}$/);
        });

        test('email', 'This field is required', () => {
            enforce(data.email).isNotBlank();
        });

        test('email', 'Please enter a valid email address', () => {
            enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
        });

        test('feedback', 'This field is required', () => {
            enforce(data.feedback).isNotBlank();
        });

        test('feedback', 'Please enter a valid message', () => {
            enforce(data.feedback).matches(/^[A-Za-z ]+$/);
        });
        
    });

export default suite;
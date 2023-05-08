import { create, test, enforce, only } from 'vest';
  
    const suite = create((data = {}, currentField) => {
        only(currentField);

        test('item_name', 'This field is required', () => {
            enforce(data.item_name).isNotBlank();
        });
    
        test('item_name', 'Please enter a valid name', () => {
            enforce(data.item_name).isNotNumber().matches(/^[A-Za-z]+([ ][A-Za-z]+){0,}$/);
        });
        
        test('description', 'This field is required', () => {
            enforce(data.description).isNotBlank();
        });

        test('description', 'Please enter a valid message', () => {
            enforce(data.description).matches(/^[A-Za-z]/);
        });

        test('price', 'This field is required', () => {
            enforce(data.price).isNotBlank();
        });

        test('price', 'Invalid Price', () => {
            enforce(data.price).isNumeric();
        });

        test('item_img', 'This field is required', () => {
            enforce(data.item_img).isNotBlank()
        });
    });

export default suite;
// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
   expect(total).toBe(23);
}); 

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})
test ("One euro should be 127.9 yenes", function(){

const {fromDollarToYen } = require('./app.js')

const yenes = fromDollarToYen(4.2)

const expected = 4.2 * 127.9;

expect(expected).toBe(yenes);
})
test ("One euro should be 0.8 pounds", function(){

const {fromYenToPound } = require('./app.js');

const pounds = fromYenToPound(537.18)

const expected = 537.18 * 0.8;

expect(expected).toBe(pounds);
})

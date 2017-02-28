let  myPow  = require('../app/js/myPow.js');

describe("myPow", ()=> {

    for (let i=1, max = 5; i <= max; i++) {
        it(`positive number with positive exp - ${i}^3 should be ${i*i*i}`, () => {
            expect(myPow(i, 3)).toBe(i*i*i);
        });
    }

    for (let i=1, max = 5; i <= max; i++) {
        it(`positive number with negative exp - ${i}^(-3) should be ${1/(i*i*i)}`, () => {
            expect(myPow(i, -3)).toBe(1/(i*i*i));
        });
    }

    for (let i=1, max = 5; i <= max; i++) {
        it(`positive number with zero exp - ${i}^(-3) should be 1}`, () => {
            expect(myPow(i, 0)).toBe(1);
        });
    }



    for (let i=1, max = 5; i <= max; i++) {
        it(`positive number with positive not integer exp - ${i}^3 should be ${i*i*i}`, () => {
            expect(myPow(i, 2.9)).toBe(i*i*i);
        });
    }

    for (let i=1, max = 5; i <= max; i++) {
        it(`positive number with positive not integer exp - ${i}^3 should be ${i*i*i}`, () => {
            expect(myPow(i, 3.1)).toBe(i*i*i);
        });
    }



    it(`zero in any exp - 0^x should be 0`, () => {
        expect(myPow(0, 5)).toBe(0);
    });

    it(`1 in any positive exp - 1^x should be 1`, () => {
        expect(myPow(1, 5)).toBe(1);
    });

    it(`1 in any negative exp - 1^(-x) should be 1`, () => {
        expect(myPow(1, -5)).toBe(1);
    });

    
});

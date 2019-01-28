const expect = require('expect');

// import isrealstring
const {isRealString} = require('./validation.js');

//isrealstring

    //should reject non-string values
    //should rejec string with only spaces
    //should allow string with nonspace chars


    describe('isRealString', () => {
        it('should reject non-string values', () => {
            var res = isRealString(98);
            expect(res).toBe(false);
        });

        it('should reject string with only spaces', () => {
            var res = isRealString('   ');
            expect(res).toBe(false);
        });

        it('should allow string with nonspace chars', () => {
            var res = isRealString(' d  ');
            expect(res).toBe(true);
        });
    });
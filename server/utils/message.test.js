var expect = require('expect');
var {generateMessage} = require('./message');
const {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Myth';
        var text = 'Is a legend!'
        var message = generateMessage(from, text);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text})

    });
});




describe('generateLocationMessage', () => {
    it('should generate correct location object', () =>{
        var from = 'Myth';
        var latitude = 15;
        var longitutde = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitutde);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,url});


    });
});
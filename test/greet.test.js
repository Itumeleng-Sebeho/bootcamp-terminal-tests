let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Itumeleng correctly', function(){
        assert.equal('Hello, Itumeleng', greet('Itumeleng'));
    });
    it('should greet Lynn correctly', function(){
        assert.equal('Hello, Lynn', greet('Lynn'));
    });
});
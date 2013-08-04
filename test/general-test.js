var UniformLUT = require('../').uniform;
var a = require('assert');

var testKeys = [1, 2, 3, 4, 5];
var testArray = [2, 4, 8, 16, 32];
var lut = new UniformLUT(testKeys, testArray);

describe('uniform lut', function(){

	it('should interpolate values', function(){
		a.equal(lut.interpolate(3.5), 12);
		a.equal(lut.interpolate(4), 16);
	});

	it('should return the min/max for out of bounds requests', function(){
		a.equal(lut.interpolate(-1), 2);
		a.equal(lut.interpolate(100), 32);
	});

});
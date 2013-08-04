var GeneralLUT = require('../').general;
var a = require('assert');

var testKeys = [2, 4, 8, 16, 32];
var testArray = [1, 2, 3, 4, 5];
var lut = new GeneralLUT(testKeys, testArray);

describe('general lut', function(){

	it('should interpolate values', function(){
		a.equal(lut.interpolate(12), 3.5);
		a.equal(lut.interpolate(16), 4);
		a.equal(lut.interpolate(24), 4.5);
	});

	it('should return the min/max for out of bounds requests', function(){
		a.equal(lut.interpolate(0), 1);
		a.equal(lut.interpolate(64), 5);
	});

});
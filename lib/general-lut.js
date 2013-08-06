var UniformLUT = require('./uniform-lut'),
    util = require('util');

module.exports = GeneralLUT;

function GeneralLUT (keys, values) {
	UniformLUT.call(this, keys, values);
}

util.inherits(GeneralLUT, UniformLUT);

GeneralLUT.prototype.interpolate = function (position) {
	if (position >= this.keys[this.length - 1]) return this.values[this.length - 1];
	if (position <= this.keys[0]) return this.values[0];

	var left = 0, right = this.keys.length-1;
	while (true) {
		var median = Math.floor((right + left) / 2);

		if (median === left) break;

		if (position < this.keys[median]) {
			right = median;
		} else {
			left = median;
		}
	}

	var span = this.keys[right] - this.keys[left];
	var remainder = (position - this.keys[left]) / span;

	return this.LERP(this.values[left], this.values[right], remainder);
}

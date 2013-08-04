module.exports = UniformLUT;

function UniformLUT (keys, values) {
	if (!Array.isArray(keys)
	|| !Array.isArray(values)
	|| keys.length !== values.length) {
		throw new Error("Parameters keys and values must be arrays with the same length.");
	}

	this.keys = keys.slice();
	this.values = values.slice();
	this.length = keys.length;
}

UniformLUT.prototype.interpolate = function (position) {
	if (position >= this.keys[this.length - 1]) return this.values[this.length - 1];
	if (position <= this.keys[0]) return this.values[0];

	var step = this.keys[1] - this.keys[0];

	var lowerIndex = Math.floor((position - this.keys[0]) / step);

	var remainder = (position - this.keys[lowerIndex]) / step;

	if (remainder === 0) {
		return this.values[lowerIndex];
	}

	return this.LERP(this.values[lowerIndex], this.values[lowerIndex + 1], remainder);
}

UniformLUT.prototype.LERP = function (a, b, c) {
	return a + (b - a) * c;
}
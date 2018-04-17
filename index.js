
/**
 * determine if value is truthy
 *
 * @param {Mixed} value
 * @return {Boolean}
 */
function isTruthy(value) {
	value = `${value}`.toLowerCase().trim();
	if (/^[0-9\.]+$/.test(value)) {
		value = parseFloat(value);
		value = `${value}`.trim();
	}
	return /^(1|true|on|active)$/.test(value);
}

// export
module.exports = isTruthy;


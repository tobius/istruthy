
// import
const _ = require('lodash');

/**
 * determine if value is truthy
 *
 * @param {Mixed} value
 * @return {Boolean}
 */
function isTruthy(value) {
	value = _.isNull(value) || _.isUndefined(value) ? '' : value;
	value = value.toString().toLowerCase().trim();
	return /^(1|active|on|true|truth)$/.test(value);
}

// export
module.exports = isTruthy;


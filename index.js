/**
 * Determine if value is truthy
 * @param {Mixed} value
 * @return {Boolean}
 */
function isTruthy(value) {
  let normalized = `${value}`.toLowerCase().trim();
  if (/^[0-9.]+$/.test(normalized)) {
    normalized = parseFloat(normalized);
    normalized = `${normalized}`.trim();
  }
  return /^(1|true|on|active)$/.test(normalized);
}

// export
module.exports = isTruthy;

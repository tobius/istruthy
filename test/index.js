
// import
const
	chai = require('chai'),
	isTruthy = require('../index');

// IMPORTANT: only in tests
process.on('unhandledRejection', () => {
	/**/
});

// configure
const expect = chai.expect;
chai.config.includeStack = true;

// test
describe('isTruthy', () => {

	it('should understand booleans', () => {
		expect(isTruthy(true)).to.be.true;
		expect(isTruthy('true')).to.be.true;
		expect(isTruthy(false)).to.be.false;
		expect(isTruthy('false')).to.be.false;
	});

	it('should understand integers', () => {
		expect(isTruthy(-100)).to.be.false;
		expect(isTruthy('-100')).to.be.false;
		expect(isTruthy(-1)).to.be.false;
		expect(isTruthy('-1')).to.be.false;
		expect(isTruthy(0)).to.be.false;
		expect(isTruthy('0')).to.be.false;
		expect(isTruthy(1)).to.be.true;
		expect(isTruthy('1')).to.be.true;
		expect(isTruthy(100)).to.be.false;
		expect(isTruthy('100')).to.be.false;
	});

	it('should understand floats', () => {
		expect(isTruthy(-100.5)).to.be.false;
		expect(isTruthy('-100.5')).to.be.false;
		expect(isTruthy(-1.5)).to.be.false;
		expect(isTruthy('-1.5')).to.be.false;
		expect(isTruthy(0.0)).to.be.false;
		expect(isTruthy('0.0')).to.be.false;
		expect(isTruthy(1.0)).to.be.true;
		expect(isTruthy('1.0')).to.be.true;
		expect(isTruthy(1.5)).to.be.false;
		expect(isTruthy('1.5')).to.be.false;
		expect(isTruthy(100.5)).to.be.false;
		expect(isTruthy('100.5')).to.be.false;
	});

	it('should understand null', () => {
		expect(isTruthy(null)).to.be.false;
		expect(isTruthy('null')).to.be.false;
	});

	it('should understand undefined', () => {
		/* eslint-disable no-undefined */
		expect(isTruthy(undefined)).to.be.false;
		/* eslint-enable no-undefined */
		expect(isTruthy('undefined')).to.be.false;
	});

	it('should understand NaN', () => {
		expect(isTruthy(NaN)).to.be.false;
		expect(isTruthy('NaN')).to.be.false;
	});

	it('should understand Infinity', () => {
		expect(isTruthy(Infinity)).to.be.false;
		expect(isTruthy('Infinity')).to.be.false;
	});

	it('should understand "human truthy" strings', () => {
		expect(isTruthy('on')).to.be.true;
		expect(isTruthy('active')).to.be.true;
		expect(isTruthy('off')).to.be.false;
		expect(isTruthy('inactive')).to.be.false;
	});

});


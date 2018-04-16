
// import
const
	chai = require('chai'),
	isTruthy = require('../index');

// IMPORTANT: only while testing
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
		expect(isTruthy(false)).to.be.false;
	});

	it('should understand stringified booleans', () => {
		expect(isTruthy('true')).to.be.true;
		expect(isTruthy('TRUE')).to.be.true;
		expect(isTruthy('false')).to.be.false;
		expect(isTruthy('FALSE')).to.be.false;
	});

	it('should understand integers', () => {
		expect(isTruthy(-100)).to.be.false;
		expect(isTruthy(-1)).to.be.false;
		expect(isTruthy(0)).to.be.false;
		expect(isTruthy(1)).to.be.true;
		expect(isTruthy(100)).to.be.false;
	});

	it('should understand stringified integers', () => {
		expect(isTruthy('-100')).to.be.false;
		expect(isTruthy('-1')).to.be.false;
		expect(isTruthy('0')).to.be.false;
		expect(isTruthy('1')).to.be.true;
		expect(isTruthy('100')).to.be.false;
	});

	it('should understand floats', () => {
		expect(isTruthy(-100.5)).to.be.false;
		expect(isTruthy(-1.5)).to.be.false;
		expect(isTruthy(0.0)).to.be.false;
		expect(isTruthy(1.0)).to.be.true;
		expect(isTruthy(1.5)).to.be.false;
		expect(isTruthy(100.5)).to.be.false;
	});

	it('should understand stringified floats', () => {
		expect(isTruthy('-100.5')).to.be.false;
		expect(isTruthy('-1.5')).to.be.false;
		expect(isTruthy('0.0')).to.be.false;
		expect(isTruthy('1.0')).to.be.false;
		expect(isTruthy('1.5')).to.be.false;
		expect(isTruthy('100.5')).to.be.false;
	});

	it('should understand null', () => {
		expect(isTruthy(null)).to.be.false;
	});

	it('should understand stringified null', () => {
		expect(isTruthy('null')).to.be.false;
		expect(isTruthy('NULL')).to.be.false;
	});

	it('should understand undefined', () => {
		/* eslint-disable no-undefined */
		expect(isTruthy(undefined)).to.be.false;
		/* eslint-enable no-undefined */
	});

	it('should understand stringified undefined', () => {
		expect(isTruthy('undefined')).to.be.false;
	});

	it('should understand NaN', () => {
		expect(isTruthy(NaN)).to.be.false;
	});

	it('should understand stringified NaN', () => {
		expect(isTruthy('NaN')).to.be.false;
	});

	it('should understand Infinity', () => {
		expect(isTruthy(Infinity)).to.be.false;
	});

	it('should understand stringified Infinity', () => {
		expect(isTruthy('Infinity')).to.be.false;
	});

	it('should understand "human truthy" strings', () => {
		expect(isTruthy('on')).to.be.true;
		expect(isTruthy('ON')).to.be.true;
		expect(isTruthy('off')).to.be.false;
		expect(isTruthy('OFF')).to.be.false;
		expect(isTruthy('active')).to.be.true;
		expect(isTruthy('ACTIVE')).to.be.true;
		expect(isTruthy('inactive')).to.be.false;
		expect(isTruthy('INACTIVE')).to.be.false;
		expect(isTruthy('truth')).to.be.true;
		expect(isTruthy('TRUTH')).to.be.true;
		expect(isTruthy('lie')).to.be.false;
		expect(isTruthy('LIE')).to.be.false;
	});

});


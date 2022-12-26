const assert = require("assert");
const canJump = require("../index");

describe("Test Jump Game", () => {
	it("[0] should be true", () => {
		assert.equal(canJump([0]), true);
	});
	it("[2, 3, 1, 1, 4] should be true", () => {
		assert.equal(canJump([2, 3, 1, 1, 4]), true);
	});

	it("[3, 2, 1, 0, 4] should be false", () => {
		assert.equal(canJump([3, 2, 1, 0, 4]), false);
	});

	it("[ 0, 5, 4 ] should be false", () => {
		assert.equal(canJump([0, 5, 4]), false);
	});

	it("[ 0, 9, 0, 9, 3 ] should be false", () => {
		assert.equal(canJump([0, 9, 0, 9, 3]), false);
	});

	it("[7, 10, 6, 2, 5, 9, 10, 8, 2, 5, 6, 10, 0, 0, 5, 4] should return true", () => {
		assert.equal(
			canJump([7, 10, 6, 2, 5, 9, 10, 8, 2, 5, 6, 10, 0, 0, 5, 4]),
			true
		);
	});

});

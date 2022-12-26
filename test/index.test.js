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
});

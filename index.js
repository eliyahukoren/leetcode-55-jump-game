function* enumerate(iterable) {
    let i = 0;

    for (const x of iterable) {
        yield [i, x];
        i++;
    }
}

/*
[2, 3, 1, 1, 4]
 ^
1. [0, 0, 2] [farthest, index, num]
	index <= farthest
	0 <= 0
		farthest = max(0, 0 + 2) => 2

[2, 3, 1, 1, 4]
    ^
2. [2, 1, 3] [farthest, index, num]
	index <= farthest
	1 <= 2
		farthest = max(2, 1 + 3) => 4

[2, 3, 1, 1, 4]
       ^
3. [4, 2, 1] [farthest, index, num]
	index <= farthest
	2 <= 4
		farthest = max(4, 2 + 1) => 4

[2, 3, 1, 1, 4]
          ^
4. [4, 3, 1] [farthest, index, num]
	index <= farthest
	3 <= 4
		farthest = max(4, 3 + 1) => 4

[2, 3, 1, 1, 4]
             ^
5. [4, 4, 4] [farthest, index, num]
	index <= farthest
	4 <= 4
		farthest = max(4, 4 + 4) => 8

return 8 >= 4
return farthest >= nums.length - 1

*/
module.exports = canJump = (nums) => {
    let farthest = 0;

    for (const [index, num] of enumerate(nums)) {
        if (index <= farthest) {
            farthest = Math.max(farthest, index + num);
        }
    }
    return farthest >= nums.length - 1;
};

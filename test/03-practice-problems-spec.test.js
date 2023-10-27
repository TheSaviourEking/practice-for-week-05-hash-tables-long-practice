const { expect } = require('chai');

const { kth, newAlphabet, longestPalindrome, longestSubstr, maxSubarr, coinChange, climbingSteps } = require('./../phases/03-practice-problems.js');

describe('Kth Most Frequent', function () {
    it('returns the kth most frequent character in the given string', () => {
        expect(kth('aaabbc', 1)).to.equal('a');
        expect(kth('aaabbc', 2)).to.equal('b');
        expect(kth('aaabbc', 3)).to.equal('c');
    });
});

describe('New Alphabet', () => {
    context('Given the standard alphabet order (abc...xyz) is rearranged, Given the string and a new alphabet order, determine whether the characters in the string appear in lexicilogically increasing order, solve in O(m+n) time',
        function () {
            it('should solve the problem', function () {
                expect(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz')).to.be.true;
                expect(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz')).to.be.false;
                expect(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz')).to.be.true;
            });
        });
});

describe('Longest Palindrome', () => {
    context('Given a string, determine the length of the longest palindrome that can be built with those letters. Solve in O(n) time', function () {
        it('should return length of longest palindrome that can be built', function () {
            expect(longestPalindrome('abccccdd')).to.eq(7);
        });
    });
});

describe('Longest Substring', () => {
    it('should find and return the length of the longest substring without repeating characters in O(n) time', () => {
        expect(longestSubstr("abcabcbb")).to.equal(3);
        expect(longestSubstr("bbbbb")).to.equal(1);
    });
});

describe('Max Subarray Length', () => {
    it('should return the length of the longest subarray where the difference between its maximum value and its minimum value is at most 1, in O(n) time', () => {
        expect(maxSubarr([1, 3, 2, 2, 5, 2, 3, 7])).to.equal(5);
        expect(maxSubarr([1, 1, 1, 1, 3])).to.equal(4);
    });
});

describe('Coin Change', () => {
    context('Given coins of different denominations and a total amount of money', () => {
        it('should return the fewest number of coins that is needed to make up that amount, return -1 otherwise', () => {
            const coins = [1, 5, 10, 25];
            const coins2 = [5];
            expect(coinChange(coins, 11)).to.equal(2);
            expect(coinChange(coins2, 3)).to.equal(-1);
            expect(coinChange(coins2, 0)).to.equal(0);
        });

    });
});

describe('Climbing Steps', () => {
    context('You are climbing a staircase. It takes n steps to reach the top. Each time you climb 1,2 or 3 steps.', () => {
        it('should return how many distinct ways i can climb to the top', () => {
            expect(climbingSteps(0)).to.equal(1);
            expect(climbingSteps(1)).to.equal(1);
            expect(climbingSteps(2)).to.equal(2);
            expect(climbingSteps(3)).to.equal(4);
            expect(climbingSteps(4)).to.equal(7);
        })
    })
});

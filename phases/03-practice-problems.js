let count = 0;
let length = 0;
const cache = {};
const kth = (str, target) => {
    function findKth() {
        // console.log('RUNNING')
        for (let i = 0; i < str.length; i++) {
            if (str[i] in cache) {
                cache[str[i]]++;
            } else {
                cache[str[i]] = 1;
                length++;
            }
        }
    }

    if (count === 0) {
        findKth();
        count++;
    }
    for (let key in cache) {
        if (cache[key] === Math.ceil(length / target)) {
            return key;
        }
    }
}

// console.log(kth('aaabbc', 1));
// console.log(kth('aaabbc', 2));
// console.log(kth('aaabbc', 3));

// const 
const newAlphabet = (str, alphabetOrder) => {
    for (let i = 1; i < str.length; i++) {
        if (alphabetOrder.indexOf(str[i]) < alphabetOrder.indexOf(str[i - 1])) {
            return false;
        }
    }
    return true;
};

// console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));
// console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));
// console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));

const longestPalindrome = (str) => {
    const letterCount = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in letterCount) {
            letterCount[str[i]]++;
            if (letterCount[str[i]] === 2) {
                count += 2;
                delete letterCount[str[i]];
            }
        } else {
            letterCount[str[i]] = 1;
        }
    };

    console.log(letterCount)
    return ++count;
};

// console.log(longestPalindrome("abccccdddt"));

const longestSubstr = (str) => {
    // this works 
    // let strSet = new Set(str);
    // let strArr = [...strSet];
    // return strArr.join('').substring(strArr.indexOf(str[0])).length;

    // amd this works
    return new Set(str).size;
};
// console.log(longestSubstr("abcabcbb"));
const maxSubarr = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] - arr[i + 1] >= -1) && (arr[i] - arr[i + 1] <= 1)) result.push(arr[i]);
        else if ((arr[i] - Math.max(...result) >= -1) && (arr[i] - Math.max(...result) <= 1)) result.push(arr[i]);
    }
    return result.length;
};

// console.log(maxSubarr([1, 3, 2, 2, 5, 2, 3, 7]));
// console.log(maxSubarr([1, 1, 1, 1]));

// let coinsCount = [];
let coinsCounter = {};
const coinChange = (arr, totalAmount) => {
    if (coinsCounter[totalAmount]) return coinsCounter[totalAmount];

    if (arr.length === 1 && totalAmount < arr[0]) {
        if (totalAmount === 0) return 0;
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        coinsCounter[totalAmount] = 0
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                if (arr[i] + arr[j] === totalAmount) {
                    coinsCounter[totalAmount] += 2;
                    return coinsCounter[totalAmount]
                }
            }
        }
    }
    return -1;
};

// const coins = [1, 5, 10, 25];
// const coins2 = [5];

// console.log(coinChange(coins, 11));
// console.log(coinChange(coins, 11));
// console.log(coinChange(coins2, 3));
// console.log(coinChange(coins2, 0));
// console.log(coinsCounter);

// let countSteps = {
//     0: 1, 1: 1
// }

const climbingSteps = (n) => {
    if (n <= 1) {
        return 1;
    }
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n];
}

// console.log(climbingSteps(0));
// console.log(climbingSteps(1));
// console.log(climbingSteps(2));
// console.log(climbingSteps(3));
// console.log(climbingSteps(4));
module.exports = { kth, newAlphabet, longestPalindrome, longestSubstr, maxSubarr, coinChange, climbingSteps }

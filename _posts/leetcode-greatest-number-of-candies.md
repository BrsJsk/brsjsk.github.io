---
title: '#2 - Leetcode - Kids with the greates number of candies solution'
excerpt: 'There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.'
coverImage: '/assets/blog/leetcode-greatest-number-of-candies/cover.png'
date: '2020-08-06T16:00:07.322Z'
author:
  name: Boris Joskic
  picture: '/assets/blog/authors/borisj.jpg'
ogImage:
  url: '/assets/blog/leetcode-greatest-number-of-candies/cover.png'
---

Github [url](https://github.com/BrsJsk/2-kids-with-the-greatest-number-of-candies)

Leetcode [url](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)


There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Example 1:

```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
```

---

# Solution 1

```
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
module.exports.kidsWithCandies = (candies, extraCandies) => {
    const largestNumber = Math.max(...candies);

    return candies.map(candie => candie + extraCandies >= largestNumber);
};
```

This is a very simple one-liner solution..but, it's slower to execute then a good old for loop.

```
Runtime: 136 ms, faster than 5.86% of JavaScript online submissions for Kids With the Greatest Number of Candies.
Memory Usage: 36.7 MB, less than 10.89% of JavaScript online submissions for Kids With the Greatest Number of Candies.
```

# Solution 2

```
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
module.exports.kidsWithCandies = (candies, extraCandies) => {
    const largestNumber = Math.max(...candies);
    let items = [];

    for (let i = 0; i < candies.length; i++) {
        items.push(candies[i] + extraCandies >= largestNumber)
    }

    return items;
};
```

```
Runtime: 76 ms, faster than 46.11% of JavaScript online submissions for Kids With the Greatest Number of Candies.
Memory Usage: 37.1 MB, less than 7.66% of JavaScript online submissions for Kids With the Greatest Number of Candies.
```

# Difference

Difference in execution speed is quite noticable.
![](assets/blog/leetcode-greatest-number-of-candies/ms_speed.png)

But difference in memory usage? Ehh, not so much noticable..
![](assets/blog/leetcode-greatest-number-of-candies/mb_usage.png)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let windowStart = 0;
  let matched = 0;
  let charFreq = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (charFreq[char] === undefined) {
      charFreq[char] = 1;
    } else {
      charFreq[char]++;
    }
  }

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    let rightChar = s2[windowEnd];

    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;
      if (charFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFreq).length) {
      return true;
    }

    if (windowEnd >= s1.length - 1) {
      let leftChar = s2[windowStart];
      windowStart += 1;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1;
        }
        charFreq[leftChar] += 1;
      }
    }
  }

  return false;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
*/

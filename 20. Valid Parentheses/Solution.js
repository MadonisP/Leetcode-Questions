/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false; // verilen degerde bir dengesizlik var mi diye kontrol || cheking that is size balanced or not balanced
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) { //Burada C bize gelen deger stack pop ile pushladigimiz degeri karsilastiriyoruz eger tutmazsa false donuyor tutarsa true
            // C is our first brackets we are pushing brackets into stack for each C brackets after that we are cheking with pop method like  
          return false;
        }
    }
  }

  return stack.length === 0;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

/* Example:
Input: s = "()[]{}"
Output: true
*/

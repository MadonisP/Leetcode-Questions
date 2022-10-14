/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    var myArr=s.split(' ')
    var test=myArr[0].split("")
    let p1=0
    let p2=test.length-1
    while(p1,p2){
        let holder=test[p1]
        test[p1]=test[p2]
        test[p2]=holder

        p1++
        p2--
    }
    return test.join('')
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

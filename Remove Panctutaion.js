/* Remove punctuation
We remove punctuations so that we don’t have different forms of the same word. If we don’t remove the punctuation, then been. been, been! will be treated separately.
 */

function removePanctuation(str){
   return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    
}
 let sampleStr = "Hello, world! This is a test.";
 let cleanStr = removePanctuation(sampleStr);
 console.log(cleanStr); // Hello world This is a test

 /*
 Regular Expression Explanation
 The regular expression is a bit complicated. It is a combination of several regular expressions. 
 The first part of the regular expression is [.,\/#!$%\^&\*;:{} =-_`~()] which matches 
    all the punctuation characters. The second part of the regular expression is
STARTS WITH / ... /
Square brackets [] define a character class. This means that any one of the characters 
inside the brackets will be matched.
g:
This flag stands for "global," meaning the regex will search the entire input string
 for matches, not just the first occurrence.
 */

 function removepanct(str2){
    return str2.replace(/[;:,.<>/?/@#$%^&*()]/g, '');

 }

 let sampleStr2 = "hi & By shadulla *()";
 let cleanstr2 = removepanct(sampleStr2);
 console.log(cleanstr2); // hi By shadulla

//Basic function
function getWord(){ 
    var wordEntered = document.getElementById('InputText').value;
    console.log(wordEntered);
    //IIFE
    (function(word){ 
        var count = 0;
        for(let i=0; i < word.length; i++){
            if(word[i] === 'a')
                count++;
        }
        console.log(count);
    })(wordEntered);
    const regexpIChar = /^[aeiouAEIOU]/;
    var article = wordEntered => regexpIChar.test(wordEntered) ? 'an' : 'a'; //Arrow function
    console.log(article(wordEntered));
}



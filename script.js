const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkButton.addEventListener('click',palindromeChecker);


function palindromeChecker(e){
    e.preventDefault();

    value=textInput.value;
    valueClean=cleaner(value);
    if(valueClean.length===0){
        alert('Please input a value');
    }
    else if(valueClean===valueClean.split("").reverse().join(""))
        {
            result.innerText=`${value} is a palindrome.`
            
        }
    else {
        result.innerText=`${value} is a not a palindrome.` 
    }

    }

function cleaner(value){
    const regex = /[a-z0-9+]/gi;
    console.log(value.match(regex).join("").toLowerCase());
    return value.match(regex).join("").toLowerCase();
}


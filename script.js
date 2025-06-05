// selected all the input elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorselect = document.getElementById("op");
const form= document.querySelector('form')
const resultparagraph= document.getElementById('result')

form.addEventListener("submit" ,function(event){
    event.preventDefault(); // prevent the page from  refreshing


    
     if(num1Input.value===''|| num2Input.value===''){
        resultparagraph.textContent='please enter both values ';
        return;
    }

    // get input values
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const operator = operatorselect.value;


    // now calculate  result 

    let result;
    if(operator ==='+'){
        result = num1 + num2;
    }else if(operator === "-") {
        result = num1-num2;
    }
    else if (operator ==="*"){
        result= num1*num2;
    }
    else if(operator==="/"){
        result = num1 /num2;
    }
    else if(operator ==="%"){
        result = num1%num2;
    }
    else{
         result= "invalid input"
    }

   

    // show the result
    resultparagraph.textContent = `Result: ${result}`;

    // // clear input 
    // num1Input.value='';
    // num2Input.value = '';
    // operatorselect.value = '';
});



 function Doit(){
    num1Input.value='';
    num2Input.value = '';
    operatorselect.value = '+';
    resultparagraph.textContent="";
}


// dark mode 

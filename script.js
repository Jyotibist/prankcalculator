// grab all the buttons as in array
// look through the array and add event handler to each button
// when the button is clicked, gets the button value
// grab the display element 
// add the value to the display elements
// grab all the buttons
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

const displayElem = document.querySelector(".display");


const buttonsArray = Array.from(buttons);
// console.log(buttonsArray);
let strToDisplay ="";
const operators = ["/","-","+","%"];
let lastOperator="";

buttonsArray.map((btn)=>{
    btn.addEventListener("click", ()=>{
        const val = btn.innerText;
        console.log(val);
            // alert("you clicked");
        if(val =='AC'){
            strToDisplay="";
            display();
            return;
        }
        if(val=="C"){
            strToDisplay= strToDisplay.slice(0,-1);
            return display(strToDisplay);
        }
       
        if(val==='='){
            const lastChar = strToDisplay
            [strToDisplay.length-1];
            if(operators.includes(lastChar)){
                strToDisplay=strToDisplay.slice[0,-1];
            }
            console.log(lastChar, "gxjhsg");
           return total();

        

        }
       
        if(val ==="."){
    
            if(lastOperator){
                const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
                const lastNumberSet = strToDisplay.slice(operatorIndex+1);
                if(lastNumberSet.includes(".")){
                    return;
                }
                console.log(operatorIndex);
            }
            if(!lastOperator && strToDisplay.includes(".")){
                return;
            }
         }
        if(operators.includes(val)){
            if(!strToDisplay){
                return;
            }
            const lastChar = strToDisplay
            [strToDisplay.length-1];
            if(operators.includes(lastChar)){
                strToDisplay=strToDisplay.slice[0,-1];
            }
            lastOperator =val;
        } 
        strToDisplay += val;
        display(strToDisplay);

        });
});
 
const display= (str)=>{
    displayElem.innerText = str || "0.00";
};
const total =()=>{
    const extra = randomNumber();
    if(extra>0){
        displayElem.style.background="red";
    }
    const ttl = eval(strToDisplay);
    display(ttl);
    strToDisplay = ttl.toString;
};
const randomNumber =()=>{
    const num = Math.round(Math.random()*10);
    return num <5? num : 0;
}
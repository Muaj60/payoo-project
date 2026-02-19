//Transfer Money part
document.getElementById("transfer-btn").addEventListener('click',function(){

const number =getValueFromInput("transfer-number")
if(number.length!==11){
    alert("Invalid Number")
    return;
}
const amount=getValueFromInput("transfer-amount")
const currentBalance=getBalance();
if(amount>currentBalance){
    alert("Invalid Amount");
    return;
}
const pin=getValueFromInput("transfer-pin")
if(pin=='1234'){
    alert("transfer successful")
    const money=currentBalance-amount;
    setBalance(money)
    //Access history container
    const history = document.getElementById("history-container");
    //create a new div
    const newHistory = document.createElement("div");
    //adding innerHTML in new div
    newHistory.innerHTML = `
        <div class="transaction-card py-5 bg-base-100">
        Add Transfer-Money Success from
             ${number} ,to taka- ${amount} at ${new Date()}
             </div>
        `;
    //append new div into history container
    history.append(newHistory)
    
}
else{
    alert("transfer invalid")
}
})


   
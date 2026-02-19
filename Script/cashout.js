document.getElementById("cashout-btn").addEventListener("click", function () {
  //1)get the agent number &validate
  const cashoutNumber = getValueFromInput("cashout-number");
  console.log(cashoutNumber);
  if(cashoutNumber.length!==11){
    alert("invalid number")
    return;
  }

  //2)get the amount
  const cashAmount = getValueFromInput("cashout-amount");
  console.log(cashAmount);

  const currentBalance=getBalance();
  //4)get current balance
  const newBalance=currentBalance-Number(cashAmount)
  console.log(newBalance)
  if(newBalance<0){
    alert("invalid amount")
    return;
  }

  //pin
  const pin=getValueFromInput("cashout-pin")
  if(pin==='1234'){
    alert("cashout successful")
  setBalance(newBalance)
  //Access history container
    const history = document.getElementById("history-container");
    //create a new div
    const newHistory = document.createElement("div");
    //adding innerHTML in new div
    newHistory.innerHTML = `
        <div class="transaction-card py-5 bg-base-100">
        Add Cash-out Success to
             ${cashAmount} ,cashout-number ${cashoutNumber} at ${new Date()}
             </div>
        `;
    //append new div into history container
    history.append(newHistory)
  }
  else{
    alert("invalid pin")
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {

//   //1)get the agent number &validate
//   const cashNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length!==11){
//     alert("Invalid Agent Number")
//     return;
//   }

//   //2)get the amount, validate , convert to number
//   const cashAmountInput = document.getElementById("cashout-amount");
//   const cashAmount = cashAmountInput.value;
//   console.log(cashAmount);

//   //3)get the Current Balance, validate , convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   //4) calculate new Balance
//   const newBalance = Number(balance) - Number(cashAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   //5)get the Pin and Verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin === "1234") {
//     //5.1)true--show an alert>set Balance
//     alert("cashout successful");
//     console.log("New Balance:", newBalance);
//     balanceElement.innerText=newBalance;
//   } else {
//     //5.2)false--show an error alert>return
//     alert("Invalid Pin");
//     return;
//   }
// });

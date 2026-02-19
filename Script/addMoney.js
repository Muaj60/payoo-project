document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");

  //1)get bank account
  if (bankAccount === "Select Bank") {
    alert("please select a bank");
    return;
  }

  //2)get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("invalid acc no");
    return;
  }

  //get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from
             ${bankAccount}
              at ${new Date()}`);
    setBalance(newBalance);

    //Access history container
    const history = document.getElementById("history-container");
    //create a new div
    const newHistory = document.createElement("div");
    //adding innerHTML in new div
    newHistory.innerHTML = `
        <div class="transaction-card py-5 bg-base-100">
        Add Money Success from
             ${bankAccount} ,acc-no ${accno} at ${new Date()}
             </div>
        `;
    //append new div into history container
    history.append(newHistory)
  } else {
    alert("invalid pin");
    return;
  }
});

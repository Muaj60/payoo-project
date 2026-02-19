console.log("Muaj")

//Machine Id--->input ,value
function getValueFromInput(id){
    const input=document.getElementById(id)
    const value=input.value;
    console.log(input.id, value)
    return value;
}

//machine->balance
function getBalance(){
    const balanceElement=document.getElementById("balance")
    const balance=balanceElement.innerText;
    console.log("Current Balance: ",Number(balance))
    return Number(balance)
}

//machine value-->set balance
function setBalance(value){
    const balanceElement=document.getElementById("balance")
    balanceElement.innerText=value;
}

//machine->hide all-->show All
function showOnly(id){
    // console.log("Connect Successful")
    const addmoney=document.getElementById("add-money")
    const cashout=document.getElementById("cashout")
    const transferMoney=document.getElementById("transfer-money")
    const transactionHistory=document.getElementById("history")
    // console.log(`add Money-${addmoney}, cashout-${cashout}`)

    //hide all section
    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")
    transferMoney.classList.add("hidden")
    transactionHistory.classList.add("hidden")

    //show only id element
    const selected=document.getElementById(id)
    selected.classList.remove("hidden")
      
    
}
// add event handler in deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    //update deposit amount
    const inputField = document.getElementById('deposit-input');
    const depositAmountText = inputField.value;
    const newdepositAmount = parseFloat(depositAmountText);

    const totallDeposit = document.getElementById('totall-deposit');
    const previousDepositAmountText = totallDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
   

    const newTotallAmount = previousDepositAmount + newdepositAmount;

    totallDeposit.innerText = newTotallAmount;

    //update totall balance
    const totallBalance = document.getElementById('totall-balance');
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);

    const newTotallBalance = previousTotallBalance + newdepositAmount;

    totallBalance.innerText = newTotallBalance;

    //clear the input field
    inputField.value = '';
})

//add event handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //update withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdarwInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdarwInputText);

    withdrawInput.value = '';

    const withdrawTotall = document.getElementById('withdraw-totall');
    const withdrawTotallText = withdrawTotall.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotallText);

    const totallWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotall.innerText = totallWithdrawAmount;

    //update totall balance
    const totallBalance = document.getElementById('totall-balance');
    const totallAmountText = totallBalance.innerText;
    const previousTotallBalance = parseFloat(totallAmountText);

    const newTotallBalance = previousTotallBalance - newWithdrawAmount;

    totallBalance.innerText = newTotallBalance;

})
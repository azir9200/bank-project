document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);


  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousWithdrawTotalString);


  const currentWithdrawTotal = previousBalanceTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step 5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTota = parseFloat.apply(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert('Baap er Bank e etoo taka nai !!');
    return;
  }


  //step 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
  console.log(previousBalanceTota);
})
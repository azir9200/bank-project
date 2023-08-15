
document.getElementById('btn-deposit').addEventListener('click', function () {


  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);


  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //step 4
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  //step 5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTota = parseFloat(previousBalanceTotalString);

  // step 6
  const currentBalanceTotal = previousBalanceTota + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  //console.log('depositAmoun');

})


document.getElementById('deposit-button').addEventListener('click',function(){
//lconsole.log("deposit button clicked");


//get amount for depositing
const depositAmount = document.getElementById('deposit-amount').value;

if(depositAmount != '')
{
    const dollarDeposit = document.getElementById('dollar-deposit');
  console.log(dollarDeposit);
  
  dollarDeposit.innerText =   parseInt(dollarDeposit.innerText)+ parseInt (depositAmount);

  

  const dollarBalance = document.getElementById('dollar-balance');

  dollarBalance.innerText = parseInt(dollarBalance.innerText)+ parseInt(depositAmount);

  document.getElementById('deposit-amount').value='';
}






})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdraw-amount').value;

    if ( withdrawAmount != '')
    {
        const dollarWithdraw = document.getElementById('dollar-withdraw');
    dollarWithdraw.innerText = parseInt(dollarWithdraw.innerText) + parseInt(withdrawAmount);


    const dollarBalance = document.getElementById('dollar-balance');

    dollarBalance.innerText = parseInt(dollarBalance.innerText)- parseInt(withdrawAmount);

    document.getElementById('withdraw-amount').value='';
    }


})
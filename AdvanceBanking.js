
function getInput(input)
{
    const inputTotal = document.getElementById(input);
     return inputTotal;
}



function additionSubtraction (a, b, s)
{
    if(s == 'a')
    {
        return (parseFloat(a)+parseFloat(b));
    }
    else if(s == 's')
    {
        return (parseFloat(a)-parseFloat(b));
    }
}



function task(id1, id2, balance ,s)
{
    
    const Amount =  getInput(id1).value;
    const TotalText = getInput(id2).innerText;

    if(s=='w')
    {
        if(Amount<getInput('dollar-balance').innerText && Amount>0)
        {
            getInput(id2).innerText = additionSubtraction(Amount ,TotalText,'a'); 
            dollarBalanceUpdate('withdraw-amount','s');
        }
    }
   else if(s=='d' && Amount>0)
   {
    getInput(id2).innerText = additionSubtraction(Amount ,TotalText,'a');
    dollarBalanceUpdate('deposit-amount','a' );
   }

}

function dollarBalanceUpdate(id , operation)
{
    getInput('dollar-balance').innerText =  additionSubtraction(getInput('dollar-balance').innerText , getInput(id).value , operation);
}



document.getElementById('deposit-button').addEventListener('click',function(){
    task('deposit-amount','dollar-deposit','dollar-balance'  ,'d');
   
    getInput('deposit-amount').value = '';
});

//withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
        task('withdraw-amount','dollar-withdraw' ,'dollar-balance' ,'w');
      
        getInput('withdraw-amount').value='';
});

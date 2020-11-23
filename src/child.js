import React,{useContext,useState} from 'react'
import TransContext from './transContext.js'
const Child = () => {


  let {transactions, addTransaction, deleteTransaction} = useContext(TransContext);

  let [newDesc, setDesc] = useState('');
  let [newAmount, setAmount] = useState(0);
  console.log(transactions);
    

  const handleAddition = (event) => {
    
    event.preventDefault();
    console.log(newDesc,newAmount);
    if(Number(newAmount) === 0){
      alert('Please enter corrent value')
    }
    else{
    addTransaction({
      desc: newDesc,
      amount: Number(newAmount)
    })
  }

  }

  const getIncome = () => {
    let income = 0;
    for(var i=0;i<transactions.length;i++){
      if(transactions[i].amount>0){
        income = income+transactions[i].amount;
      }
    }
    return income;
  }

  const getExpense = () => {
    let expense = 0;
    for(var i=0;i<transactions.length;i++){
      if(transactions[i].amount<0)
        expense = expense+transactions[i].amount;
    }
    return expense;
  }

  const currentBalance = () => {
    let balance = getIncome()+getExpense();
    return balance;
    
  }

    return(
        <div className="App">
        <header className='head'>
        Expense Tracker By Nazim Firdous Ali
        <br /> <br/>
        </header>
        <body>
          Current Balance  
          <div className='balance'>
            <b>${currentBalance()}</b>
          </div>
          <div className='incomeexpense'>
              <h3>INCOME<br />
              ${getIncome()}
              </h3>
            <h3>BALANCE<br />
              ${getExpense()}
              </h3>
          </div>

          <div className='head'>
            Transation History
              <hr></hr>  
          </div>
            <ul className='listitem'>
              {transactions.map((transObj,index) => {
                return(
                  <li key= {index}>
                    <button className='deleteButton' >X</button>
                    <br />
                    <span>{transObj.desc}</span>
                    <span>$ {transObj.amount}</span>
                      
                  </li>
                  
                )

              })}
              
                
            </ul>
  
          <form className='tanscation-form' onSubmit = {handleAddition}>
            Add New Transaction
              <hr></hr>  
              Description
              <br />
              <input type = 'text' onChange={(ev) => setDesc(ev.target.value)} required />
              <br />
              Transaction Amount
              <br />
              <input type = 'number' step="0.01" placeholder = '$'  onChange = {(ev) => setAmount(ev.target.value)} required />
          <br/>
          <input type='submit' value ='Add transcation' />
          </form>
  
        </body>
      </div>
    );
    
}
export default Child
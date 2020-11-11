import React,{useContext} from 'react'
import TransContext from './transContext.js'
const Child = () => {


  let transactions = useContext(TransContext);
    // console.log(transcation)

    // let [newDesc, setDesc] = useState('');
    // let [newAmoount, setAmount] = useState(0);
    // let handleAddition = (event) => {
    //   event.preventDefault();
    //   console.log(newDesc,newAmoount);

    // }
    return(
        <div className="App">
        <header className='head'>
        Expense Tracker By Nazim Firdous Ali
        <br /> <br/>
        </header>
        <body>
          Current Balance  
          <div className='balance'>
            <b>$500.00</b>
          </div>
          <div className='incomeexpense'>
              <h3>INCOME<br />
              500
              </h3>
            <h3>BALANCE<br />
              10000
              </h3>
          </div>

          <div className='head'>
            Transation History
              <hr></hr>  
          </div>
            <ul className='listitem'>
              {transactions.map((transObj,index) => {
                return(
                  <li>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                  </li>
                )

              })}
              
                
            </ul>
  
          {/* <div className='tanscation-form' onSubmit={handleAddition}> */}
          <div className='tanscation-form'>
            Add New Transaction
              <hr></hr>  
              Description
              <br />
              <input type = 'text' required ></input>
              <br />
              Transaction Amount
              <br />
              <input type = 'number'  required ></input>
          </div>
          <br/>
          <input type='submit' value ='Add transcation' />
  
        </body>
      </div>
    );
    
}
export default Child
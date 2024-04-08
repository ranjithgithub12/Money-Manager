import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const emptyList = [
  {
    id: uuidv4(),
    title: 'salary',
    amount: 50000,
    type: 'Income',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
  }

  onSubmitAmount = event => {
    event.preventDefault()

    const {title, amount, type, balance, income, expenses} = this.state

    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      type: 'Income',
    }))

    if (type === 'Income') {
      this.setState(prevState => {
        return {income: prevState.income + parseInt(amount)}
      })
    } else {
      this.setState(prevState => {
        return {expenses: prevState.expenses + parseInt(amount)}
      })
    }

    this.setState(prevState => {
      return {balance: prevState.income - prevState.expenses}
    })
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const filterAmount = historyList.filter(eachTransaction => eachTransaction.id === id)
    console.log(filterAmount)

    const filterTheDeleteHistory = historyList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({historyList: filterTheDeleteHistory})

    if (filterAmount[0].type === "Income") {
      this.setState(prevState => {
        return{income: prevState.income - filterAmount[0].amount}
      })
    }  else {
      this.setState(prevState => {
        return{expenses: prevState.expenses - filterAmount[0].amount}
      })
    } 
     
     this.setState(prevState => {
      return {balance: prevState.income - prevState.expenses}
    })
     
    }
      
    
  


  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {historyList, balance, income, expenses, title, amount, type} =
      this.state

    return (
      <div className="app-container">
        <div className="app1-container">
          <div className="name-container">
            <h1 className="person-name">Hi Richard</h1>
            <p className="welcome-message">
              Welcome back to your{' '}
              <span className="welcome-span">Money Manager</span>
            </p>
          </div>
          {
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          }

          <div className="total-transcation-container">
            <div className="add-transcation-container">
              <form className="form-container" onSubmit={this.onSubmitAmount}>
                <h1>Add Transaction</h1>
                <label className="label-content" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  placeholder="TITLE"
                  className="input-box"
                  onChange={this.onChangeTitle}
                />
                <label className="label-content" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  placeholder="AMOUNT"
                  className="input-box"
                  onChange={this.onChangeAmount}
                />
                <label className="label-content"> TYPE </label>
                <select className="input-box" onChange={this.onChangeOption}>
                  <option
                    value={transactionTypeOptions[0].displayText}
                    key={transactionTypeOptions[0].optionId}
                    selected
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option
                    value={transactionTypeOptions[1].displayText}
                    key={transactionTypeOptions[1].optionId}
                  >
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>

            <div className="history-transction-container">
              <h1 className="history-heading">History</h1>
              <div className="history-content">
                <p className="content-types">Title</p>
                <p className="content-types">Amount</p>
                <p className="content-types">Type</p>
              </div>
              <ul className="unorder-list">
                {historyList.map(eachTransaction => (
                  <TransactionItem
                    eachTransactionList={eachTransaction}
                    key={eachTransaction.id}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

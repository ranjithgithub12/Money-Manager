import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="balance-amount-container">
          <p className="amount-content">Your Balance</p>
          <p className="amount-remaining" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="balance-amount-container">
          <p className="amount-content">Your Income</p>
          <p className="amount-remaining" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="balance-amount-container">
          <p className="amount-content">Your Expenses</p>
          <p className="amount-remaining" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

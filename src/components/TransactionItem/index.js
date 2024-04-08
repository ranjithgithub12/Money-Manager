import './index.css'

const TransactionItem = props => {
  const {eachTransactionList, onDeleteHistory} = props
  const {id, title, amount, type} = eachTransactionList

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-of-history">
      <p className="history-paragraph">{title}</p>
      <p className="history-paragraph">Rs {amount}</p>
      <p className="history-paragraph">{type}</p>
      <button data-testid="delete" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem

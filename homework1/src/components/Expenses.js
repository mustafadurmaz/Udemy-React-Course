import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function Expenses(props) {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props.values[0].title}
        amount={props.values[0].amount}
        date={props.values[0].date}
      />
      <ExpenseItem
        title={props.values[1].title}
        amount={props.values[1].amount}
        date={props.values[1].date}
      />
      <ExpenseItem
        title={props.values[2].title}
        amount={props.values[2].amount}
        date={props.values[2].date}
      />
      <ExpenseItem
        title={props.values[3].title}
        amount={props.values[3].amount}
        date={props.values[3].date}
      />
    </div>
  )
}

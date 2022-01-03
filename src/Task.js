import React from "react";
import { observer } from 'mobx-react'

@observer
export default class Task extends React.Component {
  onClick () {
    this.props.task.save({ resolved: true })
  }

  render () {
    return (
      <li key={task.id}>
        <button onClick={this.onClick.bind(this)}>
          resolve
        </button>
        {this.props.task.get('name')}
      </li>
    )
  }
}

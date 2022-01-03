import React from "react";
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import tasksCollection from './TasksCollection'
import Task from "./Task";  

@observer
export default class Tasks extends React.Component {
  componentWillMount () {
    // This will call `/api/tasks?all=true`
    tasksCollection.fetch({ data: { all: true } })
  }

  @computed
  get activeTasks () {
    return tasksCollection.filter({ resolved: false })
  }

  render () {
    if (tasksCollection.isRequest('fetching')) {
      return <span>Fetching tasks...</span>
    }

    return (
      <div>
        <p>bbbbbbbbbbbbbbbbbbb</p>
        <span>{this.activeTasks.length} tasks</span>
        <ul>{activeTasks.map((task) => <Task task={task} />)}</ul>
      </div>
    )
  }
}

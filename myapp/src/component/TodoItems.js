import React from 'react'
import TodoItem from './TodoItem'

export default function TodoItems({todo}) {
  //console.log(todo)
  return (
    <>
        <h3>TODO ITEMS HERE IS CONTAINT TODO LIST</h3>
{
  todo.map(todolist=> <TodoItem key={todolist.name} nama={todolist.name} ddate={todolist.duedate}/>)
}

    </>
  )
}

import React from 'react'
import './Item.css'

function Item({task, children}) {
  return (
    <li className="task-list--item"><p className="task-list--item--text">{task}</p> {children}</li>
  )
}

export default Item
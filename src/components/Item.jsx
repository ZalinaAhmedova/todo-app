import React from 'react'
import './item.css'

function Item({task, children}) {
  return (
    <li className="task"><p>{task}</p> {children}</li>
  )
}

export default Item
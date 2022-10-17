import React, { useState, useEffect } from "react"

import Todo from '../../components/Todo/Todo'
import NewTodo from "../../components/NewTodo/NewTodo"
import { getAllTodos, createTodo } from "../../services/todoService"

const Landing = ({ user }) => {
  let [todos, setTodos] = useState([{}])
  let [newTodo, setNewTodo] = useState('')


  useEffect(() => {
    const getTodoData = async() => {
      const todoData = await getAllTodos()
      setTodos(todoData)
    }
    getTodoData()
  }, [])

  const handleCreateTodo = async(e) => {
    e.preventDefault()
    try {
      await createTodo(newTodo)
      const todoData = await getAllTodos()
      setTodos(todoData)
      setNewTodo('')
    } catch(err) {
      throw err
    }
  }

  return (
    <div className='h-screen bg-teal-800'>
      <h1 className="text-center font-bold text-2xl text-slate-300 pt-10">What Are We Doing Today?</h1>
      <NewTodo
        createTodo={handleCreateTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </div>
  )
}

export default Landing

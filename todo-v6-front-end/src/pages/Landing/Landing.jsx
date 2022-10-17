import React, { useState, useEffect } from "react"

import Todo from '../../components/Todo/Todo'
import NewTodo from "../../components/NewTodo/NewTodo"
import { getAllTodos, createTodo, deleteTodo } from "../../services/todoService"

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

  const handleDeleteTodo = async(todoId) => {
    try {
      await deleteTodo(todoId)
      const todoData = await getAllTodos()
      setTodos(todoData)
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
      {
        todos &&
        todos.map((todo, i) => (
          <div key={i}>
            <Todo 
              todo={todo}
              deleteTodo={handleDeleteTodo}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Landing

import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos`

export const getAllTodos = async() => {
  try{
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async(todo) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'Authorization' : `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify({
        title: todo,
        completed: false
      })
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteTodo = async(todoId) => {
  try {

  } catch(err) {
    throw err
  }
}
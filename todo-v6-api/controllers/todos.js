import { Todo } from '../models/todo.js'

const create = async(req, res) => {
  req.body.userId = req.user.profile
  try {
    const todo = await new Todo(req.body)
    await todo.save()
    return res.status(200).json(todo)
  } catch(err) {
    return res.status(500).json(err)
  }
}
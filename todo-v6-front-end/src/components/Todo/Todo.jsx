import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Todo = ({todo, doTodo, deleteTodo, update, setUpdate, updateTodo}) => {
  
  const background = todo.completed ?
    'bg-gray-500 hover:bg-gray-600 text-center w-2/3 mx-auto rounded p-5 my-5 drop-shadow-xl'   
    : 'bg-blue-500 hover:bg-blue-600 text-center w-2/3 mx-auto rounded p-5 my-5 drop-shadow-xl' 

  const decoration = todo.completed ? 
    'font-bold line-though mb-5'
    : 'font-bold mb-5'


  return(
    <div className={background}>
      <button 
        className='w-full h-full'
        onClick={() => doTodo(todo._id)}
      >
        <h1 className={decoration}>{todo.title}</h1>
      </button>

      <div className='flex'>
        <Popup trigger={
          <button className='flex-1 bg-yellow-500 hover:bg-yellow-600 mx-5 rounded'>
            edit
          </button>
        }>
          <div>
            <input 
              className='p-1 w-full rounded m-1'
              type="text" 
              value={update}
              placeholder='TODO'
              onChange={(e) => setUpdate(e.target.value)}
            />
            <button className='bg-green hover:bg-green-600 p-1 w-full rounded m-1'>
              save change
            </button>
          </div>
        </Popup>

        <button 
          className='flex-1 bg-red-500 hover:bg-red-600 mx-5 rounded'
          onClick={() => deleteTodo(todo._id)}
        >
          delete
        </button>

      </div>
    </div>
  )
}

export default Todo
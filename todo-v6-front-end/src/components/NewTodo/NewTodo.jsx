const NewTodo = ({createTodo, newTodo, setNewTodo}) => {
  return (
    <div className="bg-amber-400 w-2/3 mx-auto text-center my-5 p-5 drop-shadow-xl rounded">
      <form className="flex" onSubmit={createTodo}>
        <input 
          className="flex-1 rounded mx-5"
          type="text" 
          required
          value={newTodo}
          placeholder=' TODO: '
          onChange={(e) => setNewTodo(e.target.value)}
        />
      <button
        className="flex-1 mx-5 bg-green hover:bg-green-600 rounded p-1"
      >
        add
      </button>
      </form>
    </div>
  )
}

export default NewTodo
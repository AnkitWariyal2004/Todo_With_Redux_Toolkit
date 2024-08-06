import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {

  return (
    <>
      <h1 className='text-3xl text-orange-700'>Redux-Toolkit! with todo application</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

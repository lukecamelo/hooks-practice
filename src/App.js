import React, { useState, useEffect } from 'react'
import { Container, Header, Form, Button, List } from 'semantic-ui-react'
import './App.css'

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <Container style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    <p>{todo.text}</p>
    <Button onClick={() => completeTodo(index)} positive>
      Complete
    </Button>
    <Button onClick={() => removeTodo(index)} negative>
      Delete
    </Button>
  </Container>
)

function Todoform({ addTodo }) {
  const todo = useFormInput('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!todo) return
    addTodo(todo.value)
    todo.value = ''
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>new todo</label>
          <input id="input" {...todo} />
        </Form.Field>
      </Form>
    </Container>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "we're really doing it", isCompleted: false },
    { text: 'yes i love hooks', isCompleted: false },
    { text: 'Arnold Rothstein', isCompleted: false }
  ])

  const width = useWindowWidth()

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const list = todos.map((todo, i) => (
    <List.Item key={i}>
      <Todo
        key={i}
        index={i}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </List.Item>
  ))
  return (
    <Container textAlign="center">
      <Header as="h1" style={{ marginTop: '2em' }}>
        Todo list biotch - window size: {width}
      </Header>
      <List>{list}</List>
      <Todoform addTodo={addTodo} />
    </Container>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  let resizeWindow = () => setWidth(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  })
  return width
}
export default App

import React, { useState } from 'react'
import { Container, Header, Grid, Form } from 'semantic-ui-react'
import './App.css'

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>

function Todoform({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>new todo</label>
          <input
            placeholder="todo"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Form.Field>
      </Form>
    </Container>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "we're really doing it" },
    { text: 'yes i love hooks' },
    { text: 'Arnold Rothstein' }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const list = todos.map((todo, i) => (
    <Grid.Row key={i}>
      <Todo key={i} index={i} todo={todo} />
    </Grid.Row>
  ))
  return (
    <Container textAlign="center">
      <Header as="h1" style={{ marginTop: '2em' }}>
        Todo list biotch
      </Header>
      <Grid textAlign="center">{list}</Grid>
      <Todoform addTodo={addTodo} />
    </Container>
  )
}

export default App

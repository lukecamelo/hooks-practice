import React, { useState, SFC } from 'react'
import { HtmlInputrops } from 'semantic-ui-react'

interface IProps {
  text: string
  age?: number
}

interface IState {
  email: string
  name: string
}
const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  function handleChange(e: any) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

interface Item {
  item: string
}

const Form: SFC<IProps> = ({ text, age }) => {
  const input = useFormInput('')
  const [list, setList] = useState([])
  function handleSubmit(e: any) {
    e.preventDefault()
    if (!input) return
    addList(input.value)
    input.value = ''
  }

  const addList = (item: any) => {
    const newList: any = [...list, item]
    setList(newList)
  }

  const mapped = list.map((item, i) => {
    return <h1 key={i}>{item}</h1>
  })

  return (
    <div>
      <div>{mapped}</div>
      <form
        style={{ margin: '0 auto', padding: '4rem' }}
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" {...input} />
        <button type="submit">Push me</button>
      </form>
    </div>
  )
}

export default Form

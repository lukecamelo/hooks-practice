import React from 'react'

// First we create a new context
const MyContext = React.createContext()

// Then create a provider component
class MyProvider extends React.Component {
  state = {
    name: 'Luke',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = props => {
  return <Person />
}

class Person extends React.Component {
  render() {
    return (
      <div>
        <div className="person">
          <MyContext.Consumer>
            {context => (
              <p>
                My name is {context.state.name} and I'm {context.state.age}{' '}
                years old
              </p>
            )}
          </MyContext.Consumer>
        </div>
      </div>
    )
  }
}

class Testy extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default Testy

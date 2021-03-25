import './App.css'

import CardList from './components/CardList'
import UserForm from './components/AddUserForm'
import UserList from './components/UserList'

import { useState, useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([])

  const [users, setUsers] = useState([
    'jensengbg-christian-mosciatti',
    'gaearon',
    'flaviocopes',
    'patatin',
  ])

  const [fetchList, setFetchList] = useState(true)

  useEffect(() => {
    users.map((user) =>
      fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((res) => {
          setCards((cards) => [
            ...cards,
            {
              name: res.name == null ? 'Anonymous' : res.name,
              login: res.login,
              avatar_url: res.avatar_url,
            },
          ])
        })
        .catch((err) => console.log(err))
    )
    setUsers([])
    setFetchList(false)
  }, [fetchList])

  const addNewUser = (userName) => {
    setUsers([...users, userName])
  }

  return (
    <div className="App">
      <header>
        <h1>The useless GitHub user list</h1>
      </header>
      <main className="App-header">
        <section className="form-section">
          <div className="fixed-container">
            <UserForm
              slot={<UserList userList={users} />}
              slot2={
                <button
                  disabled={!users.length}
                  onClick={() => setFetchList(true)}
                >
                  Fetch Users
                </button>
              }
              eventAddUser={addNewUser}
            />
          </div>
        </section>
        <section>
          <CardList cards={cards} />
        </section>
      </main>
    </div>
  )
}

export default App

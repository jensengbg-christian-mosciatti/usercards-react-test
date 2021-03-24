import logo from './logo.svg'
import './App.css'

import CardList from './cardList'

import { useState, useEffect } from 'react'

function App() {
  const [list, setList] = useState([])

  const urls = [
    'https://api.github.com/users/jensengbg-christian-mosciatti',
    'https://api.github.com/users/gaearon',
    'https://api.github.com/users/frff',
  ]
  useEffect(() => {
    urls.map((url) =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setList((list) => [
            ...list,
            {
              name: res.name == null ? 'Anonymous' : res.name,
              login: res.login,
              avatar_url: res.avatar_url,
            },
          ])
        })
        .catch((err) => console.log(err))
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <CardList list={list} />
      </header>
    </div>
  )
}

export default App

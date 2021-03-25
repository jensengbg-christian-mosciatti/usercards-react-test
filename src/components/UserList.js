import './UserList.css'
import React from 'react'

class UserList extends React.Component {
  render() {
    return (
      <>
        <ul className="list-container">
          {this.props.userList.map((user, idx) => (
            <li key={idx}>
              <p>{user}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default UserList

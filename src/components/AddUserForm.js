import './AddUserForm.css'
import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: '',
    }
  }

  handleChange(event) {
    this.setState({ ...this.state, newUser: event.target.value })
    // this.props.eventNewUser(event.target.value)
  }

  submitForm(event) {
    event.preventDefault()
    if (!this.state.newUser.trim()) return
    this.props.eventAddUser(this.state.newUser)
    this.setState({ newUser: '' })
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitForm.bind(this)}>
          <label htmlFor="newUser">GitHub Username</label>
          <input
            id="newUser"
            name="newUser"
            type="text"
            value={this.state.newUser}
            onChange={this.handleChange.bind(this)}
          />
          <p>{this.state.newUser}</p>

          <input type="submit" value="Add Userame" />
        </form>
        {this.props.slot}
        {this.props.slot2}
      </div>
    )
  }
}

export default UserForm

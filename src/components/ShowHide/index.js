// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="firstName-button-text">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName === true ? <p className="first-heading">Joe</p> : null}
          </div>
          <div className="firstName-button-text">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName === true ? <p className="first-heading">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

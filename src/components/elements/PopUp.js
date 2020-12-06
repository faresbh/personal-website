import React, { Component } from 'react'

class PopUp extends Component {

  constructor (props) {
    super(props)
    this.state = { modalActive: false }
  }

  openModal = () => {
    this.setState({ modalActive: true })
  }

  closeModal = () => {
    this.setState({ modalActive: false })
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>Open modal</button>

        {this.state.modalActive && (
          <div className='modalDialog'>
            <a title='Close' onClick={this.closeModal}>X</a>
            <h2>Modal</h2>
            <p>This is a sample modal</p>
          </div>
        )}
      </div>
    )
  }
}

export default PopUp;

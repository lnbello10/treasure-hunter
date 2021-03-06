import React, { Component } from 'react'

class Hunt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.startHunting(this.props.hunt._id, (err) => {
      if (!err) this.props.history.push('hunting')
    })
  }

  render () {
    return (
      <div className='col-sm-4 center' >
        <h4>{this.props.hunt.name}</h4>
        <h5>By: {this.props.hunt.creator.username}</h5>
        <div>
          <h6>Difficulty: </h6>
          {this.props.hunt.difficulty === 'easy'
            ? <img height='64' width='64' alt='Easy difficulty' src='../../starfish.png' />
            : this.props.hunt.difficulty === 'medium'
            ? <img height='64' width='64' alt='Medium difficulty' src='../../pirate-1.png' />
            : <img height='64' width='64' alt='Hard difficulty' src='../../octopus.png' />
          }
        </div>
        <h6>Rating: {this.props.hunt.rating !== -1 ? this.props.hunt.rating : 'Not rated yet'}</h6>
        <div>
          {this.props.user
            ? <button onClick={this.handleSubmit} className='btn btn-default'>Play</button>
            : <h5>In order to start hunting you must be logged in</h5>
          }

        </div>
      </div>
    )
  }
}

export default Hunt

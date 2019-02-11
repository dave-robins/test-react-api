import React, { Component } from 'react'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    trackTitle: ''
  }

  findEpisode = (e) => {
    e.preventDefault()
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-microphone"></i> Search Bar
              </h1>
              <p className="lead text-center">Search for an episode</p>
              <form onSubmit={this.findEpisode}>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Enter text"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                  Search
                </button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
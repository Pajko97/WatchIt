import React, { Component } from 'react'
import CSS from '../Navbar/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
            <h1>Watch it</h1>
            <img src="http:\\via.placeholder\100x100"></img>
        </div>
        <div className="search">
            <input type="text" name="search" placeholder="Search"/>
            <button type="submit" onSubmit={this.onSearch}>Search</button>
            <ul className="drop-menu">
              <li>Genre
                <li>Action</li>
                <li>Sci-fi</li>
                <li>Thriller</li>
                <li>Comedy</li>
                <li>Romantic</li>
                <li>Documentary</li>
              </li>
            </ul>

            <ul className="drop-menu">
              <li>Sort by
                <li>IMDB rating</li>
                <li>Date added</li>
                <li>Popularity</li>
                </li>
            </ul>
            
        </div>
      </div>
    )
  }
}

export default Navbar;
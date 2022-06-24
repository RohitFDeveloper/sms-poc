import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <p>Welcome Student!!</p><br/>
        <Link to="/" style={{color:"red"}}>Logout</Link>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://onsetvback.onrender.com/guests";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ guests: json }))
  }
  

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Onset Weekend 2023</h1>
          <small class="text-muted">Thursday, September 21 - Sunday, September 24 </small>
        </div>    
          <div className="App">
            <div className="py-6">
              <Form />
            </div>
        </div>
        <div className="jumbotron">
          Whos Going ?
        </div>
        {guests.map((guest) => (
          <div className="card" key={guest.id}>
            <div className="card-header">
              {post.gname}
            </div>
            <div className="card-body">
              <p className="card-text">{guest.msg}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
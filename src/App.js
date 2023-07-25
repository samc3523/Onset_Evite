import React, { Component } from 'react';
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: []
    }
  }

  componentDidMount() {
    const url = "https://onsetvback.onrender.com/guests";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ guests: json }))
  }
  

  render() {
    const { guests } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Onset Weekend 2023</h1>
          <small class="text-muted">Thursday, September 21 - Sunday, September 24 </small>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.0300690667273!2d-70.66737145082854!3d41.741444297372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4c5d1900e73fb%3A0x8607e79e92d00daf!2s19%20South%20Blvd%2C%20Wareham%2C%20MA%2002571!5e0!3m2!1sen!2sus!4v1690319309370!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
              {guest.gname}
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
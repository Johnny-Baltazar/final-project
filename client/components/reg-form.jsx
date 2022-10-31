import React from 'react';

export default class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      password: '',
      details: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .then(result => {
        if (window.location.hash === '#sign-up') {
          window.location.hash = '#sign-in';
        }
      });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" />
          <input
          autoFocus
          required
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="first-name" />
          <input required
          id="first-name"
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="last-name" />
          <input required
          id="last-name"
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="Last name"
          />
        </div>
        <div>
          <label htmlFor="email" />
          <input required
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="location" />
          <input required
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="Location"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input required
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="details" />
          <textarea id="details"
          type="text"
          name="details"
          onChange={handleChange}
          placeholder="Details about me"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary orange-this">Register</button>
        </div>
      </form>
    );
  }
}

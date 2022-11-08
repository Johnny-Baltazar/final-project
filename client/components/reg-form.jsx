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
        <div className="text-center">
          <div >
            <label htmlFor="username" className="form-label" />
            <input
            autoFocus
            required
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="first-name" className="form-label" />
            <input required
            id="first-name"
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="First name"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="form-label" />
            <input required
            id="last-name"
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Last name"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label" />
            <input required
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="location" className="form-label" />
            <input required
            id="location"
            type="text"
            name="location"
            onChange={handleChange}
            placeholder="Location"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label" />
            <input required
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="form-control"
            />
          </div>
          <div>
            <label htmlFor="details" className="form-label" />
            <textarea id="details"
            type="text"
            name="details"
            onChange={handleChange}
            placeholder="Details about me"
            className="form-control"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary orange-this mt-4">Register</button>
          </div>
        </div>
      </form>
    );
  }
}

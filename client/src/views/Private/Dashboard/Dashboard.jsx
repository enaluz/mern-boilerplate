import React, { Component } from 'react';
import { Layout } from '../../../layouts/export';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../global/GlobalContext'

export default class Dashboard extends Component {
  static contextType = GlobalContext

  render() {
    return (
      <Layout>
        <div>
          <h1>Welcome to the dashboard of your MERN boilerplate!</h1>
          <h2>This is a private route.</h2>
          <h1 style={{ color: 'green' }}>You are logged in.</h1>
          <h2>
            To revoke your access to private routes, logout here:
            <button onClick={() => this.context.logout()}>Logout</button>
          </h2>
          <h2>
            To go back to the home page, click <Link to="/">Home</Link>
          </h2>
        </div>
      </Layout>
    );
  }
}

import React, { Component } from 'react';
import { Layout } from '../../../layouts/export';
import { GlobalContext } from '../../../global/GlobalContext';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  static contextType = GlobalContext;

  render() {
    return (
      <Layout>
        <div>
          <h1>Welcome to the homepage of your MERN boilerplate!</h1>
          <h2>This is a public route.</h2>
          {this.context.state.isLoggedIn ? (
            <>
              <h1 style={{color: "green"}}>You are logged in.</h1>
              <h2>
                To revoke your access to private routes, logout here:
                <button onClick={() => this.context.logout()}>
                  Logout
                </button>
              </h2>
            </>
          ) : (
            <>
              <h1 style={{color: "red"}}>You are not logged in.</h1>
              <h2>
                To get access to private routes, login here:
                <button onClick={() => this.context.login()}>Login</button>
              </h2>
            </>
          )}
          <h2>
            To go to the dashboard, click{' '}
            <Link to="/dashboard">Dashboard</Link>
          </h2>
        </div>
      </Layout>
    );
  }
}

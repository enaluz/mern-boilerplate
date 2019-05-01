import React, { Component } from 'react';

const GlobalContext = React.createContext();

class GlobalContextProvider extends Component {
  state = {
    isLoggedIn: false
  }

  login = () => {
    this.setState({ isLoggedIn: true })
  }

  logout = () => {
    this.setState({ isLoggedIn: false})
  }

  render() {
    // This actually passes the context to consumer components
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContext, GlobalContextProvider };

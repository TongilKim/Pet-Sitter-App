import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { theme } from './themes/theme';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import ListPage from './pages/ListPage/ListPage';
import MessagePage from './pages/MessagePage/MessagePage';
import SitterDetailPage from './pages/SitterDetailPage/SitterDetailPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ManageRequestPage from './pages/ManageRequestPage/ManageRequestPage';
import ManageJobPage from './pages/ManageJobPage/ManageJobPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }
  // changeProfileImage(newImgUrl) {
  //   this.setState({

  //   })
  // }
  getUser() {
    axios.get('/users/').then((response) => {
      if (response.data.user) {
        this.setState({
          userId: response.data.user.id,
        });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar userID={this.state.userId} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/list">
            <ListPage userID={this.state.userId} />
          </Route>
          <Route exact path="/requests">
            <ManageRequestPage userID={this.state.userId} />
          </Route>
          <Route exact path="/jobs">
            <ManageJobPage userID={this.state.userId} />
          </Route>
          <Route path="/payment">
            <PaymentPage userID={this.state.userId} />
          </Route>
          <Route path="/messages">
            <MessagePage userID={this.state.userId} />
          </Route>
          <Route path="/profile">
            <ProfilePage userID={this.state.userId} updateProfileImg={this.getUser} />
          </Route>
          <Route path="/details" component={SitterDetailPage} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;

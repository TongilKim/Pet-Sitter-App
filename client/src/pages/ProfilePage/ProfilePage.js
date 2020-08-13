import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Edit from './Edit';
import Album from './Album';
import Photo from './Photo';
import Availability from './Availability';
import Payment from './Payment';
import Security from './Security';
import Settings from './Settings';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.text.secondary,
    width: '100%',
    maxWidth: 360,
    marginTop: '100px',
  },
  listItem: {
    padding: theme.spacing(3),
  },
}));

function ProfilePage(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {}, [props.userID]);

  function ListItemLink(props) {
    const { primary, to, index } = props;
    const CustomLink = React.useMemo(
      () => React.forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
      [to]
    );

    return (
      <ListItem
        button
        component={CustomLink}
        className={classes.listItem}
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
      >
        <ListItemText primary={primary} />
      </ListItem>
    );
  }

  return (
    <Fragment>
      <Container maxwidth="lg">
        <Box pt={6}>
          <Grid container>
            <Router>
              <Grid container item xs={3}>
                <List className={classes.list}>
                  <ListItemLink to="/profile" primary="Edit Profile" index={0} />
                  <ListItemLink to="/profile/photo" primary="Profile Photo" index={1} />
                  <ListItemLink to="/profile/album" primary="Album" index={2} />
                  <ListItemLink to="/profile/availability" primary="Your availability" index={3} />
                  <ListItemLink to="/profile/payment" primary="Payment" index={4} />
                  <ListItemLink to="/profile/security" primary="Security" index={5} />
                  <ListItemLink to="/profile/settings" primary="Settings" index={6} />
                </List>
              </Grid>
              <Grid container item xs={9}>
                <Switch>
                  <Route exact path="/profile">
                    <Edit userID={props.userID} />
                  </Route>
                  <Route path="/profile/photo">
                    <Photo userID={props.userID} updateProfileImg={props.updateProfileImg} />
                  </Route>
                  <Route path="/profile/album">
                    <Album userID={props.userID} />
                  </Route>
                  <Route path="/profile/availability">
                    <Availability />
                  </Route>
                  <Route path="/profile/payment">
                    <Payment />
                  </Route>
                  <Route path="/profile/security">
                    <Security />
                  </Route>
                  <Route path="/profile/settings">
                    <Settings />
                  </Route>
                </Switch>
              </Grid>
            </Router>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default ProfilePage;

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles';
import CountdownCard from './Card'

const styles = {
  root: {
    paddingTop: '30px',
  },
};
class App extends Component {
  render() {
    const {classes} = this.props
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <CountdownCard />
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

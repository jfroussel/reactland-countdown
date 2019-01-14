import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function CountdownCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          VENTE PRIVEE
        </Typography>
        <Typography variant="h5" component="h2">
          Louis Vuitton
        </Typography>
        <h3>timer</h3>
      </CardContent>
      <CardActions>
        <Button size="small">Inscrivez-vous</Button>
      </CardActions>
    </Card>
  );
}

CountdownCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountdownCard);

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

function CardComponent(props) {
  const { brand } = props;

  const scale = 2.8;

  const useStyles = makeStyles((theme) => ({
    box: {
      width: theme.spacing(15.8 * scale),
      height: theme.spacing(10 * scale),
    },
    logo: {
      width: 100,
      height: 60,
      borderRadius: '0.75rem',
    },
    checkbox: {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container item xs={12} md={6} alignItems="center" justify="flex-end" direction="row">
      <Card variant="outlined" className={classes.box}>
        <CardHeader
          avatar={
            <Avatar
              className={classes.logo}
              variant={'rounded'}
              src={brand === 'master' ? '/images/master.png' : '/images/visa.png'}
            />
          }
          action={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              color="primary"
              size="medium"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
        />
        <CardContent>
          <Typography variant="h5" align="left" gutterBottom>
            **** **** **** 2445
          </Typography>
          <Typography variant="h5" align="left" gutterBottom color="theme.palette.text.secondary">
            Exp. Date 11/24
          </Typography>
          <Typography variant="h5" align="left" gutterBottom>
            John Doe
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardComponent;

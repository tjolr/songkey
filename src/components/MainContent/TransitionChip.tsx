import React from 'react';
import Icon from '@material-ui/core/Icon';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {TransitionMatch} from '../../services/SongKey.service';
import classes from '*.module.sass';
import {Typography} from '@material-ui/core';
import {red, yellow, blue, green} from '@material-ui/core/colors';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {useTheme} from '@material-ui/core/styles';
import {responsiveIcon} from '../../styles/generic';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 'none',
      textAlign: 'center',
    },
    match: {
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(0.2),
      },
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(0.5),
      },
    },
    matchIcon: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
    },
    unrecommended: {
      color: red[400],
    },
    tricky: {
      color: yellow[400],
    },
    noticeable: {
      color: blue[300],
    },
    smooth: {
      color: green[400],
    },
  })
);

const TransitionChip = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');
  return (
    <div>
      {props.match === TransitionMatch.Smooth ? (
        <div className={clsx(classes.root, classes.smooth)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography variant="caption" className={classes.match}>
              {props.match}
            </Typography>
            <Icon
              style={{
                fontSize: isMobile ? responsiveIcon.sm : responsiveIcon.md,
              }}
            >
              check_circle
            </Icon>
          </Grid>
        </div>
      ) : props.match === TransitionMatch.Tricky ? (
        <div className={clsx(classes.root, classes.tricky)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography variant="caption" className={classes.match}>
              {props.match}
            </Typography>
            <Icon
              style={{
                fontSize: isMobile ? responsiveIcon.sm : responsiveIcon.md,
              }}
            >
              pan_tool
            </Icon>
          </Grid>
        </div>
      ) : props.match === TransitionMatch.Noticeable ? (
        <div className={clsx(classes.root, classes.noticeable)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography variant="caption" className={classes.match}>
              {props.match}
            </Typography>
            <Icon
              style={{
                fontSize: isMobile ? responsiveIcon.sm : responsiveIcon.md,
              }}
            >
              hearing
            </Icon>{' '}
          </Grid>
        </div>
      ) : (
        <div className={clsx(classes.root, classes.unrecommended)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography variant="caption" className={classes.match}>
              {props.match}
            </Typography>
            <Icon
              style={{
                fontSize: isMobile ? responsiveIcon.sm : responsiveIcon.md,
              }}
            >
              thumb_down
            </Icon>{' '}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default TransitionChip;

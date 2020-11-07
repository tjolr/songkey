import React from 'react';
import Icon from '@material-ui/core/Icon';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {TransitionMatch} from '../../../../../services/SongKey.service';
import {Typography, TypographyVariant, useMediaQuery} from '@material-ui/core';
import {red, yellow, blue, green} from '@material-ui/core/colors';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {useTheme} from '@material-ui/core/styles';
import {responsiveIcon} from '../../../../../styles/generic';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PanToolIcon from '@material-ui/icons/PanTool';
import HearingIcon from '@material-ui/icons/Hearing';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useKeyMatchStyles} from '../../../../../styles/keyMatchColors';

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
  })
);

const TransitionChip = (props: any) => {
  const classes = useStyles();
  const keyMatchClasses = useKeyMatchStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getTypographyVariant = (): TypographyVariant => {
    const variant = props.detailView
      ? isMobile
        ? 'subtitle1'
        : 'h5'
      : 'caption';
    return variant;
  };

  const getIconFontSize = (): string => {
    const iconFontSize = props.detailView
      ? isMobile
        ? responsiveIcon.sm
        : responsiveIcon.lg
      : responsiveIcon.sm;

    return iconFontSize;
  };

  return (
    <div>
      {props.match === TransitionMatch.Smooth ? (
        <div className={clsx(classes.root, keyMatchClasses.SmoothFontColor)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography
              variant={getTypographyVariant()}
              className={classes.match}
            >
              {props.match}
            </Typography>
            <CheckCircleIcon
              style={{
                fontSize: getIconFontSize(),
              }}
            />
          </Grid>
        </div>
      ) : props.match === TransitionMatch.Tricky ? (
        <div className={clsx(classes.root, keyMatchClasses.TrickyFontColor)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography
              variant={getTypographyVariant()}
              className={classes.match}
            >
              {props.match}
            </Typography>
            <PanToolIcon
              style={{
                fontSize: getIconFontSize(),
              }}
            />
          </Grid>
        </div>
      ) : props.match === TransitionMatch.Noticeable ? (
        <div
          className={clsx(classes.root, keyMatchClasses.NoticeableFontColor)}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography
              variant={getTypographyVariant()}
              className={classes.match}
            >
              {props.match}
            </Typography>
            <HearingIcon
              style={{
                fontSize: getIconFontSize(),
              }}
            />
          </Grid>
        </div>
      ) : (
        <div
          className={clsx(classes.root, keyMatchClasses.UnrecommendedFontColor)}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Typography
              variant={getTypographyVariant()}
              className={classes.match}
            >
              {props.match}
            </Typography>
            <ThumbDownIcon
              style={{
                fontSize: getIconFontSize(),
              }}
            />
          </Grid>
        </div>
      )}
    </div>
  );
};

export default TransitionChip;

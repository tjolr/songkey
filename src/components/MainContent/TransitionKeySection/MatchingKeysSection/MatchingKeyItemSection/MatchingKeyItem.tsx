import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import {Typography, IconButton} from '@material-ui/core';
import TransitionChip from './TransitionChip';
import {red, yellow, blue, green} from '@material-ui/core/colors';
import clsx from 'clsx';
import {TransitionMatch} from '../../../../../services/SongKey.service';
import {fade} from '@material-ui/core/styles/colorManipulator';
import Grid from '@material-ui/core/Grid';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TransitionDetails from './Dialog.TransitionDetails';
import Icon from '@material-ui/core/Icon';
import {useIconStyles, responsiveIcon} from '../../../../../styles/generic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      border: '2px solid',
      borderRadius: '6px',
      marginBottom: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(0.2),
        paddingRight: theme.spacing(0.2),
        paddingTop: theme.spacing(0.3),
        paddingBottom: theme.spacing(0.3),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    item: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
    },
    keyNumberBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& > div': {
        flex: 1,
      },
    },
    icon: {
      fontSize: '16px',
    },
    Unrecommended: {
      borderColor: fade(red[500], 0),
      backgroundColor: fade(red[500], 0.2),
    },
    Tricky: {
      borderColor: fade(yellow[400], 0),
      backgroundColor: fade(yellow[400], 0.2),
    },
    Noticeable: {
      borderColor: fade(blue[400], 0),
      backgroundColor: fade(blue[400], 0.2),
    },
    Smooth: {
      borderColor: fade(green[400], 0),
      backgroundColor: fade(green[300], 0.2),
    },
  })
);

const ToKeyRow = (props: any) => {
  const classes = useStyles();
  const iconClasses = useIconStyles();
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  const [detailOpen, setDetailOpen] = useState(false);

  const handleDetailOpen = () => {
    setDetailOpen(true);
  };

  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  return (
    <motion.div
      className={clsx(
        classes.root,
        props.songKey.match === TransitionMatch.Smooth
          ? classes.Smooth
          : props.songKey.match === TransitionMatch.Noticeable
          ? classes.Noticeable
          : props.songKey.match === TransitionMatch.Tricky
          ? classes.Tricky
          : classes.Unrecommended
      )}
    >
      <div className={clsx(classes.item, classes.keyNumberBox)}>
        <div>
          <Typography variant="body1">{props.songKey.songKey}</Typography>
        </div>
        <div>
          <Typography variant="caption"> {props.songKey.number}</Typography>
        </div>
      </div>

      <TransitionDetails
        open={detailOpen}
        handleDetailClose={handleDetailClose}
        match={props.songKey.match}
      />
      <IconButton onClick={handleDetailOpen} className={iconClasses.iconButton}>
        <MoreHorizIcon
          className={classes.icon}
          style={{fontSize: isMobile ? responsiveIcon.sm : responsiveIcon.md}}
        />
        {/*  <Icon
        >
          insights
        </Icon> */}
      </IconButton>

      <div
        className={classes.item}
        style={{flex: 2, justifyContent: 'flex-end'}}
      >
        <TransitionChip match={props.songKey.match} />
      </div>
    </motion.div>
  );
};

export default ToKeyRow;

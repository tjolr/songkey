import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import TransitionChip from './TransitionChip';
import clsx from 'clsx';
import {
  TransitionMatch,
  SongKey,
} from '../../../../../services/SongKey.service';
import TransitionDetails from './Dialog.TransitionDetails';
import { useIconStyles, responsiveIcon } from '../../../../../styles/generic';
import { useKeyMatchStyles } from '../../../../../styles/keyMatchColors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      border: 'none',
      borderRadius: '6px',
      boxShadow: `20px 40px 8px 3px ${theme.palette.backgroundColor.dark}`,
    },
    rootSize: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(0.3),
        paddingBottom: theme.spacing(0.3),
        paddingLeft: theme.spacing(0.25),
        paddingRight: theme.spacing(0.25),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: theme.spacing(35),
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
  })
);

interface MatchingKeyItemProps {
  songKey: SongKey;
}

const MatchingKeyItemDisplay = ({ songKey }: MatchingKeyItemProps) => {
  const classes = useStyles();
  const iconClasses = useIconStyles();
  const keyMatchClasses = useKeyMatchStyles();

  return (
    <motion.div
      className={clsx(
        classes.root,
        classes.rootSize,
        songKey.match === TransitionMatch.Smooth
          ? keyMatchClasses.DisplaySmoothBackgroundColor
          : songKey.match === TransitionMatch.Noticeable
          ? keyMatchClasses.DisplayNoticeableBackgroundColor
          : songKey.match === TransitionMatch.Tricky
          ? keyMatchClasses.DisplayTrickyBackgroundColor
          : keyMatchClasses.DisplayUnrecommendedBackgroundColor
      )}
    >
      <div className={clsx(classes.item, classes.keyNumberBox)}>
        <div>
          <Typography variant="subtitle1">{songKey.songKey}</Typography>
        </div>
        <div>
          <Typography variant="body2"> {songKey.number}</Typography>
        </div>
      </div>

      <div
        className={classes.item}
        style={{ flex: 2, justifyContent: 'flex-end' }}
      >
        <TransitionChip match={songKey.match} />
      </div>
    </motion.div>
  );
};

export default MatchingKeyItemDisplay;

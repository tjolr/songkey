import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Typography, IconButton} from '@material-ui/core';
import TransitionChip from './TransitionChip';
import clsx from 'clsx';
import {TransitionMatch} from '../../../../../services/SongKey.service';
import TransitionDetails from './Dialog.TransitionDetails';
import {useIconStyles, responsiveIcon} from '../../../../../styles/generic';
import {useKeyMatchStyles} from '../../../../../styles/keyMatchColors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      border: 'none',
      borderRadius: '6px',
    },
    rootSize: {
      marginBottom: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(0.3),
        paddingBottom: theme.spacing(0.3),
        paddingLeft: theme.spacing(0.25),
        paddingRight: theme.spacing(0.25),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    rootSizeExpand: {
      marginBottom: theme.spacing(1.75),
      marginTop: theme.spacing(1.75),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(1.05),
        paddingBottom: theme.spacing(1.05),
        paddingLeft: theme.spacing(0.25),
        paddingRight: theme.spacing(0.25),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
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
  })
);

const MatchingKeyItem = (props: any) => {
  const classes = useStyles();
  const iconClasses = useIconStyles();
  const keyMatchClasses = useKeyMatchStyles();

  const onlyShowRecommendedRedux = useSelector(
    state => state.transitionKeyReducer.onlyShowRecommended
  );

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
        onlyShowRecommendedRedux ? classes.rootSizeExpand : classes.rootSize,
        props.songKey.match === TransitionMatch.Smooth
          ? keyMatchClasses.SmoothBackgroundColor
          : props.songKey.match === TransitionMatch.Noticeable
          ? keyMatchClasses.NoticeableBackgroundColor
          : props.songKey.match === TransitionMatch.Tricky
          ? keyMatchClasses.TrickyBackgroundColor
          : keyMatchClasses.UnrecommendedBackgroundColor
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
        songKey={props.songKey}
      />
      <IconButton onClick={handleDetailOpen} className={iconClasses.iconButton}>
        <MoreHorizIcon
          className={classes.icon}
          style={{fontSize: responsiveIcon.sm}}
        />
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

export default MatchingKeyItem;

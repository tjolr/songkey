import React from 'react';
import {motion} from 'framer-motion';
import {Typography} from '@material-ui/core';
import DropDownOriginKey from './DropDown.OriginKey';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import DropDownToKey from './DropDown.ToKey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    rootItem: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    titles: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    titleItem: {
      display: 'inline-block',
      textAlign: 'center',
      flex: 1,
      marginBottom: theme.spacing(1),
    },
  })
);

const SongKey = () => {
  const classes = useStyles();

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -30},
  };

  return (
    <div>
      <motion.div className={classes.titles}>
        <Typography variant="subtitle1" className={classes.titleItem}>
          Origin key:
        </Typography>
        <Typography variant="subtitle1" className={classes.titleItem}>
          Transitions:
        </Typography>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={classes.root}
      >
        <motion.div variants={item} className={classes.rootItem}>
          <DropDownOriginKey />
        </motion.div>

        <motion.div variants={item} className={classes.rootItem}>
          <DropDownToKey />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SongKey;

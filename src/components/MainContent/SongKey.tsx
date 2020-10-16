import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Typography} from '@material-ui/core';
import DropDownOriginKey from './DropDown.OriginKey';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import DropDownToKey from './DropDown.ToKey';
import FiltersSection from './FiltersSection';

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
      gap: '.5rem',
    },
    titleItem: {
      display: 'inline-block',
      textAlign: 'left',
      flex: 1,
      marginBottom: theme.spacing(1),
      marginLeft: '.2rem',
      marginRight: '.2rem',
      backgroundColor: '#535353b7',
      borderRadius: '6px',
      paddingLeft: theme.spacing(1),
      paddingTop: theme.spacing(0.4),
      paddingBottom: theme.spacing(0.4),
    },
    filters: {
      marginTop: theme.spacing(2),
    },
  })
);

const SongKey = () => {
  const classes = useStyles();

  const [currentKey, setCurrentKey] = useState('C');
  const [onlyShowRecommended, setOnlyShowRecommended] = useState(false);

  const handleKeyChange = (key: string): void => {
    setCurrentKey(key);
  };

  const handleShowRecommendedChange = (recommended: boolean): void => {
    setOnlyShowRecommended(recommended);
  };

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
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 30},
  };

  return (
    <div>
      <div className={classes.titles}>
        <Typography variant="subtitle1" className={classes.titleItem}>
          Origin key:
        </Typography>
        <Typography variant="subtitle1" className={classes.titleItem}>
          Transitions:
        </Typography>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={classes.root}
      >
        <motion.div variants={item} className={classes.rootItem}>
          <DropDownOriginKey handleKeyChange={handleKeyChange} />
        </motion.div>

        <motion.div variants={item} className={classes.rootItem}>
          <DropDownToKey
            currentKey={currentKey}
            onlyShowRecommended={onlyShowRecommended}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}
        className={classes.filters}
      >
        <FiltersSection
          onlyShowRecommended={onlyShowRecommended}
          handleShowRecommendedChange={handleShowRecommendedChange}
        />
      </motion.div>
    </div>
  );
};

export default SongKey;

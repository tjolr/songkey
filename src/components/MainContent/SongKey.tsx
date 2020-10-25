import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {Typography} from '@material-ui/core';
import DropDownOriginKey from './DropDown.OriginKey';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import DropDownToKey from './DropDown.ToKey';
import FiltersSection from './FiltersSection';
import Icon from '@material-ui/core/Icon';
import {list, item} from '../../animations/animations';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '40vh',
    },
    rootItem: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    titles: {
      display: 'flex',
      marginBottom: theme.spacing(1),
    },
    titleItem: {
      display: 'inline-block',
      textAlign: 'center',
      flex: 1,
      backgroundColor: '#535353b7',
      borderRadius: '6px',
      paddingLeft: theme.spacing(1),
      paddingTop: theme.spacing(0.4),
      paddingBottom: theme.spacing(0.4),
      '&:first-child': {
        marginRight: theme.spacing(1),
      },
      '&:last-child': {
        marginLeft: theme.spacing(1),
      },
    },
    switchIcon: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    filters: {
      marginTop: theme.spacing(1),
    },
  })
);

const SongKey = () => {
  const classes = useStyles();

  const [currentKey, setCurrentKey] = useState('C');
  const [onlyShowRecommended, setOnlyShowRecommended] = useState(false);
  const [switchFromKey, setSwitchFromKey] = useState(false);
  const [toggleButtonRotate, setToggleButtonRotate] = useState(0);

  const handleKeyChange = (key: string): void => {
    setCurrentKey(key);
  };

  const handleShowRecommendedChange = (recommended: boolean): void => {
    setOnlyShowRecommended(recommended);
  };

  const handleSwitchFromKey = (): void => {
    setToggleButtonRotate(toggleButtonRotate + 180);
    setSwitchFromKey(!switchFromKey);
  };

  return (
    <div>
      <div className={classes.titles}>
        <Typography variant="subtitle1" className={classes.titleItem}>
          From key:
        </Typography>
        <motion.div
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
          animate={{rotate: toggleButtonRotate, opacity: 1}}
          transition={{duration: 0.3}}
          className={classes.switchIcon}
          onClick={handleSwitchFromKey}
        >
          <Icon>switch_left</Icon>
        </motion.div>
        <Typography variant="subtitle1" className={classes.titleItem}>
          To key:
        </Typography>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={classes.root}
        style={
          switchFromKey
            ? {flexDirection: 'row-reverse'}
            : {flexDirection: 'row'}
        }
      >
        <motion.div layout variants={item} className={classes.rootItem}>
          <DropDownOriginKey handleKeyChange={handleKeyChange} />
        </motion.div>

        <motion.div layout variants={item} className={classes.rootItem}>
          <DropDownToKey
            currentKey={currentKey}
            onlyShowRecommended={onlyShowRecommended}
            switchFromKey={switchFromKey}
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

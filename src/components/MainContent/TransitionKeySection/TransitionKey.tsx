import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {Typography} from '@material-ui/core';
import DropDownCurrentKey from './CurrentKeySection/DropDown.CurrentKey';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import MatchingKeysList from './MatchingKeysSection/List.MatchingKeys';
import FiltersSection from '../FiltersSection';
import Icon from '@material-ui/core/Icon';
import {list, item} from '../../../animations/animations';
import {useSelector, useDispatch} from 'react-redux';
import {updateSwitchFromKey} from '../../../redux/actions';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

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

const TransitionKey = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const switchFromKeyRedux = useSelector(
    state => state.transitionKeyReducer.switchFromKey
  );
  const currentKeyRedux = useSelector(
    state => state.transitionKeyReducer.currentKey
  );

  const [toggleButtonRotate, setToggleButtonRotate] = useState(0);

  const handleSwitchFromKey = (): void => {
    dispatch(updateSwitchFromKey(!switchFromKeyRedux));
    setToggleButtonRotate(toggleButtonRotate + 180);
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
          <SwapHorizIcon />
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
          switchFromKeyRedux
            ? {flexDirection: 'row-reverse'}
            : {flexDirection: 'row'}
        }
      >
        <motion.div layout variants={item} className={classes.rootItem}>
          <DropDownCurrentKey />
        </motion.div>

        <motion.div layout variants={item} className={classes.rootItem}>
          <MatchingKeysList
            currentKey={currentKeyRedux}
            switchFromKey={switchFromKeyRedux}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}
        className={classes.filters}
      >
        <FiltersSection />
      </motion.div>
    </div>
  );
};

export default TransitionKey;

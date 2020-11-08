import React from 'react';
import {motion} from 'framer-motion';
import DropDownCurrentKey from './CurrentKeySection/DropDown.CurrentKey';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import MatchingKeysList from './MatchingKeysSection/List.MatchingKeys';
import FilterSection from '../FilterSection/FilterSection';
import {list, item} from '../../../animations/animations';
import {useSelector} from 'react-redux';
import HeaderSection from './HeaderSection';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        height: 'auto',
      },
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

  const switchFromKeyRedux = useSelector(
    state => state.transitionKeyReducer.switchFromKey
  );
  const currentKeyRedux = useSelector(
    state => state.transitionKeyReducer.currentKey
  );

  return (
    <div>
      <HeaderSection />
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
        <FilterSection />
      </motion.div>
    </div>
  );
};

export default TransitionKey;

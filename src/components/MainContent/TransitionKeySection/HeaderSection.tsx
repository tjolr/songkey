import React, {useState} from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {updateSwitchFromKey} from '../../../redux/actions';
import {Typography} from '@material-ui/core';
import {motion} from 'framer-motion';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const HeaderSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const switchFromKeyRedux = useSelector(
    state => state.transitionKeyReducer.switchFromKey
  );

  const [toggleButtonRotate, setToggleButtonRotate] = useState(0);

  const handleSwitchFromKey = (): void => {
    dispatch(updateSwitchFromKey(!switchFromKeyRedux));
    setToggleButtonRotate(toggleButtonRotate + 180);
  };

  return (
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
  );
};

export default HeaderSection;

import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MatchingKeyItem from './MatchingKeyItemSection/MatchingKeyItem';
import {
  getSongKeysListFromKey,
  SongKey,
  TransitionMatch,
} from '../../../../services/SongKey.service';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { GroupByTypes } from '../../../../redux/reducers/transitionKey.reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

const MatchingKeysList = () => {
  const classes = useStyles();

  const [songKeysList, setSongKeysList] = useState<SongKey[]>([]);
  const currentKeyRedux = useSelector(
    state => state.transitionKeyReducer.currentKey
  );
  const switchFromKeyRedux = useSelector(
    state => state.transitionKeyReducer.switchFromKey
  );
  const onlyShowRecommendedRedux = useSelector(
    state => state.transitionKeyReducer.onlyShowRecommended
  );
  const groupByRedux = useSelector<GroupByTypes>(
    state => state.transitionKeyReducer.groupBy
  );

  const keyRowControls = useAnimation();
  const animRowKeyExitTimeMS = 400;
  const animSwitchFromKeyExitTimeMS = 150;

  const firstUpdate = useRef(true);

  const fetchNewSongKeys = (animExitTimeMS: number) => {
    const songList = getSongKeysListFromKey(
      currentKeyRedux,
      switchFromKeyRedux,
      groupByRedux
    );
    setTimeout(() => {
      setSongKeysList(songList);
    }, animExitTimeMS);
  };
  const animRowKeyChange = async () => {
    console.log('animRowKeyChange');
    await keyRowControls.start({
      opacity: 0,
      transition: { duration: animRowKeyExitTimeMS / 1000 },
    });
    await keyRowControls.set({
      opacity: 0,
      y: 20,
    });
    await keyRowControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    });
  };

  const animSwitchFromKey = async () => {
    console.log('animSwitchFromKey');
    await keyRowControls.start({
      opacity: 0,
      scale: 0,
      transition: { duration: animSwitchFromKeyExitTimeMS / 1000 },
    });
    await keyRowControls.set({
      scale: 0,
    });
    await keyRowControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  };

  const animOnlyShowRecommended = async () => {
    console.log('animOnlyShowRecommended');
    await keyRowControls.set({
      opacity: 0,
      scale: 0.8,
      rotateY: -40,
    });
    await keyRowControls.start({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.4 },
    });
  };

  useEffect(() => {
    fetchNewSongKeys(0);
  }, []);
  useEffect(() => {
    animRowKeyChange();
    fetchNewSongKeys(animRowKeyExitTimeMS);
  }, [currentKeyRedux, groupByRedux]);

  useEffect(() => {
    animSwitchFromKey();
    fetchNewSongKeys(animSwitchFromKeyExitTimeMS);
  }, [switchFromKeyRedux]);

  useEffect(() => {
    animOnlyShowRecommended();
  }, [onlyShowRecommendedRedux]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div animate={keyRowControls} className={classes.root}>
        {songKeysList
          .filter((songKey: SongKey) =>
            onlyShowRecommendedRedux
              ? songKey.match !== TransitionMatch.Unrecommended
              : songKey
          )
          .map((songKey: SongKey, index: number) => (
            <MatchingKeyItem key={index} songKey={songKey} />
          ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default MatchingKeysList;

import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ToKeyRow from './MatchingKeyItemSection/MatchingKeyItem';
import {
  getSongKeysListFromKey,
  SongKey,
  TransitionMatch,
} from '../../../../services/SongKey.service';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

const MatchingKeysList = (props: any) => {
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

  const keyRowControls = useAnimation();
  const animRowKeyExitTimeMS = 400;
  const animSwitchFromKeyExitTimeMS = 150;

  const animRowKeyChange = async () => {
    await keyRowControls.start({
      opacity: 0,
      transition: {duration: animRowKeyExitTimeMS / 1000},
    });
    await keyRowControls.set({
      opacity: 0,
      y: 20,
    });
    await keyRowControls.start({
      opacity: 1,
      y: 0,
      transition: {duration: 0.25},
    });
  };

  const fetchNewSongKeys = (animExitTimeMS: number) => {
    const songList = getSongKeysListFromKey(
      currentKeyRedux,
      switchFromKeyRedux
    );
    setTimeout(() => {
      setSongKeysList(songList);
    }, animExitTimeMS);
  };

  useEffect(() => {
    animRowKeyChange();
    fetchNewSongKeys(animRowKeyExitTimeMS);
  }, [currentKeyRedux]);

  const animSwitchFromKey = async () => {
    await keyRowControls.start({
      opacity: 0,
      scale: 0,
      transition: {duration: animSwitchFromKeyExitTimeMS / 1000},
    });
    await keyRowControls.set({
      scale: 0,
    });
    await keyRowControls.start({
      opacity: 1,
      scale: 1,
      transition: {duration: 0.5},
    });
  };
  useEffect(() => {
    animSwitchFromKey();
    fetchNewSongKeys(animSwitchFromKeyExitTimeMS);
  }, [switchFromKeyRedux]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layout
        animate={keyRowControls}
        className={classes.root}
        exit={{opacity: 0}}
      >
        {songKeysList
          .filter(songKey =>
            onlyShowRecommendedRedux
              ? songKey.match !== TransitionMatch.Unrecommended
              : songKey
          )
          .map(songKey => (
            <ToKeyRow
              key={Math.random()}
              songKey={songKey}
              switchFromKey={props.switchFromKey}
            />
          ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default MatchingKeysList;

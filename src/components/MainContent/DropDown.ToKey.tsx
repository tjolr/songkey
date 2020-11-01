import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ToKeyRow from './ToKeyRow';
import {
  getSongKeysListFromKey,
  SongKey,
  TransitionMatch,
} from '../../services/SongKey.service';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

const DropDownToKey = (props: any) => {
  const classes = useStyles();

  const [songKeysList, setSongKeysList] = useState<SongKey[]>([]);
  const [activeSoundKey, setActiveSoundKey] = useState('');
  const keyRowControls = useAnimation();
  const animExitTimeMS = 300;

  const startActiveSoundKey = (key: string) => {
    setActiveSoundKey(key);
    setTimeout(() => setActiveSoundKey(''), 2000);
  };

  const animRowKeyChange = async () => {
    await keyRowControls.start({
      opacity: 0,
      transition: {duration: animExitTimeMS / 1000},
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

  const fetchNewSongKeys = (switchFromKey: boolean) => {
    const songList = getSongKeysListFromKey(props.currentKey, switchFromKey);
    setTimeout(() => {
      setSongKeysList(songList);
    }, animExitTimeMS);
  };

  useEffect(() => {
    animRowKeyChange();
    fetchNewSongKeys(props.switchFromKey);
  }, [props.currentKey]);

  const animSwitchFromKey = async () => {
    await keyRowControls.start({
      opacity: 0,
      scale: 0,
      transition: {duration: 0.15},
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
    fetchNewSongKeys(props.switchFromKey);
  }, [props.switchFromKey]);

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
            props.onlyShowRecommended
              ? songKey.match !== TransitionMatch.Unrecommended
              : songKey
          )
          .map(songKey => (
            <ToKeyRow
              key={Math.random()}
              songKey={songKey}
              startActiveSoundKey={startActiveSoundKey}
              activeSoundKey={activeSoundKey}
              switchFromKey={props.switchFromKey}
            />
          ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default DropDownToKey;

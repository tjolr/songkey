import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ToKeyRow from './ToKeyRow';
import {getSongKeysListFromKey, SongKey} from '../../services/SongKey.service';
import {motion, AnimatePresence} from 'framer-motion';

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

  useEffect(() => {
    const songList = getSongKeysListFromKey(props.currentKey);
    setSongKeysList(songList);
  }, [props.currentKey, props.onlyShowRecommended]);

  return (
    <div className={classes.root}>
      {props.onlyShowRecommended
        ? songKeysList
            .filter(songKey => songKey.match > 0)
            .map(songKey => (
              <AnimatePresence exitBeforeEnter key={songKey.number}>
                <motion.div
                  initial={{y: 10, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.15}}
                  exit={{opacity: 0, x: 20}}
                  key={Math.random()}
                >
                  <ToKeyRow songKey={songKey} />
                </motion.div>
              </AnimatePresence>
            ))
        : songKeysList.map(songKey => (
            <AnimatePresence exitBeforeEnter key={songKey.number}>
              <motion.div
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.15}}
                exit={{opacity: 0, x: 20}}
                key={Math.random()}
              >
                <ToKeyRow songKey={songKey} />
              </motion.div>
            </AnimatePresence>
          ))}
    </div>
  );
};
export default DropDownToKey;

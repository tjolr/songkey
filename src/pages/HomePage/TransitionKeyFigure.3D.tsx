import React from 'react';
import {
  SongKey,
  TransitionMatch,
  TransitionMatchIndex,
} from '../../services/SongKey.service';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MatchingKeyItemDisplay from '../../components/MainContent/TransitionKeySection/MatchingKeysSection/MatchingKeyItemSection/MatchingKeyItem.display';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    figureContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transform: 'rotateX(45deg) rotateZ(15deg)',
      transformStyle: 'preserve-3d',
      /* transition: '.4s ease-in-out transform',
      '&:hover': {
        transform: 'translate3d(2px, 0px, 2px) rotateX(45deg) rotateZ(15deg)',
      }, */
    },
    figureContent: {},
  })
);

const TransitionKeyFigure3D = () => {
  const classes = useStyles();

  const songKeyList: SongKey[] = [
    {
      songKey: 'E',
      number: 'III',
      match: TransitionMatch.Tricky,
      matchIndex: TransitionMatchIndex.Tricky,
    },
    {
      songKey: 'F',
      number: 'IV',
      match: TransitionMatch.Smooth,
      matchIndex: TransitionMatchIndex.Smooth,
    },
    {
      songKey: 'F#',
      number: 'bV',
      match: TransitionMatch.Unrecommended,
      matchIndex: TransitionMatchIndex.Unrecommended,
    },
  ];

  return (
    <div className={classes.figureContainer}>
      <div className={classes.figureContent}>
        {songKeyList.map((songKey: SongKey, index: number) => (
          <MatchingKeyItemDisplay key={index} songKey={songKey} />
        ))}
      </div>
    </div>
  );
};

export default TransitionKeyFigure3D;

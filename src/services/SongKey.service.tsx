import React from 'react';
import {GroupByTypes} from '../redux/reducers/transitionKey.reducer';

export interface SongKey {
  songKey: string;
  number: string;
  match: TransitionMatch;
  matchIndex: TransitionMatchIndex;
}

export enum TransitionMatch {
  Smooth = 'Smooth',
  Noticeable = 'Noticeable',
  Tricky = 'Tricky',
  Unrecommended = 'Avoid',
}

enum TransitionMatchIndex {
  Smooth = 0,
  Noticeable = 1,
  Tricky = 2,
  Unrecommended = 3,
}

const notesList: string[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'Bb',
  'B',
];

const chordNumberIndexListToKey: any[] = [
  {number: 'I', index: 0},
  {number: 'bI', index: 1},
  {number: 'II', index: 2},
  {number: 'bIII', index: 3},
  {number: 'III', index: 4},
  {number: 'IV', index: 5},
  {number: 'bV', index: 6},
  {number: 'V', index: 7},
  {number: 'bVI', index: 8},
  {number: 'VI', index: 9},
  {number: 'bVII', index: 10},
  {number: 'VII', index: 11},
];

const chordNumberIndexListFromKey: any[] = [
  {number: 'I', index: 0},
  {number: 'bI', index: 11},
  {number: 'II', index: 10},
  {number: 'bIII', index: 9},
  {number: 'III', index: 8},
  {number: 'IV', index: 7},
  {number: 'bV', index: 6},
  {number: 'V', index: 5},
  {number: 'bVI', index: 4},
  {number: 'VI', index: 3},
  {number: 'bVII', index: 2},
  {number: 'VII', index: 1},
];

const numberStringToValue = {
  I: 0,
  bI: 1,
  II: 2,
  bIII: 3,
  III: 4,
  IV: 5,
  bV: 6,
  V: 7,
  bVI: 8,
  VI: 9,
  bVII: 10,
  VII: 11,
};

const numberTransitionsMatch = {
  I: {
    name: TransitionMatch.Smooth,
    index: TransitionMatchIndex.Smooth,
  },
  bI: {
    name: TransitionMatch.Unrecommended,
    index: TransitionMatchIndex.Unrecommended,
  },
  II: {
    name: TransitionMatch.Unrecommended,
    index: TransitionMatchIndex.Unrecommended,
  },
  bIII: {
    name: TransitionMatch.Noticeable,
    index: TransitionMatchIndex.Noticeable,
  },
  III: {
    name: TransitionMatch.Tricky,
    index: TransitionMatchIndex.Tricky,
  },
  IV: {
    name: TransitionMatch.Smooth,
    index: TransitionMatchIndex.Smooth,
  },
  bV: {
    name: TransitionMatch.Unrecommended,
    index: TransitionMatchIndex.Unrecommended,
  },
  V: {
    name: TransitionMatch.Tricky,
    index: TransitionMatchIndex.Tricky,
  },
  bVI: {
    name: TransitionMatch.Noticeable,
    index: TransitionMatchIndex.Noticeable,
  },
  VI: {
    name: TransitionMatch.Tricky,
    index: TransitionMatchIndex.Tricky,
  },
  bVII: {
    name: TransitionMatch.Unrecommended,
    index: TransitionMatchIndex.Unrecommended,
  },
  VII: {
    name: TransitionMatch.Unrecommended,
    index: TransitionMatchIndex.Unrecommended,
  },
};

// fram: G til C, D
// tilbake: C fra F, G
// C fra D(7) E(6) F(5), G(4), A(3) B(2) C(1)

export const getSongKeysListFromKey = (
  key: string,
  switchFromKey: boolean,
  groupBy: GroupByTypes
) => {
  const keyIndexInNotesList = notesList.indexOf(key);

  const songKeyList: SongKey[] = [];
  const chordNumberList = switchFromKey
    ? [...chordNumberIndexListFromKey]
    : [...chordNumberIndexListToKey];

  chordNumberList.map((currentItem, index) => {
    const keyToAdd =
      notesList[(currentItem.index + keyIndexInNotesList) % notesList.length];
    songKeyList.push({
      songKey: keyToAdd,
      number: currentItem.number,
      match: numberTransitionsMatch[currentItem.number].name,
      matchIndex: numberTransitionsMatch[currentItem.number].index,
    });
  });

  const groupedSongKeyList = groupSongKeyList(groupBy, songKeyList);

  return groupedSongKeyList;
};

const groupSongKeyList = (
  groupBy: GroupByTypes,
  songKeyList: SongKey[]
): SongKey[] => {
  if (groupBy === GroupByTypes.Match) {
    songKeyList.sort((a, b) =>
      a.matchIndex > b.matchIndex
        ? 1
        : a.matchIndex === b.matchIndex
        ? numberStringToValue[a.matchIndex] > numberStringToValue[b.matchIndex]
          ? -1
          : 1
        : -1
    );
  }
  return songKeyList;
};

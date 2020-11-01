import React from 'react';

export interface SongKey {
  match: TransitionMatch;
  songKey: string;
  number: string;
}

export enum TransitionMatch {
  Smooth = 'Smooth',
  Noticeable = 'Noticeable',
  Tricky = 'Tricky',
  Unrecommended = 'Avoid',
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

const numberTransitionsMatch = {
  I: TransitionMatch.Smooth,
  bI: TransitionMatch.Unrecommended,
  II: TransitionMatch.Unrecommended,
  bIII: TransitionMatch.Noticeable,
  III: TransitionMatch.Tricky,
  IV: TransitionMatch.Smooth,
  bV: TransitionMatch.Unrecommended,
  V: TransitionMatch.Tricky,
  bVI: TransitionMatch.Noticeable,
  VI: TransitionMatch.Tricky,
  bVII: TransitionMatch.Unrecommended,
  VII: TransitionMatch.Unrecommended,
};

// fram: G til C, D
// tilbake: C fra F, G
// C fra D(7) E(6) F(5), G(4), A(3) B(2) C(1)

export const getSongKeysListFromKey = (key: string, switchFromKey: boolean) => {
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
      match: numberTransitionsMatch[currentItem.number],
    });
  });
  return songKeyList;
};

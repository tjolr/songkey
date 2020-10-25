import React from 'react';

export interface SongKey {
  match: number;
  songKey: string;
  number: string;
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
  {number: 'II', index: 2},
  {number: 'III', index: 4},
  {number: 'IV', index: 5},
  {number: 'V', index: 7},
  {number: 'VI', index: 9},
  {number: 'VII', index: 11},
];

const chordNumberIndexListFromKey: any[] = [
  {number: 'I', index: 0},
  {number: 'II', index: 11},
  {number: 'III', index: 9},
  {number: 'IV', index: 7},
  {number: 'V', index: 5},
  {number: 'VI', index: 4},
  {number: 'VII', index: 2},
];

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

    let match: number = 0;
    if (currentItem.number === 'I') {
      match = 1;
    } else if (currentItem.number === 'V' || currentItem.number === 'IV') {
      match = 2;
    }

    songKeyList.push({
      songKey: keyToAdd,
      number: currentItem.number,
      match: match,
    });
  });
  return songKeyList;
};

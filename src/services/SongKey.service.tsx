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

const chordNumberIndexList: any[] = [
  {number: 'I', index: 0},
  {number: 'II', index: 2},
  {number: 'III', index: 4},
  {number: 'IV', index: 5},
  {number: 'V', index: 7},
  {number: 'VI', index: 9},
  {number: 'VII', index: 11},
];

export const getSongKeysListFromKey = (key: string) => {
  const keyIndexInNotesList = notesList.indexOf(key);
  const songKeyList: SongKey[] = [];
  chordNumberIndexList.map((currentItem, index) => {
    const keyToAdd =
      notesList[(currentItem.index + keyIndexInNotesList) % notesList.length];

    let match: number = 0;
    if (currentItem.number === 'IV') {
      match = 1;
    } else if (currentItem.number === 'V') {
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

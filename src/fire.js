import firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyCNXAmbkxVoa7LP86D3fnFW9i5gpjqDSjc',
  authDomain: 'songkey-p407.firebaseapp.com',
  databaseURL: 'https://songkey-p407.firebaseio.com',
  projectId: 'songkey-p407',
  storageBucket: 'songkey-p407.appspot.com',
  messagingSenderId: '791467482041',
  appId: '1:791467482041:web:30ba30283dc9d4beafb468',
  measurementId: 'G-SLTXR3MSC8',
};
var fire = firebase.initializeApp (config);
export default fire;

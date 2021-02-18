import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const FetchingData = () => {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(
    () => {
      const getData = firebase
        .firestore()
        .collection('test')
        .doc('petStore')
        .onSnapshot(
          doc => {
            setLoading(false);
            setData(JSON.parse(doc.data().data))
          },
          err => {
            setError(err)
          }
        )
      return() => getData();
    }, []);


  return data;
}

export default FetchingData;

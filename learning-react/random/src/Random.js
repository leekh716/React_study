import React, { useState } from 'react';

const Random = () => {
	const [id, setId] = useState([]);

  function randomNumber() {
    let i;
    let num;
    let array = [' kunlee ', ' heehkim ', ' byu ', ' seungyel ', ' yunjung '];
    let temp;

    for(i=0; i<5; i++){
      num = Math.floor(Math.random()*5);
      temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
    for(i=0; i<5; i++){
      num = Math.floor(Math.random()*5);
      temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
    for(i=0; i<5; i++){
      num = Math.floor(Math.random()*5);
      temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
    for(i=0; i<5; i++){
      num = Math.floor(Math.random()*5);
      temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
    for(i=0; i<5; i++){
      num = Math.floor(Math.random()*5);
      temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }

    setId(array);
  }

  return (
    <div>
      <p id="name"><b>{id.toLocaleString()}</b></p>
      <button onClick={randomNumber}>시작</button>
    </div>
  );
};

export default Random;

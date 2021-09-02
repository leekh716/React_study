import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import Game from './components/Game';
import Template from './components/Template';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';

function draw(button, comImage) {
  return (
    (((comImage === rock) && (button === 'rock')) ||
      ((comImage === scissors) && (button === 'scissors')) ||
      ((comImage === paper) && (button === 'paper')))
  )
};

function lose(button, comImage) {
  return (
    (((comImage === rock) && (button === 'scissors')) ||
      ((comImage === scissors) && (button === 'paper')) ||
      ((comImage === paper) && (button === 'rock')))
  )
};

function win(button, comImage) {
  return (
    (((comImage === rock) && (button === 'paper')) ||
      ((comImage === scissors) && (button === 'rock')) ||
      ((comImage === paper) && (button === 'scissors')))
  )
};

const SET_COMIMAGE = 'SET_COMIMAGE';
const SET_MYIMAGE = 'SET_MYIMAGE';
const SET_RESULT = 'SET_RESULT';
const SET_SCORE = 'SET_SCORE';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COMIMAGE:
      return {
        ...state,
        comImage: action.comImage,
      }
    case SET_MYIMAGE:
      return {
      ...state,
      myImage: action.myImage,
    }
    case SET_RESULT:
      return {
      ...state,
      result: action.result,
    }
    case SET_SCORE:
      return {
      ...state,
      score: action.score,
    }
    default:
      return state;
  }
};

const initialState = {
  comImage: rock,
  myImage: rock,
  result: '',
  score: 0,
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const interval = useRef();
  const { comImage, myImage, result, score } = state;

  const changeImage = useCallback(()=> {
    if (comImage === rock)
    {
      dispatch({ type: SET_COMIMAGE, comImage: scissors});
      dispatch({ type: SET_MYIMAGE, myImage: scissors});
    }
    else if (comImage === scissors)
    {
      dispatch({ type: SET_COMIMAGE, comImage: paper});
      dispatch({ type: SET_MYIMAGE, myImage: paper});
    }
    else if (comImage === paper)
    {
      dispatch({ type: SET_COMIMAGE, comImage: rock});
      dispatch({ type: SET_MYIMAGE, myImage: rock});
    }
  }, [comImage]);

  const findResult = useCallback ((button, comImage) => {
    if (draw(button, comImage))
      dispatch({ type: SET_RESULT, result: '비김!'});
    else if (lose(button, comImage))
    {
      dispatch({ type: SET_RESULT, result: '짐!'});
      dispatch({ type: SET_SCORE, score: score - 1});
    }
    else if (win(button, comImage))
    {
      dispatch({ type: SET_RESULT, result: '이김!'});
      dispatch({ type: SET_SCORE, score: score + 1});
    }
  }, [score]);

  useEffect(() => {
    interval.current = setInterval(changeImage, 100);
    return (() => {
      clearInterval(interval.current);
    })
  }, [comImage, changeImage])

  const onClick = useCallback((button) => {
    clearInterval(interval.current);
    if (button === 'rock')
      dispatch({ type: SET_MYIMAGE, myImage: rock});
    else if (button === 'scissors')
      dispatch({ type: SET_MYIMAGE, myImage: scissors});
    else if (button === 'paper')
      dispatch({ type: SET_MYIMAGE, myImage: paper});

    findResult(button, comImage);

    interval.current = setInterval(changeImage, 1000);
  }, [changeImage, findResult, comImage]);

  const onClickStop = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  return (
    <div>
      <Template>
        <Game
          comImage={comImage}
          myImage={myImage}
          onClick={onClick}
          onClickStop={onClickStop}
          result={result}
          score={score}
        />
      </Template>
    </div>
  );
}

export default App;

// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import Game from './components/Game';
// import Template from './components/Template';
// import rock from './rock.jpg';
// import scissors from './scissors.jpg';
// import paper from './paper.jpg';

// const image = {
//   rock: {rock},
//   scissors: {scissors},
//   paper: {paper}
// };

// const App = () => {
//   const [comImage, setComImage] = useState(image.rock.rock);
//   const [myImage, setMyImage] = useState(image.rock.rock);
//   const [result, setResult] = useState('');
//   const [score, setScore] = useState(0);
//   const interval = useRef();

//   useEffect(() => {
//     interval.current = setInterval(changeImage, 100);
//     return (() => {
//       clearInterval(interval.current);
//     })
//   }, [comImage])

//   const changeImage = useCallback(()=> {
//     if (comImage === image.rock.rock)
//     {
//       setComImage(image.scissors.scissors);
//       setMyImage(image.scissors.scissors);
//     }
//     else if (comImage === image.scissors.scissors)
//     {
//       setComImage(image.paper.paper);
//       setMyImage(image.paper.paper);
//     }
//     else if (comImage === image.paper.paper)
//     {
//       setComImage(image.rock.rock);
//       setMyImage(image.rock.rock);
//     }
//   }, [comImage]);

//   const onClick = (button) => {
//     clearInterval(interval.current);
//     if (button === 'rock')
//       setMyImage(image.rock.rock);
//     else if (button === 'scissors')
//       setMyImage(() => image.scissors.scissors);
//     else if (button === 'paper')
//       setMyImage(() => image.paper.paper);

//     if (((comImage === image.rock.rock) && (button === 'rock')) ||
//         ((comImage === image.scissors.scissors) && (button === 'scissors')) ||
//         ((comImage === image.paper.paper) && (button === 'paper')))
//       setResult('비김!');
//     else if (((comImage === image.rock.rock) && (button === 'scissors')) ||
//             ((comImage === image.scissors.scissors) && (button === 'paper')) ||
//             ((comImage === image.paper.paper) && (button === 'rock')))
//     {
//       setResult('짐!');
//       setScore((score) => score - 1);
//     }
//     else if (((comImage === image.rock.rock) && (button === 'paper')) ||
//             ((comImage === image.scissors.scissors) && (button === 'rock')) ||
//             ((comImage === image.paper.paper) && (button === 'scissors')))
//     {
//       setResult('이김!');
//       setScore((score) => score + 1);
//     }

//     interval.current = setInterval(changeImage, 1000);
//   }
//   return (
//     <div>
//       <Template>
//         <Game
//           comImage={comImage}
//           myImage={myImage}
//           onClick={onClick}
//           result={result}
//           score={score}
//         />
//       </Template>
//     </div>
//   );
// }

// export default App;

// import { SET_LANGUAGE, SET_TOKEN } from 'src/store/actions/Config';
import { SET_FACE } from '../../../../src/store/actions/Config';
// import { SET_FACE, SET_LANGUAGE, SET_TOKEN } from '../../../../src/store/actions/Config';


const INITIAL_STATE = {
  // face: '0',
  face : {
      faceData: 0,
      date: '',
      times: 0,
  
    }
};

const faceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case SET_LANGUAGE:
    //   return { ...state, contentLanguage: action.payload };
    // case SET_TOKEN:
    //   return { ...state, token: action.payload };
    case SET_FACE:
      return { ...state, face: action.payload };
    default:
      return state;
  }
};

// const INITIAL_STATE = []

// const faceReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SET_FACE:
//       return [...state, face:action.payload]

//     default:
//       return state;

//   }
//   // return state
// }

export default faceReducer;

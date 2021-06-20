import AsyncStorage from "@react-native-async-storage/async-storage";

// export const SET_LANGUAGE = 'SET_LANGUAGE';
// export const SET_TOKEN = 'SET_TOKEN';
export const SET_FACE = 'SET_FACE';

// export const setLanguage = (lang) => ({
//   type: SET_LANGUAGE,
//   payload: lang,
// });

// export const setToken = (token) => ({
//   type: SET_LANGUAGE,
//   payload: token,
// });

export const setFace = (faceType) => (dispatch) => {

  // export const setFace = () => (dispatch, faceType) => {


  AsyncStorage.setItem('face_type', faceType, () => {
    dispatch({ type: SET_FACE, payload: faceType })
  });
  console.log('eeeeeeeeeeeeeeee');
  console.log('' + faceType);
};

export const getFace = () => async (dispatch) => {
  AsyncStorage.getItem("face_type").then((faceType) => {
    // alert(value)
    if (faceType === null){
      // console.log('aaaaaadddd');
      dispatch({
        type: SET_FACE, payload: {
          faceData: 0,
          date: '',
          times: 0,

        }
      })
    }else
      dispatch({ type: SET_FACE, payload: faceType })

  });

};

import React from 'react';
import { Provider } from 'react-redux';
// import store from './src/store/configureStore';
import { store , persistor} from './src/store/configureStore';
// import { Platform } from 'react-native';
// import Naviagtion from 'navigations';
import Naviagtion from './src/navigations';
import { PersistGate } from 'redux-persist/integration/react';

// import MainStackNavigator from './src/navigation/AppNavigator'
// import { Provider as StoreProvider } from 'react-redux'
// import store from './src/redux/store'

//import './ReactotronConfig';
{/* <Provider store={store}>
<Naviagtion />
</Provider> */}
export default function App() {
  // return (
  //   <StoreProvider store={store}>
  //     <Naviagtion />
  //   </StoreProvider>
  // )
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Naviagtion />
      </PersistGate>
    </Provider>
  );
}

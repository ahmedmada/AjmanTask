import React from 'react';
import { Provider } from 'react-redux';
// import store from './src/store/configureStore';
import { store , persistor} from './src/store/configureStore';
import Naviagtion from './src/navigations';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar,Platform } from 'react-native';
import { colors} from './src/assets';


export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {
          Platform.OS === 'android' ? 
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = '#ffffff' translucent = {true}/>

            :
            null
        }
      
            
        <Naviagtion />
      </PersistGate>
    </Provider>
  );
}

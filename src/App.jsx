import React, { useContext, useEffect } from 'react';
import Routing from './Routing';
import { DataContext } from './components/DataProvider/DataProvider';
import { auth } from './components/Utility/firebase';
import { Type } from './components/Utility/action.type';

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        dispatch({
          type: Type.SET_USER,
          user: authUser
        });
      } else {
        // user logged out
        dispatch({
          type: Type.SET_USER,
          user: null
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;

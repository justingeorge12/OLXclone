



import { createContext } from 'react'
import { getAuth } from 'firebase/auth' 
import { auth } from '../firebase/Config'

const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
  const auth = getAuth();

  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
export { FirebaseContext }




// import { createContext } from 'react';
// import { getAuth } from 'firebase/auth';
// import { firebaseApp } from '../firebase/Config'; 

// const FirebaseContext = createContext(null);

// const FirebaseProvider = ({ children }) => {
//   const auth = getAuth(firebaseApp); 

//   return (
//     <FirebaseContext.Provider value={{ auth }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// export default FirebaseProvider;
// export { FirebaseContext };

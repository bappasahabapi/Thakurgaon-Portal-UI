`Authentation`

1. Make a folder under the src/context/AuthProvider
2. Create file  AuthProvider/*AuthProvider.js*

```js
import React, { createContext } from 'react';

export const AuthContext =createContext();

const AuthProvider = ({children}) => {
    const user ={displayName:'Bappa Da'}
    const authInfo ={user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
```
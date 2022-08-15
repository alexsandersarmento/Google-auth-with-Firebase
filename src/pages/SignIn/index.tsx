import React, { useState } from 'react';
import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss';

const SignIn = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(result => setUser(result.user))
      .catch(error => {
        console.log(error);
      })
  }
  
  const handleSignOut = () => {
    auth.signOut()
      .then(() => setUser({} as User))
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <div className='user'>
        {user.photoURL && <img src={user.photoURL} alt="User image" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>Utilizando autenticação social</span>

      <button type='button' className='button' onClick={handleGoogleSignIn}>
        <GoogleLogo />
        Entrar com Google
      </button>

     {user.displayName &&  <button type='button' className='button' onClick={handleSignOut}>
        Sair
      </button>}
    </div>
  );
}

export default SignIn;
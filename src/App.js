import { Amplify, Auth } from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
/* import '@aws-amplify/ui-react/styles.css'; */
import awsExports from './aws-exports';
import './App.css';
import React from 'react';
import logo from './intuis.gif'

Amplify.configure(awsExports);

async function signOut() {
  try {
      await Auth.signOut({ global: true });
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur la plateforme de supervision d'installations ZéPAC
        </p>
        <a
          className="App-link"
          href="https://www.auer.fr/fr/produits/chauffe-eau-thermodynamique-et-eau-chaude-sanitaire-collectif-zepac70/"
          target="_blank"
          rel="noopener noreferrer"
          >
          En savoir plus sur le ZéPAC
        </a>
      </header>
      <button onClick={signOut}>Bouton</button>
    </div>
  )
}

export default withAuthenticator(App);

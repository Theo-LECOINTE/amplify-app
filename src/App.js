import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
/* import '@aws-amplify/ui-react/styles.css'; */

import awsExports from './aws-exports';
import logo from './intuis.gif'; 
import './App.css';

Amplify.configure(awsExports);

function App({ signOut, user }) {
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
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
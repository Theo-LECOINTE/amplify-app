import { Amplify, Auth} from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import './App.css';
import React from 'react';
import logo from './intuis.gif'

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
        Plateforme de gestion des installations ZéPAC
      </h2>
      </header>
      <h4>Ceci est un exemple</h4>
      <a
          className="App-link"
          href="https://www.auer.fr/fr/produits/chauffe-eau-thermodynamique-et-eau-chaude-sanitaire-collectif-zepac70/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <a className="App-Back">En savoir plus sur le ZéPAC</a>
      </a>
      <a className="App-SignOut"><AmplifySignOut className="SignOut" onClick={AmplifySignOut}></AmplifySignOut></a>
    </div> 
  )
}

export default withAuthenticator(App);

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
/* import '@aws-amplify/ui-react/styles.css'; */
import awsExports from './aws-exports';
import logo from './intuis.gif'; 
import './App.css';

Amplify.configure(awsExports);

/* async function onSignOutClick() {
  await Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
 }
*/
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
    </div>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true;
}  
);

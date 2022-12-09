import { Amplify, Auth} from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AmplifySignOut onClick={AmplifySignOut}  className='App-SignOut'></AmplifySignOut>
    </div> 
  )
}

export default withAuthenticator(App);

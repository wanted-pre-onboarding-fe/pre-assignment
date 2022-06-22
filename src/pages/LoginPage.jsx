import { loadItem } from '../fixtures/storage';

import LoginContainer from '../containers/login/LoginContainer'
import Logo from '../components/login/Logo'

export default function LoginPage() {
  const username = loadItem('username') || '';
  const password = loadItem('password') || '';

  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
      }}>
      <div
        style={{
          width: '22em',
          margin: 'auto',
          padding: '2em',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          border: '1px solid lightgray',
        }}>
        <Logo/>
        <LoginContainer
          username={username}
          password={password}/>
      </div>
    </div>
  )
}
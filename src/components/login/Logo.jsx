import logo from '../../image/Logo.svg';

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link 
      to="/"
      style={{
        display: 'inline-block',
        textAlign: 'center',
      }}>
      <img 
        src={logo} 
        alt="instagram" 
        style={{
          width: '70%',
        }}
      />
    </Link>
  )
}
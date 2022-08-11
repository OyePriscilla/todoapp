import React from 'react';
import { Link } from 'react-router-dom';

const ulList = {
  listStyleType: 'none',
  display: 'flex',
};

const linkList = {
  marginRight: '20px',
  fontSize: '20px',
};

export default function Header() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#111555', height: '60px', marginBottom: '20px',
    }}
    >
      <h4 className="header">Todos App</h4>
      <nav>
        <ul className="ulLink" style={ulList}>
          <li style={linkList}><Link style={{ color: '#fff', textDecoration: 'none' }} to="./">Home</Link></li>
          <li style={linkList}><Link style={{ color: '#fff', textDecoration: 'none' }} to="./about">About</Link></li>
          <li style={linkList}><Link style={{ color: '#fff', textDecoration: 'none' }} to="./nomatch">No Match</Link></li>
        </ul>
      </nav>
    </div>
  );
}

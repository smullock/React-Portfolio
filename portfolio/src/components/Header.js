import React  from 'react';
import Navigation from './Navigation';

function Header({ onSectionChange }) {
  return (
    <header className="bg-info-subtle d-flex align-items-center justify-content-around py-4 flex-wrap">
      <h1 className="m-0">Sarah Mullock</h1>
      <Navigation onSectionChange={onSectionChange} />
    </header>
  );
}

export default Header;
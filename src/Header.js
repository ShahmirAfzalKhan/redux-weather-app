import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Mousam</div>
      <nav className="flex-grow">
        <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">Guide</li>
          <li className="hover:underline cursor-pointer">API</li>
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Marketplace</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline cursor-pointer">Maps</li>
          <li className="hover:underline cursor-pointer">For Business</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

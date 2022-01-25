import React from 'react';
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon
} from '@heroicons/react/solid';


const Header = () => {
  return (
  <header>
      <div className="flex justify-between p-3 pt-4 ">
          <div className="flex items-center space-x-5 font-Dongle text-5xl text-secondary ml-1">
              Store-X
          </div>

          <div className="hidden relative items-center flex-grow cursor-pointer max-w-md rounded-md h-10 bg-yellow-400 sm:flex hover:bg-yellow-500 mx-5 border border-primary"> 
              <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none text-bc" type="text"/>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 p-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>

          <div className="flex items-center mr-4">
            <div className="p-3 mr-3 ">  Sign In</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary " viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>

          </div>
      </div>
  </header>
  );
};

export default Header;

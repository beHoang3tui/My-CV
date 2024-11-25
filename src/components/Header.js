import React from 'react';

const Header = () => (
  <header className="bg-gray text-black text-white p-6 flex items-center space-x-6">
    
    <div className="w-32 h-40  border-2 border-white">
      <img 
        src="/images/infor.png" 
        alt="La Huy Hoang" 
        className="w-full h-full object-cover" 
      />
    </div>
    
    <div className="text-left">
      <h1 className="text-4xl font-bold">La Huy Hoang</h1>
      <p className="text-lg">Ba Dinh, Ha Noi</p>
      <p className="text-lg">0345 955 629 - lahuyhoang103@gmail.com</p>
      <p className="text-lg">Date of Birth: 10/03/2002</p>
    </div>
  </header>
);

export default Header;

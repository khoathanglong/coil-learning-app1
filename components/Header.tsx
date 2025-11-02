import React from 'react';

interface HeaderProps {
  title: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, leftAction, rightAction }) => {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative h-20">
        <div className="absolute left-4 sm:left-6 lg:left-8">
          {leftAction}
        </div>
        <h1 className="text-3xl font-bold leading-tight text-white text-center flex-grow px-20">
          {title}
        </h1>
        <div className="absolute right-4 sm:right-6 lg:right-8">
           {rightAction}
        </div>
      </div>
    </header>
  );
};

export default Header;

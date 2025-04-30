import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="loader border-8 border-blue-500 border-t-transparent rounded-full h-20 w-20 animate-spin"></div>
    </div>
  );
};

export default Loader;

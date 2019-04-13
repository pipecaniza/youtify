import React from 'react';

const Spinner = ({ isLoading, text }) => {
  if (isLoading){
    return (      
      <>
        <i className="fas fa-spinner fa-w-16 fa-spin fa-lg"></i>  
        <p>{text}</p>    
      </>
    );
  }
  return null;
};

export default Spinner;
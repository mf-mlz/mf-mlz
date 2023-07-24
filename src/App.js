import React from 'react';

//Importamos los componentes
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='bg-heroLight dark:bg-heroDark bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav/>
      <div className='h-[150px]'></div>
      
    </div>
  );
};

export default App;

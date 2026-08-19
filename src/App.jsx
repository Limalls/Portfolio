import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="dark:bg-mint-cream-50 min-h-screen">
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
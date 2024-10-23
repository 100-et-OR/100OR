import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
      <div className="absolute inset-0 z-10">
        <BackgroundBlobs />
      </div>
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
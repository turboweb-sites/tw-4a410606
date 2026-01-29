import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header setPage={setPage} currentPage={page} />
      <main>
        {page === 'home' && <Home />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
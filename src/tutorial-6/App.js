import React from 'react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { FullPost } from './pages/FullPost';

function App() {
  const pathname = window.location.pathname;

  const postPathname = '/post/';

  return (
    <>
      <Header />
      {pathname === '/' && <Home />}
      {pathname === '/about' && <About />}
      {pathname === '/login' && <h1>Логин</h1>}
      {pathname.includes(postPathname) && (
        <FullPost id={pathname.slice(postPathname.length)} />
      )}
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../UI/Breadcrumbs';
import ScrollToTop from '../UI/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="app-container">
      {/* Scroll controls */}
      <ScrollToTop />

      {/* Header Sticky navigation */}
      <Header />

      {/* Main website body */}
      <main style={{ marginTop: '0px' }}>
        {/* Breadcrumb container for inner pages */}
        <Breadcrumbs />
        
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

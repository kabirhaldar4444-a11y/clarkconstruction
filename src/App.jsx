import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Import Core Pages
import Home from './pages/Home';
import About from './pages/About';
import IndiaPartnerships from './pages/IndiaPartnerships';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Markets from './pages/Markets';
import Sustainability from './pages/Sustainability';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import New Submenu Pages
import Companies from './pages/Companies';
import CorporateResponsibility from './pages/CorporateResponsibility';
import OurStory from './pages/OurStory';
import BuildingWhatMatters from './pages/BuildingWhatMatters';
import StrategicPartnership from './pages/StrategicPartnership';
import Suppliers from './pages/Suppliers';
import TradeContractors from './pages/TradeContractors';
import LifeAtClark from './pages/LifeAtClark';
import OneClark from './pages/OneClark';
import RecentGraduates from './pages/RecentGraduates';

// Import Legal & Directory Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Sitemap from './pages/Sitemap';
import EmploymentVerification from './pages/EmploymentVerification';
import FraudulentDisclaimer from './pages/FraudulentDisclaimer';
import TradeContractorInterestForm from './pages/TradeContractorInterestForm';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment-verification" element={<EmploymentVerification />} />
          <Route path="/contact/employment-verification" element={<EmploymentVerification />} />
          <Route path="/fraudulent-employment-opportunity-disclaimer" element={<FraudulentDisclaimer />} />
          <Route path="/careers/fraudulent-employment-opportunity-disclaimer" element={<FraudulentDisclaimer />} />
          <Route path="/trade-contractor-interest-form" element={<TradeContractorInterestForm />} />
          <Route path="/business/trade-contractors/interest-form" element={<TradeContractorInterestForm />} />
          <Route path="/news" element={<News />} />

          {/* About Us Submenu */}
          <Route path="/about" element={<About />} />
          <Route path="/about/india-partnerships" element={<IndiaPartnerships />} />
          <Route path="/about/companies" element={<Companies />} />
          <Route path="/about/corporate-responsibility" element={<CorporateResponsibility />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/building-what-matters" element={<BuildingWhatMatters />} />

          {/* Our Work Submenu */}
          <Route path="/our-work/markets" element={<Markets />} />
          <Route path="/our-work/expertise" element={<Services />} />
          <Route path="/our-work/projects" element={<Projects />} />
          <Route path="/our-work/projects/:slug" element={<ProjectDetail />} />
          {/* Legacy paths redirect support */}
          <Route path="/markets" element={<Markets />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* Business With Us Submenu */}
          <Route path="/business/strategic-partnership" element={<StrategicPartnership />} />
          <Route path="/business/suppliers" element={<Suppliers />} />
          <Route path="/business/trade-contractors" element={<TradeContractors />} />

          {/* Build Your Career Submenu */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/life-at-clark" element={<LifeAtClark />} />
          <Route path="/careers/one-clark" element={<OneClark />} />
          <Route path="/careers/search-apply" element={<Careers />} />
          <Route path="/careers/recent-graduates" element={<RecentGraduates />} />
          <Route path="/sustainability" element={<Sustainability />} />

          {/* Legal & Governance Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

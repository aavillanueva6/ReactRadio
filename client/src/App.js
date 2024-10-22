import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // create-react-app standard CSS file - need to remove this

// import pages / views
import Home from './pages/Home';
import DJs from './pages/DJs';
import SingleDJ from './pages/SingleDJ';
import Shows from './pages/Shows';
import SingleShow from './pages/SingleShow';
import Schedule from './pages/Schedule';
import Donate from './pages/Donate';
import InvalidPage from './pages/InvalidPage';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/djs" element={<DJs />} />
              <Route path="/djs/:djUrl" element={<SingleDJ />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/shows/:show" element={<SingleShow />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/donate" element={<Donate />} />
              {/* catch route to direct invalid URLs to an error page  */}
              <Route path="*" element={<InvalidPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

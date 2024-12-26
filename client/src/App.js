import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages / views
import Home from './pages/Home';
import BoardMembers from './pages/BoardMembers';
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

// import ErrorBoundary
import ErrorBoundary from './components/ErrorBoundary';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className=''>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/board' element={<BoardMembers />} />
              <Route path='/djs' element={<DJs />} />
              <Route
                path='/djs/:djUrl'
                element={
                  <ErrorBoundary fallback={<InvalidPage />}>
                    <SingleDJ />
                  </ErrorBoundary>
                }
              />
              <Route path='/shows' element={<Shows />} />
              <Route
                path='/shows/:showUrl'
                element={
                  <ErrorBoundary fallback={<InvalidPage />}>
                    <SingleShow />
                  </ErrorBoundary>
                }
              />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/donate' element={<Donate />} />
              {/* catch route to direct invalid URLs to an error page  */}
              <Route path='*' element={<InvalidPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

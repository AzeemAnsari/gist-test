import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SearchInput from './components/Search';

import './App.css';
import Footer from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Home = () => {
  return (
    <div className="container">
      <SearchInput />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;

import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className='min-h-screen'>
      {/* Demo Mode Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4">
        <p className="text-sm font-semibold">
          🎭 DEMO MODE - No real blockchain or cryptocurrency involved | Data saved locally
        </p>
      </div>
      
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
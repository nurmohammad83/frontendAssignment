import Home from './Components/Home';
import Topbar from './Components/Topbar'

const App = () => {
  return (
    <section>
      <div className='min-h-screen'>
        <Topbar />
        <Home />
      </div>
    </section>
  );
};

export default App;
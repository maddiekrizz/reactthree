import './App.css';
import Head1 from './components/Head1';
import { Cart } from './components/Cart';
import Section1 from './components/Section1';
import Product from './components/Pic';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Section1/>
      <Cart/>
      <Product/>
    </div>
  );
}

export default App;
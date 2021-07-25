import './App.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarouselHome from './components/CarouselHome';
import Navigation from './components/Navigation';
import Header from './Header'
import ProductsContainer from './components/Products/ProductsContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <CarouselHome/>
      <ProductsContainer title="Featured Products" />
      <ProductsContainer title="Trending" />
    </div>
  );
}

export default App;

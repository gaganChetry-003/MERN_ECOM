import logo from './logo.svg';
import './App.css';
import ProductList from './components/product-list';
import db from './components/database';
function App() {
  return (
    <>
 <ProductList products={db.products}></ProductList>
 </>
  );
}

export default App;

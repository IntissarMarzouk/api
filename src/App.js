import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let ch="bonjour tout le monde"
  return (<div>
    <Header />
    <h1>Hello</h1>
    
    <Sidebar />
    {ch.toUpperCase()}
    <Footer />
    </div>);}

export default App;

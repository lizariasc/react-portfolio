import './App.css';
import About from './components/About';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Tabs from './components/Tabs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
       <Header></Header>
      <main>
        <About></About>
        <Welcome></Welcome>
        <Tabs></Tabs>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
       <Navigation></Navigation>
      <main>
        <About></About>
        <Welcome></Welcome>
        <Tabs></Tabs>
        <Portfolio></Portfolio>
      </main>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;

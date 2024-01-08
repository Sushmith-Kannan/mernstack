import logo from './logo.svg';
import './App.css';
import Header from './Components/SomeApp/header/header';
import Someapp from './Components/SomeApp/Aside/someapp';
import Footer from './Components/SomeApp/footer/footer';
import Content from './Components/SomeApp/Content/content';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Someapp/>
      <Footer/>
    </div>
  );
}

export default App;

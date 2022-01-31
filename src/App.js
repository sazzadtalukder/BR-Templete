
import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/Header';
import NavBar from './MyComponent/NavBar';
import PageContent from './MyComponent/PageCotent';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <PageContent></PageContent>
        <Footer></Footer>

      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './Pages/home';
import tour from './Pages/tour';
import about from './Pages/about';
import images from './Pages/images';
import refuge from './Pages/SongPages/refuge';
import again from './Pages/SongPages/again';
import heaven_and_earth from './Pages/SongPages/heaven-and-earth';
import how_come from './Pages/SongPages/how-come';
import you_will_never_end from './Pages/SongPages/you-will-never-end';

function App() {

  return (
    <>
    <Router >
      <Navbar />
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/tour' component={tour} />
        <Route path='/about' component={about} />
        <Route path='/images' component={images} /> 
        <Route path='/refuge' component={refuge} />
        <Route path='/again' component={again} />
        <Route path='/heavenandearth' component={heaven_and_earth} />
        <Route path='/howcome' component={how_come} />
        <Route path='/youwillneverend' component={you_will_never_end} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;

import './App.css';
import { Header } from './components/header/Header';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink

} from "react-router-dom";
import Home from './components/home/Home';
import Notes from './components/notes/Notes';
import About_Us from './components/about_us/About_Us';
import Notes_1 from './components/notes/notescategory/notes_1/Notes_1';
import Notes_2 from './components/notes/notescategory/notes_2/Notes_2';
import Notes_3 from './components/notes/notescategory/notes_3/Notes_3';


function App() {




  return (
    <div className="App bg-gray-300">




      <BrowserRouter>

        {/* <Link to='/Notes-Categories' className="no-underline text-gray-800 font-semibold hover:text-gray-600" >Home</Link> */}
        <Header />
        <Switch>

          <Route path="/" exact component={Home} />

          <Route path="/Home" exact component={Home} />
          {/* <Home />
          </Route> */}
          {/* <Route path="/Home" exact component={Home} /> */}
          {/* <Home />
          </Route> */}

          <Route path="/Categories" component={Home} />
          {/* <Notes />
          </Route> */}

          <Route path="/Abouts" component={About_Us} />
          {/* <About_Us />
          </Route> */}

          <Route path="/Notes_1"  >
            <Notes_1 />
          </Route>


          <Route path="/Notes_2" component={Notes_2} />

          <Route path="/Notes_3" component={Notes_3} />

        </ Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

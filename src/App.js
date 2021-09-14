import logo from './logo.svg';
import './App.css';
import AppBar from './Components/appBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Views/home';
import Movies from './Views/movies';
import MovieSingle from './Views/movieDetails';
import BookingPage from './Views/bookingPage';
import SeatMap from './Views/seatMap';
import {EventProvider} from './eventContext';

function App() {
  return (
    <EventProvider>
    <main>
       <Router>
      <Switch>
        <Route path="/" component={Home} exact  />
        <Route path="/movies" component={Movies} />
        <Route path="/moviedetails" component={MovieSingle} />
        <Route path="/bookingPage" component={BookingPage} />
        <Route path="/seatmap" component={SeatMap} />
        <Route component={Error} />
      </Switch>
      </Router>
    </main>
    </EventProvider>
  );
}

export default App;

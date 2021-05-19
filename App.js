import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GridThree from './Components/GridThree';
import Header from './Components/Header';
import Home from './Components/Home';
import RowAndColumns from './Components/RowAndColumns';
import ThreeColumns from './Components/ThreeColumns';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Grid3">
            <GridThree />
          </Route>
          <Route exact path="/rowandcolumns">
            <RowAndColumns />
          </Route>
          <Route exact path="/3columns">
            <ThreeColumns />
          </Route>
        </Switch>
			</Router>
		</div>
	);
}

export default App;

import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Timer from './Timer';

const App = () => {
  return (
    <div className="link">
      <Route path="/" component={Home} exact={true}/>
      <Route path="/timer" component={Timer}/>
    </div>
  )
}

export default App;

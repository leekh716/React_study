import './App.css';
import { Route } from 'react-router-dom';
import Template from './components/Template';
import Write from './components/Write';
import View from './components/View';
import List from './components/List';
import { ItemProvider } from './components/Context';
import Edit from './components/Edit';

const App = () => {
  return (
    <div className="App">
      <ItemProvider>
        <Template>
          <Route path="/" component={List} exact/>
          <Route path="/write" component={Write} />
          <Route path="/view/:birth" component={View} />
          <Route path="/edit/:birth" component={Edit} />
        </Template>
      </ItemProvider>
    </div>
  );
}

export default App;

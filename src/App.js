import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Collection from './Collection/Collection';
import Allproducts from './Allproducts';
import './App.css';
import Header from './Header/Header';
import SignIn from './Signin/SignIn';
import Register from './Register/Register';
import Copyright from './Copyright';
import Drop from './Drop';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Allproducts} />
        <Route exact path='/dropdown' component={Drop} />
        <Route exact path='/signin' exact component={SignIn} />
        <Route exact path='/register' exact component={Register} />
        <Route exact path='/:collection' component={Collection} />
      </Switch>
      <Copyright />
    </div>
  );
}

export default App;

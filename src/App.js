import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateDay from './components/CreatDay';

function App() { //함수형 컴포넌트 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch> 
            <Route exact path="/"> 
              <DayList />
            </Route>
            <Route path="/day/:day">
              <Day/>
            </Route>
            <Route path="/create_word">
              <CreateWord/>
            </Route>
            <Route path="/create_day">
              <CreateDay/>
            </Route>
            <Route>
              <EmptyPage/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

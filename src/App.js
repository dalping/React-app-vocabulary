import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() { //함수형 컴포넌트 
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <switch> 
          <Route path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day/>
          </Route>
        </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

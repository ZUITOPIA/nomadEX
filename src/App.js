import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Home from './router/Home';
import Detail from './router/Detail';

function App(){
  return (
    <div className="base" style={{backgroundImage:'url(/public/poster_netflix.jpeg'}}>
      <h1>What is your choice?</h1>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path = {"/:id"} element = {<Home />} />
          <Route path = {"/detail/:group"} element = {<Detail />} />
        </Routes>
      </Router>
    </RecoilRoot>
    </div>
  )
}

export default App;

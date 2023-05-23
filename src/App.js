import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import SearchUsersPage from './pages/SearchUsersPage';
import { SearchUser } from './pages/SearchUser';
import { CardUser } from './pages/CardUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/searchuser" exact element={<SearchUsersPage />}/>
          <Route path="/search" exact element={<SearchUser />}/>
          <Route path="/user/:id" exact element={<CardUser />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { Route, Redirect } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import HomeLayoutHoc from './HOC/home.hoc';
import UserDetailshoc from './HOC/UserDetails.hoc';
import UserDetailPage from './Pages/UserDetailPage';
import ImpactBoard from './Assets/ImpactBoard';

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/signIn" />
      </Route>
      <HomeLayoutHoc path="/:type" exact component={LoginPage} />
      <UserDetailshoc path="/details" exact component={UserDetailPage} />
      <UserDetailshoc path="/details/impact-board" exact component={ImpactBoard} />

    </>
  );
}

export default App;

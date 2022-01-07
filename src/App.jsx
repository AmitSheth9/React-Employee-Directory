import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import { UserProvider } from "./context/UserContext";
import ConfirmEmail from "./views/Auth/ConfirmEmail";
import Home
 from "./views/Home/Home";
import { useState } from "react";
import { useUser } from "./context/UserContext";
import Profile from "./views/Profile/Profile";
import Header from "./components/Layout/Header";
import EditProfile from "./views/Profile/EditProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return(
    <UserProvider>
  <Router>
    <Header/>
    <Switch>
    <Route exact path='/' >
      <Home />
    </Route>
    <Route path='/register'>
      <AuthForm />
    </Route>
    <Route path='/login'>
      <AuthForm />
    </Route>
    <Route path='/confirm-email'>
      <ConfirmEmail/>
    </Route>
    <PrivateRoute path='/profile/edit'>
      <EditProfile />
    </PrivateRoute>
    <PrivateRoute path ='/profile'>
      <Profile />
    </PrivateRoute>
    </Switch>
  </Router>
  </UserProvider>

  );
}

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import { UserProvider } from "./context/UserContext";
import ConfirmEmail from "./views/Auth/ConfirmEmail";
import Home
 from "./views/Home/Home";
import { useState } from "react";
 
export default function App() {

  //const [signedIn, setSignedIn] = useState(false)

  return(
<UserProvider>
  <Router>
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
  </Router>
</UserProvider>
  );
}

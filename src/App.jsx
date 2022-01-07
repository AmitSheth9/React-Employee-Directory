import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import Home
 from "./views/Home/Home";
export default function App() {
  return(
<Router>
  <Route exact path='/' >
    <Home />
  </Route>
  <Route path='/register'>
    <AuthForm/>
  </Route>
</Router>
    
  );
}

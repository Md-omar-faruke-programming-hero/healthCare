import { BrowserRouter ,Switch,Route} from "react-router-dom";
import About from "./Component/About/About";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import Booking from "./Component/Booking/Booking";
import Confirm from "./Component/Confirm/Confirm";
import Contact from "./Component/Contact/Contact";
import Details from "./Component/Details/Details";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import PrivateRoute from "./Component/Hooks/PrivateRoute/PrivateRoute";
import Login from "./Component/Login/Login";
import NotFoundPage from "./Component/NotFoundPage/NotFoundPage";
import Service from "./Component/Service/Service";
import Signup from "./Component/Signup/Signup";



function App() {
  return (
    <div >
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route  path="/home">
              <Home></Home>
          </Route>

          <Route  path="/about">
              <About></About>
          </Route>

          <Route  path="/service">
              <Service></Service>
          </Route>

          <Route  path="/details/:id">
              <Details></Details>
          </Route>

          <Route  path="/login">
              <Login></Login>
          </Route>

          <Route  path="/signup">
              <Signup></Signup>
          </Route>

          <Route  path="/contact">
              <Contact></Contact>
          </Route>

          <Route  path="/confirm">
              <Confirm></Confirm>
          </Route>

          <PrivateRoute  path="/booking">
              <Booking></Booking>
          </PrivateRoute>

          <Route  path="*">
              <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>
         <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

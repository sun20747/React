import { Route, Switch } from "react-router-dom";
import Front from "../component/layout/Front.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

const Routes = () => {
  return (
    <Switch>
      <AppRoute path="/" exact={true} component={Home} layout={Front} />
      <AppRoute path="/login" exact={true} component={Login} layout={Front} />
      <AppRoute path="/contact" exact={true} component={Contact} layout={Front} />   
    </Switch>
  );
};

export default Routes;

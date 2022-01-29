import React,{useContext} from 'react'
import userContext from '../../Context/userContext'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
  Home,
  News,
  About,
  Contact,
  Convert,
  Exchange,
  Services,
  Trending,
  SignUp,
  LogIn,
} from '../Pages/pages.js'


function Layout() {
  const context = useContext(userContext);
  
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path={'/'} render={() => <SideBar page={<Home />} />} />
        <Route
          exact
          path={'/News'}
          render={() => <SideBar page={<News />} />}
        />
        <Route
          exact
          path={'/About'}
          render={() => <SideBar page={<About />} />}
        />
        <Route
          exact
          path={'/Contact'}
          render={() => <SideBar page={<Contact />} />}
        />
        <Route
          exact
          path={'/Convert'}
          render={() => <SideBar page={<Convert />} />}
        />
        <Route
          exact
          path={'/Services'}
          render={() => <SideBar page={<Services />} />}
        />
        <Route
          exact
          path={'/Exchange'}
          render={() => <SideBar page={<Exchange />} />}
        />
        <Route
          exact
          path={'/Trending'}
          render={() => <SideBar page={<Trending />} />}
        />
        <Route
          exact
          path={'/LogIn'}
          render={() => <SideBar page={<LogIn />} />}
        />
        <Route
          exact
          path={'/SignUp'}
          render={() => <SideBar page={<SignUp />} />}
        />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default Layout

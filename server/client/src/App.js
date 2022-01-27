import React, { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, SideBar, Footer } from './components/Layout/Layout.js'
import { Home, News, About, Contact, Convert, Exchange, Services, Trending, SignUp, LogIn } from "./components/Pages/pages.js";
import axios from 'axios';

function App() {



  return (
    <>
      <Navbar />


      <Switch>

        <Route
          exact
          path={'/'}
          render={() => <SideBar page={<Home />} />}
        />
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
  );
}

export default App;

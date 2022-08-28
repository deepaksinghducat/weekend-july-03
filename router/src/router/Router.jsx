import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import PageNotFound from '../pages/PageNotFound';
import Accounts from '../pages/Accounts'
import Profile from '../pages/Profile';
import Order from '../pages/Order';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:name" element={<BlogDetails />} />
      {/* <Route path=":name" element={<Home />} /> */}

      <Route path="/accounts" element={<Accounts />}>
        <Route path="profile" element={<Profile />} />
        <Route path="order" element={<Order />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;

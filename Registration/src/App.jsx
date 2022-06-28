import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.scss";

import Header from "LandingPage/Header";
import Footer from "LandingPage/Footer";
import SafeComponent from "./components/SafeComponent";

const App = () => {
  const fetch = async () => {
    const res = await axios.get(
      "https://the-habesha-web.vercel.app/api/posts/newArrivals/posts"
    );
    console.log(res);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="my-10">Registration page</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

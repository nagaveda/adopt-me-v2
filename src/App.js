import React, { useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const theme = useState("violet");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link to="/">
              <h1 className="text-4xl text-white hover:text-gray-500">
                Adopt Me!
              </h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id" exact component={Details} />
            <Route path="/" exact component={SearchParams} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

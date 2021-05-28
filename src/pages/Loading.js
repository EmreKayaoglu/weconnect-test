import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setMenuData } from "../redux/actions";
import { api_url } from "../constants";
import Logo from "../assets/images/logo.png";

const Loading = ({ setMenuData }) => {
  let history = useHistory();

  useEffect(() => {
    const fetchData = () => {
      fetch(api_url)
        .then(async (response) => {
          const result = await response.json();
          // set store data
          setMenuData(result);

          // goto home screen
          setTimeout(function () {
            history.push("/home");
          }, 2000);
        })
        .catch((error) => {
          console.log("internet problem");
        });
    };
    fetchData();
  }, [history, setMenuData]);

  return (
    <div className="splash-screen">
      <img src={Logo} alt="App logo" />
      <CircularProgress className="splash-screen-spinner" />
    </div>
  );
};

export default connect(null, { setMenuData })(Loading);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentMenu, getMenus } from "../redux/selectors";
import Header from "../components/Header";

const Home = ({ menus, currentMenu }) => {
  let history = useHistory();
  useEffect(() => {
    if (menus == null) {
      history.push("/");
    }
  }, [history, menus, currentMenu]);

  const content = () => {
    console.log(currentMenu);
    if (currentMenu) {
      return <iframe title="Contents" src={currentMenu.url} />;
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <Header />
      <div className="container">{content()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const menus = getMenus(state);
  const currentMenu = getCurrentMenu(state);
  return { menus, currentMenu };
};

export default connect(mapStateToProps)(Home);

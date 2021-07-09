import React /* ,{useEffect, useState} */ from "react";
import { Link, useParams } from "react-router-dom";
//Components & Styles
import { connect } from "react-redux";
import Profile from "./Profile";
import Menu from "./Menu";
import { HeaderStyles } from "../Styles/HeaderStyles";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";

const Header = ({DarkModeState}) => {
  const { AddButtonStyles, TitleStyles } = HeaderStyles();
  const history = useHistory();
  const { NameRoute } = useParams();
  const HeaderTitle = NameRoute === undefined ? "Rutas" : NameRoute;
  const goBack = () => {
    history.push("/");
  };
  return (
    <div style={HeaderStyles(DarkModeState)}>
      <Menu ButtonStyles={AddButtonStyles} />
      <div style={TitleStyles} onClick={goBack}>
          {HeaderTitle !== "Rutas" ? <i class="fas fa-home"></i> : HeaderTitle}
        </div>
      <Profile ButtonStyles={AddButtonStyles} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

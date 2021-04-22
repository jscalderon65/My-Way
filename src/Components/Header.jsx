import React /* ,{useEffect, useState} */ from "react";
import { Link, useParams } from "react-router-dom";
//Components & Styles
import { connect } from "react-redux";
import Profile from "./Profile";
import Menu from "./Menu";
import { HeaderStyles } from "../Styles/HeaderStyles";
import { Typography } from "antd";
const { Title } = Typography;

const Header = ({ Responsive, DarkModeState }) => {
  const {
    AddButtonStyles,
    TitleStyles,
    ProfileStyles,
    MenuStyles,
  } = HeaderStyles(Responsive);
  const { NameRoute } = useParams();
  const HeaderTitle = NameRoute === undefined ? "Rutas" : NameRoute;
  const Size =
    HeaderTitle === "Rutas" || HeaderTitle.length < 8
      ? 2
      : Responsive === true
      ? 5
      : 3;
  return (
    <div style={HeaderStyles(Responsive, DarkModeState)}>
      <div style={MenuStyles}>
        <Menu ButtonStyles={AddButtonStyles} />
        <Link to={"/"}>
          <Title level={Size} style={TitleStyles}>
            {HeaderTitle}
          </Title>
        </Link>
      </div>
      <div style={ProfileStyles}>
        <Profile ButtonStyles={AddButtonStyles} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

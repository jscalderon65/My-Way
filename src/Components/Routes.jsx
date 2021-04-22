import React from "react";
import { connect } from "react-redux";
import RouteCard from "./RouteCard";
import { BackTop, Spin } from "antd";
import { RoutesStyles } from "../Styles/RoutesStyles";
const Routes = ({ Responsive, Routes, DarkModeState }) => {
  return Routes.length > 0 ? (
     <div style={RoutesStyles(Responsive, DarkModeState)}>
      <BackTop />
      {Routes.map((Route, index) => (
        <RouteCard
          key={index}
          Color={Route.RouteInfo.color}
          PlayListNum={Route.ArrayCourses.length}
          PlayList={Route.ArrayCourses}
          Name={Route.DocId}
          Description={Route.RouteInfo.description}
          Date={Route.RouteInfo.date}
          Responsive={Responsive}
        />
      ))}
    </div> 
  ) : (
    <div style={{gridColumn:"span 2",display:"flex",justifyContent:"center",paddingTop:"50px"}}>
      <Spin size="large" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  Routes: state.Routes,
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);

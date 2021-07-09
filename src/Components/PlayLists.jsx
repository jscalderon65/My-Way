import React, {useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { PlayListsStyles } from "../Styles/PlayListsStyles";
import PlayListCard from "./PlayListCard";
const PlayLists = ({ Responsive, DarkModeState, Courses }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const { NameRoute } = useParams();
  window.addEventListener("load", () => {
    window.location.href = "/";
  });
  return (
    <div style={PlayListsStyles(Responsive, DarkModeState)}>
      {Courses.filter((item) => item.DocId === NameRoute)[0].ArrayCourses.map(
        (item, index) => (
          <PlayListCard
            ColorCard={
              Courses.filter((item) => item.DocId === NameRoute)[0].RouteInfo
                .color
            }
            DocId={NameRoute}
            Responsive={Responsive}
            key={index}
            Items={item}
          />
        )
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  Courses: state.Routes,
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PlayLists);

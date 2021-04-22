import { createStore, applyMiddleware } from "redux";
import { Mode } from "../Styles/ContainerStyles";
import { composeWithDevTools } from "redux-devtools-extension";
import { firebase } from "../Firebase/FirebaseConfig";
import {
  modifyData,
  deleteData,
  addPlayList,
} from "../Firebase/FirebaseOperations";
import moment from 'moment';
import 'moment/locale/es'
import thunk from "redux-thunk";
import { message } from "antd";
const { error } = message;
const initialState = {
  Routes: [],
  PlayListInformation: [],
  DarkMode: false,
};
moment.locale("es");
const CreationDate = moment().format('MMMM D [del] YYYY [a las] h:mm a');
const Reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "DELETE_PLAYLIST") {
    const ArrayCoursesAux = state.Routes.filter(
      (item) => item.DocId === action.DocId
    )[0].ArrayCourses;
    addPlayList(
      action.DocId,
      ArrayCoursesAux.filter((item) => item.title !== action.Title)
      ,firebase.auth().currentUser
    );
    return {
      ...state,
      Routes: state.Routes.map((item) =>
        item.DocId === action.DocId
          ? {
              ...item,
              ArrayCourses: ArrayCoursesAux.filter(
                (item) => item.title !== action.Title
              ),
            }
          : item
      ),
    };
  }
  if (action.type === "GETTING_PLAYLIST_ITEMS") {
    const ArrayCoursesAux = state.Routes.filter(
      (item) => item.DocId === action.RouteId
    )[0].ArrayCourses;
    console.log(action.RouteId, ArrayCoursesAux);
    let Aprovation = false;
    ArrayCoursesAux.map((item) => {
      if (item.title === action.dataResItems.data.items[0].snippet.title) {
        return (Aprovation = true);
      }
      return item;
    });
    if (Aprovation === false) {
      addPlayList(
        action.RouteId,
        ArrayCoursesAux.concat({
          title: action.dataResItems.data.items[0].snippet.title,
          thumbnail:
            action.dataResItems.data.items[0].snippet.thumbnails.high.url,
          description: action.dataResItems.data.items[0].snippet.description,
          channel: action.dataResItems.data.items[0].snippet.channelTitle,
          Id: action.dataResItems.data.items[0].id,
          PlayListUrl: action.PlayListUrl,
          PlayListLength: action.dataResItems.data.pageInfo.totalResults,
        })
      );
      return {
        ...state,
        Routes: state.Routes.map((item) =>
          item.DocId === action.RouteId
            ? {
                ...item,
                ArrayCourses: ArrayCoursesAux.concat({
                  title: action.dataResItems.data.items[0].snippet.title,
                  thumbnail:
                    action.dataResItems.data.items[0].snippet.thumbnails.high
                      .url,
                  description:
                    action.dataResItems.data.items[0].snippet.description,
                  channel:
                    action.dataResItems.data.items[0].snippet.channelTitle,
                  Id: action.dataResItems.data.items[0].id,
                  PlayListUrl: action.PlayListUrl,
                  PlayListLength:
                    action.dataResItems.data.pageInfo.totalResults,
                }),
              }
            : item
        ),
      };
    } else {
      error("¡PlayList ya registrada!");
    }
  }
  if (action.type === "CHANGE_DARK_MODE") {
    return {
      ...state,
      DarkMode: action.data,
    };
  }
  if (action.type === "GETTING_SWITCH_STATE") {
    Mode(action.data[0].DarkMode);
    return {
      ...state,
      DarkMode: action.data[0].DarkMode,
    };
  }
  if (action.type === "GETTING_DATA") {
    return {
      ...state,
      Routes: action.data,
    };
  }

  if (action.type === "CREATE_ROUTE") {
    let Aprovation = false;
    state.Routes.map((item) => {
      if (item.DocId === action.data.name) {
        return (Aprovation = true);
      }
      return item;
    });
    if (Aprovation === false) {
      modifyData(action.data, CreationDate, firebase.auth().currentUser);
      return {
        ...state,
        Routes: state.Routes.concat({
          DocId: action.data.name,
          ArrayCourses: [],
          RouteInfo: {
            description: action.data.description,
            date:CreationDate,
            color: action.data.colorCard,
          },
        }),
      };
    } else {
      error("¡Ruta ya creada!");
    }
  }
  if (action.type === "DELETE_ROUTE") {
    deleteData(action.DocId, firebase.auth().currentUser);
    return {
      ...state,
      Routes: state.Routes.filter((item) => item.DocId !== action.DocId),
    };
  }
  if (action.type === "MODIFY_ROUTE") {
    return {
      ...state,
      Routes: state.Routes.map((item) =>
        item.DocId === action.name
          ? {
              ...item,
              DocId: action.data.name,
              RouteInfo: {
                date: item.RouteInfo.date,
                description: action.data.description,
                color: action.data.color,
              },
            }
          : item
      ),
    };
  }
  return state;
};
export default createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

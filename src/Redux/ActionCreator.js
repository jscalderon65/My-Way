import {firebase,db} from "../Firebase/FirebaseConfig";
import axios from "axios";
const gettingPlayListItems = (PlayListId,PlayListUrl,RouteId) => (dispatch) => {
  axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${PlayListId}&key=AIzaSyAH6I58ubAhUG5VTjaujMwTmtAW9GQsS0s`
  ).then((ResponseItems) => {
    console.log("---->",ResponseItems)
    return dispatch({
      type: "GETTING_PLAYLIST_ITEMS",
      dataResItems: ResponseItems,
      PlayListUrl,
      RouteId
    });
  })
  .catch((error) => {
    console.log(error);
  });
}
const changeDarkMode = (data) => ({
  type: "CHANGE_DARK_MODE",
  data,
});
const gettingSwitchState = () => (dispatch) => {
  db.collection(`${firebase.auth().currentUser.uid}-DarkMode`)
    .get()
    .then((data) => {
      const arrayData = data.docs.map((doc) => ({
        DocId: doc.id,
        ...doc.data(),
      }));
      return dispatch({
        type: "GETTING_SWITCH_STATE",
        data: arrayData,
      });
    })
    .catch((error) => {
      console.log("Error obteniendo el documento:", error);
    });
};
const gettingData = () => (dispatch) => {
  db.collection(firebase.auth().currentUser.uid)
    .get()
    .then((data) => {
      const arrayData = data.docs.map((doc) => ({
        DocId: doc.id,
        ...doc.data(),
      }));
      return dispatch({
        type: "GETTING_DATA",
        data: arrayData,
      });
    })
    .catch((error) => {
      console.log("Error obteniendo el documento:", error);
    });
};
const createRoute = (data) => ({
  type: "CREATE_ROUTE",
  data,
});
const deleteRoute = (DocId) => ({
  type: "DELETE_ROUTE",
  DocId,
});
const deletePlayList = (DocId,Title) => ({
  type: "DELETE_PLAYLIST",
  DocId,
  Title,
});
const modifyRoute = (data, name) => ({
  type: "MODIFY_ROUTE",
  name,
  data,
});
export {
  createRoute,
  gettingData,
  deleteRoute,
  modifyRoute,
  gettingSwitchState,
  changeDarkMode,
  gettingPlayListItems,
  deletePlayList,
};

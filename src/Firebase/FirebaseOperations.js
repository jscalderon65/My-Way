import {firebase,db} from "./FirebaseConfig";
import { message } from "antd";
const { success, error } = message;
const modifyData = (data, date) => {
  db.collection(firebase.auth().currentUser.uid)
    .doc(data.name)
    .set({
      RouteInfo: {
        description: data.description,
        date: date,
        color: data.colorCard,
      },
      ArrayCourses: [],
    })
    .then(function () {
      success("¡ Se ha creado una nueva ruta !");
    })
    .catch(function (Error) {
      console.error("Error modificando el documento: ", Error);
      error(Error);
    });
};
const deleteData = (DocId) => {
  db.collection(firebase.auth().currentUser.uid)
    .doc(DocId)
    .delete()
    .then(() => {
      success(`Se ha eliminado la ruta ${DocId} satisfactoriamente`);
    })
    .catch((Error) => {
      console.error("Error removing document: ", Error);
      error(Error);
    });
};
const modifyRouteCard = (data, Name) => {
  db.collection(firebase.auth().currentUser.uid)
    .doc(Name)
    .delete()
    .then(() => {
      db.collection(firebase.auth().currentUser.uid)
        .doc(data.name)
        .set({
          RouteInfo: {
            description: data.description,
            date: data.date,
            color: data.color,
          },
          ArrayCourses: data.playList,
        })
        .then(() => {
          success("¡ Se han modificado los datos de la ruta !");
        })
        .catch((Error) => {
          console.error("Error modificando el documento: ", Error);
          error(Error);
        });
    })
    .catch((Error) => {
      console.error("Error removing document: ", Error);
      error(Error);
    });
};
const darkModeSwitch = (state) => {
  db.collection(`${firebase.auth().currentUser.uid}-DarkMode`)
    .doc("State")
    .set({
      DarkMode: state,
    })
    .then(() => {
      if (state) {
        success("Dark mode on");
      } else {
        success("Dark mode off");
      }
    })
    .catch((Error) => {
      console.error("Error modificando el documento: ", Error);
      error(Error);
    });
};
const addPlayList = (DocId,data) => {
  db.collection(firebase.auth().currentUser.uid)
    .doc(DocId)
    .update({
      ArrayCourses: data,
    })
    .then(function () {
      success("! Ruta actualizada !");
    })
    .catch(()=>{
      error("Error: ", error);
    });
};
export { deleteData, modifyData, modifyRouteCard, darkModeSwitch, addPlayList };

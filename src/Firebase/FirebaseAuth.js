import { firebase } from "./FirebaseConfig";
import { message as Message } from "antd";
import "antd/dist/antd.css";
const { success, error} = Message;
let user = firebase.auth().currentUser;
const googleAuth = () => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(() => {
      let user = firebase.auth().currentUser;
      window.reload();
      success(`${user.displayName} ha iniciado sesión`);
    })
    .catch((Error) => {
      error(`Se ha presentado un error al inicio de sesión`);
    });
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      success(`El usuario ha cerrado sesión`, 5);
      window.location = "/";
    })
    .catch((Error) => {
      error(`Se ha presentado un Error ${Error}`, 5);
    });
};

const AuthDeleteUser = () => {
  let user = firebase.auth().currentUser;
  user
    .delete()
    .then(() => {
      success("Se ha eliminado satisfactoriamente el perfil de usuario", 5);
      window.location = "/";
    })
    .catch((Error) => {
      error(
        "Se ha producido un error eliminando el perfil de usuario intentalo de nuevo mas tarde",
        5
      );
      logout();
    });
};

export { logout, googleAuth, AuthDeleteUser,user };

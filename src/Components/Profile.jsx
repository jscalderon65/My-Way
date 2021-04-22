import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer, Button, Typography } from "antd";
import { logout } from "../Firebase/FirebaseAuth";
import { firebase } from "../Firebase/FirebaseConfig";
import { UserOutlined } from "@ant-design/icons";
import { ProfileStyles } from "../Styles/ProfileStyles";
const Profile = ({ ButtonStyles, DarkModeState }) => {
  let user = firebase.auth().currentUser;
  const { TitleStyles, bodyStyles } = ProfileStyles(DarkModeState);
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  const OpenClose = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Button
        shape="circle"
        style={ButtonStyles}
        icon={<UserOutlined style={{ fontSize: "30px" }} />}
        onClick={OpenClose}
      />
      <Drawer
        headerStyle={TitleStyles}
        bodyStyle={bodyStyles}
        title={null}
        placement={"right"}
        closable={true}
        onClose={OpenClose}
        visible={visible}
      >
        <div
          className="animate__animated animate__fadeIn"
          style={{
            textAlign: "center",
            marginTop:"20px"
          }}
        >
          <div style={TitleStyles}>
            {" "}
            <Title
              style={{ color: DarkModeState === true ? "white" : "black" }}
            >
              Perfil
            </Title>
          </div>

          <img
            src={user.photoURL}
            style={{
              borderRadius: "100%",
              width: "150px",
              height: "150px",
              minWidth: "150px",
            }}
            alt={user.displayName}
          />
          <br />
          <br />
          <Title
            style={{ color: DarkModeState === true ? "white" : "black" }}
            level={4}
          >
            {user.displayName}
          </Title>
          <Title
            style={{ color: DarkModeState === true ? "white" : "black" }}
            level={5}
          >
            {user.email}
          </Title>
          <br/>
          <Button type="primary" danger onClick={logout}>
            Salir
          </Button>
        </div>
      </Drawer>
    </>
  );
};
const mapStateToProps = (state) => ({
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

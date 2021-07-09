import React, { useState } from "react";
import AddRouteModal from "./AddRouteModal";
import PlayListModal from "./PlayListModal";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { changeDarkMode } from "../Redux/ActionCreator";
import { connect } from "react-redux";
import { Mode } from "../Styles/ContainerStyles";
import { MenuStyles } from "../Styles/MenuStyles";
import { darkModeSwitch } from "../Firebase/FirebaseOperations";
import { firebase } from "../Firebase/FirebaseConfig";
import { Drawer, Button, Typography, Switch } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
const Menu = ({ ButtonStyles, DarkModeState, changeDarkMode }) => {
  console.log(firebase.auth().currentUser);
  const { NameRoute } = useParams();
  const CreateButton = (NameRoute) => {
    return NameRoute !== undefined ? (
      <PlayListModal RouteId={NameRoute} />
    ) : (
      <AddRouteModal />
    );
  };
  const { TitleStyles, ButtonsStyles, bodyStyles } = MenuStyles(DarkModeState);
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  const OpenClose = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Button
        style={ButtonStyles}
        icon={<MenuUnfoldOutlined style={{ fontSize: "30px" }} />}
        onClick={() => OpenClose()}
      />
      <Drawer
        headerStyle={TitleStyles}
        bodyStyle={bodyStyles}
        title={null}
        placement={"left"}
        closable={false}
        onClose={OpenClose}
        visible={visible}
      >
        <div style={TitleStyles}>
          <Title style={{ color: DarkModeState === true ? "white" : "black" }}>
            Menú
          </Title>
        </div>
        <div style={ButtonsStyles}>{CreateButton(NameRoute)}</div>
        <br />
        <div style={ButtonsStyles}>
          <Switch
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<BulbFilled />}
            defaultChecked={DarkModeState}
            onChange={(checked) => {
              Mode(checked);
              changeDarkMode(checked);
              darkModeSwitch(checked);
            }}
          />
        </div>
      </Drawer>
    </>
  );
};
const mapStateToProps = (state) => ({
  DarkModeState: state.DarkMode,
});
const mapDispatchToProps = (dispatch) => ({
  changeDarkMode(data) {
    dispatch(changeDarkMode(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

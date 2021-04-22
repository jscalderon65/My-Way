import React, { useState } from "react";
import { modifyRouteCard } from "../Firebase/FirebaseOperations";
import { connect } from "react-redux";
import { modifyRoute } from "../Redux/ActionCreator";
import { Button, Typography, Modal, Menu, Input, Select, message } from "antd";
import { ModifyCardModalStyle } from "../Styles/ModifyCardModalStyle";
import {
  SettingOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  FileTextOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { ColorArray } from "../Styles/ColorArray";
const ModifyCardModal = ({
  NameValue,
  DescriptionValue,
  DateValue,
  ColorValue,
  modifyRoute,
  PlayListValue,
  Routes,
}) => {
  const { error } = message;
  const [block, setBlock] = useState(true);
  const [visible, setVisible] = useState(false);
  const CloseModal = () => {
    setVisible(false);
  };
  const OpenModal = () => {
    setVisible(true);
  };
  const [dataValues, setData] = useState({
    name: NameValue,
    description: DescriptionValue,
    color: ColorValue,
    date: DateValue,
    playList: PlayListValue,
  });
  const getNameValue = (e) => {
    let Aprovation = false;
    Routes.map((item) => {
      if (item.DocId === e.target.value.trim()) {
        error("¡Ya existe está ruta!");
        setBlock(true);
        return (Aprovation = true);
      }
      return item;
    });
    if (Aprovation === false) {
      setBlock(false);
      setData({
        ...dataValues,
        name: e.target.value,
      });
    }
  };
  const getDescriptionValue = (e) => {
    setData({
      ...dataValues,
      description: e.target.value,
    });
  };
  const getColorValue = (value) => {
    setData({
      ...dataValues,
      color: value,
    });
  };
  const ChangeValues = () => {
    modifyRoute(dataValues, NameValue);
    modifyRouteCard(dataValues, NameValue);
    CloseModal();
  };
  const { Title } = Typography;
  const { Option } = Select;
  const { SubMenu } = Menu;
  const { TextArea } = Input;
  const {
    TitleStyles,
    MenuStyles,
    SubMenuStyles,
    ButtonStyles,
  } = ModifyCardModalStyle;
  return (
    <>
      <Button
        shape="circle"
        size="large"
        type="primary"
        icon={<SettingOutlined />}
        onClick={OpenModal}
      />
      <Modal
        title={
          <div style={TitleStyles}>
            <Title>Opciones</Title>
          </div>
        }
        visible={visible}
        onCancel={CloseModal}
        footer={[]}
      >
        <Menu style={MenuStyles} mode="inline">
          <SubMenu
            icon={<FontSizeOutlined />}
            style={{ background: "#f8f9fa" }}
            key="sub1"
            title="Nombre"
          >
            <div style={SubMenuStyles}>
              <Input
                type="text"
                defaultValue={NameValue}
                maxLength={35}
                onChange={(e) => {
                  getNameValue(e);
                }}
              />
              <Button
                type="primary"
                style={ButtonStyles}
                icon={<SaveOutlined />}
                onClick={ChangeValues}
                disabled={block}
              >
                Cambiar
              </Button>
            </div>
          </SubMenu>
          <SubMenu
            icon={<FileTextOutlined />}
            style={{ background: "#f8f9fa" }}
            key="sub2"
            title="Descripción"
          >
            <div style={SubMenuStyles}>
              <TextArea
                rows={4}
                defaultValue={DescriptionValue}
                maxLength={166}
                onChange={(e) => {
                  getDescriptionValue(e);
                }}
              />
              <Button
                type="primary"
                style={ButtonStyles}
                icon={<SaveOutlined />}
                onClick={ChangeValues}
              >
                Cambiar
              </Button>
            </div>
          </SubMenu>
          <SubMenu
            icon={<BgColorsOutlined />}
            style={{ background: "#f8f9fa" }}
            key="sub3"
            title="Color"
          >
            <div style={SubMenuStyles}>
              <Select
                defaultValue={<div
                  style={{
                    background: ColorValue,
                    borderRadius:"100%",
                    width: "20px",
                    height: "20px",
                  }}
                ></div>}
                onChange={(value) => {
                  getColorValue(value);
                }}
                required
              >
                {ColorArray.map((item, index) => (
                  <Option key={index} value={`#${item}`}>
                    <div
                      style={{
                        background: `#${item}`,
                        borderRadius:"100%",
                        width: "20px",
                        height: "20px",
                      }}
                    ></div>
                  </Option>
                ))}
              </Select>
              <br />
              <Button
                type="primary"
                style={ButtonStyles}
                icon={<SaveOutlined />}
                onClick={ChangeValues}
              >
                Cambiar
              </Button>
            </div>
          </SubMenu>
        </Menu>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
  Routes: state.Routes,
});
const mapDispatchToProps = (dispatch) => ({
  modifyRoute(data, name) {
    dispatch(modifyRoute(data, name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCardModal);

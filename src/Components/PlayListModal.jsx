import React, { useState } from "react";
import { gettingPlayListItems } from "../Redux/ActionCreator";
import { connect } from "react-redux";
import { Input, Button, Typography, Modal, message } from "antd";
import {
  PlusCircleOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const PlayListModal = ({gettingPlayListItems,Routes,RouteId}) => {
  const { success, error } = message;
  const { Title } = Typography;
  const [getUrlValue, setUrl] = useState("");
  const [visible, setVisible] = useState(false);
  const CloseModal = () => {
    setVisible(false);
  };
  const OpenModal = () => {
    setVisible(true);
  };
  const UrlSubmit = () => {
    try {
      console.log(getUrlValue);
      gettingPlayListItems(getUrlValue.split("/")[3].split("=")[1],getUrlValue,RouteId);
      success("¡Url válida!");
      CloseModal();
    } catch (Error) {
      CloseModal();
      error("¡Error URL invalida");
    }
  };

  return (
    <>
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={OpenModal}
      >
        Agregar PlayList
      </Button>
      <Modal
        title={
          <div style={{ textAlign: "center" }}>
            <Title>Agrega una nueva PlayLit</Title>
          </div>
        }
        visible={visible}
        onCancel={CloseModal}
        footer={[]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            UrlSubmit();
          }}
        >
          <Input
            size="large"
            placeholder="URL de la PlayList"
            /* defaultValue="" */
            onChange={e=>setUrl(e.target.value)}
            required
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <Button icon={<SaveOutlined />} type="primary" htmlType="submit">
              Agregar
            </Button>

            <Button
              icon={<CloseOutlined />}
              type="primary"
              danger
              onClick={CloseModal}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
    Routes:state.Routes
});
const mapDispatchToProps = (dispatch) => ({
    gettingPlayListItems(data,url, RouteId){
        dispatch(gettingPlayListItems(data,url, RouteId))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayListModal);

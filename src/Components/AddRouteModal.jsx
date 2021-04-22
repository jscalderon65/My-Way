import React, { useState } from "react";
import { connect } from "react-redux";
import { createRoute } from "../Redux/ActionCreator";
import { Input, Button, Typography, Modal, Select} from "antd";
import {
  PlusCircleOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { ColorArray } from "../Styles/ColorArray";
const AddRouteModal = ({ createRoute }) => {
  const { Title } = Typography;
  const { Option } = Select;
  const { TextArea } = Input;
  const [InputValue, setValue] = useState({
    name: "",
    description: "",
    colorCard: "#293241",
  });
  const [visible, setVisible] = useState(false);
  const CloseModal = () => {
    setVisible(false);
  };
  const OpenModal = () => {
    setVisible(true);
  };
  const getName = (e) => {
    setValue({ ...InputValue, name: e.target.value.trim() });
  };
  const getDescription = (e) => {
    setValue({ ...InputValue, description: e.target.value.trim() });
  };
  const getColor = (value) => {
    setValue({ ...InputValue, colorCard: value });
  };
  return (
    <>
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={OpenModal}
      >
        Agregar ruta
      </Button>
      <Modal
        title={
          <div style={{ textAlign: "center" }}>
            <Title>Agrega una nueva ruta</Title>
          </div>
        }
        visible={visible}
        onCancel={CloseModal}
        footer={[]}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createRoute(InputValue);
            CloseModal();
          }}
        >
          <Input
            placeholder="Nombre de la ruta"
            defaultValue=""
            maxLength={25}
            onChange={(e) => getName(e)}
            required
          />
          <br />
          <br />
          <TextArea
            rows={4}
            placeholder="Descripción de la ruta"
            maxLength={140}
            onChange={(e) => getDescription(e)}
            defaultValue=""
            required
          />
          <br />
          <br />
          <Select
            defaultValue={
              <div
                  style={{
                    background: `#${ColorArray[0]}`,
                    borderRadius:"100%",
                    width: "20px",
                    height: "20px",
                  }}
                ></div>}
            onChange={(value) => {
              getColor(value);
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
          <hr />
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <Button icon={<SaveOutlined />} type="primary" htmlType="submit">
              Crear
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
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  createRoute(data) {
    dispatch(createRoute(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddRouteModal);

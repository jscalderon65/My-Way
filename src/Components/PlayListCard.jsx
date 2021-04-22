import React, { useState } from "react";
import "../Styles/App.css";
import { connect } from "react-redux";
import { Typography, Button, Modal, Popconfirm, Tooltip } from "antd";
import { deletePlayList } from "../Redux/ActionCreator";
import { PlayListCardStyles } from "../Styles/PlayListCardStyles";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
const PlayListCard = ({
  Items,
  Responsive,
  ColorCard,
  deletePlayList,
  DocId,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(Items);
  return (
    <div
      className="hover-card  animate__animated animate__fadeIn"
      style={PlayListCardStyles(Responsive, ColorCard)}
    >
      <a href={Items.PlayListUrl} target="_blank" rel="noreferrer">
        <img
          src={Items.thumbnail}
          style={{
            width: "100%",
            flex: "1",
            height: "250px",
            borderRadiusTop: "4px",
          }}
          alt="chi"
        />
      </a>
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          flex: "1",
        }}
      >
        <Title
          level={4}
          style={{
            color: "white",
          }}
        >
          {Items ? (
            Items.title.length >= 40 ? (
              <Tooltip placement="top" title={Items.title}>
                {`${Items.title.substr(0, 40)} ....`}
              </Tooltip>
            ) : (
              Items.title
            )
          ) : null}
        </Title>
        <Text
          strong
          style={{
            color: "white",
          }}
        >
          Canal:{" "}
          <a
            href={Items.PlayListUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
            }}
          >
            {Items.channel}
          </a>
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          width: "50%",
          flex: "1",
        }}
      >
        <Button
          shape="circle"
          onClick={showModal}
          icon={<PlusCircleOutlined />}
          size="large"
          type="primary"
        />
        <Popconfirm
          title="¿Estás seguro de eliminar esta PlayList?"
          onConfirm={() => {
            deletePlayList(DocId, Items.title);
          }}
          okText="Si"
          cancelText="No"
        >
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            size="large"
            type="primary"
            danger
          />
        </Popconfirm>
      </div>
      <Modal
        title={
          <div style={{ textAlign: "center" }}>
            <Title>Información</Title>
          </div>
        }
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Title level={5} strong>
          Tamaño de la PlayList: {Items.PlayListLength}
        </Title>
        <br />
        <Title level={5} strong>
          Descripción
        </Title>
        <Text>{Items.description}</Text>
      </Modal>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  deletePlayList(DocId, Title) {
    dispatch(deletePlayList(DocId, Title));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayListCard);

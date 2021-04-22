import React from "react";
import '../Styles/App.css';
import { connect } from "react-redux";
import { deleteRoute } from "../Redux/ActionCreator";
import { Link } from "react-router-dom";
//Components & Styles
import ModifyCardModal from "./ModifyCardModal";
import { RouteCardStyles } from "../Styles/RouteCardStyles";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Typography, Popconfirm } from "antd";
const { Title, Text } = Typography;
const RouteCard = ({
  Color,
  Name,
  Description,
  Date,
  PlayListNum,
  PlayList,
  Responsive,
  deleteRoute,
}) => {
  const {
    Container,
    TitleItem,
    TitleStyle,
    TextStyle,
    OptionsStyles,
  } = RouteCardStyles(Color, Responsive);
  const cancelDelete = () => {
    console.log("");
  };
  return (
    <div className="hover-card animate__animated animate__fadeIn" style={Container}>
      <div style={TitleItem}>
        <Link to={`/${Name}`} style={TitleStyle}>
          <Title level={3} style={{color:"white",textAlign:"left",wordBreak:"break-all"}}>
            {Name}
          </Title>
          <Text style={TextStyle}strong>{Date}</Text>
          <br />
          <Text style={TextStyle}strong>Playlist: {PlayListNum}</Text>
          <hr />
        </Link>
      </div>
      <div style={{textAlign:"left",wordBreak:"break-all"}}>{Description}</div>
      <div style={OptionsStyles}>
        <ModifyCardModal
          DateValue={Date}
          NameValue={Name}
          DescriptionValue={Description}
          ColorValue={Color}
          PlayListValue={PlayList}
        />
        <Popconfirm
          title="¿Estás seguro de eliminar esta ruta?"
          onConfirm={() => {
            deleteRoute(Name);
          }}
          onCancel={cancelDelete}
          okText="Si"
          cancelText="No"
        >
          <Button
            shape="circle"
            size="large"
            type="primary"
            icon={<DeleteOutlined />}
            danger
          />
        </Popconfirm>
      </div>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  deleteRoute(DocId) {
    dispatch(deleteRoute(DocId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RouteCard);

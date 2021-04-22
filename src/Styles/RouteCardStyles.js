const RouteCardStyles = (color, responsive) => {
    if(responsive){
      return {
        Container:{
          padding:"10px",
          backgroundColor:color,
          boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
          borderRadius: "4px",
          height: "340px",
          display: "grid",
          gridGap:"10px",
          gridTemplateRows: "0.5fr  1fr 0.5fr",
          color:"white",
        },
        TitleItem:{textAlign:"left",wordBreak:"break-all"},
        OptionsStyles:{width:"40%",display:"flex", justifyContent:"space-around", alignItems:"center",},
        TitleStyle:{color:"white"},
        TextStyle:{color:"white",wordBreak:"break-all"}
      };
    }else{
      return {
        Container:{
          padding:"10px",
          backgroundColor:color,
          boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
          borderRadius: "4px",
          height: "340px",
          display: "grid",
          gridGap:"10px",
          gridTemplateRows: "0.5fr  1fr 0.5fr",
          color:"white",
        },
        TitleItem:{textAlign:"left"},
        DescriptionItem:{display:"flex", alignItems:"center", textAlign:"left"},
        OptionsStyles:{width:"40%",display:"flex", justifyContent:"space-around", alignItems:"center",},
        TitleStyle:{color:"white"},
        TextStyle:{color:"white"}
      };
    }
    
  
};
export { RouteCardStyles };

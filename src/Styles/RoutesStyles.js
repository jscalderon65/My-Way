const RoutesStyles = (responsive, color) => {
  if (responsive) {
    return {
      background: color===true?"#333333":"#8d99ae",
      boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
      gridColumn: "span 2",
      borderRadius: "10px",
      textAlign: "center",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: "20px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "40px",
      paddingBottom: "40px",
      marginBottom: "10px",
    };
  } else {
    return {
      background: color===true?"#333333":"#8d99ae",
      boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
      gridColumn: "span 2",
      textAlign: "center",
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "repeat(auto-fill,minmax(10vw,330px))",
      gridGap: "30px",
      borderRadius: "10px",
      paddingLeft: "60px",
      paddingRight: "60px",
      paddingTop: "40px",
      paddingBottom: "40px",
      marginBottom: "10px",
    };
  }
};
export { RoutesStyles };

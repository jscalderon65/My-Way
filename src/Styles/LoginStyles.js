const LoginStyles = () => {
  document.getElementById("BODY").style.background = "#8d99ae";
  document.getElementById("HTML").style.background = "#8d99ae";
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    Container: {
      display: "flex",
      alignItems: "center",
      border:"solid white",
      padding: "20px",
      height: "auto",
      borderRadius:"10px",
      width: "auto",
      boxShadow: "2px 2px  10px rgba(0,0,0,.25)",
      backgroundColor: "rgba(0,0,0,0.8)",
      flexFlow:"column"
    },
  };
};
export { LoginStyles };

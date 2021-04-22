const ProfileStyles =(color)=>{
  return{
      TitleStyles:{textAlign: "center", background: color===true?"#333333":"#edf2f4",color:"white"},
      ButtonsStyles:{textAlign: "center",boxShadow:"2px 2px 10px rgba(0,0,0,.2)"},
      bodyStyles:{background: color===true?"#333333":"#edf2f4"}
  }
}
export { ProfileStyles };

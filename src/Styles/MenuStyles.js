const MenuStyles=(color)=>{
    return{
        TitleStyles:{textAlign: "center", background: color===true?"#333333":"#edf2f4",color:"white"},
        ButtonsStyles:{textAlign: "center"},
        bodyStyles:{background: color===true?"#333333":"#edf2f4"}
    }
}
export {MenuStyles}
const MenuStyles=(color)=>{
    return{
        TitleStyles:{textAlign: "left", background: color===true?"#333333":"#edf2f4",color:"white"},
        ButtonsStyles:{textAlign: "left"},
        bodyStyles:{background: color===true?"#333333":"#edf2f4"}
    }
}
export {MenuStyles}
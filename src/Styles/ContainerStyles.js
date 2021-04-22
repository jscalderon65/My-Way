const ContainerStyles=()=> {
    return{
        display: "grid",
        gridTemplateColumns:"1fr 1fr",
        gridTemplateRows:"auto 1fr",
        gridGap:"10px"
    }
}
const Mode = (validation)=>{
    if(validation){
        document.getElementById("BODY").style.background="#212121";
        document.getElementById("HTML").style.background="#212121";
    }else{
        document.getElementById("BODY").style.background="#edf2f4";
        document.getElementById("HTML").style.background="#edf2f4";
    }
}
export {ContainerStyles,Mode}

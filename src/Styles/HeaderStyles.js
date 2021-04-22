const HeaderStyles=(responsive, color)=>{
    if(responsive){
        return{
            background: color===true?"#333333":"#2b2d42",
            boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
            marginTop:"10px",
            color:"white",
            gridColumn:"span 2",
            padding:"10px",
            textAlign:"center",
            display:"grid",
            gridTemplateColumns:"auto  1fr",
            justifyContent:"center",
            alignItems:"center",
            gridGap:"10px",
            borderRadius:"10px",
            AddButtonStyles:{height:"60px", width:"55px"},
            TitleStyles:{ color: "white", marginLeft: "20px"},
            ProfileStyles:{ display: "flex", justifyContent: "flex-end" },
            MenuStyles:{ display: "flex" }
        }
    }else{
        return{
            background: color===true?"#333333":"#2b2d42",
            boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
            marginTop:"10px",
            color:"white",
            gridColumn:"span 2",
            padding:"10px",
            textAlign:"center",
            display:"grid",
            gridTemplateColumns:"auto  1fr",
            justifyContent:"center",
            alignItems:"center",
            gridGap:"10px",
            borderRadius:"10px",
            AddButtonStyles:{height:"60px", width:"55px"},
            TitleStyles:{ color: "white", marginLeft: "20px"},
            ProfileStyles:{ display: "flex", justifyContent: "flex-end" },
            MenuStyles:{ display: "flex" }
        }
    }
}


export {HeaderStyles};
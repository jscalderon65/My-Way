const PlayListCardStyles =(Responsive, color)=>{
    if(Responsive){
        return {
            backgroundColor:color,
            display:"flex",
            boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
            height: '490px',
            borderRadius: "4px",
            flexFlow:"column",
        }
    }else{
        return {
            backgroundColor:color,
            display:"flex",
            boxShadow: "2px 2px  10px rgba(0, 0, 0,0.2)",
            justifyContent:"center",
            borderRadius: "4px",
            flexFlow:"column",
            height: '490px',
        }
    }
}
export {PlayListCardStyles}
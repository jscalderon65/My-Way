const HeaderStyles = (color) => {
    return {
        background: color === true ? "#333333" : "#2b2d42",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "10px",
        gridColumn: "span 2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        AddButtonStyles: { height: "60px", width: "60px" },
        TitleStyles: { display: "flex", 
        alignItems: "center", 
        fontSize: "2rem", 
        color: "white", 
        wordBreak: "break-word", 
        textAlign: "center", 
        cursor: "pointer",
        fontWeight: "bold",
    }
    }

}


export { HeaderStyles };
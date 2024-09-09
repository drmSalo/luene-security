function Button(prompt){
    const {text, style} = prompt
    return(
        <button classname={style}>{text}</button>
    )
}

export default Button
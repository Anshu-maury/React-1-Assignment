function Button() {
    const Text = ()=>{
        console.log("I am clicked")
    }
    return(
        <div>
            <button onClick={Text}>Button</button>
        </div>
    )
}
export default Button;
const Button = (props) => {
    const {text,onClick,delta} = props;

    const handleClick = (e)=>{
        onClick(parseInt(e.target.dataset.delta))
    }

    return(
        <div>
            <button onClick={handleClick} data-delta={delta}>
                {text}
            </button>
        </div>
    )
}

export default Button;
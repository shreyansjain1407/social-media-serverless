const Button = ({value, onClick, type ,color}) => {
    return (
        <button className={ `btn ${color}` } onClick={onClick} type={type} >
            {value}
        </button>
    )
}

export default Button
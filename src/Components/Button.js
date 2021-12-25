

const Button = ({value, onClick}) => {
    return (
        <button className='btn btn-outline-success mb-3' onClick={onClick}>
            {value}
        </button>
    )
}

export default Button
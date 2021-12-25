

const Button = ({value, onClick, type}) => {
    return (
        <button className='btn btn-outline-success' onClick={onClick} type={type} >
            {value}
        </button>
    )
}

export default Button
const Post = ({id, title, username, content}) => {
    return (
        <div className='card' style={{padding: '20px'}}>
            <h5 className='card-title'>{title}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{username}</h6>
            {/*<img src='' className='img-thumbnail' alt=''/>*/}
            <br /><br /><br /><br />
            <p className='card-text'>{content}</p>
        </div>
    )
}

export default Post
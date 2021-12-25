const Post = ({id, title, username, content}) => {
    return (
        <div className='card' style={{padding: '20px'}}>
            <h5 className='card-title'>{title}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>@{username}</h6>
            <img
                src={require(`../images/img${Math.floor(Math.random()*6 + 1)}.jpg`)}
                className='img-thumbnail'
                style={{padding: '15px'}}
                alt="..."
            />
            <p className='card-text' style={{paddingTop: '5px'}}>{content}</p>
        </div>
    )
}

export default Post
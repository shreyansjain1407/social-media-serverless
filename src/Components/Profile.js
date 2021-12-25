const Profile = ({profile}) => {
    return (
        <div className='col-4 profile'>
            <h2>Profile</h2>
            <div className='card center' >
                <img
                    src={require('../images/profile.jpg')}
                    className='card-img-top'
                    style={{padding: '15px'}}
                    alt="..."
                />
                <div className='card-body'>
                    <h5 className='card-title'>{profile.name}</h5>
                    <h5 className='card-title'>@{profile.username}</h5>
                    <p className='card-text'>{profile.about}</p>
                    {/*<a className='btn btn-primary'>Go somewhere</a>*/}
                </div>
            </div>
        </div>
    )
}

export default Profile
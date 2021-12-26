import 'bootstrap-icons/font/bootstrap-icons.css';

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
                    <p className='card-text'><i className="bi bi-telephone-fill"></i> {profile.phone}</p>
                    <p className='card-text'><i className="bi bi-envelope"></i> {profile.email}</p>
                    <div className='row'>
                        <a href={profile.portfolio} className='col'><i className="bi bi-person-bounding-box"></i></a>
                        <a href={profile.linkedin} className='col'><i className="bi bi-linkedin"></i></a>
                        <a href={profile.github} className='col'><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
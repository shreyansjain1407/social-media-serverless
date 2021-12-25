import Button from "./Button";

const AddPost = () => {
    return (
        <div className='container'>
            <form>
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingTitle' />
                    <label htmlFor='floatingTitle'>Title</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingUser' />
                    <label htmlFor='floatingUser'>Username</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingContent' />
                    <label htmlFor='floatingContent'>Content</label>
                </div>
                <Button value='Submit Post'/>
            </form>
        </div>
    )
}

export default AddPost
import Button from "./Button";
import {useState} from "react";

const AddPost = ({username, onToggle}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !content){
            alert('Please add all the details')
            return
        }
        onToggle({title, username, content})
        setTitle('')
        setContent('')
    }
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='form-floating mb-3'>
                    <input
                        type='text'
                        className='form-control'
                        id='floatingTitle'
                        onChange={
                            (e) => setTitle((e.target.value))
                        }
                        value={title}
                    />
                    <label htmlFor='floatingTitle'>Title</label>
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='text'
                        className='form-control'
                        id='floatingUser'
                        value={username}
                        disabled
                    />
                    <label htmlFor='floatingUser'>Username</label>
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='text'
                        className='form-control'
                        id='floatingContent'
                        onChange={
                            (e) => setContent((e.target.value))
                        }
                        value={content}
                    />
                    <label htmlFor='floatingContent'>Content</label>
                </div>

                {/*<Button value='Submit Post' type='submit' onToggle={onToggle()}/>*/}
                <input type='submit' value='Upload Post' className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default AddPost
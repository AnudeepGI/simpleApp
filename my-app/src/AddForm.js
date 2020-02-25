import React, { useState } from 'react';


function AddForm(props) { 
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleChangeContent = (e) => {
        console.log(e.target.value);
        setContent(e.target.value);
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content, title);
        props.addBooks(content, title);
        // setContent();
    }

    return(
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <h1 className="center blue-text">Add New Books:</h1>

                <input type="text" value={content} onChange={(e) => { handleChangeContent(e)}}/>
                <input type="text" value={title} onChange={(e) => { handleChangeTitle(e)}}/>
                <input type="submit" className="waves-effect waves-light btn" value="Add" />

            </form>
        </div>
    )
};


export default AddForm;
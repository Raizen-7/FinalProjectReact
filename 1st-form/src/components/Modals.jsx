import React from 'react';

const Modals = ({ close }) => {
    return (
        <>
            <div className="modal">
                <button onClick={close}>Close</button>
                <form className="task-form">
                    <div className="input-container">
                        <label htmlFor="title">Title</label>
                        <input
                            type = "text"
                            id = "title"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            name = "description"
                            id = "description"
                            cols = "30"
                            rows = "1.5"
                            >
                            </textarea>
                    </div>
                    <div className="input-container">
                        <label htmlFor="is-complete">Completed</label>
                        <input
                            type = "checkbox"
                            id = "is-completed"
                        />
                    </div>
                    <button>Sudmit</button>
                </form>
            </div>
            <div className='overlay' onClick={close}>
                    
            </div>
        </>
    );
};

export default Modals;
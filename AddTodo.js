import React, { useState } from 'react'

export const AddTodo = (props) => {

const [title, settitle] = useState('');
const [desc, setdesc] = useState('');

const formsubmit = (event) =>
{
    event.preventDefault();
    if(!title || !desc) 
    {
        alert("Title or Desc Not defined!");
    }
    else{
    props.addtodo(title,desc);
    settitle('');
    setdesc('');
}
}

  return (
    <div>
        <div className="col-lg-12">
            <div className="container-fuild">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>Add TO List</h2>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Add Title</label>
                                <input type="text" className="form-control" value={title}
                                onChange={(event=>{settitle(event.target.value)})} />
                            </div>
                            <div className='form-group'>
                                <label>Add description</label>
                                <input type="text" className="form-control" value={desc}
                                onChange={(event=>{setdesc(event.target.value)})} />
                                </div>
                                <div className="form-group">
                                    <button onClick={formsubmit} value="submit" className="btn btn-primary">
                                        ADD
                                    </button>
                                </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



import React, {useState } from 'react'
import axios from 'axios';
import {Api_endpint} from'../api-endpoints/Api_endpint';
import ClipLoader from 'react-spinners/ClipLoader';
const{SAVEPOST}=Api_endpint;
const Form=()=> {
    const[userId,setUserId]=useState('');
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[loading,setLoading]=useState(false);

	const userIdHandler = e => {
        setUserId(e.target.value);
	}
    const titleHandler  = e => {
        setTitle(e.target.value);
	}
    const bodyHandler = e => {
        setBody(e.target.value); 
	}

        const clearForm =()=>{
            setUserId("");
            setTitle("");
            setBody("");
        }
        const postdata={
            userID:userId,
            title:title,
            body:body
        }

        const override = `
        display: block;
        margin: 0 auto;
        border-color: red;
      `;
	 const submitHandler = (e)=> {
		e.preventDefault()
		console.log(postdata);
        setLoading(true);
		axios
			.post(SAVEPOST, postdata)
			.then(response => {
				console.log(response)
                setLoading(false);
			})
			.catch(error => {
				console.log(error)
                setLoading(false);
			})
	}

		return (
			<div>
                <h2>*****post data*****</h2>
				<form onSubmit={submitHandler}>
					<div>
                        <label>enter userId</label>
						<input
							type="text"
							name="userId"
							value={userId}
							onChange={userIdHandler}
						/>
					</div>
					<div>
                        <label>enter title</label>
						<input
							type="text"
							name="title"
							value={title}
							onChange={titleHandler}
						/>
					</div>
					<div>
                        <label>enter message</label>
						<input
							type="text"
							name="body"
							value={body}
							onChange={bodyHandler}
						/>
					</div>
					<button type="submit">Submit</button>
                    <button onClick={clearForm}>reset from </button>
                    {loading&& loading?<ClipLoader color='red' loading={loading} css={override} size={150} />:""}
				</form>
			</div>
		)
	}

export default Form;
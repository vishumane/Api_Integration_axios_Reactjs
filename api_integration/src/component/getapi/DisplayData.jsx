
import React, { useState,useEffect} from 'react';
import axios from 'axios';
import {Api_endpint} from'../api-endpoints/Api_endpint';
import ClipLoader from 'react-spinners/ClipLoader';
const  {GETPOST}=Api_endpint;

    const DisplayData=()=>{
        const[post,setPost]=useState([]);
        const[errorMsg,setErrorMesg]=useState('');
        const[loading,setLoading]=useState(false);

        useEffect(() => {
            const postData=()=>{
                setLoading(true);
                axios
                .get(GETPOST)
                .then(response => {
                    console.log(response)
                    // setLoading(false);
                    setPost(response.data);
                })
                .catch(error => {
                        console.log(error);
            setErrorMesg("Error retrieving data");
                        setLoading(false);
                })
            }
            postData();
        }, [])

        const override = `
        display: block;
        margin: 0 auto;
        border-color: red;
      `;
		return (
			<div>
				<h2>*******List of posts****</h2>
				{post.length &&loading
				? post.map(post => <div key={post.id}>{post.title}</div>)
                : <ClipLoader color='red' loading={loading} css={override} size={150} />}
               {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
export default DisplayData;
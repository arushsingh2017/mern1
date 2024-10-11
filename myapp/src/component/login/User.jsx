
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import {redirect } from 'react-router-dom';
import axios from 'axios';

// Import toastify css file
import "react-toastify/dist/ReactToastify.css"

const user_login = {
    maxWidth: '500px',
    border: '1px solid #ddd',
    margin: '0 auto',
    padding: '20px'
}


export default function User() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [userlist, setIserlist] = useState([])

    // const nav=useNavigate();

// user Handler 
  const userHandle=(e)=>{
    setUsername(e.target.value)

  }

//   Password Handler

const passwordHandle=(e)=>{
    setPassword(e.target.value)
}

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setIserlist(data)
        })
    })
    

    const ProceedLogin = (e) => {
        e.preventDefault()

       // console.log("data is", username, password)

        axios.post('https://reqres.in/api/login',{
            email: username,
            password: password
        }).then(result=>{
           // console.log(result)
            // alert("successful login");
            redirect('https://www.google.com/');

        })
        .catch(error=>{
           // console.log("Sorry try something eles")
           alert("some thi")
        })

        // if (validate()) {
        //     console.log("welcome")
        // }

        // fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
        //     return(res.json())
        //     .then((resp)=>{               
        //         // console.log(resp)
        //          console.log(resp.username)
        //     })
        // })

    }
 

    const validate = () => {
        let result 
        if (username === '' || username === null) {
            result = false;
            // alert("name")
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
            // alert("pass")
        }
        return result;
    }

  


    
    return (
       
        <div className="row">
         
<table className='table table-striped border'>
                <thead className='thead-dark'>
                <tr>
                    <th>User Name</th>
                    <th>User Mail</th>
                </tr>
                </thead>
                <tbody>
{
    userlist.map((itemss, i)=>{
        return(
            <>
                
                <tr>
                    <td>{itemss.username}</td>
                    <td>{itemss.email}</td>
                </tr>
               
            </>
        )
        return(<p>{itemss.name}</p>)
    })
}
</tbody>
                   
                   </table>   

        <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
            <form onSubmit={ProceedLogin}  className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>User Login</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input type='text' value={username} onChange={userHandle} className="form-control"></input>
                        </div>
                        <div className="form-group">                            
                            <input type="password" value={password} onChange={passwordHandle} className="form-control"></input>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Login</button> 
                        {/* <button onClick={testData}> click me </button> */}
                        {/* <Link className="btn btn-success" to={'/register'}>New User</Link> */}
                    </div>
                </div>
            </form>
        </div>

       

    </div>
);

}

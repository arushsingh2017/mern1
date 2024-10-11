import React, { useEffect, useState } from 'react'
export default function RegisterUserList() {
    const [uselist, setuserlist] = useState([])
    useEffect(() => {
        getProducts();
    }, [])
    
    const getProducts = async () => {
        let result = await fetch('http://localhost:4400/userlist')
        result = await result.json()
        setuserlist(result)
        console.log(result)
    }

    return (
        <div>
            <h1>This page is register user list pages</h1>
            {
                uselist.map((itemss, i) => {
                    return (
                        <>
                            <tr>
                                <td>{itemss.name}</td>
                                <td>{itemss.age}</td>
                            </tr>
                        </>
                    )
                   
                })
            }
        </div>
    )
}

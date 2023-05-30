import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Denied = () => {

    const [deniedPeople, setDeniedPeople] = useState([]);

    useEffect(() => {
        const getDeniedPeople = async () => {
            const { data } = await axios.get('/api/CandidateTracking/getDenied');
            setDeniedPeople(data);
        }
        getDeniedPeople();
    }, []);


    return (
        <div className="container" style={{ marginTop: 80 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Notes</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {deniedPeople.map(p => {
                        return <tr key={p.id }>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.phoneNumber}</td>
                            <td>{p.email}</td>
                            <td>{p.notes}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )


}

export default Denied;
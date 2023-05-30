import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Pending = () => {

    const [pendingPeople, setPendingPeople] = useState([]);

    useEffect(() => {
        const getPendingPeople = async () => {
            const { data } = await axios.get('/api/CandidateTracking/getpending');
            setPendingPeople(data);
        }

        getPendingPeople();
    }, []);


    return (
        <div className="container" style={{ marginTop: 80 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th />
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingPeople.map(p => {
                        return <tr key={p.id}>
                            <td><Link to={`/details/${p.id}`}>View Details</Link></td>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.phoneNumber}</td>
                            <td>{p.email}</td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </div>

        )

}

export default Pending;
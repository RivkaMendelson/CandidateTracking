import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Confirmed = () => {

    const [confirmedPeople, setConfirmedPeople] = useState([]);

    useEffect(() => {
        const getconfirmedPeople = async () => {
            const { data } = await axios.get('/api/CandidateTracking/getConfirmed');
            setConfirmedPeople(data);
        }

        getconfirmedPeople();
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
                    </tr>
                </thead>
                <tbody>
                    {confirmedPeople.map(p => {
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

export default Confirmed;
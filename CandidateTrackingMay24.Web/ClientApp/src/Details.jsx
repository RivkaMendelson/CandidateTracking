import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCandidateCount } from './CandidateCountContext';


const Details = () => {

    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const navigate = useNavigate();
    const { refreshCandidateCounts, setStatus} = useCandidateCount();

    useEffect(() => {
        const getById = async () => {
            const { data } = await axios.get(`/api/candidateTracking/getbyid?id=${id}`);
            setCandidate(data);
        }
        getById();
    }, []);

    const onConfirmClick = async () => {
        await axios.post('/api/CandidateTracking/update', { status: 'confirmed', id });
        await refreshCandidateCounts();
        navigate('/confirmed');
        setStatus('');

    }

    const onRefuseClick = async () => {
        await axios.post('/api/candidateTracking/update', { status: 'denied', id });
        navigate('/denied');
        setStatus('');

        await refreshCandidateCounts();

    }

    return(<>
    <div className="container" style={{ marginTop: 80 }}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {candidate.firstName} {candidate.lastName} </h4>
                    <h4>Email: {candidate.email}</h4>
                    <h4>Phone: {candidate.phoneNumber}</h4>
                    <h4>Status: {candidate.status}</h4>
                    <h4>Notes:</h4>
                    <p>{candidate.notes}</p>
                    <div>
                            <button className="btn btn-primary" onClick={onConfirmClick }>Confirm</button>
                            <button className="btn btn-danger" onClick={onRefuseClick }>Refuse</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

       </> )
}

export default Details;
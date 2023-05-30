import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CountContext = createContext();

const CandidateCountContext = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [deniedCount, setDeniedCount] = useState(0);


    const refreshCandidateCounts = async () => {
        const { pendingData } = await axios.get('/api/candidateTracking/getcounts?status=pending');
        setPendingCount(pendingData);

        const { deniedData } = await axios.get('/api/candidateTracking/getcounts?status=denied');
        setDeniedCount(deniedData);

        const { confirmedData } = await axios.get('/api/candidateTracking/getcounts?status=confirmed');
        setConfirmedCount(confirmedData);
    }

    useEffect(() => {
        refreshCandidateCounts();
    }, []);

    return (
        <CountContext.Provider value={pendingCount, confirmedCount, deniedCount, refreshCandidateCounts }>
            {children}
        </CountContext.Provider>
    )

}

const useCandidateCount = () => {
    return useContext(CountContext);
}

export { CandidateCountContext, useCandidateCount };

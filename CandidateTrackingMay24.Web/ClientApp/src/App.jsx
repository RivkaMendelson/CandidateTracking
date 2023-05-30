import React from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Confirmed from './Confirmed';
import Denied from './Denied';
import Details from './Details';
import { CandidateCountContext } from './CandidateCountContext';



const App = () => {
    return (
        <CandidateCountContext>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/addCandidate' element={<AddCandidate />} />
                <Route exact path='/pending' element={<Pending />} />
                <Route exact path='/confirmed' element={<Confirmed />} />
                <Route exact path='/denied' element={<Denied />} />
                <Route exact path='/details/:id' element={<Details />} />

            </Routes>
            </Layout>
        </CandidateCountContext>
    )
}

export default App;

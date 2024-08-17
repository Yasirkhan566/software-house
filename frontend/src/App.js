import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
// Import other components

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App;

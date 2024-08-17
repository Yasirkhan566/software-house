import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            console.log(res.data);  // Handle success, such as storing the token
        } catch (err) {
            console.error(err.response.data.msg);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-5">Admin Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;

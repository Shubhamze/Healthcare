import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Data:', { name, age, file });
        // Add your API call logic here
    };

    return (
        <div className="dashboard-container">
            <h2>Healthcare Dashboard</h2>
            <form onSubmit={handleSubmit} className="dashboard-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Dashboard;

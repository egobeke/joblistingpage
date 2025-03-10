import React from 'react';
import JobList from './components/JobList/JobList';
import './App.css'; 

function App() {
  return (
    <div className="app-container"> 
      <h1 className="app-title">Job Listing Page</h1>
      <JobList />
    </div>
  );
}

export default App;

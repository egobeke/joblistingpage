import React, { useState, useEffect } from 'react';

import JobCard from '../JobCard/JobCard';
import { Job } from '../types';
import jobsData from '../../data/jobs.json';
import styles from './styles.module.css';

const JobList: React.FC = () => {
    const [ jobs, setJobs] = useState<Job[]>([]);

    useEffect( () => {
        setJobs(jobsData);
    }, []);

    return (
      <div className="job-list">
        <h1 className={styles.availablejobs}>Available Jobs</h1>
        { jobs.length > 0 ? (
            <div className={styles.jobscontainer}>
                { jobs.map( job =>(
                    <JobCard key={job.id} job={job}/>
                ))}
            </div>  
        ) : (   
            <p className="no-jobs-message">No jobs available at the moment.</p>  
        )}
      </div>  
    );

};
export default JobList;
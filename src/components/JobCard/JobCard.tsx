import React, { useState } from "react";
import styles from "./styles.module.css";
import { Job } from "../types";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles["job-card"]}>
      <div className={styles.cardinfocontainer}>
        <div className={styles.header}>
          <h3>{job.title}</h3>
        </div>
        <div className={styles["job-card-info"]}>
          <h2>{job.company}</h2>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
        </div>
      </div>

      <button className={styles["details-button"]} onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className={styles["job-details"]}>
          {job.available === false ? (
            <p className={styles["not-available"]}>
              This job is currently <strong>Not Available</strong>.
            </p>
          ) : (
            <p>{job.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;

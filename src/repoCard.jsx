import React, { useState, useEffect } from "react";
import "./RepoCard.css"; // Import CSS file for styling

export default function RepoCard({ data }) {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    const fetchLanguages = async (repoName) => {
      try {
        // Construct the URL for fetching languages data for the repository
        const url = `https://api.github.com/repos/nikeshSaini/${repoName}/languages`;

        // Fetch languages data
        const response = await fetch(url);
        const data = await response.json();

        // Update the languages state with the fetched data
        setLanguages((prevLanguages) => ({
          ...prevLanguages,
          [repoName]: data,
        }));
      } catch (error) {
        console.error(
          `Error fetching languages data for repository ${repoName}:`,
          error
        );
      }
    };

    // Fetch languages data for each repository when the component mounts or data changes
    data.forEach((item) => {
      fetchLanguages(item.name);
    });
  }, [data]);

  return (
    <div className="repoContainer">
      {data.map((item) => (
        <div key={item.id} className="repoCard">
          <p className="repoName">{item.name}</p>
          <p className="repoDesc">{item.description} </p>
          {/* Display languages data */}
          <p className="languages">
            {Object.keys(languages[item.name] || {}).map((language, index) => (
              <p className="sLan" key={index}>{language}</p>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./RepoCard.css"; // Import CSS file for styling

export default function RepoCard({ data }) {
  const [languages, setLanguages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  
  const pageSize = 6;

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

    // Calculate the start index for the current page
    const startIndex = (currentPage - 1) * pageSize;
    // Slice the data array to get only the items for the current page
    const currentPageData = data.slice(startIndex, startIndex + pageSize);

    // Fetch languages data for repositories on the current page
    currentPageData.forEach((item) => {
      fetchLanguages(item.name);
    });
  }, [data, currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPrevPage=()=>{
    setCurrentPage ((prevPage) => prevPage -1);
  };

  return (
    <div className="mainContainer">
      <div className="repoContainer">
      {data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((item) => (
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
      <div className="pageList">
            <button onClick={goToPrevPage}>{"<<Prev"}</button>
            <button onClick={goToNextPage}>{"Next>>"}</button>
      </div>
    </div>
    
  );
}

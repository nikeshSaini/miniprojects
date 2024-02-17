import React, { useState } from 'react';
import GithubRes from './githubRes';
import RepoCard from './repoCard';
import "./githubUser.css"


export default function GithubSearch()  {
    const[data, setData] =useState({});
    const [username,setUsername] =useState("");
    const [lan, setlan] =useState("");
    const [showData, setShowData] =useState(false);
    const [loading, setLoading] = useState(false);
    const [inpError, setInputError] =useState("");

    let styles = {
        
        padding: '10px',
        width: '99vw',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'


    };
    const handleChange =(e)=>{
            setUsername(e.target.value);
    }

    const searchClick =async (event)=>{
        event.preventDefault();

        if (!username.trim()) {
            setInputError("username is required");
            setShowData(false);
            return;
        }

        

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const res2 = await fetch(`https://api.github.com/users/${username}/repos`);

            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}: No user found!`);
            }

            const result = await res.json();
            const lanRes = await res2.json();
            
            setData(result);
            setlan(lanRes);
            setInputError(inpError);
            setShowData(true);
            
        } catch (err) {
            setError(err.message);
        }finally {
            setLoading(false);
        }
        
        
    }
    
    
    return(
        
        <div style={styles}>
            <div className="gitSearch">
                <h3>GitHub User Search</h3>
                <div className='inputBar'>
                    
                    <input type="text" name="username" id="" placeholder='Enter username' value={username} onChange={handleChange}/>
                    <button type='submit' onClick={searchClick}>Search</button>
                </div>
                
                <div>{ (showData && !loading) ? 
                <>
                <GithubRes data ={data} />
                <RepoCard data ={lan}/>
                </> :(
                     <>
                      <p>{inpError}</p>
                    </>
                )}</div>
                
                
            </div>
           
            
        </div>
        
    );
}


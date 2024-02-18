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
        width: '100vw',

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
        //till here i have checked whether it'll fetch or not

        setLoading(true); //now we know that user is fething somedat it maybe error 

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const res2 = await fetch(`https://api.github.com/users/${username}/repos`);

            if (!res.ok) {
                const ans = await res.json();
                throw new Error(`${ans.message} ${res.status} : No user found!`);
            }

            const result = await res.json();
            const lanRes = await res2.json();
            
            setData(result);
            setlan(lanRes);
            setInputError("");
            setShowData(true);
            
        } catch (err) {
            setInputError(err.message);
        }finally {
            setLoading(false);
            
        }
        
        
    }
    
    
    return(
        
        <div style={styles}>
            <div className="gitSearch">
                <div className="navbar">
                <h3>GitHub User Search</h3>
                <div className='inputBar'>
                    
                    <input type="text" name="username" id="" placeholder='Enter username' value={username} onChange={handleChange}/>
                    <button type='submit' onClick={searchClick}>Search</button>
                </div>
                {loading && <p>Loading...</p>}
                { !loading && inpError ? <p>{inpError}</p>:null}
                </div>
                <div>{ (showData && !loading && !inpError) ? 
                <>
                <GithubRes data ={data} />
                <RepoCard data ={lan}/>
                </> :(
                     null
                )}</div>
                
                
            </div>
           
            
        </div>
        
    );
}


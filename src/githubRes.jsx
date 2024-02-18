import { useState } from "react";
import "./githubUser.css"



export default function GithubRes({data}){
    
    function goTo(){
        const url =data.html_url;
        window.open(url,"_blank");
    }
   
    return(
        <div className="main">
            <div  className="container">
                <div className="firstcontainer">
                <img id="dp" src={data.avatar_url} alt="User Avatar" width={200}  />
                </div>
                <div className="secondcontainer">
                    <p>{data.name}</p>
                    <p> {data.bio}</p>
                    <p>📍{data.location}</p>
                    <p>🕊️{data.twitter_username}</p>
                </div>
            </div>
            <p>🔗<a onClick={goTo}>{data.html_url}</a></p>
        </div>
    );
}
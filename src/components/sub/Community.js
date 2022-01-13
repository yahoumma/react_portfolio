import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Community() {
    let [posts, setPosts] = useState([]);

    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/qna.json`;

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            setPosts(json.data.data)
        })
    },[])

    return (
        <section className="content community">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/community">Community</NavLink></h1>
                </div>
            </div>
            <div className="inner">
            <h2>Answers to your questions</h2>
            <ul>
                {
                    posts.map((data,index)=>{
                        return (
                            <li key={index}>
                                
                                {data.title}
                                <span>{data.views}</span>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        </section>
    )
}

export default Community;
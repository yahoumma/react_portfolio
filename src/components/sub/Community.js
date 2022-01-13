import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Community() {
    let [posts, setPosts] = useState([]);

    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/project.json`;

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
                {
                    posts.map((data,index)=>{
                        return (
                            <article key={index}>
                                <img src={data.img} />
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Community;
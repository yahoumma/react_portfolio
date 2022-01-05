import axios from "axios";
import { useEffect, useState } from "react";

function Project(){
    let [posts, setPosts] = useState([]);
    let len = posts.lenth;
    useEffect(()=>{
        axios
        .get("./dbs/project.json")
        .then(data=>{
            setPosts(data.data.data);
        })
    })
    return(
        <section className="content project">
            <h1><a href="/project">Project</a></h1>
            {
                posts.map((data,index)=>{
                    return(
                        <article key={index}>
                                <section>{len}</section>
                                <section>{data.img}</section>
                                <section>
                                    <h2>{data.title}</h2>
                                    <p>{data.content}</p>
                                    <span>{data.directory}</span>
                                </section>
                        </article>
                        )
                })
            }
        </section>
    )
}

export default Project;
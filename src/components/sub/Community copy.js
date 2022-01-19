import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Community() {
    let [posts, setPosts] = useState([]);
    let [lists, setLists] = useState([])

    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/qna.json`;
    const url2 = `${path}/dbs/faq.json`;

    useEffect(() => {
        axios
        .get(url)
        .then(json => {
            setPosts(json.data.data)
        })
        axios
        .get(url2)
        .then(json => {
            setLists(json.data.list)
        })
    }, [])

    return (
        <section className="content community">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/community">Community</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <h2>frequently asked question</h2>
                <div className="faq">
                    
                    {
                        posts.map((data, index) => {
                            return (
                                <details className="question" key={index}>
                                    <summary className="title">{data.title}</summary>
                                    <div className="answer" >
                                        {data.content}
                                    </div>
                                </details>
                            )
                        })
                    }
                </div>
                <h2>Question and Answer</h2>
                <div className="qna">
                    
                    {
                        lists.map((list, index) => {
                            return (
                                <article key={index}>
                                    <h1>{list.title}</h1>
                                    <span>{list.writer}</span>
                                    <em>{list.date}</em>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Community;
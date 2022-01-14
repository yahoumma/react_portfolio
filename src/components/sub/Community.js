import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Community() {
    const [toggle, setToggle] = useState(false);
    const qna = useRef(null);
    const answer = document.querySelector(".answer");
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
            <div className="qna">
                {
                    posts.map((data,index)=>{
                        return (
                            <div className="qnaMenu" key={index} ref={qna}>
                                <div className="title">
                                    {data.title}
                                    {
                                        toggle ?
                                        <span onClick={() => {setToggle(!toggle);
                                            answer.classList.add("on");
                                        }}><i class="fas fa-chevron-down"></i></span>
                                        :
                                        <span onClick={() => {setToggle(!toggle);
                                            answer.classList.remove("on");
                                        }}><i class="fas fa-chevron-up"></i></span>
                                    }
                                </div>
                                <div className="answer" >
                                {data.content}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </section>
    )
}

export default Community;
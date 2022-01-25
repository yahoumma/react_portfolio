import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Youtube() {
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);

    const youtube = useSelector(state=>state);
    const vidData = youtube.youtubeReducer.youtube;  

    return (
        <main className="content youtube">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/youtube">Youtube</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <section class="list">
                    {
                        vidData.map((item, index)=>{
                            let tit = item.snippet.title;
                            let tit_len = tit.length;
                            let desc = item.snippet.description;
                            let desc_len = desc.length;
                            let pubAt = item.snippet.publishedAt;
                            let pubArr = pubAt.split('-');
                            return (
                                <article key={index}>
                                    <div className="pic" onClick={() => {
                                        setIsPop(true);
                                        setIndex(index);
                                    }}>
                                        <img src={item.snippet.thumbnails.medium.url} />
                                        <div className="share">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i class="fas fa-share-alt"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-globe-americas"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="txt">
                                        <div className="date">
                                            <span className="mm">{pubArr[1]}</span>
                                            <span className="yy">{pubArr[0]}</span>
                                        </div>

                                        <div className='txtBox'>
                                            <h2>{(tit_len > 30) ? tit = tit.substr(0, 30) + "..." : tit}</h2>
                                            <p>{(desc_len > 150) ? desc = desc.substr(0, 150) + "..." : desc}</p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                    <div className="btnMore">READ MORE</div>
                </section>
                {isPop ? <Pop /> : null}
                <section class="category">
                {/*
                        <form name="searchBox" className='searchBox'>
                            <input type="search" name="" id="s" />
                            <button type="submit" id="searchBtn"><i class="fas fa-search"></i><span className='h'>검색</span></button>
                        </form>
                */}
                    <article className='cate'>
                        <h3>Categoties</h3>
                        <ul>
                            {
                            vidData.map((item, index)=>{
                                let tit = item.snippet.title;
                                let tit_len = tit.length;
                                return(
                                    <li key={index}>
                                        <a href="">{(tit_len > 25) ? tit = tit.substr(0, 25) + "..." : tit}</a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </article>
                    <article className='recentPosts' key={index}>
                        <h3>Recent Posts</h3>
                        {
                            vidData.map((item, index) => {
                                let tit = item.snippet.title;
                                let tit_len = tit.length;
                                return (
                                    <div className='post' key={index}>
                                        <img src={item.snippet.thumbnails.medium.url} />
                                        <div>
                                            <p>{(tit_len > 25) ? tit = tit.substr(0, 25) + "..." : tit}</p>
                                            <span>{item.snippet.commentCount} <i class="fas fa-comment-dots"></i></span>
                                            <span>{item.likeCount} <i class="fas fa-heart"></i></span>
                                        </div>
                                    </div>
                                )

                            })
                        }


                    </article>
                    <article className='tags'>
                        <h3>Tags List</h3>
                        <span>Technology</span>
                        <span>Web Design</span>
                        <span>App</span>
                        <span>Trend</span>
                        <span>UX / UI</span>
                        <span>Web</span>
                    </article>
                </section>

            </div>
        </main>
    )
    function Pop() {
        return (
            <aside className="pop">
                <iframe
                    src={"https://www.youtube.com/embed/"+vidData[index].snippet.resourceId.videoId}  width='100%' height='100%' allowFullScreen
                ></iframe>
                <span onClick={() => {
                    setIsPop(false);
                }}>close</span>
            </aside>
        )
    }
}

export default Youtube;
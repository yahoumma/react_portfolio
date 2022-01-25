import React from 'react';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'


function Community() {
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/faq.json`;
    let [lists, setLists] = useState([]);
    const faqBox = useRef(null);
    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                setLists(json.data.data)
            })

    }, [])

    const frame = useRef(null);
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);

    const getLocalItems = () => {
        let data = localStorage.getItem('posts');

        if (data) {
            return JSON.parse(data);
        } else {
            return [
                { title: 'we caught up with the new mom to chat about why she started on Unsplash' ,content: 'We caught up with contributor Toa Heftiba on how it feels to have reached 2 billion views on Unsplash.'},
                { title: 'Tell us a little about why and how you started submitting to Unsplash?', content: 'My image got used within the Swiss Covid app' },
                { title: 'How do you feel your photography has grown since you started out on Unsplash?', content: 'We caught up with contributor Toa Heftiba on how it feels to have reached 2 billion views on Unsplash.' },
                { title: 'What has been your most memorable experience on Unsplash?', content: 'n the third installment of our “Behind 1 Billion” mini series' }
            ];
        }
    }
    const [posts, setPosts] = useState(getLocalItems);


    const createPost = () => {
        if (!input.current.value || !textarea.current.value) {
            alert('제목과 본문을 입력하세요');
            return;
        }
        setPosts([
            {
                title: input.current.value,
                content: textarea.current.value
            }
            , ...posts
        ]);

        input.current.value = '';
        textarea.current.value = '';
    }

    const deletePost = index => {
        setPosts(
            posts.filter((_, postIndex) => postIndex !== index)
        )
    }

    const enableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = true;
                return post;
            })
        )
    }

    const disableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = false;
                return post;
            })
        )
    }

    const updatePost = index => {
        if (!updateInput.current.value || !updateTextarea.current.value) {
            alert('수정할 제목과 본문을 모두 입력하세요.');
            return;
        }
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) {
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
        frame.current.classList.add('on');
    }, [posts]);

    return (
        <main className="content community" ref={frame}>
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/community">Community</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <h1>FAQ</h1>
                <h2>Frequently Asked Qusetions</h2>
                <section className='faq' ref={faqBox}>
                    <article>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto dolor beatae, nemo eveniet impedit ad ipsam exercitationem facilis ipsum nostrum vitae consectetur illo eum odio, sapiente quam ipsa molestiae!</p>
                    </article>
                    <article>
                        {
                            lists.map((data, index) => {
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
                    </article>
                </section>

                <h1>BOARD</h1>
                <h2>Feel free to ask me questions</h2>
                <section className='inputBox'>
                    <input type="text"
                        placeholder='제목을 입력하세요' ref={input} />

                    <textarea name="" id="" resize="" ref={textarea}>
                    </textarea>

                    <div className='inputBtns'>
                        <button onClick={() => {
                            input.current.value = '';
                            textarea.current.value = '';
                        }}>cancel</button>
                        <button onClick={createPost}>create</button>
                    </div>
                </section>
                <section className="showBox" ref={showBox}>
                    {
                        posts.map((post, index) => {
                            return (
                                <article key={index}>
                                    {
                                        post.enableUpdate
                                            ?
                                            // 수정모드
                                            <>
                                                <div className="post">
                                                    <input type="text" defaultValue={post.title} ref={updateInput} />
                                                    <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => updatePost(index)}>WRITE</li>
                                                    <li onClick={() => disableUpdate(index)}>CANCEL</li>
                                                </ul>
                                            </>
                                            :
                                            // 출력모드
                                            <>
                                                <div className="post">
                                                    <h2>{post.title}</h2>
                                                    <p>{post.content}</p>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => enableUpdate(index)}>MODIFY</li>
                                                    <li onClick={() => deletePost(index)}>DELETE</li>
                                                </ul>
                                            </>
                                    }
                                </article>
                            )
                        })
                    }
                </section>
            </div>

        </main>
    )
}

export default Community;

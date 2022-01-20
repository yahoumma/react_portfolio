import { useEffect, useState } from "react";

function News() {

  const getLocalItems = () => {
    let data = localStorage.getItem('posts');

    if (data) {
      let result = JSON.parse(data);
      result = result.splice(0, 6);
      return result;
    } else {
      return [
        { title: 'Hello0', content: 'Here comes description in detail.' },
        { title: 'Hello1', content: 'Here comes description in detail.' },
        { title: 'Hello2', content: 'Here comes description in detail.' },
        { title: 'Hello3', content: 'Here comes description in detail.' }
      ];
    }
  }
  const [posts] = useState(getLocalItems);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts])


  return (
    <figure id="news" className="content news myScroll">
      <div className="inner">
        <h1>RECENT NEWS</h1>

        <div className="txtBox">
          {
            posts.map((post, index) => {
              return (
                <article key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </figure>
  )
}

export default News;
import axios from "axios";
import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

const body = document.querySelector("body");

function Gallery(){
  let [items, setItems] = useState([]);
  let [isPop, setIsPop] = useState(false);
  //썸네일 클릭 이벤트 발생시 해당 순번값을 관리하는 state생성
  let [index, setIndex] = useState(0);


  const api_key = "e7ed3b39fe112d7e93d03c19325305e0";
  const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=100&format=json&nojsoncallback=1`;
  const url2 = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=100&format=json&nojsoncallback=1`;

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        console.log(json);
        setItems(json.data.photos.photo);
      })
      axios
      .get(url2)
      .then(json=>{
        console.log(json);
        setItems(json.data.photos.photo);
      })
  },[]);

  return (
    <main className="content gallery">
       <div className="subTitle">
            <div className="inner">
                <h1><NavLink to="/gallery">Gallery</NavLink></h1>
            </div>
        </div>
      <div className="inner">
           <ul className="galleryTab">
              <li className="on"><a href="#">ALL ITEMS</a></li>
              <li onClick={(e)=>{
                e.curren.target.classList.add("on");
              }}><a >WEB DESIGN</a></li>
              <li><a href="#">UI/UX</a></li>
              <li><a href="#">BRANDING</a></li>
            </ul>
        <section className="list1">
          {            
            items.map((item,index)=>{
              const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

              return (
                <article key={index}>
                  <div className="inner">
                    <div className="pic">
                      <img src={imgSrc} />
                      <a onClick={()=>{
                      setIsPop(true);
                      //버튼 클릭시 index state변경
                      setIndex(index);

                    }}><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </article>
              )              
            })
          }
        </section>
        <section className="list2">
          {            
            items.map((item,index)=>{
              const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

              return (
                <article key={index}>
                  <div className="inner">
                    <div className="pic">
                      <img src={imgSrc} />
                      <a onClick={()=>{
                      setIsPop(true);
                      //버튼 클릭시 index state변경
                      setIndex(index);

                    }}><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </article>
              )              
            })
          }
        </section>
        
      </div>
      { isPop ? <Pop /> : null }
      
    </main>    
  )

  function Pop(){
    //컴포넌트 상단에 있는 items, index스테이트값을 활용해서
    //items라는 배열에서 index번째의 객체값의 키값을 사용해서 이미지 url생성
    const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

    useEffect(()=>{
      console.log("pop 생성")
      body.style.overflow = "hidden";

      return ()=>{
        console.log("pop 제거");
        body.style.overflow = "auto";
      }
    },[]);

    return (
      <aside className="pop">
        {/* 해당 이미지 url적용 */}
        <img src={imgSrc} />
        {/* items의 index번째 객체 안에 있는 텍스트 */}
        <p>{items[index].title}</p>
        <span onClick={()=>{
          setIsPop(false);
        }}>Close</span>
      </aside>
    )
  }
}

export default Gallery;
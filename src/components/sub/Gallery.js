import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Gallery() {
  const baseURL = "https://www.flickr.com/services/rest/?";
  const method1 = "flickr.interestingness.getList";
  const key = "a7b1037e058bdadbabc8162a4faf09d7";
  const count = 5;
  const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;

  let [items, setItems] = useState([]);
  let list = useRef(null);

  useEffect(getFlickr, []);


  async function getFlickr() {
    await axios
      .get(url)
      .then(json => setItems(json.data.photos.photo))

    list.current.classList.add("on");
    console.log("test");
  }

  return (
    <section className="content gallery">
      <div className="inner">
        <div className="subTitle">
          <div className="inner">
            <h1><NavLink to="/gallery">Gallery</NavLink></h1>
          </div>
        </div>
        <div className="inner">
          <ul className="list" ref={list}>
            {
              items.map((item, index) => {
                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
                return (
                  <li key={index}>
                    <div className="pic">
                      <img src={imgSrc} />
                    </div>

                    <p>{item.title}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
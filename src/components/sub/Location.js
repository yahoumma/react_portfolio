import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Location() {
    const { kakao } = window;
    const container = useRef(null);
    const btnBranch = useRef(null);
    const [toggle, setToggle] = useState(false);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);
    const info = [
        {
            title: "본점",
            latlng: new kakao.maps.LatLng(37.48771318663092, 126.75344867275281),
            imgSrc: process.env.PUBLIC_URL + "/img/marker1.png",
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점1",
            latlng: new kakao.maps.LatLng(37.507099899564444, 126.75639338893572),
            imgSrc: process.env.PUBLIC_URL + "/img/marker2.png",
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점2",
            latlng: new kakao.maps.LatLng(35.17422705914147, 129.10766665201712),
            imgSrc: process.env.PUBLIC_URL + "/img/marker3.png",
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        }
    ];

    const [mapInfo, setMapInfo] = useState(info);

    useEffect(() => {
        const options = {
            center: mapInfo[index].latlng,
            level: 3
        }
        const map = new kakao.maps.Map(container.current, options);
        setMap(map);

        new kakao.maps.Marker({
            map: map,
            position: mapInfo[index].latlng,
            title: mapInfo[index].title,
            image: new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        });

        map.setCenter(mapInfo[index].latlng);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        map.setZoomable(true);
        map.setDraggable(true);

        //모든 버튼 초기화한 뒤, index state번째의 li요소만 활성화
        for (const btn of btnBranch.current.children) btn.classList.remove('on');
        btnBranch.current.children[index].classList.add('on');


        const mapSet = () => map.setCenter(mapInfo[index].latlng);
        window.addEventListener('resize', mapSet);

        return () => window.removeEventListener('resize', mapSet);

    }, [index]);


    return (

        <section className="content location">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/location">Location</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <h1> CONTACT US</h1>
                <h2>Get it touch and let us know how we can help</h2>
                <div className="contactBox">
                    {/* kakao map*/}
                    <div className="mapArea">
                        <div id="map" ref={container}></div>
                        <ul className="traffic">
                            {
                                toggle ?
                                    <li onClick={() => {
                                        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle)
                                    }}>Traffic On</li>
                                    :
                                    <li onClick={() => {
                                        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle)
                                    }}>Traffic Off</li>
                            }

                        </ul>
                        <ul className="branch" ref={btnBranch}>
                            <li onClick={() => {
                                setIndex(0);
                            }}>본점</li>

                            <li onClick={() => {
                                setIndex(1)
                            }}>지점1</li>

                            <li onClick={() => {
                                setIndex(2)
                            }}>지점2</li>
                        </ul>
                    </div>
                    <div className="connect">
                        <div className="sns">
                            <h3>Connect</h3>
                            <ul>
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
                        <div className="emailForm">
                            <h3>Send &amp; Request</h3>
                            <form>
                                <fieldset>
                                    <legend className="h">email send &amp; request form</legend>
                                    <table>
                                        <caption className="h">email form</caption>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="text" id="name" name="name" placeholder="Your Name" />
                                                </td>
                                                <td>
                                                    <input type="email" id="email" name="email" placeholder="Your Email" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <textarea name="request" id="request" placeholder="Your Request"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <input type="submit" value="SEND" className="btnSend" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;
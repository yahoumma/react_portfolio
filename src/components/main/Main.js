import Header from '../common/Header.js';
import Visual from './Visual.js';
import About from './About.js';
import Contact from './Contact.js';
import Count from './Count.js';
import Our from './Our.js';
import Btns from './Btns.js';
import News from './News.js';
import Info from './Info.js';
import Anime from '../../class/anime.js';
import { useEffect, useState, useRef } from 'react';


function Main(){
  
  const main = useRef(null);   
  let pos = useRef([]);  
  const [index, setIndex] = useState(0);  

  const getIndex = index=>{
    setIndex(index);
  }

  const handleResize = ()=>{   
    const secs = main.current.querySelectorAll('.myScroll');
    let arr = [];
    for(let sec of secs) arr.push(sec.offsetTop);
    pos.current = arr;   
  }
 
  const handleScroll = ()=>{   
    let scroll = window.scrollY;   
    const btns = main.current.querySelectorAll('#btns li');   
   
    pos.current.map((pos,index)=>{
      if(scroll>=pos){
        for(const btn of btns) btn.classList.remove('on');
        btns[index].classList.add('on');    
      }
    })   
   
  }

  useEffect(()=>{     
    handleResize();    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    new Anime(window,{
      prop: 'scroll',
      value: pos.current[index],
      duration: 500
    })

    return ()=>{  
      window.removeEventListener('resize', handleResize);  
      window.removeEventListener('scroll', handleScroll);
    }
  },[index]);
  
  return (
    <div id='mainWrap' ref={main}>
      <Header type={'main'} />
      <Visual />
      <Our />
      <About />
      <Count />
      <News />
      <Info />
      <Contact />
      <Btns getIndex={getIndex} />
    </div>
  )
}

export default Main;
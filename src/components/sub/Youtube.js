import { useEffect, useState } from "react";

function Youtube(){

    useEffect(()=>{

    })

    let [list, setList] = useState([]);
    return(
        <section className="content youtube">
            <div className="inner">
                <h1>
                    <a href="/youtube">Youtube</a>
                </h1>
            </div>
            
        </section>
    )
}

export default Youtube;
import "./Technology.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Technology = () => {
    const [data, setData] = useState([]);
    const [selectTech, setSelectTech] = useState([]);
    const [each, setEach] = useState([]);
    const [eachData, setEachData] = useState([]);
    // for showing loading state
    const [isLoading, setIsLoading] = useState(true);
    // for showing active state
    const [activeItem, setActiveItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch("/public/data/data.json")
                .then(res => res.json())
                .then(data => { setData(data?.technology); setSelectTech(data?.technology?.map(each => each?.name)) })
        }
        fetchData();
        if (data) {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        setEach(selectTech[0]);
        setActiveItem(selectTech[0]);
    }, [selectTech])

    useEffect(() => {
        setEachData(data.find(e => e?.name?.toUpperCase() === (each?.toUpperCase())))
    }, [each, data])

    // for indicate active item
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    // console.log(data);
    let count = 0;

    return (
        <div className="technology">
            {isLoading ? <p id="loading">Loading... <span><FontAwesomeIcon icon={faSpinner} /></span></p> : <>
                <div className="title">
                    <p>03 SPACE LAUNCH 101</p>
                </div>
                <div className="technology-info">

                    <div className="technology-img">
                        {/* only for desktop */}
                        <img id="desktopImg" src={eachData?.images?.portrait
                        } alt="" />

                        {/* for tablet and mobile devices */}
                        <img id="mob-tabImg" src={eachData?.images?.landscape
                        } alt="" />
                    </div>

                    <div className="technology-details">
                        <div className="details">
                            <h2>THE TERMINOLOGY…</h2>
                            <h1>{eachData?.name}</h1>
                            <p>{eachData?.description}</p>
                        </div>
                    </div>

                    <div className="technology-select">
                        {
                            selectTech.map((each) => <p onClick={() => { setEach(each?.toUpperCase()); handleItemClick(each) }} key={each} className={activeItem === each ? "active" : "not-active"}>{count = count + 1}</p>)
                        }
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Technology;
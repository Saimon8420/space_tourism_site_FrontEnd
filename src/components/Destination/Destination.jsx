import { useEffect, useState } from "react";
import "./Destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { destinations } from "../../data/data";

import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

const Destination = () => {
    const [data, setData] = useState([]);
    const [selectDest, setSelectDest] = useState([]);
    const [each, setEach] = useState([]);
    const [eachData, setEachData] = useState([]);
    // for showing loading state
    const [isLoading, setIsLoading] = useState(true);
    // for showing active state
    const [activeItem, setActiveItem] = useState([]);

    useEffect(() => {
        if (destinations?.length !== 0) {
            setData(destinations);
            setSelectDest(destinations?.map(each => each?.name))
        }
        if (data) {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        if (selectDest?.length !== 0) {
            setEach(selectDest[0]);
            setActiveItem(selectDest[0]);
        }
    }, [selectDest])

    useEffect(() => {
        if (each?.length !== 0 && data?.length !== 0) {
            setEachData(data.find(e => e?.name?.toUpperCase() === (each?.toUpperCase())))
        }
    }, [each, data])

    // for indicate active item
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="destination">
            {isLoading ? <p id="loading">Loading... <span><FontAwesomeIcon icon={faSpinner} /></span></p> : <>
                <div className="title">
                    <p>01 Pick your destination</p>
                </div>
                <div className="destination-info">

                    <div className="destination-img">
                        {
                            eachData?.name === "Moon" && <img src={moon} alt="" />
                        }
                        {
                            eachData?.name === "Mars" && <img src={mars} alt="" />
                        }
                        {
                            eachData?.name === "Europa" && <img src={europa} alt="" />
                        }
                        {
                            eachData?.name === "Titan" && <img src={titan} alt="" />
                        }

                    </div>

                    <div className="dest-details">
                        <div className="select">
                            {
                                selectDest.map((each) => <p onClick={(e) => { setEach(e.target?.innerText?.toUpperCase()); handleItemClick(each) }} key={each} className={activeItem === each ? "des-active" : "des-not-active"}>{each}</p>)
                            }
                        </div>
                        <div className="details">
                            <h1>{eachData?.name?.toUpperCase()}</h1>
                            <p>{eachData?.description}</p>
                            <p className="details-v-bar"></p>
                            <div className="distance-info">
                                <div>
                                    <p>AVG. DISTANCE</p>
                                    <h2>{eachData?.distance}</h2>
                                </div>
                                <div>
                                    <p>EST. TRAVEL TIME</p>
                                    <h2>{eachData?.travel}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Destination;

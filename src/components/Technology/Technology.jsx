import "./Technology.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { technology } from "../../data/data";

import launch_vehicle_landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import space_capsule_landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceport_landscape from "../../assets/technology/image-spaceport-landscape.jpg";

import launch_vehicle_portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import space_capsule_portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceport_portrait from "../../assets/technology/image-spaceport-portrait.jpg";
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
        if (technology?.length !== 0) {
            setData(technology);
            setSelectTech(technology?.map(each => each?.name))
        }
        if (data) {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        if (selectTech?.length !== 0) {
            setEach(selectTech[0]);
            setActiveItem(selectTech[0]);
        }
    }, [selectTech])

    useEffect(() => {
        if (each?.length !== 0 && data?.length !== 0) {
            setEachData(data.find(e => e?.name?.toUpperCase() === (each?.toUpperCase())))
        }

    }, [each, data])

    // for indicate active item
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

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
                        {
                            eachData?.name === "Launch vehicle" && <img className="desktopImg" src={launch_vehicle_portrait} alt="" />
                        }
                        {
                            eachData?.name === "Spaceport" && <img className="desktopImg" src={space_capsule_portrait} alt="" />
                        }

                        {
                            eachData?.name === "Space capsule" && <img className="desktopImg" src={spaceport_portrait} alt="" />
                        }

                        {/* for tablet and mobile devices */}

                        {
                            eachData?.name === "Launch vehicle" && <img className="mob-tabImg" src={launch_vehicle_landscape} alt="" />
                        }
                        {
                            eachData?.name === "Spaceport" && <img className="mob-tabImg" src={space_capsule_landscape} alt="" />
                        }
                        {
                            eachData?.name === "Space capsule" && < img className="mob-tabImg" src={spaceport_landscape} alt="" />
                        }
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
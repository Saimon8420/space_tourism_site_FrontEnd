import { useEffect, useState } from "react";
import './Crew.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { crew } from "../../data/data";
const Crew = () => {
    const [data, setData] = useState([]);
    const [selectCrew, setSelectCrew] = useState([]);
    const [each, setEach] = useState([]);
    const [eachData, setEachData] = useState([]);
    // for showing loading state
    const [isLoading, setIsLoading] = useState(true);
    // for showing active state
    const [activeItem, setActiveItem] = useState([]);

    useEffect(() => {
        if (crew?.length !== 0) {
            setData(crew);
            setSelectCrew(crew?.map(each => each?.name))
        }
        if (data) {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        if (selectCrew?.length !== 0) {
            setEach(selectCrew[0]);
            setActiveItem(selectCrew[0]);
        }
    }, [selectCrew])

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
        <div className="crew">
            {isLoading ? <p id="loading">Loading... <span><FontAwesomeIcon icon={faSpinner} /></span></p> : <>
                <div className="title">
                    <p>02 Meet your crew</p>
                </div>
                <div className="crew-info">

                    <div className="crew-img">
                        <img src={eachData?.images?.png} alt="" />
                        <p id="img-divider"></p>
                    </div>

                    <div className="crew-details">
                        <div className="details">
                            <h2>{eachData?.role?.toUpperCase()}</h2>
                            <h1>{eachData?.name}</h1>
                            <p>{eachData?.bio}</p>
                        </div>

                        <div className="crew-select">
                            {
                                selectCrew.map((each) => <p onClick={() => { setEach(each?.toUpperCase()); handleItemClick(each) }} key={each} className={activeItem === each ? "active" : "not-active"}></p>)
                            }
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Crew;
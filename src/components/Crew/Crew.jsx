import { useEffect, useState } from "react";
import './Crew.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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
        async function fetchData() {
            await fetch("/src/assets/data/data.json")
                .then(res => res.json())
                .then(data => { setData(data?.crew); setSelectCrew(data?.crew?.map(each => each?.name)) })
        }
        fetchData();
        if (data) {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        setEach(selectCrew[0]);
        setActiveItem(selectCrew[0]);
    }, [selectCrew])

    useEffect(() => {
        setEachData(data.find(e => e?.name?.toUpperCase() === (each?.toUpperCase())))
    }, [each, data])

    // for indicate active item
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    // console.log(data);

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
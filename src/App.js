import { useState, useRef } from "react";

import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

import HomePage from "./components/HomePage";
import Card from "./components/Card";
import CardLoc from "./components/CardLoc";
import CharacterInfo from "./components/CharacterInfo";
import LocationInfo from "./components/LocationInfo";
import ScrollToTop from "./components/ScrollToTop";
import Pagination from "./components/Pagination";

const getParent = (element, className) => {
    if (element.className.includes(className)) return element;
    return getParent(element.parentElement, className);
};

const App = () => {
    const [isShown, setIsShown] = useState(false);
    const [isLocShown, setIsLocShown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [info, setInfo] = useState(false);
    const [infoLoc, setInfoLoc] = useState(false);
    const ref = useRef(null);
    const appref = useRef(null);

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(document.documentElement.scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    const infoSetter = (target, id, cb) =>
        cb(() => parseInt(getParent(target, id).dataset.id, 10));

    const handleInfo = (e) => infoSetter(e.target, "card", setInfo);
    const handleInfoLoc = (e) => infoSetter(e.target, "cardLoc", setInfoLoc);

    const handlePage = (num) => {
        setCurrentPage(Math.max(1, num));
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handlePageNum = (pageNum) => handlePage(pageNum);
    const handlePrev = (pageNum) => handlePage(pageNum - 1);
    const handleNext = (pageNum) => handlePage(pageNum + 1);

    let page1 = 1;
    let page2 = 2;
    let page3 = 3;

    const handleDisplay = (show, cb) => {
        show((current) => !current);
        cb(false);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    const handleCharacters = () => handleDisplay(setIsShown, setIsLocShown);
    const handleLocation = () => handleDisplay(setIsLocShown, setIsShown);

    const characters = useCharacters(currentPage);
    const locations = useLocations(currentPage);

    document.body.addEventListener("keyup", (e) => {
        if (e.code === "Escape") {
            setInfo(null);
            setInfoLoc(null);
        }
    });

    return (
        <div className="App" ref={appref}>
            <HomePage
                handleCharacters={handleCharacters}
                handleLocation={handleLocation}
            />
            <ScrollToTop scrollToTop={scrollToTop} visible={visible} />
            {isShown && (
                <>
                    <div className="cardContainer" ref={ref}>
                        {characters.results?.map((character) => {
                            return (
                                <>
                                    {info === character.id && (
                                        <CharacterInfo
                                            key={character.id + 387876876876}
                                            character={character}
                                        />
                                    )}
                                    <Card
                                        handleInfo={handleInfo}
                                        key={character.id}
                                        character={character}
                                    />
                                </>
                            );
                        })}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handlePageNum={handlePageNum}
                        page1={page1}
                        page2={page2}
                        page3={page3}
                    />
                </>
            )}
            {isLocShown && (
                <>
                    <div className="location" ref={ref}>
                        {locations.results?.map((location) => {
                            return (
                                <div key={location.id}>
                                    {infoLoc === location.id && (
                                        <LocationInfo location={location} />
                                    )}
                                    <CardLoc
                                        location={location}
                                        handleInfoLoc={handleInfoLoc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handlePageNum={handlePageNum}
                        page1={page1}
                        page2={page2}
                        page3={page3}
                    />
                </>
            )}
        </div>
    );
};

export default App;

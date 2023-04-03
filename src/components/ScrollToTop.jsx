const ScrollToTop = ({ scrollToTop, visible }) => (
    <button
        className="scrollToTop"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}></button>
);

export default ScrollToTop;

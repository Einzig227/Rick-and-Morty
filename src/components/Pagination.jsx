const Pagination = ({
    currentPage,
    handlePrev,
    handleNext,
    handlePageNum,
    page1,
    page2,
    page3,
}) => (
    <div className="pages">
        {currentPage > 1 ? (
            <button
                className="pageNumTest"
                onClick={() => handlePrev(currentPage)}>
                Prev
            </button>
        ) : null}
        <button className="pageNumTest" onClick={() => handlePageNum(page1)}>
            {page1}
        </button>
        <button className="pageNumTest" onClick={() => handlePageNum(page2)}>
            {page2}
        </button>
        <button className="pageNumTest" onClick={() => handlePageNum(page3)}>
            {page3}
        </button>
        {currentPage > 4 ? <button className="pageNumTest">...</button> : null}
        {currentPage > 3 ? (
            <button className="pageNumTest">{currentPage}</button>
        ) : null}
        {currentPage < 41 ? <button className="pageNumTest">...</button> : null}
        {currentPage < 42 ? (
            <button className="pageNumTest" onClick={() => handlePageNum(42)}>
                42
            </button>
        ) : null}
        {currentPage < 42 ? (
            <button
                className="pageNumTest"
                onClick={() => {
                    handleNext(currentPage);
                }}>
                Next
            </button>
        ) : null}
    </div>
);

export default Pagination;

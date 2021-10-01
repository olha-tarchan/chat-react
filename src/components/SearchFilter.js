import React, {useContext, useRef} from 'react';
import Context from "../context";

const SearchFilter = () => {
    const {search, handlerSearch } = useContext(Context);
    const inputSearch = useRef("");
    const getSearch = () => {
        handlerSearch(inputSearch.current.value)
    }
    return (
        <div className="search_box">
            <div className="input_wrapper">
                <div className="search_box_icon">&#x260C;</div>
                <input
                    ref={inputSearch}
                    value={search}
                    onChange={getSearch}
                    placeholder="Search or start new chat" type="text" />
            </div>
        </div>
    );
};

export default SearchFilter;
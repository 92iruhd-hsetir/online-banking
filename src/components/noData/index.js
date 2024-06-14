import React from "react";

const NoData = ({message}) => {
    return <>
        <div className="nodata_container">
            <span>{message}</span>
        </div>
    </>
}

export default NoData;
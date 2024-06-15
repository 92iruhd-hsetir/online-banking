import React from "react";

const TopSection = ({ text, showBtn, btnTxt, clickHandler }) => {
    return <>
        <div className="section__wrap">
            <div className="section__container">
                <div className="section__lhs">
                    <span>{text}</span>
                </div>
                <div className="section__rhs">
                    {
                        showBtn
                        ? <button className="green_btn" onClick={clickHandler}>{btnTxt}</button>
                        : null
                    }
                </div>
            </div>
        </div>
    </>
}

export default TopSection;
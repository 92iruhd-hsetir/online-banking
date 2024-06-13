import React from "react";

const TopSection = ({ text, showBtn, btnTxt, clickHandler }) => {
    return <>
        <div class="section__wrap">
            <div class="section__container">
                <div class="section__lhs">
                    <span>{text}</span>
                </div>
                <div class="section__rhs">
                    {
                        showBtn
                        ? <button class="green_btn" onClick={clickHandler}>{btnTxt}</button>
                        : null
                    }
                </div>
            </div>
        </div>
    </>
}

export default TopSection;
import React from "react";
import config from "../../common/config";

const TopBar = ({ title }) => {
    return <>
        <section className="header__wrap">
            <div className="header__container">
                <div className="header__lhs">
                    <div className="header__logo">
                        <img src={`${config.imageBasePath}logo.png`} alt="logo" loading="lazy" />
                    </div>
                    <div className="header__title">
                        <span>{title}</span>
                    </div>
                </div>
                <div className="header__rhs">
                    <div className="header__profile">
                        <img src={`${config.imageBasePath}user/profile_pic.png`} alt="profile" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default TopBar;
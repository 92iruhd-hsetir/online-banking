import React from "react";
import config from "../../common/config";

const TopBar = ({ title }) => {
    return <>
        <section class="header__wrap">
            <div class="header__container">
                <div class="header__lhs">
                    <div class="header__logo">
                        <img src={`${config.imageBasePath}logo.png`} alt="logo" loading="lazy" />
                    </div>
                    <div class="header__title">
                        <span>{title}</span>
                    </div>
                </div>
                <div class="header__rhs">
                    <div class="header__profile">
                        <img src={`${config.imageBasePath}user/profile_pic.png`} alt="profile" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default TopBar;
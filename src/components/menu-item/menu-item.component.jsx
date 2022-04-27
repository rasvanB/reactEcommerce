import React from "react";
import "./menu-item.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div
            className={`${size ? size : ""} menu-item`}
            onClick={() => navigate(`${pathname}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;

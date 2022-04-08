import React from "react";
import classnames from "classnames";
import { useLocation, useParams, Link } from "react-router-dom";

function Tab(props) {
    return (
        <Link to={`/details/${props.route}`}>
            <div
                className={classnames("text-[#919194] pb-3", { "text-[#131A34] border-b-4 border-[#131A34] font-bold ": props.isActive, })}
            >
                <h3 className="">{props.title}</h3>
            </div>
        </Link>
    );
}

function Tabs() {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)

    const tabs = [
        {
            title: "DISCOVER",
            route: "discover",
            isActive: currentPath.includes("discover"),
        },
        {
            title: "IMPACT BOARD",
            route: "impact-board",
            isActive: currentPath.includes("impact-board"),
        },
        {
            title: "LEARNING PODS",
            route: "learning-pods",
            isActive: currentPath.includes("learning-pods"),
        }
    ];

    return (
        <>
            <div className="text-[14px] flex relative items-center  gap-8 overflow-x-scroll lg:overflow-auto">
                {tabs.map((tab) => (
                    <Tab {...tab} />
                ))}
            </div>
        </>
    );
}

export default Tabs;
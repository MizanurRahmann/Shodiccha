import React from "react";

function FormPageStyle({ component, image }) {
    return (
        <>
            <div className={`${component}__line`}></div>
            <div className={`${component}__image-block`}>
                <img src={image} alt="" />
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-square square"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
        </>
    );
}

export default FormPageStyle;

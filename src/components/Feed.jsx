import React from "react";



function Feed ({title, contents, link}) {
    return (
        <div className="feed-container">
            <div className="feed-account">
                <div className="account-img"></div>
                <div className="account-name">Savin.park</div>
            </div>
            <div className="feed-thumnail"></div>
            <div className="feed-btns">
                <i className='heart bx bxs-heart'></i>
                <i className='msg bx bx-message-rounded'></i>
                <i className='github bx bxl-github' ></i>
                <i className='play bx bx-play-circle'></i>
                {/* <i className='play bx bxs-movie-play'></i> */}
                {/* <i className='play bx bx-movie-play'></i> */}
                <i className='tag bx bx-bookmark'></i>
            </div>
            <div className="feed-details">
                <p className="details-title">{title}</p>
                {/* <p className="details-contents">{contents}</p> */}
                <p className="details-contents">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    
                </p>
            </div>
        </div>
    );
}

export default Feed;
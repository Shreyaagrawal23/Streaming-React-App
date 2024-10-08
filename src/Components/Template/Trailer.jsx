import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);

    return ytvideo ? (
        <div className="absolute z-[100] bg-[rgba(0,0,0,.9)] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link
                onClick={() => {
                    navigate(-1);
                }}
                className="absolute text-6xl text-zinc-300 right-5 top-5 ri-close-fill"
            ></Link>
            <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                controls
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            />
        </div>
    ) : (
        <NotFound />
    );
}

export default Trailer;
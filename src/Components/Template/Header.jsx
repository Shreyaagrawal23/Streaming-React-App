import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
     

  if (!data || (!data.backdrop_path && !data.profile_path)) {
    return null
  }
      
    return (
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.6)),
          url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[53vh] flex flex-col justify-end items-start p-[4%] md:p-8"
      >
        <h1 className=" w-full md:w-[70%] text-3xl md:text-5xl font-black text-white">
          {data.title || data.name || data.original_name || data.original_title}
        </h1>
        <p className="w-full md:w-[70%] mt-3 mb-2 text-white text-sm md:text-base">
               {data.overview.slice(0, 200)}...
          <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
        </p>
        <p className="text-white text-sm md:text-base">
          <i className=" text-yellow-500 ri-megaphone-fill mr-1  "></i>
          {data.first_air_date || data.release_date}
          <i className=" ml-5 text-yellow-500 ri-album-fill mr-1"></i>
          {data.media_type.toUpperCase()}
            </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer `} className='p-2 md:p-3
             rounded text-white  mt-3 bg-[#6556CD] text-sm md:text-base'>Watch Trailer</Link>
      </div>
    );
}

export default Header
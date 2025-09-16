import React from "react";
import { useEffect } from "react";
import { movie_options } from "../../utils/constants/tmbd";
import { useState } from "react";

const Video = ({ movie }) => {
  const { id } = movie;
  const [trailer, setTrailer] = useState(null);
  useEffect(() => {
    fetchVideos(id);
  }, []);

  const fetchVideos = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      movie_options
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer")[0];
    setTrailer(trailer);
  };
  return (
    <div>
      {trailer && (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-screen aspect-video"
        ></iframe>
      )}
    </div>
  );
};

export default Video;

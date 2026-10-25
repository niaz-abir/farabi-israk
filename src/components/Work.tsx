"use client";

import React from "react";

type VideoCardProps = {
  src: string;
  title: string;
  aspectRatio?: "landscape" | "portrait";
  autoPlay?: boolean;
};

function VideoCard({ src, title, aspectRatio = "landscape" }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg transition-all duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10">
      <video
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
          aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video"
        }`}
        src={src}
        title={title}
        controls
        playsInline
        preload="metadata"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default function VideoSection() {
  const recentVideos = [
    { src: "/images/firstsection (5).mp4", title: "Recent Work 1" },
    { src: "/images/firstsection (2).mp4", title: "Recent Work 2" },
    { src: "/images/firstsection (1).mp4", title: "Recent Work 3" },
    { src: "/images/firstsection (4).mp4", title: "Recent Work 4" },
    { src: "/images/firstsection (3).mp4", title: "Recent Work 5" },
  ];

  const reelsVideos = [
    { src: "/images/reelsection (3).mp4", title: "Short Reel 1" },
    { src: "/images/reelsection (2).mp4", title: "Short Reel 2" },
    { src: "/images/reelsection (4).mp4", title: "Short Reel 3" },
    { src: "/images/reelsection (1).mp4", title: "Short Reel 4" },
    { src: "/images/reelsection(7).mp4", title: "Short Reel 5" },
    { src: "/images/reelsection(8).mp4", title: "Short Reel 6" },
  ];

  return (
    <section className="py-20 text-white">
      <div className="mx-auto max-w-8xl space-y-16 px-5 sm:px-6">
        {/* OUR RECENT WORK */}

        {/* OUR RECENT WORK */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-black to-[#1c1c1c] p-6 shadow-xl sm:p-10">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Our Portfolio
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Our Recent Work
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Explore our latest video projects, crafted to capture attention,
              tell stories, and engage audiences.
            </p>

            
          </div>

          {/* 3 videos in row one, 2 centered in row two */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {recentVideos.map((video, index) => (
              <div
                key={video.src}
                className={`lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : ""
                } ${index === 4 ? "lg:col-start-4" : ""}`}
              >
                <video
                  className="aspect-video w-full rounded-2xl border border-white/10 bg-black object-cover"
                  src={video.src}
                  title={video.title}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SHORT FORM REELS */}

        {/* SHORT FORM REELS */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-black to-[#1c1c1c] p-6 shadow-xl sm:p-10">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Short-Form Content
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Short Form Reels
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Scroll-stopping vertical videos designed for Instagram Reels,
              TikTok, YouTube Shorts, and other platforms.
            </p>

          
          </div>

          {/* 3 reels per row on desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {reelsVideos.map((video) => (
              <div
                key={video.src}
                className="mx-auto w-full max-w-[320px] lg:col-span-2 lg:max-w-none"
              >
                <video
                  className="aspect-[9/16] w-full rounded-2xl border border-white/10 bg-black object-cover"
                  src={video.src}
                  title={video.title}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Send, ArrowUpRight, User2 } from "lucide-react";

const posts = [
  {
    id: 1,
    day: "15",
    mon: "Dec",
    title: "Cuticle Pushers & Trimmers",
    author: "Admin",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
  },
  {
    id: 2,
    day: "15",
    mon: "Dec",
    title: "Cuticle Pushers & Trimmers",
    author: "Admin",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    img: "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
  },
  {
    id: 3,
    day: "15",
    mon: "Dec",
    title: "Cuticle Pushers & Trimmers",
    author: "Admin",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    img: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
  },
];

export default function NewsBlog() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:mx-36">
      {/* ================= Newsletter ================= */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background image + top gradient */}
        <div
          className="h-48 sm:h-56 md:h-64 w-full bg-center bg-cover relative"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/70 to-orange-500/70" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-2">
              <p className="uppercase tracking-widest text-xs sm:text-sm opacity-90">
                Get Newsletter
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold">
                Sign Up to Newsletter
              </h2>
            </div>
          </div>
        </div>

        {/* Floating panel */}
        <div className="-mt-8 sm:-mt-10 md:-mt-12 px-4 sm:px-6 md:px-8 pb-6">
          <div className="mx-auto max-w-5xl rounded-3xl border border-black/5 bg-white/80 backdrop-blur shadow-md p-4 sm:p-6 md:p-8
                          bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.04)_1px,_transparent_1px)] bg-[length:20px_20px]">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Send className="text-gray-500" />
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto max-w-3xl flex flex-col sm:flex-row items-stretch gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="flex-1 h-12 md:h-14 rounded-full border border-black/10 px-5 outline-none placeholder:text-gray-400 bg-white"
              />
              <button
                type="submit"
                className="h-12 md:h-14 whitespace-nowrap rounded-full px-6 md:px-8 text-white font-medium
                           bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 transition
                           inline-flex items-center justify-center gap-2"
              >
                Subscribe Now <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= Blog ================= */}
      <div className="mt-12 sm:mt-14 md:mt-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2 md:px-0">
          <div>
            <p className="text-pink-600 text-sm font-semibold tracking-widest uppercase">
              News & Blog
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1">
              Latest News & Blog
            </h3>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-600"
          >
            View All Blog <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden"
            >
              {/* Image + date badge */}
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-xl bg-pink-600 text-white px-2 py-1 text-center leading-tight shadow">
                  <div className="text-sm sm:text-base font-bold">{p.day}</div>
                  <div className="text-xs opacity-90">{p.mon}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5">
                {/* meta */}
                <div className="flex items-center gap-2 text-pink-600 text-xs sm:text-sm font-medium">
                  <User2 size={14} className="sm:w-4 sm:h-4" />
                  <span>By {p.author}</span>
                </div>

                {/* title */}
                <h4 className="mt-2 font-semibold text-base sm:text-lg hover:text-pink-600 cursor-pointer">
                  {p.title}
                </h4>

                {/* excerpt */}
                <p className="mt-2 text-gray-500 text-sm">{p.excerpt}</p>

                {/* footer */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 sm:px-4 py-2 text-sm font-medium
                               hover:border-pink-400 hover:text-pink-600 transition"
                  >
                    Read More <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

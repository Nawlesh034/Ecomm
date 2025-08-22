import React from "react";

function StickyHeader() {
  return (
    <>
      <div className="w-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="marquee text-white font-semibold text-xs sm:text-sm md:text-base py-1">
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
          <span className="mx-4">★ LIMITED TIME OFFER</span>
        </div>
      </div>
    </>
  );
}

export default StickyHeader;

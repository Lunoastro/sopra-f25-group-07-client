import React from "react";

interface SplashBackgroundSVGProps {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

const SplashBackgroundSVG: React.FC<SplashBackgroundSVGProps> = ({
  width = "100%",
  height = "100%",
  style,
  className,
}) => {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      zoomAndPan="magnify"
      viewBox="0 0 1024.5 576"
      height={height}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <filter x="0%" y="0%" width="100%" height="100%" id="2e969986d2">
          <feColorMatrix
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            colorInterpolationFilters="sRGB"
          />
        </filter>
        <clipPath id="1282bc6d9c">
          <path
            d="M 0 0.140625 L 677 0.140625 L 677 575.859375 L 0 575.859375 Z M 0 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <mask id="ef5ca4b107">
          <g filter="url(#2e969986d2)">
            <rect
              x="-102.45"
              width="1229.4"
              fill="#000000"
              y="-57.6"
              height="691.2"
              fillOpacity="0.34"
            />
          </g>
        </mask>
        <clipPath id="f9fc25236f">
          <path
            d="M 628 0.140625 L 630 0.140625 L 630 1 L 628 1 Z M 628 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f510b1b94a">
          <path
            d="M 623 0.140625 L 625 0.140625 L 625 3 L 623 3 Z M 623 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="525093b472">
          <path
            d="M 621 0.140625 L 632 0.140625 L 632 2 L 621 2 Z M 621 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ae8067616c">
          <path
            d="M 617 0.140625 L 621 0.140625 L 621 3 L 617 3 Z M 617 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7dc1b6261e">
          <path
            d="M 614 0.140625 L 622 0.140625 L 622 1 L 614 1 Z M 614 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1558fa6a18">
          <path
            d="M 300 548 L 333 548 L 333 575.859375 L 300 575.859375 Z M 300 548 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ea580fde03">
          <path
            d="M 303 574 L 306 574 L 306 575.859375 L 303 575.859375 Z M 303 574 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8b496d7a84">
          <path
            d="M 310 575 L 312 575 L 312 575.859375 L 310 575.859375 Z M 310 575 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="063422546c">
          <rect x="0" width="677" y="0" height="576" />
        </clipPath>
        <clipPath id="03d0f65eb5">
          <path
            d="M 544 0.140625 L 1024 0.140625 L 1024 575.859375 L 544 575.859375 Z M 544 0.140625 "
            clipRule="nonzero"
          />
        </clipPath>
        <mask id="e7aefc50d5">
          <g filter="url(#2e969986d2)">
            <rect
              x="-102.45"
              width="1229.4"
              fill="#000000"
              y="-57.6"
              height="691.2"
              fillOpacity="0.39"
            />
          </g>
        </mask>
        <clipPath id="23795eebfe">
          <path
            d="M 385 571 L 387 571 L 387 573 L 385 573 Z M 385 571 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="59390f4b22">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b7aedf412c">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b765597a58">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1dcb02ebdd">
          <path
            d="M 386 574 L 389 574 L 389 575.859375 L 386 575.859375 Z M 386 574 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="db669cc16e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f798d7e3f8">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4304275bba">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="55e6f3091b">
          <path
            d="M 382 569 L 385 569 L 385 573 L 382 573 Z M 382 569 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1e8cb3c116">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e15e8ac223">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="278efcdbda">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b0dcdae9d3">
          <path
            d="M 383 563 L 411 563 L 411 575.859375 L 383 575.859375 Z M 383 563 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="786ead29b5">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ba47bd49ac">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="08af7ccf46">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="af7e58394f">
          <path
            d="M 247 299 L 283 299 L 283 335 L 247 335 Z M 247 299 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bf1db8a7e6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="91c3db4c26">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e906f35a26">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f39605de35">
          <path
            d="M 277 289 L 282 289 L 282 292 L 277 292 Z M 277 289 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="eb7e8386b6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c323081117">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="64ff414e4e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="12f998f15c">
          <path
            d="M 245 288 L 248 288 L 248 290 L 245 290 Z M 245 288 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e23c16b2da">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e66a33a293">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="abc85daec0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9d4e6755cd">
          <path
            d="M 278 294 L 280 294 L 280 297 L 278 297 Z M 278 294 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f141d6e7c3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0d8310e21e">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1e6f949a80">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dbfdcc3957">
          <path
            d="M 394 561 L 396 561 L 396 564 L 394 564 Z M 394 561 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="554aa5fded">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5238a5fa36">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="586c3f4e42">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ddffa41e86">
          <path
            d="M 397 563 L 399 563 L 399 565 L 397 565 Z M 397 563 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dd7b8fd41a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5493efe5af">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0d45e5b8ff">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bdbba3d478">
          <path
            d="M 243 35 L 245 35 L 245 37 L 243 37 Z M 243 35 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="47f711a8ce">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ad55971cbd">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ef4b628623">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="113c161c98">
          <path
            d="M 220 72 L 222 72 L 222 74 L 220 74 Z M 220 72 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6f28e5b1f6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0d4b4d33ab">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b52e0ad721">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="835eba615a">
          <path
            d="M 251 46 L 253 46 L 253 48 L 251 48 Z M 251 46 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3ea31a6a4e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="42140280b1">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e598b3e536">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f2f5091aa7">
          <path
            d="M 255 47 L 257 47 L 257 49 L 255 49 Z M 255 47 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a8af44eccc">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bb9e2198d0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5fce61cf0d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="07fa7aee81">
          <path
            d="M 228 69 L 231 69 L 231 71 L 228 71 Z M 228 69 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3527386270">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="678e62b4c8">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e428b29d62">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2b8aeff69e">
          <path
            d="M 246 39 L 249 39 L 249 42 L 246 42 Z M 246 39 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ce15599db9">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="383ab4b055">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dab467c79f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4f4871eb14">
          <path
            d="M 214 36 L 256 36 L 256 72 L 214 72 Z M 214 36 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="186522526b">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="65dbb7321b">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b4654e3ce6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="355f36b64b">
          <path
            d="M 222 38 L 227 38 L 227 41 L 222 41 Z M 222 38 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4e97f33132">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b745d26a2a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8d1f8acd55">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="92788ee25e">
          <path
            d="M 221 73 L 224 73 L 224 75 L 221 75 Z M 221 73 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a7dff3c1d0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d6f1b2f0a2">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="086422cb07">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="56babf62b3">
          <path
            d="M 227 38 L 230 38 L 230 41 L 227 41 Z M 227 38 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="da7f236d22">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f90ce405ae">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c4ac028600">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a8cd94940f">
          <path
            d="M 248 45 L 251 45 L 251 48 L 248 48 Z M 248 45 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b2b72904a0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e3df435311">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="396355cbfd">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="73ee790d75">
          <path
            d="M 251 45 L 253 45 L 253 47 L 251 47 Z M 251 45 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f03f6b332c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="92ff575a4d">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="365d2e8d4f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c5a576853e">
          <path
            d="M 251 48 L 256 48 L 256 51 L 251 51 Z M 251 48 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f4feebac25">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e886a89811">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a0e730eb4b">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8968f9eae4">
          <path
            d="M 233 68 L 236 68 L 236 71 L 233 71 Z M 233 68 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ea60d04f96">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="94894c8b6e">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9fc8d2dbf9">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6fb4ece037">
          <path
            d="M 214 56 L 216 56 L 216 59 L 214 59 Z M 214 56 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9edb67149f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="093e1ca43f">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2263c424ab">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="db53d242b9">
          <path
            d="M 251 43 L 253 43 L 253 46 L 251 46 Z M 251 43 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3c99e6d59f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="164a7c8a33">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7d682c356f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dc554a5afa">
          <path
            d="M 63 175 L 65 175 L 65 177 L 63 177 Z M 63 175 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fd32305495">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9ba37e6bec">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fece56e46e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9a3895321d">
          <path
            d="M 61 178 L 63 178 L 63 181 L 61 181 Z M 61 178 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="62130ff41c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3325e03a19">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0ee1cf47dc">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4664958b07">
          <path
            d="M 57 176 L 88 176 L 88 207 L 57 207 Z M 57 176 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9979ff8c70">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0ff686d386">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="21dc807cde">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ea6793bcdc">
          <path
            d="M 57 188 L 60 188 L 60 191 L 57 191 Z M 57 188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1998440f0e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e5671a7841">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8b594e142a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="06842a9890">
          <path
            d="M 55 191 L 58 191 L 58 193 L 55 193 Z M 55 191 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0b2a960a3d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fafa31b0e1">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bef8cc48b0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="08fd1179df">
          <path
            d="M 74 178 L 77 178 L 77 179 L 74 179 Z M 74 178 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="db4151ab40">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ecfb7e1d58">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="61f449f344">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9ab78f6ad7">
          <path
            d="M 77 179 L 79 179 L 79 181 L 77 181 Z M 77 179 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f24e5ef137">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="290a6bea40">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3d74276fdc">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fa40b003c6">
          <path
            d="M 59 183 L 63 183 L 63 188 L 59 188 Z M 59 183 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f38fe3f82c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="97434076c4">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="61d7094d20">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a79c6f44c2">
          <path
            d="M 71 175 L 74 175 L 74 177 L 71 177 Z M 71 175 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d7f87810b6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8085dd754a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3427584275">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="02b9d41c48">
          <path
            d="M 85 187 L 89 187 L 89 190 L 85 190 Z M 85 187 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d7373b0f85">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c51961a963">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0a6127986d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="06ada924b9">
          <path
            d="M 87 192 L 89 192 L 89 195 L 87 195 Z M 87 192 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="989c4c7387">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="95220d2a15">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2dd084ca1a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="db7d991f49">
          <path
            d="M 79 206 L 83 206 L 83 209 L 79 209 Z M 79 206 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b2f06ca9c2">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6ea88f7f91">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b5bcfbfaa9">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1aadfd0475">
          <path
            d="M 68 174 L 71 174 L 71 176 L 68 176 Z M 68 174 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="81b25dbebc">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e038ee9a6f">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="09b7e4265e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a1ae13401d">
          <path
            d="M 62 185 L 64 185 L 64 188 L 62 188 Z M 62 185 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bcc45c684d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4b253296f0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1a544f731d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6ac68ce619">
          <path
            d="M 81 181 L 84 181 L 84 183 L 81 183 Z M 81 181 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b8cdc53998">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f86d00fbee">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="80077c1dd9">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7e1ea98144">
          <path
            d="M 89 187 L 91 187 L 91 190 L 89 190 Z M 89 187 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="03d9e2f506">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8ed0699234">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a9bc89ba84">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3823169fa4">
          <path
            d="M 220 198 L 222 198 L 222 200 L 220 200 Z M 220 198 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e06f7cfec5">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8936ffad51">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="117a388df6">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="74cd5377d1">
          <path
            d="M 216 177 L 221 177 L 221 180 L 216 180 Z M 216 177 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5e49839184">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="697ccc8626">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ef7307d65e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3133facfad">
          <path
            d="M 222 174 L 226 174 L 226 177 L 222 177 Z M 222 174 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0186b707b3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="02b4ed27c0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c82b98e913">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6ec22c7cb8">
          <path
            d="M 211 175 L 232 175 L 232 200 L 211 200 Z M 211 175 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d1368e4aee">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b83e0119df">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0c62563c21">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3037983659">
          <path
            d="M 221 176 L 225 176 L 225 179 L 221 179 Z M 221 176 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6eb350f09f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a88631ff5d">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5bf4724409">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b282771d34">
          <path
            d="M 218 182 L 221 182 L 221 185 L 218 185 Z M 218 182 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c682517f70">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3133dd0386">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a1eeb28769">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="94f68c0548">
          <path
            d="M 218 173 L 220 173 L 220 176 L 218 176 Z M 218 173 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="57321f2189">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="378ebe2832">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d876a2eb8d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="76e0888be6">
          <path
            d="M 214 179 L 216 179 L 216 181 L 214 181 Z M 214 179 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="778be1952d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9bc88fa68a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="54f03ff2c8">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a67400f670">
          <path
            d="M 215 183 L 218 183 L 218 186 L 215 186 Z M 215 183 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1fa9f53be3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1e299762ee">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3d3916be25">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f284b5a454">
          <path
            d="M 219 175 L 222 175 L 222 177 L 219 177 Z M 219 175 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="309e42b911">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5e97c1db41">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="318918dfa8">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e49c9d6ae3">
          <path
            d="M 214 185 L 217 185 L 217 188 L 214 188 Z M 214 185 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ebd623a06d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="77decf4092">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="000f0f5692">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3f9eee122a">
          <path
            d="M 219 184 L 221 184 L 221 187 L 219 187 Z M 219 184 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="31842c99e1">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="520168e4cd">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="66a5f0c4dd">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6e59098a95">
          <path
            d="M 386 52 L 388 52 L 388 55 L 386 55 Z M 386 52 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="24d6114e6f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4b194c07f0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f72fbdaf48">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="60e4f55969">
          <path
            d="M 357 51 L 359 51 L 359 54 L 357 54 Z M 357 51 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="55ada97b2a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0c0c6d5766">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5b94e5008a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4e2a36934f">
          <path
            d="M 357 45 L 391 45 L 391 75 L 357 75 Z M 357 45 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bedef21c31">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5f5ed6a8ee">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="24be4b2a9d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="935735d17c">
          <path
            d="M 355 58 L 358 58 L 358 60 L 355 60 Z M 355 58 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="aaa4023b72">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bc38742f66">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a9a357b3d3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c38bc17859">
          <path
            d="M 367 46 L 370 46 L 370 48 L 367 48 Z M 367 46 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a6b0cfc8f5">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d20b9c8a5a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="10d80905d0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="399dd61530">
          <path
            d="M 355 51 L 357 51 L 357 54 L 355 54 Z M 355 51 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e6e4a5df51">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4f0379f2b3">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a0ecf94c5b">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="83ce91621d">
          <path
            d="M 358 54 L 360 54 L 360 57 L 358 57 Z M 358 54 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4814a5ec52">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5a08cd36c4">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f08f87ca3d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c98a97c1df">
          <path
            d="M 366 72 L 369 72 L 369 75 L 366 75 Z M 366 72 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0aa93d60ac">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bfe0935149">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="759d5838d2">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="01b9c892d0">
          <path
            d="M 371 74 L 373 74 L 373 76 L 371 76 Z M 371 74 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4cca199edd">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9d862b915a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3376208b21">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c9333b45c7">
          <path
            d="M 390 55 L 392 55 L 392 57 L 390 57 Z M 390 55 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="11f558121f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ba6c3e7bd0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0d35648436">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2cb74a88f9">
          <path
            d="M 390 58 L 392 58 L 392 59 L 390 59 Z M 390 58 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8473f76150">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="eb88c05c22">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2d0453b483">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8a5e42d96d">
          <path
            d="M 378 74 L 380 74 L 380 76 L 378 76 Z M 378 74 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1b2e45753b">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3abb6b010e">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cf1a7fb3e7">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e2adb44b83">
          <path
            d="M 355 56 L 358 56 L 358 59 L 355 59 Z M 355 56 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="daa43506c8">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2255b76e12">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2b5b9c2a11">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b51f737524">
          <path
            d="M 358 64 L 362 64 L 362 69 L 358 69 Z M 358 64 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5da21e38e1">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="445425c138">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="aaef2a08ee">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e590c21e7e">
          <path
            d="M 424 204 L 426 204 L 426 206 L 424 206 Z M 424 204 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a8fc593696">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9b9bd4d2be">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="03f8ec3034">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4acfb6de40">
          <path
            d="M 452 206 L 454 206 L 454 208 L 452 208 Z M 452 206 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="44632d973a">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6e2f9656de">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d477b1aaec">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c8932545ee">
          <path
            d="M 452 210 L 454 210 L 454 213 L 452 213 Z M 452 210 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f41b7212e5">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f8791bb427">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="61a9bb5897">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cefe119e68">
          <path
            d="M 431 193 L 433 193 L 433 195 L 431 195 Z M 431 193 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="65d7b0faf2">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bb32f52bca">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b26dbcd497">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="771b059f49">
          <path
            d="M 425 199 L 428 199 L 428 203 L 425 203 Z M 425 199 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6f50902f44">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d6a5ccfcf0">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cf105421d3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0f77861cd9">
          <path
            d="M 432 194 L 434 194 L 434 196 L 432 196 Z M 432 194 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2e2ec92781">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f88997f974">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bcdbae327e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fc68eb86f8">
          <path
            d="M 423 194 L 453 194 L 453 226 L 423 226 Z M 423 194 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8c78dbdc0d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="169cab1d94">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e6b29c3089">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2035896f35">
          <path
            d="M 451 205 L 452 205 L 452 207 L 451 207 Z M 451 205 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2bf95558e1">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b88f113f1d">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3cf0de9cd3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c7b34d66c8">
          <path
            d="M 434 225 L 437 225 L 437 228 L 434 228 Z M 434 225 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c46ee8b938">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b4cf767c1e">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5eca37fb1f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1f548e0ef7">
          <path
            d="M 435 225 L 438 225 L 438 227 L 435 227 Z M 435 225 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ef6ea23f81">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="19e9eb55f5">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ebaac7889d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="af996ff0ad">
          <path
            d="M 451 212 L 453 212 L 453 215 L 451 215 Z M 451 212 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d606abc9a8">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6033eac676">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="84eb74a31d">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fdd2206587">
          <path
            d="M 431 194 L 433 194 L 433 196 L 431 196 Z M 431 194 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a227cf1174">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b1674b3209">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e0997353d0">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b03f38a988">
          <path
            d="M 441 193 L 443 193 L 443 195 L 441 195 Z M 441 193 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c977dbd98e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="46c6afd41a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e110f3f84c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="35278330f1">
          <path
            d="M 425 219 L 427 219 L 427 221 L 425 221 Z M 425 219 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c1ca97a95e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9447cae4fa">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="93d8578438">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7dbf9bb5c3">
          <path
            d="M 437 192 L 439 192 L 439 195 L 437 195 Z M 437 192 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dc0691b301">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1c545a878d">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="00ead392ec">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3403018780">
          <path
            d="M 451 216 L 453 216 L 453 218 L 451 218 Z M 451 216 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c31e678afb">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a300d797cf">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ecc6bf1d7e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5652c7588e">
          <path
            d="M 392 394 L 395 394 L 395 396 L 392 396 Z M 392 394 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b6d88f4aff">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1e8257f73f">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d725a3db14">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="84a2802313">
          <path
            d="M 421 395 L 423 395 L 423 397 L 421 397 Z M 421 395 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ce93819dc3">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b482541835">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d8254c7162">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9c006aa595">
          <path
            d="M 421 398 L 423 398 L 423 400 L 421 400 Z M 421 398 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ae7bf5b541">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cd9f428ce7">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5482f0ad0f">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="751d435311">
          <path
            d="M 417 412 L 420 412 L 420 414 L 417 414 Z M 417 412 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3ca9dd3a96">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d6f1595042">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e89f45d59b">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8095b6c05e">
          <path
            d="M 387 384 L 423 384 L 423 423 L 387 423 Z M 387 384 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b4835e2f39">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ef53006696">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e26a77b15c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a7da652067">
          <path
            d="M 389 395 L 391 395 L 391 398 L 389 398 Z M 389 395 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="462a9f97b8">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e66b63a02a">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="05c6d87a95">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7dd14e55b5">
          <path
            d="M 414 387 L 416 387 L 416 389 L 414 389 Z M 414 387 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="047a1651a1">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9bade451f2">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8a4b5081da">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9bc9828e4e">
          <path
            d="M 418 391 L 420 391 L 420 393 L 418 393 Z M 418 391 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d59502b484">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="87dd95f8f8">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8ef022b656">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bfaee475a5">
          <path
            d="M 396 422 L 398 422 L 398 425 L 396 425 Z M 396 422 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fd61afae65">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="04e845d929">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="61d216710e">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="35a1742381">
          <path
            d="M 406 421 L 408 421 L 408 424 L 406 424 Z M 406 421 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="14e0c95cfb">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="076a54116d">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ca2b11e2ca">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cb1cacf1f8">
          <path
            d="M 398 391 L 400 391 L 400 393 L 398 393 Z M 398 391 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e4df8ef618">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="39e1beb1e4">
          <path
            d="M 0.175781 210.058594 L 336.128906 -138.722656 L 745.375 255.480469 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="10a11e633c">
          <path
            d="M 0.175781 210.058594 L 411.535156 -217.007812 L 820.785156 177.191406 L 409.421875 604.257812 Z M 0.175781 210.058594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d3ebd5a140">
          <rect x="0" width="480" y="0" height="576" />
        </clipPath>
      </defs>
      <g clipPath="url(#1282bc6d9c)">
        <g mask="url(#ef5ca4b107)">
          <g transform="matrix(1, 0, 0, 1, 0, 0.000000000000055289)">
            <g clipPath="url(#063422546c)">
              <path
                fill="#eece38"
                d="M 103.195312 277.5 C 103.195312 277.648438 103.195312 277.796875 103.195312 277.945312 C 104.378906 279.523438 105.203125 277.039062 106.730469 277.5 C 106.359375 275.890625 104.269531 275.566406 106.289062 273.96875 C 106.375 274.324219 106.734375 274.410156 106.730469 274.851562 C 105.648438 274.902344 106.636719 276.3125 107.171875 276.175781 C 107.808594 276.421875 108.25 276.867188 108.5 277.5 C 108.582031 277.859375 108.941406 277.941406 108.941406 278.386719 C 109.363281 277.628906 110.410156 277.496094 110.710938 276.617188 C 111.664062 276.992188 111.421875 278.554688 112.035156 279.269531 C 113.300781 278.699219 112.113281 276.273438 114.6875 276.175781 C 114.8125 277.332031 114.835938 278.386719 113.363281 277.945312 C 113.03125 279.304688 114.574219 278.792969 114.246094 280.152344 C 116.183594 280.652344 115.699219 280.148438 117.339844 279.710938 C 117.414062 280.933594 116.660156 281.226562 116.015625 280.59375 C 115.648438 281.84375 116.636719 281.738281 116.457031 282.800781 C 117.777344 282.320312 119.417969 281.882812 119.109375 284.570312 C 120.3125 284.890625 119.996094 283.691406 120.875 283.6875 C 120.984375 284.242188 121.753906 284.132812 121.761719 283.6875 C 122.59375 284.015625 122.066406 285.003906 123.085938 284.128906 C 123.378906 284.128906 123.675781 284.128906 123.96875 284.128906 C 123.796875 285.1875 125.984375 283.882812 125.296875 285.453125 C 123.492188 284.355469 123.675781 286.015625 122.644531 286.777344 C 120.832031 287.265625 124.054688 288.460938 123.96875 287.21875 C 123.726562 286.3125 124.816406 286.167969 124.855469 286.777344 C 124.34375 287.433594 124.34375 287.890625 124.855469 288.546875 C 122.933594 288.5625 124.773438 290.183594 124.855469 290.753906 C 124.949219 291.449219 124.300781 291.5625 124.414062 292.078125 C 124.613281 292.988281 125.484375 293.667969 125.296875 294.730469 C 124.503906 294.671875 124.363281 295.269531 123.527344 295.171875 C 123.632812 295.949219 124.289062 296.179688 125.296875 296.054688 C 125.378906 296.414062 125.742188 296.496094 125.738281 296.9375 C 125.160156 297.832031 123.398438 297.542969 123.085938 298.703125 C 122.53125 298.816406 122.640625 299.582031 123.085938 299.589844 C 123.097656 299.160156 123.628906 299.246094 123.96875 299.148438 C 123.96875 299.292969 123.96875 299.441406 123.96875 299.589844 C 123.050781 299.351562 121.289062 301.152344 123.085938 300.914062 C 123.085938 301.058594 123.085938 301.207031 123.085938 301.355469 C 123.046875 301.980469 123.011719 302.605469 123.527344 302.679688 C 124.273438 304.234375 124.910156 301.574219 123.527344 301.796875 C 123.683594 301.214844 124.304688 301.101562 124.414062 300.472656 C 125.695312 301.609375 124.847656 302.578125 124.855469 304.449219 C 124.339844 304.375 124.066406 304.546875 123.96875 304.890625 C 123.007812 303.226562 120.804688 304.695312 120.875 306.214844 C 119.894531 305.972656 120.246094 307.058594 119.550781 307.097656 C 119.46875 307.472656 119.722656 307.515625 119.992188 307.539062 C 120.671875 308.234375 123.09375 309.9375 120.433594 310.191406 C 120.152344 309.226562 121.6875 308.785156 119.992188 308.863281 C 119.355469 307.695312 117.144531 308.628906 117.339844 309.75 C 116.738281 309.828125 115.195312 311.847656 116.898438 311.515625 C 116.417969 312.507812 114.121094 311.683594 114.6875 313.722656 C 114.097656 313.722656 113.507812 313.722656 112.917969 313.722656 C 112.765625 312.878906 110.199219 311.355469 110.710938 313.722656 C 109.238281 313.417969 109.996094 314.636719 110.269531 315.046875 C 109.910156 314.964844 109.828125 314.605469 109.382812 314.605469 C 109.707031 313.402344 108.503906 313.71875 108.5 312.839844 C 107.980469 312.910156 108.125 313.644531 108.058594 314.164062 C 106.96875 314.222656 105.929688 314.230469 105.40625 313.722656 C 105.347656 314.515625 105.945312 314.65625 105.847656 315.492188 C 105.070312 315.382812 104.839844 314.730469 104.964844 313.722656 C 104.792969 315.820312 101.097656 312.425781 101.425781 315.492188 C 100.46875 315.566406 101.226562 313.925781 100.984375 313.28125 C 102.003906 314.160156 101.476562 313.171875 102.3125 312.839844 C 102.03125 311.761719 100.246094 312.773438 100.101562 313.28125 C 98.90625 313.148438 99.308594 311.421875 98.332031 311.074219 C 97.675781 311.265625 98.507812 311.636719 98.332031 312.398438 C 96.738281 312.515625 95.277344 312.507812 95.679688 310.632812 C 97.296875 310.773438 97.4375 309.441406 97.890625 308.421875 C 96.539062 307.933594 96.398438 309.59375 95.679688 309.75 C 94.628906 309.976562 94.15625 309.042969 92.585938 309.304688 C 92.425781 308.554688 92.929688 308.472656 93.472656 308.421875 C 93.367188 306.894531 89.78125 305.695312 92.144531 304.449219 C 90.238281 302.820312 89.316406 298.964844 90.820312 297.378906 C 90.386719 296.519531 88.632812 296.023438 89.933594 294.730469 C 91.054688 295.195312 92.453125 293.800781 91.261719 293.402344 C 91.25 293.832031 90.71875 293.746094 90.375 293.847656 C 90.292969 293.488281 89.933594 293.40625 89.933594 292.960938 C 90.222656 292.511719 90.949219 292.507812 90.820312 291.636719 C 91.363281 291.144531 91.726562 291.253906 91.703125 292.078125 C 93.171875 291.871094 90.375 289.078125 90.820312 291.195312 C 90.230469 291.195312 89.640625 291.195312 89.050781 291.195312 C 89.394531 290.800781 89.527344 290.199219 89.492188 289.429688 C 89.1875 288.835938 88.3125 289.648438 87.28125 288.988281 C 87.160156 287.980469 87.390625 287.324219 88.167969 287.21875 C 88.9375 286.8125 90.539062 287.234375 90.375 285.894531 C 90.332031 285.054688 88.730469 286.246094 88.167969 286.335938 C 86.605469 286.207031 89.726562 285.140625 88.167969 285.011719 C 88.984375 284.355469 90.265625 284.164062 91.703125 284.128906 C 93.644531 282.585938 93.734375 281.898438 94.796875 279.710938 C 96.113281 279.074219 97.492188 281.261719 97.449219 279.269531 C 98.238281 279.511719 99.285156 279.496094 99.660156 280.152344 C 101.265625 278.875 99.863281 277.195312 102.753906 277.058594 C 102.777344 277.332031 102.820312 277.582031 103.195312 277.5 Z M 95.238281 282.800781 C 94.796875 282.800781 94.710938 283.160156 94.355469 283.246094 C 94.355469 283 93.996094 282.742188 93.914062 283.246094 C 94.238281 283.558594 96.078125 284.34375 95.679688 282.800781 C 95.402344 282.175781 96.058594 281.6875 96.121094 281.476562 C 96.570312 280.035156 94.859375 281.792969 95.238281 282.800781 Z M 91.703125 286.777344 C 90.515625 286.472656 90.847656 287.691406 90.375 288.101562 C 91.339844 288.183594 91.78125 287.742188 91.703125 286.777344 Z M 92.585938 303.121094 C 92.652344 302.023438 92.359375 301.289062 91.703125 300.914062 C 91.636719 302.011719 91.929688 302.746094 92.585938 303.121094 Z M 116.898438 308.863281 C 116.898438 308.570312 116.898438 308.277344 116.898438 307.980469 C 115.808594 307.292969 115.597656 309.480469 116.457031 309.304688 C 116.480469 309.035156 116.523438 308.785156 116.898438 308.863281 Z M 116.898438 308.863281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 140.027344 283.710938 C 141.398438 283.546875 140.25 284.226562 140.472656 284.59375 C 141.050781 285.5625 141.988281 285.4375 143.121094 286.359375 C 142.679688 288.082031 141.601562 286.429688 140.027344 286.800781 C 140.152344 285.796875 139.921875 285.140625 139.144531 285.035156 C 139.433594 284.585938 140.160156 284.578125 140.027344 283.710938 Z M 140.027344 283.710938 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 116.160156 255.882812 C 116.160156 256.175781 116.160156 256.46875 116.160156 256.765625 C 115.863281 256.765625 115.570312 256.765625 115.277344 256.765625 C 115.277344 256.46875 115.277344 256.175781 115.277344 255.882812 C 115.570312 255.882812 115.863281 255.882812 116.160156 255.882812 Z M 116.160156 255.882812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 137.375 287.6875 C 137.90625 289.003906 137.5 289.1875 136.933594 290.335938 C 136.355469 290.179688 136.238281 289.558594 135.609375 289.453125 C 136.132812 288.796875 135.992188 287.480469 137.375 287.6875 Z M 137.375 287.6875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 552.257812 160.007812 C 553.300781 158.585938 554.046875 161.5625 552.257812 160.007812 Z M 552.257812 160.007812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 558.445312 171.050781 C 558.742188 171.050781 559.035156 171.050781 559.332031 171.050781 C 559.332031 171.34375 559.332031 171.640625 559.332031 171.933594 C 559.035156 171.933594 558.742188 171.933594 558.445312 171.933594 C 558.445312 171.640625 558.445312 171.34375 558.445312 171.050781 Z M 558.445312 171.050781 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 558.445312 166.632812 C 557.625 166.539062 557.21875 165.683594 556.238281 165.308594 C 555.476562 165.019531 553.738281 166.023438 554.027344 164.425781 C 555.59375 165.199219 555.113281 164.128906 556.679688 163.984375 C 555.808594 166.324219 559.316406 164.292969 558.445312 166.632812 Z M 558.445312 166.632812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 565.078125 156.03125 C 564.785156 158.816406 563.609375 158.566406 561.539062 157.796875 C 562.074219 155.941406 560.828125 155.863281 560.65625 154.707031 C 561.632812 155.671875 562.328125 154.347656 563.308594 154.707031 C 563.878906 154.914062 563.738281 156.917969 565.078125 156.03125 Z M 565.078125 156.03125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 556.679688 153.382812 C 557.804688 153.425781 557.722656 155.027344 557.121094 155.589844 C 556.171875 154.925781 557.4375 154.507812 556.679688 153.382812 Z M 556.679688 153.382812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 556.238281 158.238281 C 555.433594 157.421875 553.570312 157.667969 552.699219 156.914062 C 552.644531 156.121094 553.242188 155.984375 553.144531 155.148438 C 554.644531 155.710938 555.453125 156.960938 556.679688 157.796875 C 556.652344 158.066406 556.613281 158.320312 556.238281 158.238281 Z M 556.238281 158.238281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 559.773438 159.125 C 560.148438 159.203125 560.191406 158.953125 560.214844 158.683594 C 560.746094 159.214844 562.816406 160.453125 561.539062 161.332031 C 561.515625 160.765625 560.976562 160.722656 561.097656 160.007812 C 560.261719 159.910156 560.125 160.503906 559.332031 160.449219 C 559.332031 160.152344 559.332031 159.859375 559.332031 159.566406 C 559.601562 159.539062 559.855469 159.5 559.773438 159.125 Z M 559.773438 159.125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 565.519531 159.566406 C 566.226562 160.183594 566.648438 161.085938 566.84375 162.214844 C 565.679688 162.058594 565.253906 161.15625 565.519531 159.566406 Z M 565.519531 159.566406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 556.679688 171.050781 C 556.679688 170.753906 556.679688 170.460938 556.679688 170.167969 C 557.621094 169.960938 557.523438 170.796875 557.5625 171.492188 C 557.207031 171.40625 557.121094 171.050781 556.679688 171.050781 Z M 556.679688 171.050781 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 556.238281 152.496094 C 556.238281 152.792969 556.238281 153.085938 556.238281 153.382812 C 555.796875 153.382812 555.351562 153.382812 554.910156 153.382812 C 554.910156 152.9375 554.910156 152.496094 554.910156 152.054688 C 555.625 151.929688 555.671875 152.472656 556.238281 152.496094 Z M 556.238281 152.496094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 559.332031 153.382812 C 560.5625 154.316406 559.636719 154.664062 560.214844 156.03125 C 559.277344 155.675781 558.492188 154.214844 559.332031 153.382812 Z M 559.332031 153.382812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 550.492188 157.355469 C 550.308594 156.292969 551.296875 156.398438 550.933594 155.148438 C 552.273438 154.984375 551.851562 156.585938 552.257812 157.355469 C 551.816406 157.355469 551.375 157.355469 550.933594 157.355469 C 550.785156 157.355469 550.636719 157.355469 550.492188 157.355469 Z M 550.492188 157.355469 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 558.003906 160.007812 C 557.628906 160.089844 557.589844 159.835938 557.5625 159.566406 C 558.085938 159.5 558.566406 158.777344 558.890625 159.566406 C 558.53125 159.648438 558.449219 160.007812 558.003906 160.007812 Z M 558.003906 160.007812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 566.402344 163.539062 C 566.140625 164.949219 567.234375 164.90625 566.402344 165.75 C 565.617188 165.957031 563.890625 165.058594 563.75 164.425781 C 563.695312 164.160156 565.066406 162.910156 563.308594 163.097656 C 564.257812 160.835938 564.242188 164.40625 566.402344 163.539062 Z M 566.402344 163.539062 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 550.933594 165.308594 C 551.058594 166.019531 550.515625 166.066406 550.492188 166.632812 C 549.632812 166.808594 549.84375 164.621094 550.933594 165.308594 Z M 550.933594 165.308594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 561.097656 165.308594 C 561.097656 165.601562 561.097656 165.898438 561.097656 166.191406 C 560.804688 166.191406 560.507812 166.191406 560.214844 166.191406 C 560.214844 165.898438 560.214844 165.601562 560.214844 165.308594 C 560.507812 165.308594 560.804688 165.308594 561.097656 165.308594 Z M 561.097656 165.308594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 557.5625 167.515625 C 557.632812 168.765625 556.234375 168.546875 556.238281 169.726562 C 554.945312 168.96875 556.3125 167.191406 557.5625 167.515625 Z M 557.5625 167.515625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 559.773438 170.609375 C 559.773438 170.3125 559.773438 170.019531 559.773438 169.726562 C 560.066406 169.726562 560.363281 169.726562 560.65625 169.726562 C 560.65625 170.019531 560.65625 170.3125 560.65625 170.609375 C 560.363281 170.609375 560.066406 170.609375 559.773438 170.609375 Z M 559.773438 170.609375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 569.054688 156.472656 C 567.757812 158.148438 567.3125 154.878906 569.054688 156.472656 Z M 569.054688 156.472656 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 557.5625 162.65625 C 556.847656 162.78125 556.800781 162.238281 556.238281 162.214844 C 555.914062 161.011719 557.113281 161.328125 557.121094 160.449219 C 557.269531 160.449219 557.414062 160.449219 557.5625 160.449219 C 557.589844 160.71875 557.628906 160.972656 558.003906 160.890625 C 558.28125 162.5 560.238281 159.699219 559.773438 161.773438 C 559.578125 162.167969 559.382812 162.5625 558.890625 162.65625 C 558.132812 162.75 557.746094 161.90625 557.5625 162.65625 Z M 557.5625 162.65625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 561.539062 161.773438 C 561.898438 161.859375 561.980469 162.21875 562.425781 162.214844 C 562.753906 163.824219 560.902344 163.050781 561.539062 161.773438 Z M 561.539062 161.773438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 327.714844 49.140625 C 327.714844 49.433594 327.714844 49.726562 327.714844 50.023438 C 327.421875 50.023438 327.125 50.023438 326.832031 50.023438 C 326.832031 49.726562 326.832031 49.433594 326.832031 49.140625 C 327.125 49.140625 327.421875 49.140625 327.714844 49.140625 Z M 327.714844 49.140625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 276.882812 58.855469 C 277.179688 58.855469 277.472656 58.855469 277.769531 58.855469 C 277.769531 59.152344 277.769531 59.445312 277.769531 59.742188 C 277.472656 59.742188 277.179688 59.742188 276.882812 59.742188 C 276.882812 59.445312 276.882812 59.152344 276.882812 58.855469 Z M 276.882812 58.855469 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 323.296875 64.601562 C 323.308594 64.171875 323.835938 64.257812 324.179688 64.15625 C 324.179688 64.453125 324.179688 64.746094 324.179688 65.042969 C 324.03125 65.042969 323.886719 65.042969 323.738281 65.042969 C 323.46875 65.015625 323.214844 64.976562 323.296875 64.601562 Z M 323.296875 64.601562 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 326.390625 68.574219 C 326.933594 68.769531 327.296875 69.140625 327.273438 69.902344 C 325.742188 70.285156 325.757812 69.21875 326.390625 68.574219 Z M 326.390625 68.574219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 287.492188 64.15625 C 286.925781 65.925781 286.578125 64.035156 285.28125 64.15625 C 285.65625 62.863281 286.394531 64.734375 287.492188 64.15625 Z M 287.492188 64.15625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 325.507812 54.441406 C 325.800781 54.441406 326.097656 54.441406 326.390625 54.441406 C 325.199219 55.589844 326.929688 55.773438 326.832031 57.089844 C 325.632812 56.964844 325.796875 55.472656 324.621094 55.324219 C 325.207031 55.320312 325.027344 54.550781 325.507812 54.441406 Z M 325.507812 54.441406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 297.660156 38.980469 C 298.421875 37.855469 296.984375 37.265625 298.542969 37.210938 C 298.433594 36.734375 297.664062 36.914062 297.660156 36.328125 C 297.195312 34.6875 299.148438 35.464844 299.425781 34.5625 C 300.207031 34.847656 301.792969 36.566406 300.753906 37.210938 C 301.03125 38.113281 302.988281 37.335938 302.519531 38.980469 C 303.148438 37.230469 301.894531 35.941406 302.078125 33.679688 C 302.816406 33.679688 303.550781 33.679688 304.289062 33.679688 C 303.828125 34.929688 303.828125 35.519531 304.289062 36.769531 C 304.722656 37.371094 305.777344 37.34375 306.058594 38.097656 C 305.734375 38.507812 305.253906 38.765625 304.730469 38.980469 C 305.054688 39.390625 305.535156 39.648438 306.058594 39.863281 C 306.566406 38.699219 306.785156 39.488281 307.824219 39.421875 C 308.535156 39.375 308.875 37.8125 309.59375 38.539062 C 309.40625 39.511719 310.917969 40.972656 311.363281 39.863281 C 311.03125 39.023438 314.046875 41.953125 314.015625 38.980469 C 314.726562 39.105469 314.773438 38.5625 315.339844 38.539062 C 315.488281 38.539062 315.632812 38.539062 315.78125 38.539062 C 315.304688 39.664062 317.683594 40.082031 316.222656 40.746094 C 316.753906 41.386719 318.324219 41.339844 317.109375 42.511719 C 316.472656 41.824219 315.996094 40.976562 314.898438 40.746094 C 314.539062 40.832031 314.457031 41.191406 314.015625 41.1875 C 314.304688 41.78125 314.957031 42.011719 315.78125 42.070312 C 315.46875 43.171875 315.347656 43.886719 316.222656 44.722656 C 316.222656 45.3125 316.222656 45.898438 316.222656 46.488281 C 316.976562 46.652344 317.058594 46.144531 317.109375 45.605469 C 317.554688 44.480469 317.992188 45.953125 318.433594 46.046875 C 318.679688 46.097656 319.0625 45.722656 318.875 45.605469 C 320.316406 46.515625 320.125 47.761719 321.96875 46.929688 C 321.910156 47.511719 321.902344 50.125 322.414062 48.699219 C 322.84375 48.710938 322.753906 49.238281 322.855469 49.582031 C 322.476562 49.5 322.4375 49.753906 322.414062 50.023438 C 321.65625 50.003906 321.265625 50.351562 321.085938 50.90625 C 322.464844 52.449219 324.644531 52.511719 325.507812 53.558594 C 324.859375 54.582031 324.105469 52.695312 324.179688 54.441406 C 323.148438 54.304688 322.277344 53.496094 321.96875 54.882812 C 323.554688 55.1875 323.203125 56.9375 322.855469 57.53125 C 322.972656 57.933594 324.8125 58.707031 324.621094 57.972656 C 326.445312 58.472656 322.800781 59.242188 324.621094 59.742188 C 324.621094 59.886719 324.621094 60.035156 324.621094 60.183594 C 324.539062 60.539062 324.179688 60.625 324.179688 61.066406 C 323.160156 61.203125 323.6875 59.789062 322.855469 59.742188 C 322.707031 59.742188 322.558594 59.742188 322.414062 59.742188 C 322.328125 60.097656 321.96875 60.179688 321.96875 60.625 C 321.40625 60.523438 321.390625 59.304688 321.96875 59.300781 C 321.773438 58.90625 321.582031 58.507812 321.085938 58.414062 C 320.644531 57.824219 319.890625 57.546875 319.761719 56.648438 C 319.679688 56.273438 319.933594 56.230469 320.203125 56.207031 C 321.492188 56.332031 321.722656 56.101562 321.085938 55.324219 C 321.617188 54.742188 321.257812 54.628906 321.085938 54 C 319.546875 55.40625 320.207031 53.707031 317.992188 54.441406 C 318.675781 55.855469 318.148438 56.382812 316.222656 56.207031 C 316.035156 57.128906 316.527344 57.375 316.667969 57.972656 C 317.753906 57.589844 317.65625 56.019531 319.316406 56.207031 C 319.316406 56.355469 319.316406 56.5 319.316406 56.648438 C 319.195312 56.910156 318.519531 60.03125 320.203125 58.414062 C 320.128906 58.929688 320.300781 59.203125 320.644531 59.300781 C 320.574219 59.816406 319.839844 59.671875 319.316406 59.742188 C 318.675781 58.433594 317.59375 60.324219 316.222656 59.742188 C 316.027344 59.347656 315.835938 58.949219 315.339844 58.855469 C 315.320312 59.613281 315.667969 60 316.222656 60.183594 C 316.742188 60.253906 316.597656 60.988281 316.667969 61.507812 C 317.960938 61.476562 317.632812 59.824219 319.316406 60.183594 C 319.464844 60.183594 319.613281 60.183594 319.761719 60.183594 C 319.675781 60.539062 319.316406 60.625 319.316406 61.066406 C 319.511719 61.722656 319.882812 60.890625 320.644531 61.066406 C 320.859375 62.070312 318.203125 62.386719 319.316406 62.832031 C 319.246094 63.351562 318.511719 63.207031 317.992188 63.273438 C 317.738281 62.375 316.894531 61.191406 317.109375 63.273438 C 317.429688 64.480469 316.230469 64.164062 316.222656 65.042969 C 315.644531 64.886719 315.527344 64.265625 314.898438 64.15625 C 314.832031 65.253906 314.816406 66.300781 315.78125 66.367188 C 316.300781 66.4375 316.15625 67.171875 316.222656 67.691406 C 316.894531 67.730469 316.398438 66.742188 316.667969 66.367188 C 316.878906 66.070312 317.832031 66.171875 317.992188 65.925781 C 318.257812 65.511719 317.726562 64.019531 318.875 64.15625 C 318.792969 64.535156 319.050781 64.574219 319.316406 64.601562 C 320.421875 65.4375 321.054688 64.234375 322.414062 65.042969 C 322.328125 65.398438 321.96875 65.480469 321.96875 65.925781 C 321.824219 65.925781 321.675781 65.925781 321.527344 65.925781 C 320.609375 66.894531 320.097656 65.539062 319.316406 66.367188 C 319.453125 66.964844 320.425781 66.734375 321.085938 66.808594 C 321.320312 67.164062 321.546875 67.523438 321.527344 68.132812 C 320.871094 68.328125 321.703125 68.699219 321.527344 69.457031 C 322.042969 69.53125 322.316406 69.359375 322.414062 69.015625 C 322.910156 69.941406 322.695312 71.125 322.414062 72.550781 C 320.507812 71.878906 320.734375 71.660156 317.992188 71.667969 C 317.476562 72.824219 319.355469 73.566406 317.550781 73.433594 C 317.742188 73.976562 318.117188 74.339844 318.875 74.316406 C 318.957031 74.695312 318.703125 74.734375 318.433594 74.757812 C 318.433594 75.054688 318.433594 75.347656 318.433594 75.644531 C 318.019531 75.394531 317.765625 74.414062 317.550781 75.203125 C 316.8125 74.757812 317.238281 73.15625 316.222656 72.992188 C 315.800781 73.75 314.757812 73.882812 314.457031 74.757812 C 314.761719 75.117188 315.144531 75.96875 314.457031 76.085938 C 313.433594 75.8125 311.789062 75.207031 312.6875 74.316406 C 311.261719 73.921875 312.066406 75.757812 311.363281 76.085938 C 309.101562 76.429688 309.175781 74.441406 306.941406 74.757812 C 306.90625 76.742188 309.003906 78.335938 308.265625 79.617188 C 307.359375 79.496094 307.386719 78.4375 306.941406 77.851562 C 305.59375 78.40625 305.222656 78.1875 304.289062 77.410156 C 304.246094 76.039062 304.488281 74.960938 305.171875 74.316406 C 304.691406 72.738281 302.371094 72.996094 301.636719 71.667969 C 301.28125 71.75 301.195312 72.109375 300.753906 72.109375 C 301.128906 73.058594 301.839844 73.671875 303.40625 73.433594 C 303.558594 75.207031 302.308594 75.578125 301.636719 76.527344 C 300.3125 76.234375 302.058594 75.582031 301.636719 74.757812 C 301.382812 75.671875 299.746094 75.265625 299.867188 75.203125 C 299.152344 75.578125 299.421875 76.730469 298.101562 76.527344 C 298.9375 75.742188 298.863281 74.046875 300.3125 73.875 C 299.667969 72.3125 298.742188 71.027344 296.332031 71.226562 C 295.410156 71.414062 295.164062 70.921875 294.566406 70.785156 C 294.167969 72.210938 296.007812 71.40625 296.332031 72.109375 C 296.582031 72.519531 297.5625 72.777344 296.773438 72.992188 C 296.628906 72.992188 296.480469 72.992188 296.332031 72.992188 C 296.285156 71.910156 294.871094 72.898438 295.007812 73.433594 C 294.484375 72.746094 292.953125 70.816406 291.914062 72.109375 C 290.925781 72.042969 292.484375 70.996094 291.914062 69.902344 C 292.289062 69.980469 292.328125 69.726562 292.355469 69.457031 C 291.699219 69.265625 292.527344 68.894531 292.355469 68.132812 C 292.464844 67.652344 293.234375 67.832031 293.238281 67.25 C 292.367188 66.855469 291.226562 66.234375 289.703125 67.25 C 289.207031 66.851562 289.730469 66.261719 288.816406 65.484375 C 288.816406 65.335938 288.816406 65.1875 288.816406 65.042969 C 289.53125 64.917969 289.578125 65.457031 290.144531 65.484375 C 290.53125 64.066406 289.464844 64.101562 288.816406 63.714844 C 288.816406 63.273438 288.816406 62.832031 288.816406 62.390625 C 288.941406 61.675781 288.402344 61.632812 288.375 61.066406 C 289.574219 60.675781 288.003906 59.105469 287.492188 60.183594 C 286.082031 59.804688 286.125 60.878906 285.28125 61.066406 C 286.515625 59.839844 284.464844 59.640625 284.398438 58.414062 C 282.035156 58.984375 282.480469 57.058594 280.863281 57.972656 C 280.917969 57.179688 280.320312 57.042969 280.417969 56.207031 C 281.425781 56.082031 282.082031 56.3125 282.1875 57.089844 C 282.746094 56.324219 283.683594 55.933594 283.515625 54.441406 C 284.402344 54.046875 283.320312 52.507812 283.070312 53.558594 C 281.660156 53.292969 281.703125 54.386719 280.863281 53.558594 C 280.738281 52.84375 281.277344 52.796875 281.304688 52.230469 C 282.523438 52.421875 281.71875 50.585938 282.628906 50.464844 C 283.277344 50.476562 284.167969 50.390625 284.398438 50.023438 C 284.859375 49.289062 282.585938 49.4375 282.628906 48.699219 C 282.519531 48.21875 281.75 48.398438 281.746094 47.8125 C 281.933594 46.824219 282.695312 46.40625 283.070312 45.605469 C 283.765625 45.449219 282.683594 44.828125 283.515625 44.722656 C 284.09375 44.566406 284.210938 43.945312 284.839844 43.839844 C 284.925781 44.195312 285.285156 44.277344 285.28125 44.722656 C 285.207031 45.828125 285.960938 46.105469 286.609375 46.488281 C 286.929688 45.285156 285.730469 45.601562 285.722656 44.722656 C 285.535156 43.800781 286.027344 43.550781 286.167969 42.957031 C 286.460938 42.957031 286.753906 42.957031 287.050781 42.957031 C 286.742188 42.597656 286.363281 41.746094 287.050781 41.628906 C 287.34375 41.628906 287.640625 41.628906 287.933594 41.628906 C 288.230469 41.628906 288.523438 41.628906 288.816406 41.628906 C 289.21875 42.828125 290.445312 41.257812 290.585938 40.746094 C 290.390625 40.105469 290.199219 40.792969 289.703125 40.746094 C 290.390625 39.175781 288.199219 40.480469 288.375 39.421875 C 288.300781 37.601562 290.351562 38.589844 289.261719 36.769531 C 291.003906 36.207031 290.332031 38.058594 291.46875 38.097656 C 291.402344 39.195312 289.972656 38.226562 289.703125 38.097656 C 289.597656 40.113281 292.621094 39.007812 292.796875 40.746094 C 293.398438 40.609375 293.164062 39.640625 293.238281 38.980469 C 293.507812 39.109375 294.941406 40.078125 295.007812 38.980469 C 295.699219 39.167969 295.382812 40.371094 296.773438 39.863281 C 297.167969 39.667969 297.566406 39.476562 297.660156 38.980469 Z M 320.203125 50.023438 C 319.90625 50.023438 319.613281 50.023438 319.316406 50.023438 C 320.507812 51.464844 318.105469 51.296875 319.316406 52.230469 C 319.757812 51.640625 320.511719 51.363281 320.644531 50.464844 C 320.375 50.4375 320.121094 50.398438 320.203125 50.023438 Z M 316.222656 61.507812 C 315.378906 62.921875 314.640625 61.96875 314.015625 61.066406 C 313.636719 62.371094 313.636719 62.855469 314.015625 64.15625 C 315.109375 63.902344 317.589844 62.757812 316.222656 61.507812 Z M 305.171875 75.644531 C 305.933594 75.667969 306.304688 75.300781 306.5 74.757812 C 305.738281 74.734375 305.367188 75.097656 305.171875 75.644531 Z M 284.839844 47.371094 C 285.460938 47.257812 285.34375 46.402344 285.722656 46.046875 C 285.027344 46.089844 284.191406 45.988281 284.398438 46.929688 C 281.484375 46.539062 284.890625 48.308594 284.839844 47.371094 Z M 291.914062 42.070312 C 291.914062 42.511719 291.914062 42.957031 291.914062 43.398438 C 292.253906 43.296875 292.785156 43.386719 292.796875 42.957031 C 294.253906 42.824219 292.046875 40.617188 291.914062 42.070312 Z M 294.566406 43.839844 C 295.644531 44.265625 296.027344 41.855469 295.449219 42.070312 C 295.21875 42.726562 294.792969 43.183594 294.566406 43.839844 Z M 289.703125 46.046875 C 290.5625 45.753906 290.007812 43.171875 289.261719 44.722656 C 290.640625 44.585938 288.136719 45.996094 289.703125 46.046875 Z M 318.433594 48.257812 C 317.796875 48.492188 317.355469 46.535156 317.109375 47.8125 C 317.894531 48.027344 316.917969 48.285156 316.667969 48.699219 C 316.933594 48.722656 317.1875 48.765625 317.109375 49.140625 C 317.714844 49.15625 318.078125 48.929688 318.433594 48.699219 C 319.019531 48.703125 318.839844 49.472656 319.316406 49.582031 C 319.921875 49.019531 320 47.417969 318.875 47.371094 C 318.878906 47.816406 318.519531 47.898438 318.433594 48.257812 Z M 288.816406 49.582031 C 286.496094 49.578125 288.355469 51.4375 288.816406 49.582031 Z M 311.804688 69.015625 C 312.46875 70.476562 312.882812 68.097656 314.015625 68.574219 C 313.964844 67.445312 313.203125 67.027344 312.6875 66.367188 C 312.753906 67.460938 312.769531 68.511719 311.804688 68.574219 C 309.957031 68.476562 310.617188 70.207031 311.804688 69.015625 Z M 310.476562 66.808594 C 307.566406 66.417969 310.972656 68.183594 310.917969 67.25 C 311.265625 67.152344 311.433594 66.878906 311.363281 66.367188 C 311.066406 66.367188 310.773438 66.367188 310.476562 66.367188 C 310.476562 66.515625 310.476562 66.660156 310.476562 66.808594 Z M 307.382812 67.691406 C 306.863281 67.761719 306.128906 67.617188 306.058594 68.132812 C 305.597656 68.3125 304.507812 69.847656 306.058594 69.457031 C 306.382812 67.835938 307.847656 69.878906 308.710938 68.574219 C 308.078125 68.46875 307.964844 67.847656 307.382812 67.691406 Z M 314.898438 70.785156 C 315.734375 70.585938 317.5625 71.386719 317.109375 69.902344 C 316.011719 69.835938 314.964844 69.820312 314.898438 70.785156 Z M 310.476562 71.226562 C 311.109375 71.332031 311.222656 71.953125 311.804688 72.109375 C 311.804688 71.667969 311.804688 71.226562 311.804688 70.785156 C 311.507812 70.785156 311.214844 70.785156 310.917969 70.785156 C 310.648438 70.808594 310.394531 70.851562 310.476562 71.226562 Z M 307.382812 70.785156 C 307.210938 71.414062 306.851562 71.527344 307.382812 72.109375 C 307.726562 72.011719 308.253906 72.097656 308.265625 71.667969 C 307.683594 71.664062 307.863281 70.894531 307.382812 70.785156 Z M 307.382812 70.785156 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 306.941406 34.121094 C 307.785156 34.308594 307.742188 35.382812 309.152344 35.003906 C 309.09375 35.796875 309.691406 35.9375 309.59375 36.769531 C 308.839844 36.046875 307.804688 36.296875 307.382812 35.886719 C 307.066406 35.582031 307.824219 35.417969 307.824219 35.445312 C 307.832031 35 306.585938 34.984375 306.941406 34.121094 Z M 306.941406 34.121094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 276.441406 61.949219 C 277.070312 61.777344 277.1875 61.417969 277.769531 61.949219 C 277.683594 62.308594 277.324219 62.390625 277.324219 62.832031 C 276.933594 62.636719 276.535156 62.445312 276.441406 61.949219 Z M 276.441406 61.949219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 310.476562 38.097656 C 311.867188 38.316406 312.207031 37.132812 313.128906 38.097656 C 313.066406 39.0625 312.015625 39.042969 310.917969 38.980469 C 310.09375 39.003906 309.984375 38.640625 310.476562 38.097656 Z M 310.476562 38.097656 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 323.738281 61.949219 C 323.195312 62.140625 322.828125 62.515625 322.855469 63.273438 C 321.699219 63.398438 320.953125 63.113281 321.085938 61.949219 C 321.972656 62.101562 322.46875 61.859375 322.414062 61.066406 C 322.679688 61.039062 322.933594 61 322.855469 60.625 C 323.398438 60.816406 323.761719 61.1875 323.738281 61.949219 Z M 323.738281 61.949219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 325.0625 63.714844 C 325.816406 63.554688 325.898438 64.0625 325.949219 64.601562 C 325.800781 64.601562 325.652344 64.601562 325.507812 64.601562 C 325.238281 64.574219 324.984375 64.535156 325.0625 64.15625 C 325.0625 64.011719 325.0625 63.863281 325.0625 63.714844 Z M 325.0625 63.714844 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 323.738281 65.925781 C 323.933594 67.320312 324.679688 67.816406 324.179688 69.902344 C 323.367188 69.238281 323.078125 68.058594 321.96875 67.691406 C 321.96875 67.398438 321.96875 67.101562 321.96875 66.808594 C 322.347656 66.890625 322.386719 66.636719 322.414062 66.367188 C 322.769531 66.132812 323.128906 65.90625 323.738281 65.925781 Z M 323.738281 65.925781 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 291.46875 69.457031 C 291.027344 69.457031 290.585938 69.457031 290.144531 69.457031 C 290.226562 69.082031 289.972656 69.042969 289.703125 69.015625 C 289.785156 68.660156 290.144531 68.578125 290.144531 68.132812 C 290.144531 67.988281 290.144531 67.839844 290.144531 67.691406 C 290.539062 68.035156 291.144531 68.167969 291.914062 68.132812 C 291.679688 68.488281 291.449219 68.851562 291.46875 69.457031 Z M 291.46875 69.457031 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 285.722656 41.1875 C 286.242188 41.261719 286.097656 41.992188 286.167969 42.511719 C 285.601562 42.539062 285.554688 43.082031 284.839844 42.957031 C 284.757812 42.597656 284.394531 42.515625 284.398438 42.070312 C 285.285156 42.222656 285.78125 41.980469 285.722656 41.1875 Z M 285.722656 41.1875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 325.949219 63.273438 C 326.140625 62.730469 326.515625 62.367188 327.273438 62.390625 C 327.292969 63.148438 326.945312 63.535156 326.390625 63.714844 C 326.121094 63.691406 325.867188 63.648438 325.949219 63.273438 Z M 325.949219 63.273438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 62.945312 10.25 C 63.476562 10.828125 63.117188 10.941406 62.945312 11.574219 C 62.652344 11.574219 62.355469 11.574219 62.0625 11.574219 C 62.144531 11.199219 61.890625 11.15625 61.621094 11.132812 C 61.703125 10.773438 62.0625 10.691406 62.0625 10.25 C 62.355469 10.25 62.652344 10.25 62.945312 10.25 Z M 62.945312 10.25 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 57.199219 12.898438 C 56.414062 12.574219 57.136719 12.09375 57.199219 11.574219 C 57.59375 11.917969 58.199219 12.046875 58.96875 12.015625 C 58.773438 12.410156 58.582031 12.804688 58.082031 12.898438 C 57.992188 12.363281 57.59375 12.628906 57.199219 12.898438 Z M 57.199219 12.898438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 57.640625 13.78125 C 57.789062 13.78125 57.9375 13.78125 58.082031 13.78125 C 58.523438 13.863281 59.277344 15.71875 59.410156 14.664062 C 60.507812 14.597656 61.246094 14.894531 61.621094 15.550781 C 62.792969 15.6875 61.207031 13.074219 62.945312 13.78125 C 64.039062 14.925781 61.992188 15.425781 62.0625 16.875 C 62.226562 17.625 61.71875 17.707031 61.179688 17.757812 C 61.308594 18.789062 62.375 18.789062 62.503906 17.757812 C 64.511719 18.585938 63.105469 16.003906 64.714844 16.433594 C 65.507812 16.488281 65.648438 15.890625 66.484375 15.992188 C 66.484375 16.136719 66.484375 16.285156 66.484375 16.433594 C 66.617188 17.449219 65.207031 16.921875 65.15625 17.757812 C 65.78125 17.71875 66.40625 17.683594 66.484375 18.199219 C 66.398438 18.558594 66.039062 18.640625 66.039062 19.082031 C 66.683594 19.324219 68.324219 18.566406 68.25 19.523438 C 68.695312 20.851562 67.265625 20.308594 66.484375 20.410156 C 66.40625 21.367188 68.050781 20.609375 68.691406 20.847656 C 69.5 21.191406 68.425781 21.324219 67.808594 21.292969 C 67.457031 22.820312 68.300781 23.15625 68.691406 23.941406 C 67.988281 24.515625 66.914062 24.523438 67.808594 23.5 C 67.21875 23.5 66.628906 23.5 66.039062 23.5 C 65.984375 24.292969 66.582031 24.433594 66.484375 25.265625 C 66.777344 25.265625 67.074219 25.265625 67.367188 25.265625 C 67.660156 25.265625 67.957031 25.265625 68.25 25.265625 C 68.125 25.980469 68.667969 26.027344 68.691406 26.59375 C 68.691406 26.886719 68.691406 27.179688 68.691406 27.476562 C 67.902344 27.351562 67.785156 27.894531 68.25 27.917969 C 68.25 28.210938 68.25 28.507812 68.25 28.800781 C 67.664062 28.226562 66.917969 28.527344 66.484375 29.242188 C 68.40625 28.792969 68.515625 30.15625 69.578125 30.566406 C 69.253906 31.59375 68.457031 33.867188 70.460938 33.660156 C 69.445312 35.238281 70.410156 36.199219 72.230469 35.425781 C 71.921875 36.296875 71.050781 36.605469 70.019531 36.75 C 70.039062 35.996094 69.691406 35.609375 69.136719 35.425781 C 68.617188 35.5 68.761719 36.230469 68.691406 36.75 C 69.085938 36.480469 69.484375 36.21875 69.578125 36.75 C 69.578125 36.898438 69.578125 37.046875 69.578125 37.195312 C 69.136719 37.195312 68.691406 37.195312 68.25 37.195312 C 66.613281 39.390625 68.136719 40.75 67.367188 42.9375 C 66.609375 41.066406 66.480469 43.761719 65.597656 42.496094 C 66.03125 42.042969 66.472656 41.601562 66.925781 41.167969 C 66.207031 39.140625 65.488281 41.589844 65.15625 42.496094 C 65.007812 42.496094 64.863281 42.496094 64.714844 42.496094 C 64.421875 42.496094 64.125 42.496094 63.832031 42.496094 C 63.386719 42.496094 62.945312 42.496094 62.503906 42.496094 C 62.125 43.394531 63.199219 44.929688 63.386719 43.820312 C 64.308594 44.066406 64.324219 44.507812 63.832031 45.144531 C 62.792969 44.070312 62.839844 45.636719 62.0625 46.027344 C 62.386719 46.441406 62.867188 46.699219 63.386719 46.910156 C 62.484375 47.082031 61.828125 52.582031 61.179688 50.003906 C 61.414062 49.648438 61.640625 49.285156 61.621094 48.679688 C 61.179688 48.679688 60.734375 48.679688 60.292969 48.679688 C 60.097656 48.285156 59.90625 47.886719 59.410156 47.796875 C 59.398438 47.367188 58.867188 47.453125 58.527344 47.351562 C 58.363281 48.105469 58.871094 48.1875 59.410156 48.238281 C 58.523438 49.136719 59.605469 49.101562 59.851562 50.003906 C 59.214844 50.5 58.773438 50.480469 58.527344 49.5625 C 57.664062 50.46875 57.148438 51.71875 55.429688 51.769531 C 55.1875 50.070312 53.722656 52.109375 52.777344 50.886719 C 51.535156 50.953125 51.503906 49.804688 51.453125 48.679688 C 52.792969 47.980469 52.371094 51.542969 52.777344 49.121094 C 53.699219 49.367188 53.714844 49.808594 53.222656 50.445312 C 53.957031 50.445312 54.695312 50.445312 55.429688 50.445312 C 55.617188 49.523438 55.128906 49.277344 54.988281 48.679688 C 54.757812 48.324219 54.527344 47.960938 54.546875 47.351562 C 54.1875 47.4375 54.105469 47.796875 53.664062 47.796875 C 53.234375 47.808594 53.320312 48.335938 53.222656 48.679688 C 52.535156 47.730469 51.046875 47.640625 50.128906 48.679688 C 48.773438 48.246094 50.636719 47.5 50.570312 46.910156 C 50.484375 46.554688 50.125 46.472656 50.128906 46.027344 C 49.714844 46.351562 49.457031 46.832031 49.242188 47.351562 C 48.867188 47.433594 48.828125 47.179688 48.800781 46.910156 C 48.882812 46.535156 48.628906 46.496094 48.359375 46.46875 C 48.425781 45.652344 49.855469 46.199219 50.128906 45.585938 C 49.5 45.171875 48.84375 43.816406 47.917969 43.378906 C 47.042969 42.960938 45.363281 43.980469 45.265625 42.496094 C 44.816406 42.78125 44.808594 43.511719 43.9375 43.378906 C 43.902344 42.679688 44.152344 41.691406 43.496094 41.609375 C 43.582031 41.253906 43.941406 41.171875 43.9375 40.726562 C 44.96875 40.59375 45.84375 39.785156 46.148438 41.167969 C 47.296875 40.277344 46.34375 37.765625 44.824219 38.078125 C 44.371094 36.707031 44.390625 39.332031 43.9375 39.402344 C 42.273438 39.59375 41.925781 38.46875 41.285156 37.636719 C 41.664062 37.714844 41.703125 37.464844 41.730469 37.195312 C 42.242188 37.5625 42.914062 37.777344 43.9375 37.636719 C 43.058594 36.050781 44.59375 36.105469 45.265625 34.984375 C 44.117188 33.421875 42.613281 37.878906 42.613281 34.101562 C 43.128906 34.171875 43.398438 34.003906 43.496094 33.660156 C 42.703125 33.714844 42.566406 33.117188 41.730469 33.21875 C 41.730469 33.660156 41.730469 34.101562 41.730469 34.542969 C 41.210938 34.472656 41.355469 33.738281 41.285156 33.21875 C 41.679688 33.023438 42.078125 32.832031 42.171875 32.335938 C 42.171875 32.1875 42.171875 32.039062 42.171875 31.894531 C 41.527344 30.582031 40.445312 32.476562 39.078125 31.894531 C 38.914062 31.140625 39.421875 31.058594 39.960938 31.007812 C 39.707031 30.085938 38.863281 29.75 39.078125 28.359375 C 39.621094 28.851562 39.984375 28.742188 39.960938 27.917969 C 41.039062 28.84375 40.902344 28.546875 42.613281 28.359375 C 43.441406 29.203125 42.351562 29.160156 42.613281 30.566406 C 43.453125 30.378906 43.722656 29.617188 44.824219 29.683594 C 43.285156 29.160156 43.355469 27.027344 41.730469 26.59375 C 42.054688 25.804688 42.53125 26.527344 43.054688 26.59375 C 43.464844 25.160156 40.3125 23.550781 42.613281 23.058594 C 42.421875 22.363281 41.222656 22.679688 41.730469 21.292969 C 41.351562 21.210938 41.3125 21.464844 41.285156 21.734375 C 40.320312 20.25 42.316406 20.460938 43.496094 20.847656 C 42.398438 21.628906 42.851562 21.578125 43.496094 22.617188 C 44.027344 22.117188 44.296875 21.355469 45.707031 21.734375 C 45.707031 21.144531 45.707031 20.554688 45.707031 19.964844 C 46.714844 20.089844 47.367188 19.859375 47.476562 19.082031 C 47.988281 19.15625 48.261719 18.984375 48.359375 18.640625 C 48.507812 18.640625 48.652344 18.640625 48.800781 18.640625 C 48.949219 18.640625 49.097656 18.640625 49.242188 18.640625 C 49.242188 18.9375 49.242188 19.230469 49.242188 19.523438 C 50.035156 19.582031 50.175781 18.984375 51.011719 19.082031 C 51.355469 19.476562 51.488281 20.082031 51.453125 20.847656 C 51.414062 22.5 50.957031 22.109375 51.453125 23.5 C 52.8125 23.828125 52.304688 22.289062 53.664062 22.617188 C 54.449219 22.878906 55.5 21.320312 55.875 22.617188 C 55.875 23.207031 55.875 23.792969 55.875 24.382812 C 56.230469 24.300781 56.3125 23.941406 56.757812 23.941406 C 56.90625 23.941406 57.050781 23.941406 57.199219 23.941406 C 58.21875 22.730469 60.488281 22.910156 60.734375 23.058594 C 60.789062 23.089844 60.699219 23.941406 60.734375 23.941406 C 61.589844 23.929688 61.664062 22.476562 62.503906 23.058594 C 62.367188 24.078125 63.78125 23.550781 63.832031 24.382812 C 65.0625 23.921875 63.628906 21.796875 62.945312 23.058594 C 61.914062 21.882812 60.1875 21.398438 59.851562 19.523438 C 58.917969 20.109375 58.546875 19.304688 57.199219 19.964844 C 57.199219 20.554688 57.199219 21.144531 57.199219 21.734375 C 57.050781 21.734375 56.90625 21.734375 56.757812 21.734375 C 55.414062 22.394531 53.847656 20.398438 54.105469 22.175781 C 52.101562 21.777344 54.734375 21.109375 53.664062 20.847656 C 53.664062 20.410156 53.664062 19.964844 53.664062 19.523438 C 53.8125 19.523438 53.957031 19.523438 54.105469 19.523438 C 54.546875 19.523438 54.988281 19.523438 55.429688 19.523438 C 55.347656 19.167969 54.988281 19.082031 54.988281 18.640625 C 54.988281 18.492188 54.988281 18.347656 54.988281 18.199219 C 54.988281 18.050781 54.988281 17.90625 54.988281 17.757812 C 55.695312 17.3125 56.769531 17.339844 55.875 16.433594 C 56.167969 16.433594 56.464844 16.433594 56.757812 16.433594 C 58.402344 16.574219 58.199219 19.121094 59.410156 19.082031 C 59.914062 19.066406 59.652344 18.585938 59.410156 18.640625 C 60.011719 17.347656 60.546875 17.207031 58.96875 16.433594 C 58.96875 15.992188 58.96875 15.550781 58.96875 15.109375 C 58.3125 15.617188 57.855469 15.617188 57.199219 15.109375 C 57.199219 14.664062 57.199219 14.222656 57.199219 13.78125 C 57.347656 13.78125 57.492188 13.78125 57.640625 13.78125 Z M 67.808594 32.777344 C 67.808594 32.332031 68.167969 32.25 68.25 31.894531 C 67.730469 31.960938 66.996094 31.816406 66.925781 32.335938 C 67.75 34.339844 65.167969 32.9375 65.597656 34.542969 C 66.730469 34.496094 67.707031 34.292969 68.25 33.660156 C 67.90625 33.5625 67.738281 33.289062 67.808594 32.777344 Z M 42.171875 29.242188 C 39.4375 29.285156 41.320312 31.167969 42.171875 29.242188 Z M 45.707031 24.382812 C 45.609375 24.039062 45.695312 23.511719 45.265625 23.5 C 44.832031 24.855469 44.085938 22.992188 43.496094 23.058594 C 43.476562 23.667969 43.707031 24.027344 43.9375 24.382812 C 44 25.207031 44.230469 25.859375 44.824219 26.148438 C 44.316406 24.761719 45.515625 25.078125 45.707031 24.382812 Z M 46.589844 23.5 C 46.980469 25.378906 48.898438 22.699219 47.917969 22.175781 C 48.054688 23.195312 46.640625 22.664062 46.589844 23.5 Z M 49.242188 22.617188 C 47.902344 24.105469 50.878906 23.957031 49.242188 22.617188 Z M 51.011719 26.59375 C 52.363281 26.910156 52.621094 26.140625 53.664062 26.148438 C 52.957031 27.382812 55.574219 27.371094 55.429688 26.59375 C 54.410156 25.566406 54.832031 25.257812 53.664062 24.382812 C 53.785156 24.476562 53.511719 24.996094 53.222656 24.824219 C 52.949219 24.664062 53.257812 23.488281 52.335938 23.941406 C 52.191406 23.941406 52.042969 23.941406 51.894531 23.941406 C 50.746094 25.101562 52.609375 24.289062 52.335938 25.707031 C 51.816406 25.777344 51.082031 25.632812 51.011719 26.148438 C 49.246094 26.324219 51.542969 30.570312 50.570312 26.59375 C 50.578125 26.625 50.976562 26.566406 51.011719 26.59375 Z M 48.800781 28.800781 C 49.007812 27.417969 48.417969 26.828125 47.03125 27.035156 C 46.828125 28.417969 48.144531 28.277344 48.800781 28.800781 Z M 45.707031 27.476562 C 45.074219 28.558594 45.097656 31.214844 47.917969 31.007812 C 47.496094 29.515625 46.410156 28.6875 45.707031 27.476562 Z M 64.273438 36.75 C 65.183594 37.140625 66.257812 35.605469 65.15625 35.425781 C 65.050781 36.058594 64.429688 36.171875 64.273438 36.75 Z M 52.335938 42.9375 C 52.042969 42.9375 51.746094 42.9375 51.453125 42.9375 C 51.453125 43.230469 51.453125 43.523438 51.453125 43.820312 C 51.746094 43.820312 52.042969 43.820312 52.335938 43.820312 C 52.335938 43.523438 52.335938 43.230469 52.335938 42.9375 Z M 55.429688 18.199219 C 56.910156 18.597656 55.816406 19.1875 55.429688 19.964844 C 56.578125 20.046875 58.566406 18.726562 57.199219 17.757812 C 57.078125 19.308594 55.554688 16.648438 55.429688 18.199219 Z M 55.429688 18.199219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 46.148438 17.757812 C 45.433594 17.882812 45.386719 17.339844 44.824219 17.316406 C 44.867188 16.191406 46.472656 16.273438 47.03125 16.875 C 47.035156 17.316406 46.675781 17.398438 46.589844 17.757812 C 46.933594 17.855469 47.464844 17.769531 47.476562 18.199219 C 46.761719 18.324219 46.714844 17.78125 46.148438 17.757812 Z M 46.148438 17.757812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 42.171875 17.316406 C 43.09375 17.128906 43.34375 17.617188 43.9375 17.757812 C 43.78125 18.335938 43.160156 18.453125 43.054688 19.082031 C 42.277344 18.976562 42.046875 18.324219 42.171875 17.316406 Z M 42.171875 17.316406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 69.136719 22.175781 C 70.554688 21.789062 70.050781 23.320312 70.902344 23.5 C 70.484375 24.585938 69.164062 22.933594 69.136719 22.175781 Z M 69.136719 22.175781 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 71.34375 26.59375 C 70.300781 28.011719 69.558594 25.039062 71.34375 26.59375 Z M 71.34375 26.59375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 49.683594 16.433594 C 51.488281 16.464844 51.3125 14.523438 52.777344 14.222656 C 52.460938 15.574219 53.542969 15.523438 53.222656 16.875 C 53.480469 17.925781 50.582031 15.617188 51.011719 17.757812 C 51.304688 17.757812 51.601562 17.757812 51.894531 17.757812 C 51.699219 18.148438 51.507812 18.546875 51.011719 18.640625 C 51.011719 18.492188 51.011719 18.347656 51.011719 18.199219 C 50.363281 17.816406 49.609375 17.539062 49.683594 16.433594 Z M 49.683594 16.433594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 70.019531 18.199219 C 69 19.074219 69.527344 18.089844 68.691406 17.757812 C 68.757812 16.660156 70.1875 17.628906 70.460938 17.757812 C 70.433594 18.027344 70.394531 18.28125 70.019531 18.199219 Z M 70.019531 18.199219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 69.136719 39.84375 C 69.898438 39.074219 71.867188 39.355469 72.230469 40.285156 C 72.363281 42.164062 69.871094 40.734375 69.136719 40.726562 C 69.136719 40.433594 69.136719 40.136719 69.136719 39.84375 Z M 69.136719 39.84375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 68.25 45.585938 C 68.25 45.734375 68.25 45.882812 68.25 46.027344 C 67.183594 46.210938 67.289062 45.222656 66.039062 45.585938 C 65.964844 44.628906 67.609375 45.386719 68.25 45.144531 C 68.25 45.292969 68.25 45.4375 68.25 45.585938 Z M 68.25 45.585938 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 51.453125 51.328125 C 51.273438 52.820312 49.351562 51.578125 48.359375 51.328125 C 48.171875 50.40625 48.664062 50.160156 48.800781 49.5625 C 50.394531 49.441406 50 51.308594 51.453125 51.328125 Z M 51.453125 51.328125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 68.25 14.222656 C 68.25 14.8125 68.25 15.402344 68.25 15.992188 C 67.957031 15.992188 67.660156 15.992188 67.367188 15.992188 C 67.367188 15.402344 67.367188 14.8125 67.367188 14.222656 C 67.660156 14.222656 67.957031 14.222656 68.25 14.222656 Z M 68.25 14.222656 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 52.335938 18.640625 C 52.335938 18.347656 52.335938 18.050781 52.335938 17.757812 C 52.871094 17.90625 55.480469 18.859375 53.222656 19.082031 C 52.953125 19.109375 52.699219 19.148438 52.777344 19.523438 C 51.953125 19.546875 51.84375 19.183594 52.335938 18.640625 Z M 52.335938 18.640625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 73.113281 31.007812 C 73.167969 31.800781 72.574219 31.941406 72.671875 32.777344 C 71.835938 32.726562 72.363281 31.316406 71.34375 31.449219 C 71.480469 30.851562 72.453125 31.085938 73.113281 31.007812 Z M 73.113281 31.007812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 73.554688 43.820312 C 71.160156 43.894531 74.136719 40.917969 73.554688 43.820312 Z M 73.554688 43.820312 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <g clipPath="url(#f9fc25236f)">
                <path
                  fill="#7bdcb6"
                  d="M 628.515625 -0.101562 C 629.152344 -0.59375 629.597656 -0.578125 629.84375 0.339844 C 629.214844 0.378906 628.589844 0.414062 628.515625 -0.101562 Z M 628.515625 -0.101562 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <g clipPath="url(#f510b1b94a)">
                <path
                  fill="#7bdcb6"
                  d="M 623.65625 0.78125 C 623.632812 -0.402344 625.921875 1.933594 624.539062 2.105469 C 624.382812 1.527344 623.761719 1.414062 623.65625 0.78125 Z M 623.65625 0.78125 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <g clipPath="url(#525093b472)">
                <path
                  fill="#7bdcb6"
                  d="M 622.769531 -5.84375 C 622.796875 -6.113281 622.835938 -6.367188 623.214844 -6.285156 C 623.976562 -6.019531 623.179688 -4.191406 624.097656 -4.078125 C 624.476562 -4.433594 624.359375 -5.285156 624.980469 -5.402344 C 625.089844 -4.921875 625.859375 -5.101562 625.867188 -4.519531 C 625.867188 -4.222656 625.867188 -3.929688 625.867188 -3.636719 C 624.375 -3.605469 625.789062 -2.625 624.539062 -1.867188 C 624.625 -1.511719 624.984375 -1.425781 624.980469 -0.984375 C 625.582031 -1.417969 625.554688 -2.472656 626.308594 -2.75 C 626.25 -3.542969 626.847656 -3.683594 626.75 -4.519531 C 626.898438 -4.519531 627.042969 -4.519531 627.191406 -4.519531 C 627.71875 -5.683594 625.066406 -5.65625 627.191406 -5.84375 C 627.585938 -5.5 628.191406 -5.367188 628.960938 -5.402344 C 629.109375 -4.515625 628.867188 -4.019531 628.074219 -4.078125 C 628.035156 -2.871094 628.8125 -3.1875 628.074219 -2.308594 C 629.5 -2.210938 629.945312 -3.089844 631.613281 -2.75 C 631.613281 -2.308594 631.613281 -1.867188 631.613281 -1.425781 C 630.875 -1.425781 630.140625 -1.425781 629.402344 -1.425781 C 629.253906 -1.425781 629.105469 -1.425781 628.960938 -1.425781 C 627.578125 -1.039062 627.136719 0.285156 626.75 1.664062 C 625.824219 1.851562 625.578125 1.363281 624.980469 1.222656 C 627.0625 0.25 623.632812 0.347656 624.980469 -0.984375 C 624.539062 -0.984375 624.097656 -0.984375 623.65625 -0.984375 C 622.863281 -0.929688 622.722656 -1.523438 621.886719 -1.425781 C 621.753906 -3.230469 622.808594 -1.664062 623.65625 -1.867188 C 623.46875 -2.714844 623.496094 -3.769531 622.328125 -3.636719 C 621.785156 -3.828125 621.421875 -4.199219 621.445312 -4.960938 C 622.332031 -4.808594 622.828125 -5.050781 622.769531 -5.84375 Z M 622.769531 -5.84375 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <g clipPath="url(#ae8067616c)">
                <path
                  fill="#7bdcb6"
                  d="M 618.351562 1.222656 C 618.707031 0.992188 619.070312 0.761719 619.675781 0.78125 C 619.6875 1.210938 620.21875 1.125 620.5625 1.222656 C 620.617188 2.015625 620.019531 2.15625 620.117188 2.992188 C 619.230469 2.550781 618.328125 2.128906 617.464844 1.664062 C 617.734375 1.640625 617.988281 1.601562 617.910156 1.222656 C 618.054688 1.222656 618.203125 1.222656 618.351562 1.222656 Z M 618.351562 1.222656 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <g clipPath="url(#7dc1b6261e)">
                <path
                  fill="#7bdcb6"
                  d="M 617.023438 -0.101562 C 615.28125 0.167969 615.066406 -1.089844 614.816406 -2.308594 C 615.617188 -1.347656 617.546875 -1.507812 618.351562 -0.542969 C 619.742188 -0.328125 619.351562 -1.898438 621.003906 -1.425781 C 621.152344 -1.425781 621.296875 -1.425781 621.445312 -1.425781 C 621.570312 -0.417969 621.339844 0.234375 620.5625 0.339844 C 619.824219 0.339844 619.089844 0.339844 618.351562 0.339844 C 617.636719 0.464844 617.589844 -0.078125 617.023438 -0.101562 Z M 617.023438 -0.101562 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <path
                fill="#7bdcb6"
                d="M 623.214844 3.433594 C 623.214844 3.285156 623.214844 3.136719 623.214844 2.992188 C 624.289062 3.289062 625.5625 6.140625 623.214844 6.082031 C 622.871094 5.691406 622.738281 5.085938 622.769531 4.316406 C 622.769531 3.871094 623.128906 3.789062 623.214844 3.433594 Z M 623.214844 3.433594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 170.886719 161.421875 C 170.886719 161.714844 170.886719 162.011719 170.886719 162.304688 C 170.589844 162.304688 170.296875 162.304688 170 162.304688 C 170 162.011719 170 161.714844 170 161.421875 C 170.296875 161.421875 170.589844 161.421875 170.886719 161.421875 Z M 170.886719 161.421875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 186.355469 141.101562 C 186.734375 142.492188 188.027344 142.964844 188.125 144.636719 C 187.609375 144.5625 187.335938 144.734375 187.242188 145.078125 C 186.574219 144.03125 186.570312 143.445312 185.03125 144.195312 C 184.769531 142.601562 184.433594 141.378906 186.355469 141.101562 Z M 186.355469 141.101562 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 193.429688 146.402344 C 193.132812 146.402344 192.839844 146.402344 192.542969 146.402344 C 192.585938 144.753906 193.039062 145.144531 192.542969 143.753906 C 193.15625 144.464844 193.796875 145.152344 194.3125 145.960938 C 193.867188 145.960938 193.785156 146.320312 193.429688 146.402344 Z M 193.429688 146.402344 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 169.117188 154.355469 C 169.117188 154.058594 169.117188 153.765625 169.117188 153.46875 C 169.511719 153.125 170.117188 152.996094 170.886719 153.027344 C 170.453125 152.398438 171.328125 151.785156 171.328125 151.703125 C 171.339844 150.738281 170.5625 150.832031 170.445312 150.378906 C 170.214844 149.484375 171.660156 149.082031 170 149.054688 C 170.183594 147.542969 171.195312 148.492188 170.445312 146.84375 C 172.566406 147.199219 173.160156 146.027344 173.980469 145.078125 C 175.4375 145.332031 174.613281 146.746094 174.421875 147.726562 C 174.027344 147.925781 173.632812 148.117188 173.539062 148.609375 C 174.117188 148.769531 174.234375 149.390625 174.863281 149.496094 C 175.011719 149.496094 175.160156 149.496094 175.304688 149.496094 C 175.886719 148.964844 176 149.324219 176.632812 149.496094 C 177.277344 149.878906 178.34375 149.84375 177.957031 151.261719 C 178.546875 151.261719 179.136719 151.261719 179.726562 151.261719 C 180.648438 151.074219 180.898438 151.566406 181.496094 151.703125 C 181.496094 151.996094 181.496094 152.292969 181.496094 152.585938 C 180.058594 152.332031 179.4375 152.886719 178.398438 153.027344 C 178.382812 154.871094 181.570312 155.171875 182.820312 154.355469 C 182.816406 153.476562 181.613281 153.792969 181.9375 152.585938 C 182.917969 152.34375 182.566406 153.429688 183.261719 153.46875 C 184.078125 153.402344 183.535156 151.972656 184.144531 151.703125 C 186.132812 151.925781 186.066406 154.203125 188.566406 153.910156 C 187.476562 152.410156 186.769531 152.238281 186.796875 150.378906 C 186.492188 149.789062 185.621094 150.597656 184.589844 149.9375 C 184.589844 149.789062 184.589844 149.640625 184.589844 149.496094 C 184.671875 149.136719 185.03125 149.054688 185.03125 148.609375 C 187.148438 149.402344 186.453125 147.382812 187.242188 146.84375 C 187.535156 146.84375 187.832031 146.84375 188.125 146.84375 C 187.855469 147.257812 187.097656 148.472656 188.566406 148.167969 C 188.578125 148.597656 189.109375 148.511719 189.449219 148.609375 C 190.011719 148.703125 191.617188 149.894531 191.660156 149.054688 C 191.660156 148.757812 191.660156 148.464844 191.660156 148.167969 C 191.933594 147.558594 193.363281 148.101562 193.429688 147.285156 C 193.625 146.894531 193.816406 146.496094 194.3125 146.402344 C 193.730469 147.710938 193.921875 148.582031 195.195312 149.054688 C 194.859375 151.21875 191.054688 149.921875 191.21875 152.585938 C 189.832031 152.097656 190.050781 152.378906 189.007812 153.027344 C 189.441406 153.625 190.1875 153.910156 190.777344 154.355469 C 191.152344 153.402344 192.40625 153.328125 193.871094 153.46875 C 193.808594 154.003906 192.722656 153.976562 192.542969 154.355469 C 192.40625 154.644531 192.75 155.441406 192.542969 155.679688 C 192.296875 155.960938 191.429688 155.789062 191.21875 156.121094 C 191.113281 156.285156 192.054688 157.316406 190.777344 157.003906 C 191.011719 157.359375 191.238281 157.722656 191.21875 158.328125 C 190.503906 158.453125 190.457031 157.910156 189.894531 157.886719 C 189.894531 157.742188 189.894531 157.59375 189.894531 157.445312 C 189.378906 157.519531 189.105469 157.347656 189.007812 157.003906 C 189.523438 157.074219 189.796875 156.90625 189.894531 156.5625 C 191.109375 156.425781 190.824219 155.027344 189.449219 155.238281 C 189.214844 154.882812 188.988281 154.519531 189.007812 153.910156 C 188.925781 154.351562 187.074219 155.105469 188.125 155.238281 C 188.125 155.679688 188.125 156.121094 188.125 156.5625 C 187.933594 158.0625 187.171875 154.625 187.242188 157.003906 C 186.976562 157.445312 186.839844 158.785156 185.914062 159.65625 C 187.953125 160.21875 186.648438 157.441406 189.007812 158.328125 C 189.527344 158.402344 189.382812 159.132812 189.449219 159.65625 C 188.628906 158.535156 187.265625 160.585938 189.449219 160.097656 C 191.238281 161.394531 188.410156 160.53125 188.125 160.539062 C 187.644531 160.546875 187.078125 161.347656 186.796875 161.421875 C 186.847656 161.410156 183.144531 160.390625 183.703125 162.746094 C 183.433594 162.617188 182.003906 161.648438 181.9375 162.746094 C 181.28125 162.515625 180.820312 162.09375 180.167969 161.863281 C 180.167969 161.570312 180.167969 161.273438 180.167969 160.980469 C 179.632812 160.84375 178.644531 162.253906 179.726562 162.304688 C 179.359375 163.554688 180.347656 163.449219 180.167969 164.515625 C 178.515625 164.554688 178.910156 165.007812 177.515625 164.515625 C 177.578125 163.691406 177.808594 163.039062 178.398438 162.746094 C 177.625 160.933594 175.957031 161.71875 173.980469 161.863281 C 174.476562 163.253906 174.019531 162.863281 173.980469 164.515625 C 173.621094 164.429688 173.539062 164.070312 173.097656 164.070312 C 173.175781 163.695312 172.921875 163.65625 172.652344 163.628906 C 172.726562 163.113281 173.460938 163.257812 173.980469 163.1875 C 173.507812 161.441406 172.640625 163.300781 171.328125 163.1875 C 171.203125 162.410156 173.410156 161.820312 172.210938 161.421875 C 172.644531 160.183594 173.390625 162.0625 173.980469 160.980469 C 173.980469 160.683594 173.980469 160.390625 173.980469 160.097656 C 173.855469 159.070312 172.800781 159.082031 172.210938 159.65625 C 171.679688 159.074219 172.039062 158.960938 172.210938 158.328125 C 171.007812 159.292969 170.480469 158.1875 170.445312 160.097656 C 168.050781 160.15625 169.367188 156.894531 170.445312 156.5625 C 171.328125 156.5625 172.210938 156.5625 173.097656 156.5625 C 172.957031 155.523438 171 156.300781 171.328125 154.796875 C 170.773438 154.90625 170.882812 155.671875 171.328125 155.679688 C 171.199219 156.597656 170.132812 155.023438 170 156.5625 C 169.082031 156.433594 170.65625 155.367188 169.117188 155.238281 C 169.117188 154.941406 169.117188 154.648438 169.117188 154.355469 Z M 177.957031 156.5625 C 177.6875 156.972656 176.929688 158.191406 178.398438 157.886719 C 178.332031 157.367188 178.476562 156.632812 177.957031 156.5625 Z M 181.050781 156.5625 C 180.40625 156.945312 179.652344 157.222656 179.726562 158.328125 C 181.832031 158.285156 181.992188 160.1875 184.144531 160.097656 C 184.144531 159.214844 184.144531 158.328125 184.144531 157.445312 C 183.046875 157.378906 182.777344 158.140625 181.9375 158.328125 C 181.9375 158.183594 181.9375 158.035156 181.9375 157.886719 C 181.484375 157.816406 181.503906 155.191406 181.050781 156.5625 Z M 173.980469 151.261719 C 174.421875 152.621094 175.175781 150.769531 175.304688 150.378906 C 174.863281 150.378906 174.421875 150.378906 173.980469 150.378906 C 173.015625 150.296875 172.574219 150.738281 172.652344 151.703125 C 173.261719 151.722656 173.625 151.496094 173.980469 151.261719 Z M 176.191406 152.144531 C 175.527344 152.21875 174.558594 151.988281 174.421875 152.585938 C 175.058594 152.351562 175.5 154.308594 175.75 153.027344 C 176.507812 153.050781 176.878906 152.6875 177.074219 152.144531 C 176.78125 152.144531 176.484375 152.144531 176.191406 152.144531 Z M 185.03125 157.445312 C 185.792969 157.46875 186.164062 157.105469 186.355469 156.5625 C 185.710938 155.929688 184.957031 156.222656 185.03125 157.445312 Z M 189.449219 149.9375 C 188.84375 149.917969 188.480469 150.144531 188.125 150.378906 C 188.027344 150.035156 188.113281 149.507812 187.683594 149.496094 C 187.683594 150.082031 187.683594 150.671875 187.683594 151.261719 C 188.789062 151.335938 189.066406 150.582031 189.449219 149.9375 Z M 189.449219 149.9375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 189.007812 146.402344 C 189.007812 146.109375 189.007812 145.8125 189.007812 145.519531 C 189.636719 145.558594 190.261719 145.59375 190.335938 145.078125 C 190.746094 145.402344 191.003906 145.878906 191.21875 146.402344 C 191.453125 146.757812 191.679688 147.121094 191.660156 147.726562 C 191.511719 147.726562 191.367188 147.726562 191.21875 147.726562 C 189.804688 148.601562 190.386719 148.601562 189.894531 147.726562 C 189.972656 147.351562 189.71875 147.3125 189.449219 147.285156 C 189.523438 146.773438 189.355469 146.5 189.007812 146.402344 Z M 189.007812 146.402344 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 183.261719 148.167969 C 182.421875 147.339844 182.152344 148.121094 181.050781 148.167969 C 180.628906 146.921875 183.925781 145.988281 183.703125 147.726562 C 183.679688 147.996094 183.636719 148.25 183.261719 148.167969 Z M 183.261719 148.167969 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 191.21875 140.660156 C 190.675781 141.292969 189.699219 141.496094 188.566406 141.542969 C 188.816406 140.46875 188.945312 139.273438 190.335938 139.335938 C 190.183594 140.222656 190.425781 140.71875 191.21875 140.660156 Z M 191.21875 140.660156 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 182.820312 141.542969 C 183.125 143.011719 181.90625 142.253906 181.496094 141.984375 C 181.566406 141.46875 182.300781 141.613281 182.820312 141.542969 Z M 182.820312 141.542969 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 178.84375 145.519531 C 180.238281 145.300781 179.007812 147.710938 180.609375 147.285156 C 180.472656 147.886719 179.503906 147.652344 178.84375 147.726562 C 178.84375 147.285156 178.84375 146.84375 178.84375 146.402344 C 178.84375 146.109375 178.84375 145.8125 178.84375 145.519531 Z M 178.84375 145.519531 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 190.335938 143.308594 C 188.609375 143.878906 188.609375 141.855469 190.335938 142.425781 C 190.289062 142.921875 190.976562 143.113281 190.335938 143.308594 Z M 190.335938 143.308594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 175.304688 147.726562 C 175.648438 147.335938 175.78125 146.730469 175.75 145.960938 C 176.191406 145.960938 176.632812 145.960938 177.074219 145.960938 C 177.800781 146.648438 176.921875 147.683594 176.632812 148.609375 C 175.761719 148.742188 175.753906 148.015625 175.304688 147.726562 Z M 175.304688 147.726562 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 180.609375 150.820312 C 180.554688 150.027344 181.152344 149.886719 181.050781 149.054688 C 181.929688 149.351562 182.996094 150.519531 181.496094 150.820312 C 181.199219 150.820312 180.90625 150.820312 180.609375 150.820312 Z M 180.609375 150.820312 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 427.980469 184.515625 C 428.207031 183.863281 428.632812 183.402344 428.863281 182.75 C 429.644531 182.609375 429.652344 185.222656 428.421875 184.515625 C 428.273438 184.515625 428.125 184.515625 427.980469 184.515625 Z M 427.980469 184.515625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 406.320312 158.011719 C 407.675781 158.699219 405.195312 159.195312 405.433594 160.222656 C 404.769531 159.839844 405.558594 159.558594 404.992188 158.457031 C 405.621094 158.492188 406.246094 158.527344 406.320312 158.011719 Z M 406.320312 158.011719 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 420.023438 165.964844 C 420.105469 166.464844 420.464844 166.210938 420.464844 165.964844 C 420.839844 165.882812 420.882812 166.136719 420.90625 166.40625 C 420.082031 166.96875 422.671875 167.109375 421.347656 168.613281 C 422.257812 168.492188 421.765625 166.96875 422.675781 166.847656 C 422.820312 166.847656 422.96875 166.847656 423.117188 166.847656 C 422.882812 167.976562 422.53125 168.394531 423.558594 169.054688 C 423.558594 169.203125 423.558594 169.351562 423.558594 169.5 C 424.074219 169.570312 424.347656 169.402344 424.441406 169.054688 C 424.921875 168.945312 424.742188 168.179688 425.328125 168.171875 C 426.664062 167.054688 426.84375 169.765625 426.210938 170.824219 C 426.613281 171.890625 427.515625 169.824219 428.863281 170.382812 C 429.351562 172.488281 426.613281 171.371094 426.210938 172.589844 C 426.308594 173.152344 427.53125 173.167969 427.535156 172.589844 C 428.285156 173.464844 428.019531 175.347656 428.421875 176.566406 C 427.839844 177.097656 427.726562 176.738281 427.09375 176.566406 C 426.886719 177.507812 427.726562 177.40625 428.421875 177.449219 C 428.410156 178.488281 429.183594 178.75 428.863281 180.101562 C 429.152344 180.691406 429.808594 180.921875 430.632812 180.984375 C 430.664062 183.160156 428.898438 181.855469 427.535156 181.867188 C 427.535156 181.71875 427.535156 181.570312 427.535156 181.425781 C 429.230469 181.503906 427.699219 181.0625 427.980469 180.101562 C 427.566406 180.421875 427.308594 180.902344 427.09375 181.425781 C 426.207031 182.324219 427.289062 182.289062 427.535156 183.191406 C 426.503906 183.304688 427.28125 185.132812 427.535156 185.402344 C 426.9375 185.535156 427.171875 186.507812 427.09375 187.167969 C 426.359375 187.167969 425.621094 187.167969 424.882812 187.167969 C 424.402344 187.277344 424.585938 188.046875 424 188.050781 C 425.054688 189.488281 426.179688 190.679688 426.210938 192.027344 C 426.199219 192.457031 425.667969 192.367188 425.328125 192.46875 C 425.328125 191.878906 425.328125 191.289062 425.328125 190.703125 C 424.8125 190.628906 424.539062 190.796875 424.441406 191.144531 C 423.554688 190.992188 423.058594 191.234375 423.117188 192.027344 C 422.402344 191.835938 421.632812 193.671875 422.675781 193.792969 C 421.890625 194.773438 420.703125 195.355469 419.136719 195.558594 C 419.371094 195.914062 419.601562 196.277344 419.582031 196.886719 C 418.230469 196.566406 417.96875 197.335938 416.929688 197.328125 C 417.164062 197.683594 417.390625 198.042969 417.371094 198.652344 C 416.78125 198.652344 416.191406 198.652344 415.601562 198.652344 C 415.40625 198.257812 415.214844 197.863281 414.71875 197.769531 C 414.707031 198.199219 414.175781 198.109375 413.832031 198.210938 C 412.636719 198.703125 410.785156 199.074219 411.179688 196.886719 C 412.363281 198.105469 412.140625 196.363281 413.390625 196.445312 C 414.027344 196.542969 413.546875 197.761719 414.277344 197.769531 C 415.863281 196.578125 413.078125 196.054688 413.390625 194.675781 C 413.015625 194.59375 412.976562 194.847656 412.949219 195.117188 C 412.324219 195.082031 411.699219 195.046875 411.625 195.558594 C 411.277344 195.847656 411.171875 195.121094 411.179688 195.117188 C 410.570312 195.203125 411.097656 195.777344 410.738281 196.003906 C 410.195312 196.34375 408.058594 195.589844 408.972656 196.886719 C 407.945312 197.027344 407.273438 196.816406 406.761719 196.445312 C 408.609375 196.023438 407.164062 194.277344 408.972656 193.351562 C 406.417969 193.210938 405.214844 192.804688 402.785156 192.027344 C 402.136719 191.640625 401.382812 191.367188 401.457031 190.257812 C 401.777344 188.910156 400.695312 188.960938 401.015625 187.609375 C 400.660156 187.84375 400.296875 188.070312 399.6875 188.050781 C 399.367188 186.699219 400.453125 186.75 400.132812 185.402344 C 401.003906 183.875 398.625 183.457031 399.6875 183.191406 C 400.894531 182.792969 398.34375 182.203125 399.6875 181.425781 C 398.933594 181.40625 398.542969 181.753906 398.363281 182.308594 C 398.039062 181.566406 396.527344 179.773438 397.480469 179.214844 C 397.371094 178.4375 396.71875 178.210938 395.710938 178.332031 C 396.605469 177.425781 395.53125 177.449219 394.828125 177.007812 C 394.828125 176.714844 394.828125 176.417969 394.828125 176.125 C 395.613281 175.730469 395.949219 174.890625 397.480469 175.242188 C 396.839844 176.699219 397.550781 177.410156 398.363281 176.125 C 398.722656 176.207031 398.804688 176.566406 399.246094 176.566406 C 399.265625 175.808594 398.917969 175.421875 398.363281 175.242188 C 398.527344 174.488281 398.019531 174.40625 397.480469 174.355469 C 397.480469 173.769531 397.480469 173.179688 397.480469 172.589844 C 399.339844 172.039062 397.4375 170.78125 397.480469 169.5 C 397.835938 169.265625 398.195312 169.039062 398.804688 169.054688 C 398.804688 168.761719 398.804688 168.46875 398.804688 168.171875 C 398.460938 167.78125 398.328125 167.175781 398.363281 166.40625 C 398.292969 165.890625 398.460938 165.621094 398.804688 165.523438 C 399.707031 164.636719 399.671875 165.71875 400.574219 165.964844 C 400.574219 165.667969 400.574219 165.375 400.574219 165.082031 C 401.308594 164.203125 400.535156 164.519531 400.574219 163.3125 C 401.015625 163.316406 401.097656 162.957031 401.457031 162.871094 C 401.152344 164.339844 402.371094 163.585938 402.785156 163.3125 C 403.140625 163.621094 403.992188 164 404.109375 163.3125 C 405.050781 163.109375 404.953125 163.945312 404.992188 164.640625 C 406.257812 163.839844 406.269531 161.792969 407.644531 161.105469 C 409.558594 161.546875 410.097656 160.613281 411.179688 160.222656 C 411.179688 160.8125 411.179688 161.398438 411.179688 161.988281 C 412.097656 162.25 414.085938 161.441406 414.277344 162.429688 C 415.226562 162.058594 414.988281 160.492188 415.601562 159.78125 C 416.257812 160.011719 416.714844 160.433594 417.371094 160.664062 C 417.433594 162.589844 416.402344 163.507812 417.8125 164.640625 C 417.984375 165.984375 416.648438 166.886719 418.253906 167.289062 C 418.75 165.898438 418.292969 166.289062 418.253906 164.640625 C 418.546875 164.640625 418.84375 164.640625 419.136719 164.640625 C 419.519531 164.996094 419.402344 165.847656 420.023438 165.964844 Z M 408.972656 195.558594 C 410.398438 195.957031 409.59375 194.121094 410.296875 193.792969 C 409.132812 193.660156 409.15625 194.714844 408.972656 195.558594 Z M 408.972656 164.199219 C 408.976562 163.613281 409.746094 163.792969 409.855469 163.3125 C 408.949219 162.808594 407.75 164.007812 408.972656 164.199219 Z M 402.339844 166.40625 C 402.601562 166.617188 401.4375 166.722656 401.015625 166.40625 C 400.828125 168.210938 403.347656 167.222656 402.339844 166.40625 Z M 408.972656 169.054688 C 406.40625 168.589844 408.789062 170.972656 408.972656 169.054688 Z M 422.230469 191.144531 C 422.097656 190.125 423.507812 190.652344 423.558594 189.816406 C 422.832031 188.535156 421.390625 191.015625 422.230469 191.144531 Z M 415.601562 194.234375 C 414.414062 193.929688 414.75 195.148438 414.277344 195.558594 C 415.957031 194.910156 414.363281 197.535156 416.042969 196.886719 C 416.683594 195.214844 414.828125 196.039062 415.160156 194.675781 C 415.429688 194.652344 415.683594 194.609375 415.601562 194.234375 Z M 415.601562 194.234375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 400.132812 163.3125 C 399.609375 164.847656 397.214844 160.953125 399.246094 162.429688 C 399.339844 162.925781 399.738281 163.117188 400.132812 163.3125 Z M 400.132812 163.3125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 418.253906 163.757812 C 418.527344 163.363281 418.789062 162.964844 418.253906 162.871094 C 418.265625 162.441406 418.796875 162.53125 419.136719 162.429688 C 419.773438 163.078125 419.476562 163.832031 418.253906 163.757812 Z M 418.253906 163.757812 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 404.992188 156.246094 C 405.0625 157.34375 404.300781 157.613281 404.109375 158.457031 C 403.144531 158.390625 403.160156 157.339844 403.226562 156.246094 C 403.816406 156.246094 404.402344 156.246094 404.992188 156.246094 Z M 404.992188 156.246094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 403.226562 161.546875 C 403.335938 161.066406 404.105469 161.246094 404.109375 160.664062 C 404.539062 160.675781 404.453125 161.203125 404.550781 161.546875 C 403.855469 161.585938 404.207031 162.671875 403.226562 162.429688 C 403.226562 162.136719 403.226562 161.84375 403.226562 161.546875 Z M 403.226562 161.546875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 396.59375 184.515625 C 396.152344 184.515625 395.710938 184.515625 395.269531 184.515625 C 395.054688 183.125 396.625 183.515625 396.152344 181.867188 C 398.1875 182.765625 395.492188 183.089844 396.59375 184.515625 Z M 396.59375 184.515625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 399.246094 188.933594 C 398.953125 188.933594 398.65625 188.933594 398.363281 188.933594 C 398.363281 188.640625 398.363281 188.34375 398.363281 188.050781 C 398.65625 188.050781 398.953125 188.050781 399.246094 188.050781 C 399.246094 188.34375 399.246094 188.640625 399.246094 188.933594 Z M 399.246094 188.933594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 428.863281 188.933594 C 431.199219 189.195312 428.542969 190.0625 428.421875 189.375 C 428.363281 189.042969 428.578125 188.902344 428.863281 188.933594 Z M 428.863281 188.933594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 427.09375 191.585938 C 427.277344 189.671875 429.660156 192.050781 427.09375 191.585938 Z M 427.09375 191.585938 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 403.667969 193.351562 C 405.214844 192.882812 404.199219 195.007812 403.226562 194.675781 C 403.226562 194.382812 403.226562 194.085938 403.226562 193.792969 C 403.496094 193.769531 403.75 193.726562 403.667969 193.351562 Z M 403.667969 193.351562 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 399.6875 161.546875 C 399.484375 160.605469 400.320312 160.707031 401.015625 160.664062 C 401.035156 161.273438 400.808594 161.632812 400.574219 161.988281 C 400.214844 161.90625 400.132812 161.546875 399.6875 161.546875 Z M 399.6875 161.546875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#eece38"
                d="M 397.480469 172.148438 C 395.546875 171.984375 395.867188 174.070312 393.5 173.472656 C 393.285156 172.078125 394.296875 171.914062 393.941406 170.382812 C 394.933594 170.308594 396.855469 168.921875 397.035156 169.5 C 395.847656 170.648438 397.578125 170.832031 397.480469 172.148438 Z M 397.480469 172.148438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 556.589844 386.613281 C 556.886719 386.613281 557.179688 386.613281 557.476562 386.613281 C 557.476562 386.90625 557.476562 387.203125 557.476562 387.496094 C 557.179688 387.496094 556.886719 387.496094 556.589844 387.496094 C 556.589844 387.203125 556.589844 386.90625 556.589844 386.613281 Z M 556.589844 386.613281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 553.496094 358.34375 C 553.871094 358.261719 553.914062 358.515625 553.9375 358.785156 C 554.71875 358.394531 554.667969 356.824219 555.707031 357.898438 C 555.695312 356.292969 553.40625 356.960938 553.9375 354.808594 C 555.300781 354.480469 554.789062 356.019531 556.148438 355.691406 C 556.019531 356.460938 557.863281 357.242188 557.476562 355.691406 C 559.027344 355.128906 557.496094 356.976562 559.683594 356.574219 C 560.238281 356.472656 560.609375 355.210938 561.453125 354.367188 C 561.882812 354.378906 561.796875 354.90625 561.894531 355.25 C 562.019531 355.964844 561.476562 356.011719 561.453125 356.574219 C 561.09375 356.660156 561.011719 357.019531 560.570312 357.015625 C 560.429688 357.796875 563.046875 357.804688 562.335938 356.574219 C 562.695312 356.492188 562.777344 356.132812 563.222656 356.132812 C 563.515625 357.738281 565.792969 356.851562 566.316406 356.132812 C 566.328125 356.5625 566.855469 356.476562 567.199219 356.574219 C 567.253906 355.78125 566.660156 355.644531 566.757812 354.808594 C 567.410156 355.039062 567.871094 355.460938 568.527344 355.691406 C 568.441406 356.050781 568.082031 356.132812 568.085938 356.574219 C 567.605469 356.683594 567.785156 357.453125 567.199219 357.460938 C 567.050781 357.460938 566.90625 357.460938 566.757812 357.460938 C 566.71875 358.664062 567.496094 358.347656 566.757812 359.226562 C 566.632812 360.230469 566.863281 360.886719 567.640625 360.992188 C 567.640625 360.550781 567.640625 360.109375 567.640625 359.667969 C 567.652344 359.238281 568.183594 359.324219 568.527344 359.226562 C 569.003906 359.335938 568.824219 360.105469 569.410156 360.109375 C 569.328125 360.484375 569.582031 360.527344 569.851562 360.550781 C 570.175781 360.964844 570.65625 361.21875 571.179688 361.433594 C 571.179688 361.730469 571.179688 362.023438 571.179688 362.316406 C 571.300781 363.03125 570.761719 363.078125 570.734375 363.644531 C 569.574219 363.511719 570.386719 365.355469 568.96875 364.96875 C 569.367188 365.746094 569.957031 366.335938 570.734375 366.734375 C 570.746094 367.164062 571.277344 367.078125 571.621094 367.175781 C 571.546875 368.136719 573.1875 367.375 573.828125 367.617188 C 573.914062 367.976562 574.273438 368.058594 574.273438 368.5 C 574.273438 368.945312 574.273438 369.386719 574.273438 369.828125 C 572.609375 370.160156 572.777344 368.671875 572.0625 368.058594 C 571.707031 368.292969 571.34375 368.519531 570.734375 368.5 C 571.796875 369.0625 572.039062 370.4375 573.828125 370.269531 C 573.828125 370.417969 573.828125 370.5625 573.828125 370.710938 C 574.253906 371.53125 572.503906 372.1875 573.828125 372.476562 C 574.195312 373.726562 573.207031 373.621094 573.386719 374.6875 C 571.644531 374.121094 572.238281 375.894531 571.621094 376.453125 C 569.859375 376.835938 571.429688 379.210938 572.0625 377.335938 C 572.355469 377.335938 572.652344 377.335938 572.945312 377.335938 C 573.140625 377.976562 573.332031 377.292969 573.828125 377.335938 C 574.484375 378.152344 576.113281 377.996094 576.039062 379.546875 C 575.597656 379.546875 575.15625 379.546875 574.714844 379.546875 C 573.835938 379.550781 574.152344 380.75 572.945312 380.429688 C 572.066406 378.988281 571.933594 381.992188 571.179688 380.429688 C 571.570312 380.234375 571.96875 380.039062 572.0625 379.546875 C 573.425781 379.609375 571.101562 377.75 571.179688 379.101562 C 570.820312 379.019531 570.738281 378.660156 570.292969 378.660156 C 570.210938 378.304688 569.851562 378.222656 569.851562 377.777344 C 569.25 377.914062 569.484375 378.882812 569.410156 379.546875 C 569.921875 379.617188 570.195312 379.449219 570.292969 379.101562 C 571.761719 379.246094 569.128906 381.03125 570.734375 381.3125 C 570.816406 381.6875 570.5625 381.730469 570.292969 381.753906 C 569.105469 380.839844 567.558594 382.386719 569.851562 382.195312 C 569.78125 382.710938 569.949219 382.980469 570.292969 383.078125 C 570.46875 384.136719 568.28125 382.832031 568.96875 384.402344 C 568.589844 384.324219 568.550781 384.578125 568.527344 384.847656 C 567.222656 383.878906 568.375 382.433594 566.757812 381.3125 C 566.203125 381.421875 566.3125 382.191406 566.757812 382.195312 C 565.289062 382.15625 564.480469 383.96875 563.664062 385.730469 C 563.015625 384.703125 562.261719 386.589844 562.335938 384.847656 C 560.925781 384.582031 560.96875 385.675781 560.128906 384.847656 C 559.980469 384.847656 559.832031 384.847656 559.683594 384.847656 C 559.683594 384.402344 559.683594 383.960938 559.683594 383.519531 C 559.171875 383.449219 558.898438 383.617188 558.800781 383.960938 C 557.394531 383.773438 558.714844 385.199219 557.917969 385.730469 C 557.03125 386.3125 555.941406 386.191406 554.824219 385.289062 C 554.902344 384.910156 554.648438 384.871094 554.378906 384.847656 C 553.257812 383.269531 551.554688 383.597656 549.960938 383.078125 C 549.886719 382.566406 550.058594 382.292969 550.402344 382.195312 C 552.25 382.292969 551.585938 380.5625 550.402344 381.753906 C 550.046875 381.519531 549.683594 381.292969 549.074219 381.3125 C 549.160156 380.953125 549.519531 380.871094 549.519531 380.429688 C 549.664062 380.429688 549.8125 380.429688 549.960938 380.429688 C 550.929688 379.078125 550.871094 379.019531 549.519531 379.988281 C 549.363281 379.480469 548.742188 378.867188 548.632812 379.546875 C 548.339844 379.546875 548.042969 379.546875 547.75 379.546875 C 546.578125 378.519531 548.921875 378.363281 547.75 377.335938 C 547.152344 377.261719 546.867188 379.582031 546.425781 378.21875 C 545.992188 377.621094 544.933594 377.648438 544.65625 376.894531 C 545.371094 374.4375 545.800781 370.757812 544.214844 368.5 C 545.566406 366.6875 545.320312 365.632812 545.097656 362.761719 C 545.457031 362.675781 545.539062 362.316406 545.980469 362.316406 C 546.761719 362.210938 546.988281 361.558594 546.867188 360.550781 C 546.128906 359.609375 547.972656 359.316406 548.191406 358.785156 C 548.394531 358.292969 547.777344 358.484375 547.75 358.34375 C 547.652344 357.847656 548.183594 358.035156 548.191406 357.898438 C 548.28125 356.605469 548.359375 355.8125 549.074219 354.808594 C 549.398438 355.003906 549.960938 355.195312 549.960938 355.691406 C 549.960938 356.113281 549.082031 356.445312 549.074219 356.574219 C 549.050781 357.144531 549.96875 358.292969 549.519531 359.667969 C 548.234375 360.050781 549.023438 360.328125 549.074219 361.433594 C 550.640625 361.386719 548.136719 359.972656 549.519531 360.109375 C 549.875 359.875 550.238281 359.648438 550.84375 359.667969 C 550.3125 360.246094 550.671875 360.363281 550.84375 360.992188 C 551.871094 361.132812 552.542969 360.921875 553.054688 360.550781 C 552.890625 359.789062 551.71875 357.820312 552.613281 357.460938 C 552.808594 357.851562 553 358.25 553.496094 358.34375 Z M 567.199219 363.199219 C 568.164062 363.28125 568.605469 362.839844 568.527344 361.875 C 567.5625 361.796875 567.121094 362.238281 567.199219 363.199219 Z M 552.171875 364.96875 C 552.117188 364.515625 554.078125 364.074219 552.613281 363.644531 C 552.664062 364.09375 550.707031 364.535156 552.171875 364.96875 Z M 569.851562 371.152344 C 569.410156 371.152344 568.96875 371.152344 568.527344 371.152344 C 568.285156 372.753906 570.089844 372.753906 569.851562 371.152344 Z M 546.867188 375.128906 C 547.429688 375.105469 547.476562 374.5625 548.191406 374.6875 C 548.570312 376.09375 547.496094 376.050781 547.308594 376.894531 C 548.144531 376.992188 548.28125 376.398438 549.074219 376.453125 C 548.628906 375.199219 549.25 372.566406 547.75 373.359375 C 548.363281 373.402344 548.214844 374.488281 547.308594 374.246094 C 546.121094 373.941406 546.453125 375.15625 545.980469 375.570312 C 546.324219 375.46875 546.855469 375.558594 546.867188 375.128906 Z M 554.824219 374.246094 C 554.527344 374.246094 554.234375 374.246094 553.9375 374.246094 C 553.941406 374.6875 553.582031 374.769531 553.496094 375.128906 C 554.0625 375.152344 554.109375 375.695312 554.824219 375.570312 C 554.824219 375.128906 554.824219 374.6875 554.824219 374.246094 Z M 555.265625 383.519531 C 555.1875 384.628906 556.253906 384.59375 556.589844 385.289062 C 556.714844 384.132812 556.742188 383.078125 555.265625 383.519531 Z M 555.265625 383.519531 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 572.503906 362.316406 C 573.015625 362.390625 573.289062 362.21875 573.386719 361.875 C 573.386719 361.730469 573.386719 361.582031 573.386719 361.433594 C 575.734375 362.46875 572.335938 362.621094 572.945312 364.527344 C 573.125 365.378906 574.96875 364.566406 574.273438 366.292969 C 573.085938 366.695312 571.921875 366.695312 570.734375 366.292969 C 570.015625 366.492188 570.015625 363.886719 570.734375 364.085938 C 570.890625 364.703125 571.511719 364.121094 571.621094 363.644531 C 572.226562 363.199219 571.429688 362.914062 572.503906 362.316406 Z M 572.503906 362.316406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 575.15625 372.917969 C 575.261719 372.089844 575.882812 373.167969 576.039062 372.476562 C 575.769531 372.453125 575.515625 372.410156 575.597656 372.035156 C 575.890625 372.035156 576.1875 372.035156 576.480469 372.035156 C 576.492188 372.464844 577.023438 372.378906 577.367188 372.476562 C 577.695312 373.839844 575.84375 373.015625 576.480469 374.6875 C 575.558594 374.871094 575.3125 374.382812 574.714844 374.246094 C 575.5 373.347656 576.511719 373.953125 575.15625 372.917969 Z M 575.15625 372.917969 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 578.691406 367.617188 C 578.148438 367.425781 577.785156 367.054688 577.808594 366.292969 C 578.75 366.085938 578.648438 366.925781 578.691406 367.617188 Z M 578.691406 367.617188 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 574.273438 367.617188 C 574.273438 367.472656 574.273438 367.324219 574.273438 367.175781 C 575.3125 365.839844 576.484375 368.082031 574.273438 367.617188 Z M 574.273438 367.617188 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 568.085938 387.054688 C 568.085938 386.757812 568.085938 386.464844 568.085938 386.171875 C 568.378906 386.171875 568.671875 386.171875 568.96875 386.171875 C 568.96875 386.464844 568.96875 386.757812 568.96875 387.054688 C 568.671875 387.054688 568.378906 387.054688 568.085938 387.054688 Z M 568.085938 387.054688 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 563.664062 386.613281 C 563.667969 387.492188 564.871094 387.175781 564.546875 388.378906 C 563.789062 388.398438 563.402344 388.050781 563.222656 387.496094 C 563.320312 387.152344 563.234375 386.625 563.664062 386.613281 Z M 563.664062 386.613281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 571.621094 389.703125 C 571.375 388.800781 572.464844 388.652344 572.503906 389.261719 C 572.503906 389.707031 572.863281 389.789062 572.945312 390.144531 C 572.335938 390.164062 571.976562 389.9375 571.621094 389.703125 Z M 571.621094 389.703125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 569.410156 358.785156 C 568.765625 358.398438 567.699219 358.433594 568.085938 357.015625 C 568.730469 357.402344 569.796875 357.367188 569.410156 358.785156 Z M 569.410156 358.785156 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 570.734375 360.550781 C 570.109375 358.65625 573.671875 361.011719 572.503906 360.992188 C 572.160156 361.089844 571.988281 361.363281 572.0625 361.875 C 571.914062 361.875 571.765625 361.875 571.621094 361.875 C 571.238281 361.519531 571.355469 360.667969 570.734375 360.550781 Z M 570.734375 360.550781 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 577.808594 363.199219 C 577.296875 363.574219 576.621094 363.785156 575.597656 363.644531 C 575.597656 362.90625 575.597656 362.171875 575.597656 361.433594 C 577.253906 361.101562 577.753906 361.933594 577.808594 363.199219 Z M 577.808594 363.199219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 330.816406 339.117188 C 330.695312 338.40625 331.234375 338.359375 331.257812 337.792969 C 332.121094 337.574219 332.851562 339.984375 331.257812 339.558594 C 331.234375 339.289062 331.195312 339.039062 330.816406 339.117188 Z M 330.816406 339.117188 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 351.59375 363.855469 C 352.15625 363.832031 352.203125 363.289062 352.917969 363.414062 C 353.082031 364.164062 352.574219 364.246094 352.035156 364.296875 C 351.886719 364.296875 351.742188 364.296875 351.59375 364.296875 C 351.59375 364.148438 351.59375 364.003906 351.59375 363.855469 Z M 351.59375 363.855469 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 347.613281 367.390625 C 348.492188 367.382812 348.175781 366.183594 349.382812 366.503906 C 349.382812 366.945312 349.382812 367.390625 349.382812 367.832031 C 348.941406 367.832031 348.5 367.832031 348.054688 367.832031 C 347.789062 367.804688 347.535156 367.765625 347.613281 367.390625 Z M 347.613281 367.390625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 346.289062 335.585938 C 346.070312 333.777344 347.8125 335.519531 346.730469 336.027344 C 346.355469 336.109375 346.3125 335.855469 346.289062 335.585938 Z M 346.289062 335.585938 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 336.121094 336.027344 C 336.316406 336.417969 336.511719 336.816406 337.007812 336.910156 C 336.933594 336.394531 337.101562 336.125 337.449219 336.027344 C 337.71875 336.4375 338.476562 337.65625 337.007812 337.351562 C 335.800781 337.03125 336.117188 338.230469 335.238281 338.234375 C 333.859375 337.863281 333.566406 337.089844 335.679688 337.351562 C 335.640625 336.726562 335.605469 336.101562 336.121094 336.027344 Z M 336.121094 336.027344 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 346.289062 336.910156 C 346.382812 336.375 346.777344 336.636719 347.171875 336.910156 C 346.339844 337.6875 347.777344 338.277344 346.289062 338.675781 C 346.289062 338.085938 346.289062 337.5 346.289062 336.910156 Z M 346.289062 336.910156 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 344.519531 337.351562 C 344.933594 337.824219 346.152344 337.488281 345.847656 338.675781 C 345.628906 339.679688 348.285156 340 347.171875 340.441406 C 347.183594 340.875 347.714844 340.785156 348.054688 340.886719 C 348.164062 341.367188 348.933594 341.183594 348.941406 341.769531 C 347.570312 341.128906 347.222656 341.839844 346.289062 342.652344 C 346.335938 343.734375 347.75 342.746094 347.613281 342.210938 C 348.910156 342.585938 347.351562 343.632812 347.613281 344.417969 C 348.390625 344.015625 348.421875 342.871094 348.941406 342.210938 C 349.234375 342.210938 349.53125 342.210938 349.824219 342.210938 C 349.972656 342.210938 350.117188 342.210938 350.265625 342.210938 C 351.230469 343.132812 350.046875 343.472656 350.265625 344.859375 C 351.175781 344.738281 351.148438 343.679688 351.59375 343.09375 C 352.71875 343.148438 353.308594 343.738281 353.359375 344.859375 C 352.230469 344.839844 352.824219 345.191406 352.917969 345.746094 C 352.207031 345.554688 351.433594 347.390625 352.476562 347.511719 C 352.671875 347.902344 352.863281 348.300781 353.359375 348.394531 C 352.285156 349.523438 354.066406 350.285156 355.128906 350.605469 C 354.753906 351.257812 354.015625 351.554688 352.917969 351.488281 C 352.496094 352.308594 354.242188 352.964844 352.917969 353.253906 C 352.542969 353.171875 352.503906 353.425781 352.476562 353.695312 C 351.636719 353.503906 351.367188 352.746094 350.265625 352.8125 C 350.449219 353.921875 351.777344 354.839844 352.476562 354.136719 C 352.625 354.136719 352.769531 354.136719 352.917969 354.136719 C 352.957031 355.34375 352.183594 355.027344 352.917969 355.90625 C 353.519531 355.765625 353.285156 354.796875 353.359375 354.136719 C 354.792969 354.453125 353.644531 356.660156 354.246094 356.789062 C 354.539062 356.789062 354.835938 356.789062 355.128906 356.789062 C 355.628906 357.910156 357.304688 357.851562 357.339844 359.4375 C 356.75 359.4375 356.160156 359.4375 355.570312 359.4375 C 355.570312 358.847656 355.570312 358.261719 355.570312 357.671875 C 353.917969 358.546875 352.53125 356.960938 352.035156 358.996094 C 351.554688 358.886719 351.734375 358.117188 351.152344 358.113281 C 351.042969 358.59375 350.273438 358.414062 350.265625 358.996094 C 349.972656 358.996094 349.675781 358.996094 349.382812 358.996094 C 349.289062 360.5625 351.457031 359.871094 351.152344 361.644531 C 350.921875 362.300781 350.496094 362.761719 350.265625 363.414062 C 349.679688 362.839844 348.621094 362.832031 348.5 363.855469 C 348.789062 365.179688 349.445312 363.433594 350.265625 363.855469 C 350.90625 365.523438 349.050781 364.703125 349.382812 366.0625 C 348.058594 366.097656 347.140625 364.765625 348.054688 363.855469 C 348.066406 363.675781 346.550781 363.257812 346.289062 363.414062 C 345.304688 363.996094 346.621094 364.234375 345.847656 364.738281 C 345.265625 365.269531 345.152344 364.910156 344.519531 364.738281 C 344.769531 365.375 345.210938 365.816406 345.847656 366.0625 C 346.222656 365.984375 346.261719 366.238281 346.289062 366.503906 C 346.289062 366.652344 346.289062 366.800781 346.289062 366.945312 C 345.089844 365.742188 345.1875 368.089844 343.636719 367.832031 C 343.722656 367.472656 344.082031 367.390625 344.078125 366.945312 C 344.226562 366.945312 344.371094 366.945312 344.519531 366.945312 C 344.558594 365.742188 343.785156 366.058594 344.519531 365.179688 C 343.894531 365.140625 343.269531 365.105469 343.195312 365.621094 C 343.234375 366.878906 342.8125 366.835938 341.867188 367.390625 C 340.832031 367.992188 341.570312 369.941406 340.101562 368.714844 C 340.0625 369.339844 340.027344 369.964844 340.542969 370.039062 C 339.480469 370.316406 337.570312 370.402344 335.238281 370.480469 C 334.71875 370.550781 334.863281 371.285156 334.796875 371.804688 C 333.730469 371.988281 333.835938 371 332.585938 371.363281 C 333.128906 370.4375 333.808594 369.640625 334.355469 368.714844 C 336.003906 368.242188 335.613281 369.8125 337.007812 369.597656 C 337.925781 371.183594 339.902344 368.402344 337.449219 368.714844 C 336.109375 367.886719 336.207031 368.367188 334.796875 367.832031 C 334.753906 367.503906 333.070312 367.503906 333.027344 367.832031 C 332.390625 368.808594 331.949219 367.273438 331.703125 368.273438 C 331.554688 368.273438 331.40625 368.273438 331.257812 368.273438 C 331.867188 368.84375 331.699219 370.191406 331.703125 371.363281 C 330.019531 372.015625 331.613281 369.390625 329.933594 370.039062 C 331.6875 368.667969 329.671875 368.265625 329.933594 366.0625 C 328.726562 366.023438 329.042969 366.800781 328.164062 366.0625 C 327.449219 365.746094 327.449219 368.148438 328.164062 367.832031 C 328.246094 368.207031 327.992188 368.246094 327.722656 368.273438 C 327.347656 368.191406 327.304688 368.445312 327.28125 368.714844 C 325.984375 368.339844 327.546875 367.292969 327.28125 366.503906 C 326.898438 365.199219 326.621094 367.53125 325.511719 366.945312 C 325.429688 366.589844 325.070312 366.507812 325.070312 366.0625 C 325.015625 364.839844 324.226562 364.546875 325.511719 365.179688 C 325.511719 364.738281 325.511719 364.296875 325.511719 363.855469 C 325.597656 363.496094 325.957031 363.414062 325.957031 362.972656 C 323.914062 362.570312 323.046875 364.347656 322.417969 362.53125 C 323.015625 362.097656 323.300781 361.351562 323.746094 360.761719 C 322.765625 360.519531 323.117188 361.605469 322.417969 361.644531 C 322.042969 361.566406 322.003906 361.820312 321.976562 362.089844 C 320.503906 361.617188 321.949219 360.75 321.09375 359.4375 C 320.292969 358.175781 318.875 357.53125 318 356.34375 C 317.550781 356.632812 317.542969 357.359375 316.671875 357.230469 C 316.347656 355.722656 318.300781 356.5 318.441406 355.460938 C 318.589844 355.460938 318.734375 355.460938 318.882812 355.460938 C 318.945312 356.285156 319.171875 356.9375 319.765625 357.230469 C 320.582031 356.558594 319.59375 355.730469 318.882812 354.578125 C 318.933594 353.351562 320.421875 354.234375 321.976562 353.253906 C 322.332031 353.03125 322.152344 352.558594 322.417969 352.371094 C 322.40625 352.378906 323.96875 352.167969 323.304688 350.605469 C 324.988281 349.554688 325.960938 350.535156 327.722656 349.71875 C 327.796875 349.207031 327.625 348.933594 327.28125 348.835938 C 326.882812 347.347656 326.292969 348.785156 325.511719 347.953125 C 324.957031 347.84375 325.066406 347.074219 325.511719 347.070312 C 326.171875 348.527344 326.035156 345.589844 327.28125 346.1875 C 327.753906 347.691406 327.417969 344.957031 328.609375 345.746094 C 328.625 344.988281 328.277344 344.601562 327.722656 344.417969 C 327.957031 344.0625 328.183594 343.703125 328.164062 343.09375 C 327.808594 343.328125 327.449219 343.554688 326.839844 343.535156 C 326.839844 343.976562 326.839844 344.417969 326.839844 344.859375 C 326.839844 345.15625 326.839844 345.449219 326.839844 345.746094 C 325.9375 346.632812 325.972656 345.550781 325.070312 345.304688 C 325.253906 344.238281 324.265625 344.34375 324.628906 343.09375 C 326.015625 342.542969 327.695312 341.804688 328.609375 343.09375 C 329.054688 342.808594 329.066406 342.078125 329.933594 342.210938 C 331.328125 341.996094 330.933594 343.566406 332.585938 343.09375 C 331.394531 342.8125 331.34375 341.390625 329.933594 341.328125 C 329.425781 341.171875 328.8125 340.550781 329.492188 340.441406 C 330.558594 340.261719 330.453125 341.25 331.703125 340.886719 C 332.605469 341.203125 333.449219 342.269531 334.355469 341.328125 C 334.675781 339.976562 333.589844 340.027344 333.910156 338.675781 C 334.355469 338.675781 334.796875 338.675781 335.238281 338.675781 C 335.667969 338.6875 335.582031 339.21875 335.679688 339.558594 C 335.605469 340.914062 338.238281 339.363281 336.5625 339.117188 C 336.484375 338.742188 336.738281 338.703125 337.007812 338.675781 C 338.558594 339.5 338.460938 338.339844 339.660156 337.792969 C 339.851562 338.449219 340.222656 337.621094 340.984375 337.792969 C 340.609375 339.640625 342.179688 339.542969 342.753906 340.441406 C 343.742188 339.8125 343.597656 338.046875 344.519531 337.351562 Z M 349.382812 361.203125 C 349.324219 361.148438 348.585938 361.175781 348.5 361.203125 C 346.601562 361.835938 350.253906 362.074219 349.382812 361.203125 Z M 349.824219 348.835938 C 350.3125 349.902344 352.117188 348.144531 351.152344 347.953125 C 351.144531 348.683594 349.925781 348.199219 349.824219 348.835938 Z M 322.859375 354.136719 C 321.117188 353.832031 321.414062 355.996094 322.859375 355.90625 C 322.859375 355.316406 322.859375 354.726562 322.859375 354.136719 Z M 321.535156 357.671875 C 321.226562 357.628906 322.019531 357 321.976562 357.230469 C 321.992188 357.148438 320.210938 355.320312 321.09375 356.789062 C 321.308594 357.148438 321.015625 357.605469 321.535156 357.671875 Z M 321.535156 357.671875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 351.59375 362.089844 C 351.949219 361.855469 352.308594 361.628906 352.917969 361.644531 C 353 362.023438 352.746094 362.0625 352.476562 362.089844 C 351.890625 362.09375 352.074219 362.863281 351.59375 362.972656 C 351.59375 362.675781 351.59375 362.382812 351.59375 362.089844 Z M 351.59375 362.089844 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 321.976562 366.0625 C 320.5 367.429688 320.542969 364.523438 321.535156 363.855469 C 323.003906 364 320.371094 365.78125 321.976562 366.0625 Z M 321.976562 366.0625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 323.746094 366.0625 C 323.390625 365.832031 323.027344 365.601562 322.417969 365.621094 C 322.820312 364.144531 323.40625 365.238281 324.1875 365.621094 C 324.164062 365.890625 324.121094 366.144531 323.746094 366.0625 Z M 323.746094 366.0625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 346.730469 366.945312 C 346.878906 366.945312 347.023438 366.945312 347.171875 366.945312 C 347.296875 367.660156 346.757812 367.707031 346.730469 368.273438 C 346.894531 369.023438 346.386719 369.105469 345.847656 369.15625 C 345.925781 368.78125 345.675781 368.738281 345.402344 368.714844 C 345.402344 368.566406 345.402344 368.417969 345.402344 368.273438 C 345.550781 368.273438 345.699219 368.273438 345.847656 368.273438 C 346.402344 368.089844 346.75 367.703125 346.730469 366.945312 Z M 346.730469 366.945312 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 344.960938 336.46875 C 344.800781 335.714844 345.308594 335.636719 345.847656 335.585938 C 345.847656 335.878906 345.847656 336.171875 345.847656 336.46875 C 345.550781 336.46875 345.257812 336.46875 344.960938 336.46875 Z M 344.960938 336.46875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 354.246094 344.859375 C 354.539062 342.835938 356.921875 345.214844 354.246094 344.859375 Z M 354.246094 344.859375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 319.765625 352.8125 C 319.167969 352.675781 319.402344 351.707031 319.324219 351.046875 C 320.351562 351.167969 320.339844 352.226562 319.765625 352.8125 Z M 319.765625 352.8125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 352.917969 340.441406 C 352.207031 341.144531 351.519531 340.617188 350.707031 340.441406 C 350.824219 339.410156 352.652344 340.191406 352.917969 340.441406 Z M 352.917969 340.441406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#dfa6ce"
                d="M 343.636719 372.246094 C 342.671875 372.328125 342.230469 371.886719 342.308594 370.921875 C 343.273438 370.84375 343.714844 371.285156 343.636719 372.246094 Z M 343.636719 372.246094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 145.902344 467.199219 C 145.359375 467.007812 144.996094 466.632812 145.019531 465.875 C 145.8125 465.820312 145.953125 466.414062 146.785156 466.316406 C 146.679688 466.796875 145.90625 466.617188 145.902344 467.199219 Z M 145.902344 467.199219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 167.121094 491.054688 C 167.121094 490.90625 167.121094 490.757812 167.121094 490.609375 C 167.601562 490.71875 167.417969 491.488281 168.003906 491.496094 C 167.992188 491.925781 167.464844 491.835938 167.121094 491.9375 C 167.121094 491.640625 167.121094 491.347656 167.121094 491.054688 Z M 167.121094 491.054688 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 164.910156 493.261719 C 165.003906 492.726562 165.402344 492.988281 165.792969 493.261719 C 166.339844 494.488281 164.363281 494.488281 164.910156 493.261719 Z M 164.910156 493.261719 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 149.4375 502.539062 C 149.730469 501.945312 150.382812 501.714844 151.207031 501.65625 C 151.304688 501.996094 151.21875 502.527344 151.648438 502.539062 C 151.730469 502.914062 151.476562 502.953125 151.207031 502.980469 C 150.4375 503.011719 149.832031 502.878906 149.4375 502.539062 Z M 149.4375 502.539062 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 148.113281 466.316406 C 148.769531 466.125 147.9375 465.75 148.113281 464.992188 C 148.863281 464.828125 148.945312 465.335938 148.996094 465.875 C 149.519531 465.367188 150.558594 465.375 151.648438 465.433594 C 152.101562 466.917969 150.273438 466.121094 149.4375 466.316406 C 149.015625 467.140625 150.761719 467.792969 149.4375 468.082031 C 149.683594 469.058594 152 468.65625 150.765625 469.851562 C 150.871094 470.988281 151.527344 469.242188 152.53125 469.851562 C 152.664062 470.75 153.730469 470.714844 153.859375 471.617188 C 153.800781 473.796875 156.480469 472.765625 155.1875 471.175781 C 155.1875 471.027344 155.1875 470.878906 155.1875 470.734375 C 155.542969 471.039062 156.394531 471.421875 156.511719 470.734375 C 156.15625 470.5 155.792969 470.273438 155.1875 470.292969 C 154.804688 469.933594 154.921875 469.082031 154.300781 468.964844 C 154.300781 468.671875 154.300781 468.378906 154.300781 468.082031 C 155.308594 467.476562 155.964844 469.222656 156.070312 468.082031 C 156.6875 467.925781 156.105469 467.304688 155.628906 467.199219 C 156.125 465.902344 156.898438 467.929688 157.394531 468.082031 C 157.324219 468.601562 156.589844 468.457031 156.070312 468.523438 C 156.128906 469.347656 156.359375 470 156.953125 470.292969 C 156.871094 470.667969 157.125 470.707031 157.394531 470.734375 C 157.339844 471.523438 157.9375 471.664062 157.835938 472.5 C 158.25 472.175781 158.507812 471.699219 158.722656 471.175781 C 159.015625 471.175781 159.3125 471.175781 159.605469 471.175781 C 158.808594 470.496094 158.28125 469.554688 157.835938 468.523438 C 157.835938 468.378906 157.835938 468.230469 157.835938 468.082031 C 157.835938 467.9375 157.835938 467.789062 157.835938 467.640625 C 158.28125 467.640625 158.722656 467.640625 159.164062 467.640625 C 159.234375 468.15625 159.066406 468.425781 158.722656 468.523438 C 159.511719 468.972656 160.300781 471.347656 160.933594 469.40625 C 161.808594 469.433594 160.960938 470.398438 160.933594 470.292969 C 161.042969 470.703125 162.199219 471.332031 162.257812 472.5 C 162.914062 472.125 162.898438 471.078125 163.140625 470.292969 C 163.660156 470.21875 163.515625 469.488281 163.582031 468.964844 C 164.21875 469.214844 164.660156 469.65625 164.910156 470.292969 C 164.910156 470.734375 164.910156 471.175781 164.910156 471.617188 C 165.660156 471.78125 165.742188 471.273438 165.792969 470.734375 C 166.648438 470.910156 165.832031 472.757812 167.5625 472.058594 C 168.027344 475.257812 165.527344 472.75 165.351562 475.152344 C 165.507812 475.769531 166.128906 475.1875 166.234375 474.707031 C 167.285156 475.613281 164.550781 478.230469 167.121094 478.683594 C 166.78125 480.609375 168.171875 482.273438 169.328125 481.335938 C 170.460938 481.316406 169.867188 481.664062 169.773438 482.21875 C 169.34375 482.230469 169.429688 482.757812 169.328125 483.101562 C 168.75 482.945312 168.632812 482.324219 168.003906 482.21875 C 167.375 482.179688 166.753906 482.144531 166.679688 482.660156 C 167.191406 482.589844 167.464844 482.757812 167.5625 483.101562 C 165.507812 482.816406 165.386719 487.582031 167.5625 486.195312 C 167.5625 486.488281 167.5625 486.78125 167.5625 487.078125 C 167.269531 487.078125 166.972656 487.078125 166.679688 487.078125 C 165.898438 487.183594 165.671875 487.835938 165.792969 488.84375 C 166.738281 489.050781 166.636719 488.210938 166.679688 487.519531 C 167.054688 487.4375 167.09375 487.691406 167.121094 487.960938 C 167.355469 488.316406 167.582031 488.675781 167.5625 489.285156 C 167.019531 488.792969 166.652344 488.902344 166.679688 489.726562 C 166.285156 490.070312 165.679688 490.203125 164.910156 490.167969 C 165.144531 490.523438 165.371094 490.886719 165.351562 491.496094 C 165.351562 491.640625 165.351562 491.789062 165.351562 491.9375 C 164.996094 492.316406 164.140625 492.199219 164.027344 492.820312 C 163.582031 492.820312 163.140625 492.820312 162.699219 492.820312 C 162.890625 493.660156 163.652344 493.929688 163.582031 495.027344 C 162.433594 495.832031 162.25 494.835938 160.933594 495.46875 C 160.386719 494.039062 162.363281 495.132812 161.816406 493.703125 C 160.386719 493.15625 161.476562 495.132812 160.046875 494.585938 C 159.683594 495.835938 160.671875 495.730469 160.488281 496.796875 C 158.636719 496.730469 159.425781 497.023438 160.046875 497.679688 C 159.964844 498.035156 159.605469 498.121094 159.605469 498.5625 C 159.457031 498.5625 159.3125 498.5625 159.164062 498.5625 C 158.632812 497.980469 158.992188 497.867188 159.164062 497.238281 C 157.941406 497.164062 157.644531 497.914062 158.28125 498.5625 C 158.28125 498.855469 158.28125 499.152344 158.28125 499.445312 C 156.300781 500.097656 156.921875 498.152344 155.1875 498.5625 C 156.1875 499.386719 157.191406 501.867188 156.511719 502.980469 C 155.773438 502.339844 154.742188 500.824219 153.417969 502.097656 C 153.269531 502.097656 153.121094 502.097656 152.976562 502.097656 C 152.976562 501.65625 152.976562 501.210938 152.976562 500.769531 C 152.546875 500.78125 152.632812 501.3125 152.53125 501.65625 C 152.175781 501.570312 152.09375 501.210938 151.648438 501.210938 C 150.296875 500.890625 150.347656 501.976562 148.996094 501.65625 C 149.054688 500.5625 148.457031 500.902344 148.554688 501.65625 C 147.945312 500.226562 146.539062 500.070312 146.34375 502.097656 C 145.644531 502.132812 144.660156 501.882812 144.578125 502.539062 C 143.667969 502.621094 144.453125 500.980469 144.578125 501.210938 C 144.175781 500.449219 143.488281 501.234375 142.808594 500.769531 C 142.488281 500.550781 143.027344 499.871094 142.367188 499.886719 C 141.390625 499.910156 141.734375 500.53125 141.039062 500.769531 C 140.398438 500.574219 141.085938 500.382812 141.039062 499.886719 C 140.03125 499.765625 139.378906 499.992188 139.273438 500.769531 C 137.886719 500.679688 137.464844 499.632812 136.621094 499.003906 C 135.191406 498.457031 136.28125 500.433594 134.851562 499.886719 C 134.757812 499.585938 134.207031 499.101562 134.410156 498.5625 C 134.425781 498.519531 135.222656 497.839844 135.292969 498.121094 C 134.890625 496.550781 132.871094 496.421875 132.199219 498.5625 C 131.800781 497.648438 132.054688 496.113281 131.316406 494.585938 C 130.273438 495.234375 130.492188 495.519531 129.105469 495.027344 C 129.171875 493.929688 128.878906 493.195312 128.222656 492.820312 C 128.222656 492.523438 128.222656 492.230469 128.222656 491.9375 C 127.863281 492.019531 127.78125 492.378906 127.335938 492.378906 C 127.265625 492.890625 127.433594 493.164062 127.78125 493.261719 C 127.863281 493.621094 128.222656 493.703125 128.222656 494.144531 C 128.222656 494.292969 128.222656 494.4375 128.222656 494.585938 C 126.28125 494.90625 126.453125 493.113281 126.453125 491.496094 C 127.929688 491.9375 127.902344 490.882812 127.78125 489.726562 C 128.621094 489.347656 127.300781 489.464844 127.335938 488.84375 C 127.335938 488.695312 127.335938 488.550781 127.335938 488.402344 C 127.511719 487.34375 125.324219 488.648438 126.011719 487.078125 C 126.566406 486.96875 126.457031 486.199219 126.011719 486.195312 C 127.667969 485.789062 128.675781 484.734375 128.222656 482.21875 C 128.371094 482.21875 128.515625 482.21875 128.664062 482.21875 C 128.382812 481.253906 129.917969 480.8125 128.222656 480.894531 C 127.703125 480.820312 127.847656 480.085938 127.78125 479.566406 C 127.851562 479.054688 127.683594 478.78125 127.335938 478.683594 C 128.097656 477.125 128.0625 479.960938 129.546875 479.125 C 129.535156 478.695312 129.007812 478.785156 128.664062 478.683594 C 128.664062 478.539062 128.664062 478.390625 128.664062 478.242188 C 128.664062 478.097656 128.664062 477.949219 128.664062 477.800781 C 129.691406 477.5 129.847656 476.332031 130.875 476.035156 C 129.804688 475.152344 130.429688 475.335938 129.988281 473.824219 C 130.421875 473.835938 130.332031 474.367188 130.433594 474.707031 C 130.945312 474.339844 131.617188 474.125 132.640625 474.265625 C 133.308594 473.882812 132.519531 473.605469 133.085938 472.5 C 132.726562 472.878906 131.875 472.761719 131.757812 473.382812 C 130.878906 472.648438 131.195312 473.421875 129.988281 473.382812 C 129.828125 472.042969 131.429688 472.464844 132.199219 472.058594 C 133.085938 472.058594 133.96875 472.058594 134.851562 472.058594 C 134.8125 470.015625 132.214844 472.59375 132.640625 470.734375 C 133.160156 470.660156 133.015625 469.929688 133.085938 469.40625 C 133.726562 469.648438 135.367188 468.890625 135.292969 469.851562 C 136.683594 469.195312 136.730469 468.015625 137.945312 468.082031 C 138.304688 468.101562 139.710938 470.074219 139.714844 468.082031 C 140.324219 468.0625 140.683594 468.289062 141.039062 468.523438 C 141.058594 467.917969 140.832031 467.554688 140.597656 467.199219 C 142.242188 467.945312 141.464844 467.105469 142.367188 466.316406 C 142.921875 466.425781 142.8125 467.195312 142.367188 467.199219 C 142.5625 467.839844 142.753906 467.152344 143.25 467.199219 C 144.011719 468.890625 145.800781 468.710938 146.785156 467.640625 C 147.21875 467.628906 147.128906 467.101562 147.230469 466.757812 C 147.742188 466.828125 148.015625 466.660156 148.113281 466.316406 Z M 144.578125 500.328125 C 144.582031 499.746094 145.351562 499.925781 145.460938 499.445312 C 144.894531 499.421875 144.847656 498.878906 144.132812 499.003906 C 144.203125 499.523438 144.058594 500.257812 144.578125 500.328125 Z M 128.664062 487.960938 C 128.371094 487.960938 128.074219 487.960938 127.78125 487.960938 C 127.78125 488.253906 127.78125 488.550781 127.78125 488.84375 C 128.074219 488.84375 128.371094 488.84375 128.664062 488.84375 C 128.664062 488.550781 128.664062 488.253906 128.664062 487.960938 Z M 137.503906 470.292969 C 136.152344 470.214844 137.703125 472.847656 137.945312 471.175781 C 139.300781 471.25 137.75 468.617188 137.503906 470.292969 Z M 160.933594 475.152344 C 160.347656 475.144531 160.527344 474.375 160.046875 474.265625 C 160.46875 475.089844 158.722656 475.742188 160.046875 476.035156 C 160.050781 475.449219 160.824219 475.628906 160.933594 475.152344 Z M 159.164062 475.59375 C 159.324219 474.628906 157.160156 474.703125 157.835938 475.59375 C 157.941406 475.726562 158.566406 475.5 158.722656 475.59375 C 158.785156 475.628906 159.050781 476.261719 159.164062 475.59375 Z M 163.140625 476.917969 C 163.328125 476.074219 164.40625 476.117188 164.027344 474.707031 C 162.625 474.375 161.375 476.429688 162.257812 476.917969 C 162.28125 477.1875 162.324219 477.441406 162.699219 477.359375 C 162.703125 477.800781 162.34375 477.886719 162.257812 478.242188 C 161.925781 479.21875 164.054688 480.230469 163.582031 478.683594 C 163.582031 478.539062 163.582031 478.390625 163.582031 478.242188 C 163.925781 478.144531 164.457031 478.230469 164.46875 477.800781 C 164.199219 477.777344 163.945312 477.734375 164.027344 477.359375 C 164.367188 477.261719 164.898438 477.347656 164.910156 476.917969 C 164.320312 476.917969 163.730469 476.917969 163.140625 476.917969 Z M 163.140625 476.917969 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 142.367188 464.109375 C 142.492188 465.261719 142.207031 466.007812 141.039062 465.875 C 141.226562 465.03125 141.199219 463.972656 142.367188 464.109375 Z M 142.367188 464.109375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 168.445312 479.566406 C 166.8125 478.226562 169.789062 478.078125 168.445312 479.566406 Z M 168.445312 479.566406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 168.003906 486.195312 C 168.003906 486.046875 168.003906 485.898438 168.003906 485.753906 C 168.199219 485.207031 168.570312 484.84375 169.328125 484.867188 C 169.59375 486.015625 169.152344 486.457031 168.003906 486.195312 Z M 168.003906 486.195312 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 123.800781 493.703125 C 123.722656 492.738281 124.164062 492.296875 125.128906 492.378906 C 125.207031 493.339844 124.765625 493.785156 123.800781 493.703125 Z M 123.800781 493.703125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 133.085938 501.210938 C 133.027344 500.421875 133.625 500.28125 133.527344 499.445312 C 134.445312 499.890625 134.738281 501.398438 133.085938 501.210938 Z M 133.085938 501.210938 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#7bdcb6"
                d="M 153.417969 468.523438 C 153.332031 468.882812 152.972656 468.964844 152.976562 469.40625 C 151.367188 469.738281 152.136719 467.886719 153.417969 468.523438 Z M 153.417969 468.523438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 497.910156 499.4375 C 497.910156 499.730469 497.910156 500.027344 497.910156 500.320312 C 497.617188 500.320312 497.320312 500.320312 497.027344 500.320312 C 497.027344 500.027344 497.027344 499.730469 497.027344 499.4375 C 497.320312 499.4375 497.617188 499.4375 497.910156 499.4375 Z M 497.910156 499.4375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 506.308594 527.265625 C 506.015625 527.265625 505.71875 527.265625 505.425781 527.265625 C 505.425781 526.972656 505.425781 526.675781 505.425781 526.382812 C 505.71875 526.382812 506.015625 526.382812 506.308594 526.382812 C 506.308594 526.675781 506.308594 526.972656 506.308594 527.265625 Z M 506.308594 527.265625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 485.976562 525.058594 C 486.625 525.441406 487.378906 525.71875 487.300781 526.824219 C 486.097656 527.144531 486.414062 525.945312 485.535156 525.941406 C 485.617188 525.582031 485.976562 525.5 485.976562 525.058594 Z M 485.976562 525.058594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 491.722656 505.621094 C 491.917969 506.015625 492.109375 506.410156 492.605469 506.503906 C 493.464844 506.679688 493.253906 504.492188 492.164062 505.179688 C 493.75 504.113281 496.867188 504.582031 497.910156 502.972656 C 499.621094 503.160156 499.484375 503.453125 500.5625 502.527344 C 500.90625 502.921875 501.039062 503.527344 501.003906 504.296875 C 501.632812 504.335938 502.257812 504.367188 502.332031 503.855469 C 502.726562 504.195312 503.328125 504.328125 504.101562 504.296875 C 504.0625 504.921875 504.027344 505.546875 504.542969 505.621094 C 504.625 505.980469 504.984375 506.0625 504.984375 506.503906 C 505.847656 505.988281 507.457031 505.054688 508.519531 506.0625 C 508.285156 507.742188 507.140625 508.511719 507.195312 510.480469 C 508.382812 511.269531 508.046875 508.535156 508.519531 510.039062 C 508.519531 510.1875 508.519531 510.332031 508.519531 510.480469 C 508.894531 510.398438 508.9375 510.652344 508.960938 510.921875 C 509.253906 510.921875 509.550781 510.921875 509.84375 510.921875 C 509.917969 510.40625 509.75 510.136719 509.402344 510.039062 C 509.171875 509.683594 508.941406 509.320312 508.960938 508.714844 C 509.753906 508.65625 509.894531 509.253906 510.730469 509.15625 C 510.457031 509.546875 510.195312 509.945312 510.730469 510.039062 C 511.363281 512.035156 510.714844 513.195312 511.613281 515.339844 C 510.832031 515.726562 510.324219 516.738281 509.402344 515.78125 C 508.625 515.886719 508.394531 516.542969 508.519531 517.546875 C 507.0625 517.0625 508.050781 518.28125 508.078125 518.875 C 508.117188 519.773438 507.203125 521.125 508.078125 522.40625 C 507.179688 523.210938 505.144531 524.453125 503.65625 523.289062 C 503.152344 524.679688 504.351562 524.363281 504.542969 525.058594 C 504.226562 526.210938 503.101562 526.5625 502.773438 527.707031 C 502.414062 527.792969 502.332031 528.152344 501.890625 528.148438 C 501.65625 527.792969 501.425781 527.433594 501.449219 526.824219 C 500.085938 526.496094 500.597656 528.035156 499.238281 527.707031 C 498.359375 527.714844 498.675781 528.914062 497.46875 528.589844 C 497.578125 529.144531 498.347656 529.035156 498.351562 528.589844 C 499.171875 528.175781 498.625 531.117188 499.238281 529.476562 C 500.015625 529.582031 500.246094 530.234375 500.121094 531.242188 C 499.40625 531.117188 499.359375 531.660156 498.796875 531.683594 C 498.796875 531.386719 498.796875 531.09375 498.796875 530.800781 C 499.339844 529.574219 497.363281 529.570312 497.910156 530.800781 C 497.871094 531.425781 497.835938 532.050781 498.351562 532.125 C 498.765625 532.496094 499.835938 534.402344 498.796875 534.773438 C 498.417969 534.855469 498.378906 534.601562 498.351562 534.332031 C 498.175781 531.859375 497.058594 530.328125 495.699219 529.03125 C 495.304688 530.273438 493.296875 532.199219 492.164062 531.242188 C 492.726562 531.140625 492.742188 529.921875 492.164062 529.917969 C 492.46875 528.730469 491.25 529.0625 490.839844 528.589844 C 490.011719 527.804688 491.199219 527.46875 490.839844 525.941406 C 490.480469 526.023438 490.398438 526.382812 489.953125 526.382812 C 489.722656 525.703125 489.492188 526.355469 489.511719 526.824219 C 487.578125 527.023438 488.976562 522.527344 489.953125 524.175781 C 489.441406 523.363281 488.800781 522.679688 488.1875 521.964844 C 488.269531 521.589844 488.015625 521.546875 487.746094 521.523438 C 487.824219 521.148438 487.570312 521.105469 487.300781 521.082031 C 487.179688 520.367188 487.71875 520.320312 487.746094 519.757812 C 486.65625 519.699219 485.613281 519.691406 485.09375 520.199219 C 485.175781 519.839844 485.535156 519.757812 485.535156 519.316406 C 485.535156 518.578125 485.535156 517.84375 485.535156 517.105469 C 486.914062 517.421875 487.722656 514.921875 488.1875 515.78125 C 488.804688 515.625 488.226562 515.003906 487.746094 514.898438 C 487.550781 514.503906 487.355469 514.109375 486.859375 514.015625 C 487.066406 513.070312 486.230469 513.171875 485.535156 513.128906 C 485.496094 511.925781 486.269531 512.242188 485.535156 511.363281 C 484.46875 511.183594 484.574219 512.171875 483.324219 511.804688 C 483.257812 510.558594 484.574219 510.699219 485.09375 510.039062 C 485.085938 509.160156 483.886719 509.476562 484.207031 508.273438 C 486.285156 508.113281 485.550781 510.761719 487.746094 510.480469 C 488.21875 509.625 488.589844 508.675781 490.398438 509.15625 C 489.964844 508.703125 489.523438 508.261719 489.070312 507.828125 C 488.875 507.4375 488.683594 507.039062 488.1875 506.945312 C 488.421875 506.589844 488.648438 506.230469 488.628906 505.621094 C 489.070312 505.621094 489.511719 505.621094 489.953125 505.621094 C 490.589844 505.386719 491.035156 507.34375 491.28125 506.0625 C 491.199219 505.6875 491.453125 505.648438 491.722656 505.621094 Z M 506.308594 507.828125 C 506.910156 507.949219 508.035156 507.554688 507.195312 507.390625 C 506.59375 507.269531 505.46875 507.664062 506.308594 507.828125 Z M 493.492188 527.707031 C 493.117188 528.023438 492.964844 528.691406 492.605469 529.03125 C 494.015625 528.90625 494.472656 526.878906 493.492188 527.707031 Z M 485.535156 510.480469 C 485.535156 510.773438 485.535156 511.070312 485.535156 511.363281 C 485.828125 511.363281 486.125 511.363281 486.417969 511.363281 C 486.417969 511.070312 486.417969 510.773438 486.417969 510.480469 C 486.125 510.480469 485.828125 510.480469 485.535156 510.480469 Z M 497.027344 505.621094 C 497.128906 503.207031 494.125 506.117188 495.699219 506.503906 C 495.882812 505.949219 496.269531 505.601562 497.027344 505.621094 Z M 494.816406 507.390625 C 496.160156 505.898438 493.183594 506.050781 494.816406 507.390625 Z M 497.027344 517.105469 C 497.789062 517.128906 498.160156 516.765625 498.351562 516.222656 C 497.707031 515.589844 496.953125 515.882812 497.027344 517.105469 Z M 495.257812 521.964844 C 495.257812 521.523438 495.617188 521.441406 495.699219 521.082031 C 494.421875 520.441406 493.652344 522.296875 495.257812 521.964844 Z M 503.214844 523.730469 C 502.585938 523.625 502.46875 523.003906 501.890625 522.847656 C 501.5 523.757812 503.035156 524.832031 503.214844 523.730469 Z M 503.214844 523.730469 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 483.324219 517.988281 C 483.117188 517.046875 483.957031 517.148438 484.648438 517.105469 C 485.457031 517.449219 484.386719 517.582031 483.765625 517.546875 C 483.921875 518.128906 484.542969 518.242188 484.648438 518.875 C 484.648438 519.019531 484.648438 519.167969 484.648438 519.316406 C 483.6875 519.394531 483.242188 518.953125 483.324219 517.988281 Z M 483.324219 517.988281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 486.859375 521.964844 C 485.820312 521.957031 485.558594 522.726562 484.207031 522.40625 C 484.496094 522.855469 485.226562 522.863281 485.09375 523.730469 C 482.519531 523.570312 484.570312 519.636719 485.976562 521.082031 C 485.980469 521.664062 486.75 521.484375 486.859375 521.964844 Z M 486.859375 521.964844 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 501.890625 529.03125 C 502.015625 529.746094 501.472656 529.792969 501.449219 530.359375 C 500.429688 530.027344 499.414062 527.972656 501.449219 528.148438 C 501.546875 528.492188 501.460938 529.019531 501.890625 529.03125 Z M 501.890625 529.03125 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 491.28125 530.359375 C 490.089844 530.054688 490.425781 531.269531 489.953125 531.683594 C 489.113281 530.855469 489.15625 531.945312 487.746094 531.683594 C 488.046875 530.808594 489.089844 530.671875 489.511719 529.917969 C 489.855469 529.816406 490.386719 529.90625 490.398438 529.476562 C 490.542969 529.476562 490.691406 529.476562 490.839844 529.476562 C 491.34375 529.628906 491.960938 530.253906 491.28125 530.359375 Z M 491.28125 530.359375 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 509.402344 517.546875 C 511.078125 517.792969 508.445312 519.34375 508.519531 517.988281 C 508.964844 517.992188 509.046875 517.632812 509.402344 517.546875 Z M 509.402344 517.546875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 488.1875 527.707031 C 487.117188 529.15625 486.074219 526.480469 488.1875 527.707031 Z M 488.1875 527.707031 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 490.398438 504.296875 C 490.453125 503.503906 489.855469 503.363281 489.953125 502.527344 C 490.347656 502.871094 490.953125 503.003906 491.722656 502.972656 C 491.109375 503.242188 491.65625 504.671875 490.839844 504.738281 C 490.570312 504.714844 490.316406 504.671875 490.398438 504.296875 Z M 490.398438 504.296875 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#d76a28"
                d="M 508.960938 522.40625 C 509.097656 521.808594 510.066406 522.042969 510.730469 521.964844 C 510.542969 522.808594 510.570312 523.867188 509.402344 523.730469 C 509.675781 523.320312 510.433594 522.101562 508.960938 522.40625 Z M 508.960938 522.40625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 324.628906 545.40625 C 326.011719 545.203125 326.042969 546.347656 325.957031 547.613281 C 324.84375 547.433594 323.925781 546.101562 324.628906 545.40625 Z M 324.628906 545.40625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 323.304688 545.40625 C 323.445312 546.429688 323.234375 547.101562 322.859375 547.613281 C 321.613281 547.640625 322.042969 545.34375 323.304688 545.40625 Z M 323.304688 545.40625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <g clipPath="url(#1558fa6a18)">
                <path
                  fill="#6ca5ee"
                  d="M 309.601562 552.03125 C 310.242188 550.359375 308.386719 551.183594 308.714844 549.824219 C 309.996094 549.746094 310.730469 548.019531 310.925781 550.265625 C 310.886719 550.914062 311.332031 550.261719 311.367188 550.265625 C 312.433594 550.367188 312.632812 551.90625 313.136719 550.707031 C 314.757812 550.558594 315.40625 551.382812 315.789062 552.472656 C 317.496094 552.558594 316.976562 550.421875 318.882812 550.707031 C 319.117188 551.0625 319.34375 551.421875 319.324219 552.03125 C 320.816406 551.25 321.292969 552.625 322.859375 552.914062 C 322.984375 553.628906 322.445312 553.675781 322.417969 554.238281 C 323.734375 553.472656 324.664062 554.382812 325.511719 553.796875 C 325.660156 553.796875 325.808594 553.796875 325.957031 553.796875 C 326.457031 555.566406 328.652344 553.355469 329.492188 555.125 C 331.183594 554.207031 327.699219 552.84375 329.933594 552.472656 C 329.882812 552.121094 328.472656 551.132812 328.609375 552.03125 C 327.28125 550.875 330.472656 550.511719 329.050781 548.9375 C 329.175781 548.3125 332.757812 548.960938 331.257812 549.824219 C 330.546875 549.945312 330.5 549.40625 329.933594 549.378906 C 329.863281 549.894531 330.03125 550.167969 330.375 550.265625 C 330.3125 551.507812 331.457031 551.539062 332.585938 551.589844 C 332.390625 552.132812 332.019531 552.496094 331.257812 552.472656 C 331.332031 552.992188 332.066406 552.84375 332.585938 552.914062 C 332.820312 554.914062 331.9375 555.796875 329.933594 555.566406 C 330.070312 556.164062 331.039062 555.929688 331.703125 556.007812 C 331.230469 557.65625 332.800781 557.265625 332.585938 558.65625 C 331.359375 558.558594 331.335938 557.257812 330.375 556.890625 C 329.984375 557.019531 328.441406 558.085938 329.492188 558.214844 C 329.492188 558.363281 329.492188 558.511719 329.492188 558.65625 C 329.117188 558.574219 329.074219 558.828125 329.050781 559.097656 C 328.65625 558.753906 328.050781 558.625 327.28125 558.65625 C 326.769531 558.585938 326.496094 558.753906 326.398438 559.097656 C 324.78125 559.792969 327.425781 559.757812 326.839844 560.867188 C 328.191406 561.1875 328.140625 560.101562 329.492188 560.425781 C 330.226562 561.300781 329.453125 560.984375 329.492188 562.191406 C 330.003906 562.261719 330.277344 562.09375 330.375 561.75 C 331.617188 561.558594 329.269531 563.394531 330.816406 563.515625 C 330.816406 563.664062 330.816406 563.8125 330.816406 563.957031 C 330.746094 564.476562 330.011719 564.328125 329.492188 564.398438 C 328.652344 562.121094 329.621094 566.160156 329.050781 566.167969 C 329.5625 566.238281 329.835938 566.070312 329.933594 565.722656 C 331.648438 567.890625 328.152344 568.4375 329.492188 570.582031 C 328.667969 570.523438 328.015625 570.292969 327.722656 569.699219 C 327.035156 568.128906 329.226562 569.433594 329.050781 568.375 C 328.976562 567.855469 328.242188 568.003906 327.722656 567.933594 C 326.765625 567.859375 327.523438 569.5 327.28125 570.140625 C 326.128906 569.773438 324.855469 571.476562 324.1875 570.140625 C 324.378906 569.597656 324.753906 569.234375 325.511719 569.257812 C 325.140625 568.601562 324.089844 568.621094 323.304688 568.375 C 323.246094 569.167969 323.84375 569.308594 323.746094 570.140625 C 323.097656 571.183594 322.8125 570.964844 323.304688 572.351562 C 322.617188 572.75 323.074219 573.976562 323.304688 574.117188 C 323.316406 573.6875 323.84375 573.773438 324.1875 573.675781 C 325.238281 573.804688 323.695312 574.871094 323.304688 575 C 324.570312 575.40625 323.707031 576.945312 323.304688 578.09375 C 321.894531 578.472656 321.9375 577.398438 321.09375 577.210938 C 321.09375 576.769531 321.09375 576.324219 321.09375 575.882812 C 320.273438 575.328125 320.347656 576.742188 320.210938 576.769531 C 319.628906 576.867188 318.621094 574.3125 319.324219 577.652344 C 319.308594 579.472656 316.976562 577.046875 317.558594 575.441406 C 317.914062 575.675781 318.273438 575.902344 318.882812 575.882812 C 319.164062 574.921875 317.628906 574.480469 319.324219 574.558594 C 318.953125 572.40625 315.757812 576.332031 316.230469 572.792969 C 315.199219 571.949219 314.921875 574.101562 315.347656 573.675781 C 314.667969 574.359375 313.417969 573.917969 313.578125 575.441406 C 312 574.492188 310.34375 575.609375 308.273438 575 C 308.230469 574.988281 306.582031 574.558594 306.949219 573.675781 C 307.453125 573.519531 308.070312 572.898438 307.390625 572.792969 C 307.242188 572.792969 307.097656 572.792969 306.949219 572.792969 C 307.15625 571.414062 306.398438 570.652344 305.621094 571.46875 C 305.476562 571.46875 305.328125 571.46875 305.179688 571.46875 C 305.179688 571.320312 305.179688 571.171875 305.179688 571.023438 C 305.28125 570.386719 306.5 570.871094 306.507812 570.140625 C 307.132812 570.179688 307.757812 570.214844 307.832031 569.699219 C 307.476562 569.617188 307.390625 569.257812 306.949219 569.257812 C 306.980469 567.753906 305.3125 567.949219 303.855469 567.933594 C 303.671875 568.996094 304.660156 568.894531 304.296875 570.140625 C 303.046875 569.777344 303.152344 570.765625 302.085938 570.582031 C 302.085938 570.140625 302.085938 569.699219 302.085938 569.257812 C 302.726562 568.570312 303.554688 568.074219 303.855469 567.050781 C 304.445312 566.492188 304.722656 565.722656 305.621094 566.609375 C 305.464844 566.027344 304.84375 565.914062 304.738281 565.28125 C 303.359375 565.523438 302.835938 566.621094 301.644531 567.050781 C 299.96875 566.296875 302.605469 566.324219 302.527344 565.722656 C 302.957031 565.710938 302.871094 565.183594 302.96875 564.839844 C 303.824219 564.222656 305.675781 564.601562 305.179688 562.632812 C 303.796875 562.425781 303.207031 563.015625 303.414062 564.398438 C 302.378906 564.253906 301.585938 563.867188 300.761719 563.515625 C 300.613281 562.625 303.929688 562.019531 301.644531 561.75 C 302.285156 560.914062 302.632812 559.789062 304.296875 559.980469 C 303.921875 559.324219 302.875 559.34375 302.085938 559.097656 C 302.167969 557.855469 302.855469 557.214844 304.296875 557.332031 C 303.171875 556.980469 304.058594 554.625 302.527344 554.679688 C 302.683594 554.101562 303.304688 553.988281 303.414062 553.355469 C 303.558594 553.355469 303.707031 553.355469 303.855469 553.355469 C 303.691406 552.605469 304.199219 552.523438 304.738281 552.472656 C 306.304688 552.597656 307.1875 554.242188 307.390625 551.589844 C 308.148438 551.570312 308.535156 551.917969 308.714844 552.472656 C 308.371094 552.867188 308.242188 553.46875 308.273438 554.238281 C 307.710938 555.980469 309.484375 555.386719 310.042969 556.007812 C 310.832031 555.921875 311.582031 555.691406 311.8125 555.125 C 311.785156 555.1875 310.75 552.917969 310.925781 552.914062 C 309.601562 552.945312 310.460938 553.671875 310.925781 555.125 C 309.945312 555.367188 310.296875 554.28125 309.601562 554.238281 C 309.035156 553.660156 309.035156 552.609375 309.601562 552.03125 Z M 326.398438 555.566406 C 325.8125 555.558594 325.992188 554.792969 325.511719 554.679688 C 325.535156 555.289062 325.304688 555.652344 325.070312 556.007812 C 325.367188 556.007812 325.660156 556.007812 325.957031 556.007812 C 326.226562 555.980469 326.476562 555.941406 326.398438 555.566406 Z M 328.609375 565.722656 C 328.996094 564.816406 327.460938 563.742188 327.28125 564.839844 C 327.976562 564.882812 327.625 565.96875 328.609375 565.722656 Z M 321.535156 572.351562 C 321.878906 572.25 322.40625 572.339844 322.417969 571.910156 C 321.359375 570.46875 319.269531 570.105469 318.441406 571.910156 C 319.480469 571.898438 319.742188 572.667969 321.09375 572.351562 C 321.167969 572.949219 318.535156 572.921875 320.210938 573.675781 C 321.128906 573.9375 321.714844 574.527344 321.976562 575.441406 C 321.980469 575.886719 321.621094 575.96875 321.535156 576.324219 C 322.5 576.40625 322.941406 575.964844 322.859375 575 C 323.183594 573.796875 321.984375 574.109375 321.976562 573.234375 C 321.980469 572.789062 321.621094 572.707031 321.535156 572.351562 Z M 312.253906 552.914062 C 312.195312 552.972656 312.222656 553.710938 312.253906 553.796875 C 312.886719 555.695312 313.121094 552.042969 312.253906 552.914062 Z M 319.765625 554.238281 C 319.765625 553.796875 320.125 553.714844 320.210938 553.355469 C 319.566406 553.597656 317.925781 552.839844 318 553.796875 C 319.035156 553.910156 318.253906 555.738281 318 556.007812 C 318.292969 556.007812 318.589844 556.007812 318.882812 556.007812 C 319.0625 556.5625 319.453125 556.910156 320.210938 556.890625 C 320.230469 556.28125 320 555.921875 319.765625 555.566406 C 320.375 555.546875 320.738281 555.773438 321.09375 556.007812 C 321.019531 555.347656 321.25 554.375 320.652344 554.238281 C 320.558594 553.707031 320.160156 553.96875 319.765625 554.238281 Z M 306.507812 556.007812 C 306.507812 556.449219 306.148438 556.53125 306.0625 556.890625 C 307.34375 557.527344 308.113281 555.675781 306.507812 556.007812 Z M 310.484375 559.097656 C 311.386719 559.476562 313.230469 558.714844 311.8125 558.214844 C 311.15625 559.667969 311.125 556.90625 310.484375 556.890625 C 310.378906 557.519531 309.757812 557.632812 309.601562 558.214844 C 309.75 558.214844 309.894531 558.214844 310.042969 558.214844 C 310.175781 559.082031 309.445312 559.089844 309.160156 559.539062 C 308.664062 559.632812 308.46875 560.03125 308.273438 560.425781 C 309.0625 560.179688 310.109375 560.195312 310.484375 559.539062 C 310.335938 559.539062 310.191406 559.539062 310.042969 559.539062 C 310.066406 559.269531 310.109375 559.019531 310.484375 559.097656 Z M 324.628906 561.75 C 323.898438 562.195312 324.148438 563.625 323.746094 564.398438 C 324.1875 564.398438 324.628906 564.398438 325.070312 564.398438 C 324.855469 566.480469 325.867188 565.46875 325.511719 563.957031 C 325.511719 563.664062 325.511719 563.367188 325.511719 563.074219 C 327.28125 564.183594 325.410156 561.964844 324.628906 561.75 Z M 307.832031 562.632812 C 307.320312 563.296875 306.28125 564.492188 307.832031 564.839844 C 308.40625 563.804688 307.605469 563.851562 308.714844 563.074219 C 309.621094 561.53125 306.207031 562.320312 307.832031 562.632812 Z M 315.347656 563.515625 C 315.933594 565.703125 317.433594 564.207031 315.347656 563.515625 Z M 311.367188 564.839844 C 311.273438 565.183594 311 565.355469 310.484375 565.28125 C 311.058594 566.378906 309.5 567.425781 310.484375 567.492188 C 310.621094 566.703125 312.820312 565.761719 311.367188 564.839844 Z M 316.230469 571.46875 C 316.992188 571.492188 317.363281 571.125 317.558594 570.582031 C 316.796875 570.558594 316.425781 570.921875 316.230469 571.46875 Z M 314.019531 573.234375 C 314.042969 572.472656 313.679688 572.101562 313.136719 571.910156 C 312.503906 572.554688 312.796875 573.308594 314.019531 573.234375 Z M 314.019531 573.234375 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <path
                fill="#6ca5ee"
                d="M 337.007812 558.65625 C 336.921875 559.015625 336.5625 559.097656 336.5625 559.539062 C 335.523438 559.304688 336.292969 557.449219 337.007812 558.65625 Z M 337.007812 558.65625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <g clipPath="url(#ea580fde03)">
                <path
                  fill="#6ca5ee"
                  d="M 303.855469 575 C 303.855469 574.851562 303.855469 574.707031 303.855469 574.558594 C 306.238281 574.773438 305.210938 576.675781 303.855469 575 Z M 303.855469 575 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <path
                fill="#6ca5ee"
                d="M 312.253906 544.964844 C 312.429688 545.820312 310.238281 545.609375 310.925781 544.519531 C 311.222656 544.519531 311.515625 544.519531 311.8125 544.519531 C 311.730469 544.898438 311.984375 544.9375 312.253906 544.964844 Z M 312.253906 544.964844 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 315.789062 547.613281 C 315.414062 547.695312 315.371094 547.441406 315.347656 547.171875 C 315.347656 547.023438 315.347656 546.878906 315.347656 546.730469 C 315.640625 546.730469 315.9375 546.730469 316.230469 546.730469 C 316.300781 547.242188 316.132812 547.515625 315.789062 547.613281 Z M 315.789062 547.613281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 314.460938 549.378906 C 315.113281 550.667969 312.488281 550.667969 313.136719 549.378906 C 313.578125 549.378906 314.019531 549.378906 314.460938 549.378906 Z M 314.460938 549.378906 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 321.535156 551.148438 C 322.058594 550.34375 323.839844 550.800781 324.628906 550.265625 C 324.574219 551.054688 325.171875 551.195312 325.070312 552.03125 C 324.714844 552.410156 323.859375 552.292969 323.746094 552.914062 C 323.082031 552.25 322.414062 551.59375 321.535156 551.148438 Z M 321.535156 551.148438 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 298.109375 568.816406 C 298.132812 569.085938 298.171875 569.339844 298.550781 569.257812 C 298.355469 569.800781 297.984375 570.164062 297.222656 570.140625 C 297.222656 569.847656 297.222656 569.550781 297.222656 569.257812 C 297.582031 569.175781 297.664062 568.816406 298.109375 568.816406 Z M 298.109375 568.816406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <g clipPath="url(#8b496d7a84)">
                <path
                  fill="#6ca5ee"
                  d="M 310.925781 576.324219 C 310.765625 575.574219 311.269531 575.492188 311.8125 575.441406 C 311.8125 575.738281 311.8125 576.03125 311.8125 576.324219 C 311.515625 576.324219 311.222656 576.324219 310.925781 576.324219 Z M 310.925781 576.324219 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </g>
              <path
                fill="#6ca5ee"
                d="M 321.535156 547.613281 C 321.609375 548.507812 320.648438 547.917969 319.765625 548.496094 C 319.300781 548.804688 318.222656 550.234375 316.671875 548.9375 C 318.476562 548.789062 320.019531 546.644531 321.535156 547.613281 Z M 321.535156 547.613281 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 330.375 561.308594 C 330.253906 560.300781 330.480469 559.644531 331.257812 559.539062 C 331.507812 560.175781 331.949219 560.617188 332.585938 560.867188 C 332.15625 561.316406 331.710938 561.757812 331.257812 562.191406 C 331.167969 561.695312 330.769531 561.503906 330.375 561.308594 Z M 330.375 561.308594 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 298.992188 568.816406 C 298.867188 568.101562 299.410156 568.054688 299.433594 567.492188 C 300.015625 567.648438 300.128906 568.269531 300.761719 568.375 C 300.761719 568.523438 300.761719 568.667969 300.761719 568.816406 C 300.488281 568.945312 299.058594 569.914062 298.992188 568.816406 Z M 298.992188 568.816406 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 331.703125 569.699219 C 331.289062 569.226562 330.070312 569.5625 330.375 568.375 C 331.523438 568.109375 331.964844 568.550781 331.703125 569.699219 Z M 331.703125 569.699219 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#6ca5ee"
                d="M 327.722656 572.351562 C 327.722656 572.792969 327.722656 573.234375 327.722656 573.675781 C 326.902344 574.097656 326.246094 572.351562 325.957031 573.675781 C 324.675781 573.066406 326.699219 572.113281 327.722656 572.351562 Z M 327.722656 572.351562 "
                fillOpacity="1"
                fillRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#03d0f65eb5)">
        <g mask="url(#e7aefc50d5)">
          <g transform="matrix(1, 0, 0, 1, 544, 0.000000000000055289)">
            <g clipPath="url(#d3ebd5a140)">
              <g clipPath="url(#23795eebfe)">
                <g clipPath="url(#59390f4b22)">
                  <g clipPath="url(#b7aedf412c)">
                    <g clipPath="url(#b765597a58)">
                      <path
                        fill="#6ca5ee"
                        d="M 386.0625 572.796875 C 384.582031 573.054688 385.886719 570.785156 386.0625 572.796875 Z M 386.0625 572.796875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#1dcb02ebdd)">
                <g clipPath="url(#db669cc16e)">
                  <g clipPath="url(#f798d7e3f8)">
                    <g clipPath="url(#4304275bba)">
                      <path
                        fill="#6ca5ee"
                        d="M 386.648438 575.457031 C 386.824219 575.277344 386.996094 575.09375 387.171875 574.914062 C 387.578125 575.351562 388.335938 575.78125 387.996094 576.234375 C 387.542969 575.675781 387.101562 575.960938 386.648438 575.457031 Z M 386.648438 575.457031 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#55e6f3091b)">
                <g clipPath="url(#1e8cb3c116)">
                  <g clipPath="url(#e15e8ac223)">
                    <g clipPath="url(#278efcdbda)">
                      <path
                        fill="#6ca5ee"
                        d="M 382.789062 569.121094 C 384.558594 569.238281 385.402344 571.058594 384.726562 572.554688 C 384.503906 572.363281 384.132812 572.609375 383.917969 572.304688 C 383.679688 571.957031 384.277344 571.691406 384.171875 571.5 C 383.726562 570.714844 382.476562 570.070312 382.789062 569.121094 Z M 382.789062 569.121094 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#b0dcdae9d3)">
                <g clipPath="url(#786ead29b5)">
                  <g clipPath="url(#ba47bd49ac)">
                    <g clipPath="url(#08af7ccf46)">
                      <path
                        fill="#6ca5ee"
                        d="M 395.542969 566.21875 C 395.804688 565.328125 393.203125 564.484375 394.960938 563.5625 C 395.910156 564.523438 396.125 565.5 396.882812 566.464844 C 396.636719 566.734375 397.011719 566.996094 397.164062 567.257812 C 396.992188 567.441406 396.816406 567.621094 396.640625 567.800781 C 397.097656 568.261719 397.542969 568.277344 397.980469 568.042969 C 398.824219 567.496094 398.8125 566.960938 397.949219 566.445312 C 398.039062 566.351562 398.125 566.261719 398.210938 566.171875 C 398.886719 566.4375 398.726562 565.714844 398.996094 565.355469 C 399.679688 566.039062 399.523438 565.472656 399.792969 565.074219 C 399.964844 564.894531 400.140625 564.714844 400.316406 564.53125 C 400.488281 564.253906 400.667969 564.378906 400.847656 564.523438 C 401.214844 565.066406 401.566406 564.804688 401.917969 564.503906 C 403.207031 563.753906 403.679688 564.894531 404.082031 566.0625 C 403.730469 566.292969 403.363281 565.726562 403.015625 566.085938 C 401.921875 565.304688 402.523438 567.960938 403.035156 567.152344 C 403.675781 567.671875 403.683594 568.207031 403.066406 568.75 C 403.691406 568.898438 404.320312 569.175781 404.925781 568.449219 C 405.59375 569.148438 405.398438 569.863281 405.5 570.574219 C 406 571.085938 406.175781 569.976562 406.023438 570.03125 C 406.039062 570.027344 408.691406 570.332031 408.179688 571.058594 C 407.742188 571.390625 407.277344 570.371094 406.839844 570.816406 C 405.78125 571.371094 406.984375 571.882812 407.40625 572.40625 C 405.652344 571.933594 406.679688 573.714844 407.96875 574 C 407.625 574.558594 407.261719 574.308594 406.902344 574.019531 C 406.65625 574.46875 406.96875 574.90625 406.660156 575.355469 C 407.679688 575.882812 407.359375 575.246094 407.980469 574.53125 C 408.679688 576.023438 409.042969 576.402344 410.4375 577.421875 C 410.421875 577.414062 410.203125 577.683594 410.175781 577.695312 C 409.824219 577.925781 409.457031 577.359375 409.109375 577.714844 C 408.925781 577.539062 408.746094 577.363281 408.5625 577.191406 C 408.292969 576.929688 408.019531 576.667969 407.75 576.40625 C 407.578125 576.941406 407.84375 577.46875 408.3125 577.996094 C 408.589844 578.496094 408.054688 578.207031 407.789062 578.539062 C 407.628906 578.808594 407.800781 579.070312 407.539062 579.34375 C 407.269531 579.183594 407.003906 579.355469 406.734375 579.09375 C 407.003906 578.910156 406.875 578.734375 406.722656 578.558594 C 406.273438 579.101562 406.027344 579.636719 406.21875 580.167969 C 406.390625 580.433594 406.226562 580.703125 406.5 580.964844 C 405.339844 580.589844 404.195312 581.289062 403.046875 581.828125 C 402.945312 582.542969 403.386719 583.246094 402.554688 583.972656 C 401.328125 582.660156 401.472656 581.324219 400.613281 580.003906 C 399.789062 580.996094 399.835938 581.976562 400.933594 582.933594 C 400.761719 583.113281 400.585938 583.296875 400.410156 583.476562 C 400.652344 584.097656 399.070312 584.746094 400.179688 585.351562 C 399.570312 586.054688 398.960938 586.699219 398.339844 586.71875 C 397.214844 586.742188 397.585938 585.378906 397.230469 584.601562 C 397.40625 584.421875 397.578125 584.242188 397.753906 584.058594 C 398.296875 584.578125 398.8125 583.652344 399.363281 584.5625 C 399.523438 584.292969 399.351562 584.03125 399.617188 583.757812 C 399.933594 583.21875 399.101562 583.5625 398.800781 582.972656 C 398.757812 582.886719 399.460938 581.800781 398.507812 581.644531 C 397.441406 582.285156 398.128906 582.898438 397.742188 583.527344 C 397.394531 583.886719 397.046875 584.25 396.695312 584.613281 C 394.6875 583.523438 395.371094 585.789062 396.980469 585.410156 C 397.070312 585.496094 397.160156 585.582031 397.25 585.671875 C 396.519531 586.128906 397.398438 586.558594 397.011719 587.007812 C 395.382812 587.820312 394.898438 583.820312 394.058594 586.261719 C 393.253906 585.566406 394.117188 584.839844 394.019531 584.128906 C 393.617188 584.105469 392.867188 583.832031 393.203125 583.34375 C 392.003906 582.25 392.546875 584.941406 391.339844 583.644531 C 392.070312 583.183594 391.195312 582.757812 391.582031 582.304688 C 393.316406 583.4375 392.609375 580.050781 391.3125 582.042969 C 390.863281 581.996094 390.421875 582.140625 389.980469 582.332031 C 388.136719 580.167969 385.953125 579.90625 383.761719 577.910156 C 383.398438 577.207031 385.488281 576.457031 384.253906 575.765625 C 385.082031 576.066406 386.074219 576.429688 386.679688 577.058594 C 386.703125 577.082031 386.136719 577.5625 386.15625 577.601562 C 386.410156 578.074219 388.136719 578.667969 388.058594 579.433594 C 388.703125 579.976562 388.367188 578.410156 389.367188 578.074219 C 388.964844 578.050781 388.214844 577.78125 388.550781 577.289062 C 388.824219 577.539062 389.082031 577.160156 389.347656 577.007812 C 389.445312 577.71875 390.132812 578.417969 389.921875 579.132812 C 388.933594 580.863281 391.761719 580.167969 390.714844 578.851562 C 391.238281 578.136719 391.765625 577.851562 392.296875 577.753906 C 391.199219 577.570312 390.179688 577.234375 389.335938 576.476562 C 388.679688 575.886719 388.972656 574.617188 387.96875 574.632812 C 387.875 574.542969 387.785156 574.457031 387.695312 574.371094 C 387.714844 573.925781 387.992188 573.476562 388.46875 573.023438 C 388.863281 572.3125 388.601562 572.039062 387.914062 571.964844 C 388.621094 571.558594 389.296875 569.855469 390.019531 570.324219 C 390.292969 570.671875 390.558594 570.730469 390.824219 570.578125 C 391.007812 570.847656 391.183594 570.71875 391.359375 570.566406 C 392.136719 570.519531 393.492188 570.363281 393.511719 571.59375 C 393.339844 571.777344 393.164062 571.957031 392.988281 572.136719 C 394.15625 573.503906 396.433594 571.496094 394.035156 571.050781 C 394.421875 570.191406 392.625 570.128906 392.144531 569.753906 C 391.960938 569.578125 391.78125 569.402344 391.597656 569.226562 C 391.6875 569.136719 391.773438 569.046875 391.859375 568.957031 C 392.484375 568.914062 392.636719 568.625 392.113281 568.152344 C 392.273438 567.882812 392.101562 567.617188 392.363281 567.347656 C 393.644531 568.167969 394.882812 567.734375 392.886719 566.804688 C 392.527344 565.542969 394.894531 565.5 394.488281 566.773438 C 394.402344 566.863281 394.3125 566.953125 394.226562 567.046875 C 394.59375 567.589844 394.941406 567.328125 395.292969 567.027344 C 395.417969 567.378906 395.550781 567.734375 395.3125 568.09375 C 394.960938 568.171875 394.605469 568.261719 394.257812 568.644531 C 394.898438 569.734375 395.492188 568.128906 396.121094 568.34375 C 396.015625 567.636719 396.210938 566.921875 395.542969 566.21875 Z M 400.628906 566.929688 C 401.320312 566.375 402.335938 566.316406 401.664062 565.308594 C 401.433594 565.847656 399.996094 566.40625 400.628906 566.929688 Z M 397.179688 581.933594 C 395.671875 583.351562 398.519531 582.074219 397.703125 581.390625 C 397.550781 581.21875 397.421875 581.042969 397.691406 580.859375 C 398.234375 580.144531 396.65625 579.90625 396.34375 580.082031 C 396.496094 580.257812 396.625 580.433594 396.355469 580.617188 C 396.445312 580.703125 396.535156 580.789062 396.625 580.878906 C 395.574219 581.871094 396.753906 581.191406 397.179688 581.933594 Z M 394.28125 583.855469 C 395.054688 583.21875 394.386719 582.609375 393.980469 581.992188 C 392.828125 583.226562 394.265625 582.9375 394.28125 583.855469 Z M 390.875 573.246094 C 390.328125 572.570312 389.792969 572.324219 389.265625 572.738281 C 389.8125 573.414062 390.351562 573.660156 390.875 573.246094 Z M 398.808594 569.363281 C 398.523438 569.015625 398.65625 568.285156 397.992188 568.578125 C 398.273438 568.925781 398.140625 569.65625 398.808594 569.363281 Z M 392.515625 575.347656 C 391.980469 576.4375 393.542969 575.734375 393.867188 576.125 C 394.253906 575.496094 394.894531 574.859375 394.097656 574.253906 C 393.835938 574.523438 393.574219 574.796875 393.3125 575.066406 C 393.042969 574.921875 392.777344 574.992188 392.515625 575.347656 Z M 399.988281 575.210938 C 399.804688 575.039062 399.625 574.863281 399.441406 574.6875 C 399.179688 574.960938 398.910156 574.800781 398.648438 574.96875 C 398.800781 575.234375 399.175781 575.492188 398.929688 575.765625 C 398.570312 575.476562 398.207031 575.226562 397.863281 575.785156 C 398.589844 576.5625 399.289062 575.875 399.988281 575.210938 Z M 402.996094 579.160156 C 403.996094 578.597656 403.699219 579.246094 404.347656 579.9375 C 404.609375 579.664062 404.871094 579.394531 405.132812 579.121094 C 404.5625 578.597656 402.648438 577.644531 402.996094 579.160156 Z M 402.996094 579.160156 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#af7e58394f)">
                <g clipPath="url(#bf1db8a7e6)">
                  <g clipPath="url(#91c3db4c26)">
                    <g clipPath="url(#e906f35a26)">
                      <path
                        fill="#eece38"
                        d="M 252.09375 308.976562 C 252.183594 309.0625 252.273438 309.152344 252.363281 309.238281 C 254.035156 309.445312 252.996094 307.46875 254.1875 306.800781 C 252.972656 306.078125 251.539062 307.167969 251.75 304.980469 C 252.019531 305.140625 252.285156 304.96875 252.554688 305.230469 C 251.945312 305.925781 253.398438 306.15625 253.632812 305.746094 C 254.160156 305.5 254.695312 305.492188 255.234375 305.714844 C 255.503906 305.875 255.765625 305.703125 256.039062 305.96875 C 255.824219 305.261719 256.359375 304.539062 255.996094 303.835938 C 256.792969 303.46875 257.613281 304.542969 258.414062 304.589844 C 258.8125 303.476562 256.617188 302.765625 258.082031 301.128906 C 258.863281 301.734375 259.53125 302.347656 258.382812 302.988281 C 259.027344 303.996094 259.625 302.746094 260.265625 303.753906 C 261.722656 302.863281 261.125 302.863281 261.824219 301.59375 C 262.621094 302.269531 262.359375 302.910156 261.585938 302.929688 C 262.136719 303.894531 262.65625 303.226562 263.207031 303.96875 C 263.691406 302.871094 264.394531 301.605469 265.863281 303.386719 C 266.773438 302.835938 265.847656 302.320312 266.367188 301.777344 C 266.773438 302.039062 267.160156 301.5 266.890625 301.234375 C 267.585938 300.914062 267.882812 301.824219 267.945312 300.679688 C 268.121094 300.5 268.296875 300.316406 268.46875 300.136719 C 269.015625 300.871094 269.511719 298.753906 270.070312 300.105469 C 268.328125 300.566406 269.457031 301.4375 269.316406 302.523438 C 268.542969 303.925781 271.183594 302.652344 270.371094 301.96875 C 269.671875 301.582031 270.222656 300.824219 270.625 301.164062 C 270.722656 301.867188 271.007812 302.140625 271.710938 302.210938 C 270.585938 303.402344 272.671875 303.230469 273.070312 303.519531 C 273.554688 303.875 273.242188 304.34375 273.625 304.578125 C 274.300781 304.996094 275.238281 304.859375 275.78125 305.605469 C 275.273438 306.0625 275.558594 306.5 275.003906 306.953125 C 275.546875 307.351562 276.074219 307.085938 276.59375 306.390625 C 276.863281 306.550781 277.128906 306.378906 277.402344 306.644531 C 277.609375 307.53125 276.390625 308.441406 276.917969 309.320312 C 276.65625 309.726562 277.195312 310.117188 277.460938 309.84375 C 277.203125 309.582031 277.570312 309.308594 277.714844 309.039062 C 277.804688 309.128906 277.894531 309.214844 277.984375 309.300781 C 277.292969 309.726562 277.363281 311.875 278.277344 310.632812 C 278.367188 310.71875 278.457031 310.804688 278.550781 310.894531 C 278.914062 311.289062 279.277344 311.679688 279.625 311.40625 C 281.023438 311.871094 279.761719 309.902344 279.082031 310.882812 C 278.816406 310.441406 279.117188 309.992188 278.789062 309.554688 C 280.25 309.441406 280.34375 310.539062 281.5 311.640625 C 281.152344 311.914062 281.09375 312.179688 281.246094 312.445312 C 279.652344 312.050781 279.257812 314.273438 280.230469 315.132812 C 279.5 315.589844 280.378906 316.019531 279.992188 316.46875 C 280.171875 316.742188 280.347656 316.613281 280.523438 316.460938 C 281.351562 316.457031 283.835938 315.976562 282.417969 317.761719 C 281.65625 317.363281 282.292969 316.15625 281.339844 317.246094 C 280.242188 316.945312 279.511719 318.855469 280.3125 319.398438 C 280.003906 319.816406 280.335938 321.960938 281.140625 320.71875 C 281.46875 321.601562 279.597656 322.527344 281.191406 323.386719 C 280.839844 323.75 280.492188 324.109375 280.144531 324.472656 C 279.53125 324.066406 277.078125 324.742188 278.835938 325.832031 C 277.777344 326.554688 278.976562 326.8125 279.390625 326.890625 C 279.125 327.058594 278.855469 326.898438 278.59375 327.171875 C 278.042969 326.257812 277.527344 327.183594 276.984375 326.667969 C 276.71875 327.027344 277.257812 327.371094 277.539062 327.722656 C 276.929688 328.425781 276.316406 329.070312 275.695312 329.089844 C 276.148438 329.59375 276.589844 329.3125 277.042969 329.867188 C 276.519531 330.28125 275.980469 330.035156 275.433594 329.363281 C 276.621094 330.710938 272.347656 330.96875 274.429688 332.582031 C 273.90625 333.21875 273.34375 331.777344 272.808594 331.546875 C 273.949219 331.4375 273.03125 331.179688 273.320312 330.46875 C 272.488281 330.003906 272.054688 331.699219 272.285156 332.089844 C 271.496094 332.746094 270.671875 331.476562 269.878906 331.867188 C 269.609375 332.382812 270.328125 332.09375 270.691406 332.652344 C 269.824219 333.703125 268.953125 334.597656 268.035156 333.234375 C 269.078125 332.324219 268.34375 331.449219 267.984375 330.566406 C 266.882812 331.105469 267.820312 332.179688 267.492188 332.710938 C 267.007812 333.492188 266.15625 333.230469 265.386719 334.351562 C 264.828125 334.003906 265.078125 333.644531 265.367188 333.285156 C 264.363281 332.441406 261.503906 333.933594 262.136719 331.742188 C 260.007812 331.949219 257.089844 330.230469 257 328.367188 C 256.214844 328.121094 254.871094 328.90625 254.847656 327.339844 C 255.796875 326.925781 255.765625 325.238281 254.816406 325.738281 C 255.074219 326 254.707031 326.273438 254.566406 326.542969 C 254.292969 326.382812 254.03125 326.554688 253.757812 326.292969 C 253.652344 325.847656 254.078125 325.394531 253.46875 324.960938 C 253.484375 324.335938 253.769531 324.175781 254.261719 324.679688 C 255.003906 323.65625 251.628906 323.71875 253.195312 324.699219 C 252.847656 325.0625 252.496094 325.425781 252.148438 325.785156 C 252.109375 325.34375 251.816406 324.902344 251.320312 324.46875 C 250.777344 324.304688 250.757812 325.320312 249.742188 325.5625 C 249.050781 325.042969 248.78125 324.515625 249.179688 323.972656 C 249.382812 323.257812 250.589844 322.523438 249.671875 321.828125 C 249.125 321.359375 248.914062 323.050781 248.632812 323.449219 C 247.628906 324.332031 248.820312 321.78125 247.820312 322.664062 C 247.898438 321.773438 248.542969 320.871094 249.367188 319.964844 C 249.566406 317.859375 249.199219 317.398438 248.480469 315.445312 C 248.871094 314.261719 251.03125 314.710938 249.777344 313.554688 C 250.394531 313.214844 251.003906 312.5625 251.632812 312.71875 C 251.796875 310.976562 249.933594 310.839844 251.558594 308.984375 C 251.742188 309.128906 251.921875 309.253906 252.09375 308.976562 Z M 250.644531 317.007812 C 250.382812 317.28125 250.554688 317.542969 250.394531 317.8125 C 250.246094 317.667969 249.875 317.734375 250.132812 318.085938 C 250.519531 318.070312 252.089844 317.40625 250.90625 316.734375 C 250.355469 316.535156 250.445312 315.84375 250.355469 315.679688 C 249.730469 314.550781 249.800781 316.644531 250.644531 317.007812 Z M 251 321.539062 C 250.109375 322.089844 251.054688 322.605469 251.03125 323.136719 C 251.648438 322.59375 251.640625 322.058594 251 321.539062 Z M 261.582031 330.683594 C 260.945312 329.992188 260.316406 329.738281 259.699219 329.917969 C 260.335938 330.609375 260.964844 330.863281 261.582031 330.683594 Z M 279.507812 319.148438 C 279.328125 318.972656 279.144531 318.796875 278.964844 318.625 C 277.898438 318.886719 279.117188 320.3125 279.519531 319.679688 C 279.367188 319.507812 279.234375 319.332031 279.507812 319.148438 Z M 279.507812 319.148438 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#f39605de35)">
                <g clipPath="url(#eb7e8386b6)">
                  <g clipPath="url(#c323081117)">
                    <g clipPath="url(#64ff414e4e)">
                      <path
                        fill="#eece38"
                        d="M 277.71875 290.019531 C 278.429688 289.082031 278.167969 290.191406 278.523438 290.273438 C 279.464844 290.488281 279.941406 289.839844 281.179688 289.691406 C 281.976562 290.984375 280.324219 290.664062 279.621094 291.851562 C 279.074219 291.179688 278.535156 290.933594 278.011719 291.347656 C 277.90625 290.90625 278.332031 290.453125 277.71875 290.019531 Z M 277.71875 290.019531 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#12f998f15c)">
                <g clipPath="url(#e23c16b2da)">
                  <g clipPath="url(#e66a33a293)">
                    <g clipPath="url(#abc85daec0)">
                      <path
                        fill="#eece38"
                        d="M 246.460938 288.191406 C 246.640625 288.367188 246.824219 288.539062 247.003906 288.714844 C 246.828125 288.894531 246.65625 289.078125 246.480469 289.257812 C 246.300781 289.082031 246.117188 288.910156 245.9375 288.734375 C 246.113281 288.554688 246.285156 288.371094 246.460938 288.191406 Z M 246.460938 288.191406 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#9d4e6755cd)">
                <g clipPath="url(#f141d6e7c3)">
                  <g clipPath="url(#0d8310e21e)">
                    <g clipPath="url(#1e6f949a80)">
                      <path
                        fill="#eece38"
                        d="M 278.59375 294.007812 C 279.71875 294.464844 279.589844 294.820312 279.964844 295.847656 C 279.523438 296.113281 279.074219 295.816406 278.636719 296.140625 C 278.542969 295.429688 277.648438 294.734375 278.59375 294.007812 Z M 278.59375 294.007812 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#dbfdcc3957)">
                <g clipPath="url(#554aa5fded)">
                  <g clipPath="url(#5238a5fa36)">
                    <g clipPath="url(#586c3f4e42)">
                      <path
                        fill="#6ca5ee"
                        d="M 395.453125 561.417969 C 395.867188 561.945312 395.621094 562.484375 394.949219 563.03125 C 394.710938 562.328125 394.488281 561.414062 395.453125 561.417969 Z M 395.453125 561.417969 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#ddffa41e86)">
                <g clipPath="url(#dd7b8fd41a)">
                  <g clipPath="url(#5493efe5af)">
                    <g clipPath="url(#0d45e5b8ff)">
                      <path
                        fill="#6ca5ee"
                        d="M 398.445312 564.300781 C 397.0625 565.371094 397.007812 562.496094 398.445312 564.300781 Z M 398.445312 564.300781 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#bdbba3d478)">
                <g clipPath="url(#47f711a8ce)">
                  <g clipPath="url(#ad55971cbd)">
                    <g clipPath="url(#ef4b628623)">
                      <path
                        fill="#6ca5ee"
                        d="M 244.449219 35.609375 C 244.628906 35.785156 244.8125 35.960938 244.992188 36.132812 C 244.820312 36.316406 244.644531 36.496094 244.46875 36.675781 C 244.289062 36.503906 244.105469 36.328125 243.925781 36.152344 C 244.101562 35.972656 244.273438 35.789062 244.449219 35.609375 Z M 244.449219 35.609375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#113c161c98)">
                <g clipPath="url(#6f28e5b1f6)">
                  <g clipPath="url(#0d4b4d33ab)">
                    <g clipPath="url(#b52e0ad721)">
                      <path
                        fill="#6ca5ee"
                        d="M 220.339844 72.609375 C 220.511719 72.429688 220.6875 72.25 220.863281 72.066406 C 221.042969 72.242188 221.226562 72.417969 221.40625 72.589844 C 221.230469 72.773438 221.058594 72.953125 220.882812 73.132812 C 220.703125 72.960938 220.519531 72.785156 220.339844 72.609375 Z M 220.339844 72.609375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#835eba615a)">
                <g clipPath="url(#3ea31a6a4e)">
                  <g clipPath="url(#42140280b1)">
                    <g clipPath="url(#e598b3e536)">
                      <path
                        fill="#6ca5ee"
                        d="M 251.347656 47.492188 C 251.089844 47.230469 251.457031 46.957031 251.597656 46.6875 C 251.78125 46.863281 251.960938 47.035156 252.144531 47.210938 C 252.054688 47.300781 251.96875 47.390625 251.882812 47.480469 C 251.707031 47.632812 251.53125 47.765625 251.347656 47.492188 Z M 251.347656 47.492188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#f2f5091aa7)">
                <g clipPath="url(#a8af44eccc)">
                  <g clipPath="url(#bb9e2198d0)">
                    <g clipPath="url(#5fce61cf0d)">
                      <path
                        fill="#6ca5ee"
                        d="M 255.625 47.949219 C 256.066406 47.726562 256.511719 47.722656 256.964844 48.191406 C 256.296875 49.359375 255.648438 48.71875 255.625 47.949219 Z M 255.625 47.949219 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#07fa7aee81)">
                <g clipPath="url(#3527386270)">
                  <g clipPath="url(#678e62b4c8)">
                    <g clipPath="url(#e428b29d62)">
                      <path
                        fill="#6ca5ee"
                        d="M 229.882812 69.234375 C 230.632812 70.632812 229.265625 69.722656 228.574219 70.59375 C 227.996094 69.59375 229.585938 70.25 229.882812 69.234375 Z M 229.882812 69.234375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#2b8aeff69e)">
                <g clipPath="url(#ce15599db9)">
                  <g clipPath="url(#383ab4b055)">
                    <g clipPath="url(#dab467c79f)">
                      <path
                        fill="#6ca5ee"
                        d="M 246.402344 40.109375 C 246.578125 39.929688 246.753906 39.75 246.925781 39.566406 C 246.929688 40.980469 248.066406 40.023438 248.820312 40.867188 C 248.03125 41.53125 247.210938 40.542969 246.421875 41.179688 C 246.765625 40.816406 246.1875 40.472656 246.402344 40.109375 Z M 246.402344 40.109375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#4f4871eb14)">
                <g clipPath="url(#186522526b)">
                  <g clipPath="url(#65dbb7321b)">
                    <g clipPath="url(#b4654e3ce6)">
                      <path
                        fill="#6ca5ee"
                        d="M 220.402344 48.058594 C 220.164062 46.921875 218.949219 47.457031 219.839844 46.46875 C 219.480469 46.25 219.132812 46.832031 218.773438 46.488281 C 217.484375 45.800781 219.121094 45.058594 218.730469 44.351562 C 219.367188 44.042969 221.367188 44.089844 221.148438 45.109375 C 221.867188 45.472656 222.546875 43.8125 223.28125 45.070312 C 222.578125 43.648438 221.039062 43.652344 219.757812 42.199219 C 220.191406 41.746094 220.628906 41.292969 221.066406 40.839844 C 221.5625 41.867188 221.925781 42.214844 222.96875 42.675781 C 223.59375 42.761719 224.203125 42.097656 224.832031 42.375 C 224.890625 42.816406 224.765625 43.265625 224.589844 43.710938 C 225.035156 43.757812 225.476562 43.613281 225.917969 43.421875 C 225.503906 42.421875 226.121094 42.75 226.691406 42.074219 C 227.082031 41.609375 226.324219 40.472656 227.195312 40.460938 C 227.683594 41.152344 229.480469 41.09375 229.058594 40.160156 C 228.34375 39.867188 231.933594 39.75 230.085938 38.007812 C 230.585938 37.644531 230.277344 37.292969 230.597656 36.929688 C 230.683594 36.839844 230.773438 36.75 230.859375 36.660156 C 231.269531 37.621094 232.9375 36.40625 232.480469 37.695312 C 233.1875 37.75 234.085938 36.757812 234.089844 38.203125 C 233.289062 38.183594 232.484375 37.972656 231.695312 38.511719 C 231.535156 38.78125 231.707031 39.046875 231.445312 39.316406 C 231.980469 39.488281 232.507812 39.222656 233.035156 38.753906 C 233.527344 39.597656 233.894531 40.097656 234.925781 40.054688 C 235.289062 40.402344 235.652344 40.753906 236.015625 41.101562 C 236.558594 40.734375 236.296875 40.386719 235.996094 40.035156 C 235.5625 39.09375 236.730469 39.699219 237.050781 39.480469 C 237.226562 39.359375 237.222656 38.902344 237.039062 38.949219 C 238.453125 38.601562 239.105469 39.457031 239.6875 37.832031 C 240.011719 38.210938 241.617188 39.769531 241.039062 38.609375 C 241.300781 38.351562 241.574219 38.71875 241.84375 38.859375 C 241.570312 39.042969 241.703125 39.21875 241.851562 39.394531 C 241.394531 39.847656 241.378906 40.292969 241.613281 40.730469 C 243.375 40.800781 244.707031 39.5 245.859375 39.585938 C 246.105469 40.59375 244.5 39.9375 245.617188 40.925781 C 244.925781 41.480469 243.910156 41.535156 244.582031 42.546875 C 245.707031 41.753906 246.578125 43.007812 246.734375 43.574219 C 247.054688 43.738281 248.617188 43.066406 248.054688 42.75 C 249.441406 41.925781 247.757812 44.621094 249.140625 43.796875 C 249.234375 43.882812 249.324219 43.972656 249.414062 44.058594 C 249.585938 44.320312 249.421875 44.59375 249.695312 44.855469 C 249.175781 45.5625 248.621094 44.398438 248.09375 44.882812 C 248.007812 44.972656 247.921875 45.0625 247.832031 45.15625 C 248.003906 45.417969 247.84375 45.6875 248.117188 45.949219 C 247.71875 46.238281 246.960938 45.523438 247.300781 45.164062 C 246.941406 45.050781 246.585938 44.933594 246.234375 45.183594 C 245.609375 45.105469 244.992188 45.402344 244.359375 44.953125 C 244.082031 44.777344 244.207031 44.597656 244.351562 44.417969 C 245.191406 43.699219 245.183594 43.421875 244.332031 43.351562 C 244.289062 42.679688 244.003906 42.832031 243.515625 42.566406 C 243.472656 44.347656 242.8125 42.933594 241.953125 44.726562 C 243.230469 45.144531 243.242188 45.785156 241.996094 46.863281 C 242.453125 47.523438 242.894531 47.371094 243.34375 47.640625 C 243.75 46.742188 242.726562 45.871094 243.828125 44.960938 C 243.917969 45.046875 244.007812 45.136719 244.097656 45.222656 C 244.1875 45.453125 245.707031 47.71875 245.710938 45.726562 C 245.984375 46.074219 246.25 46.132812 246.515625 45.980469 C 246.792969 46.332031 246.269531 46.695312 246.003906 47.054688 C 244.816406 46.675781 245.339844 48.460938 244.171875 48.957031 C 243.8125 48.84375 243.453125 48.726562 243.105469 48.976562 C 243.558594 49.4375 244.003906 49.453125 244.441406 49.21875 C 244.792969 48.945312 245.160156 49.46875 245.519531 49.734375 C 246.269531 48.917969 245.058594 48.140625 246.273438 47.316406 C 246.363281 47.226562 246.449219 47.136719 246.535156 47.046875 C 246.707031 47.308594 246.542969 47.582031 246.816406 47.839844 C 247.335938 48.113281 247.046875 47.390625 247.601562 47.027344 C 248.347656 47.488281 246.972656 49.308594 247.90625 48.890625 C 248.179688 49.238281 247.65625 49.605469 247.394531 49.964844 C 246.6875 49.589844 245.460938 49.402344 246.871094 50.507812 C 247.800781 51.027344 246.894531 51.578125 247.433594 52.101562 C 246.992188 52.363281 246.542969 52.066406 246.105469 52.390625 C 246.742188 53.082031 247.375 53.710938 247.988281 53.15625 C 248.339844 52.882812 248.703125 53.40625 249.0625 53.671875 C 249.484375 53.28125 248.582031 53.003906 248.511719 52.613281 C 248.453125 52.308594 249.082031 51.78125 249.023438 51.539062 C 248.929688 51.128906 247.695312 50.574219 248.460938 49.945312 C 248.640625 50.21875 248.816406 50.085938 248.992188 49.9375 C 250.164062 49.753906 249.792969 48.652344 251.097656 48.296875 C 251.265625 48.5625 251.105469 48.832031 251.378906 49.09375 C 251.292969 49.183594 251.203125 49.273438 251.117188 49.363281 C 251.167969 50.503906 250.03125 50.011719 250.082031 50.984375 C 250.53125 51.257812 250.960938 50.523438 251.398438 50.160156 C 251.757812 50.226562 252.113281 50.300781 252.476562 50.675781 C 252.207031 51.191406 252.925781 50.902344 253.292969 51.460938 C 253.640625 51.1875 253.699219 50.917969 253.542969 50.652344 C 254.40625 50.898438 255.007812 51.730469 255.71875 52.75 C 254.175781 53.519531 254.179688 53.253906 252.558594 54.941406 C 252.964844 55.945312 254.535156 55.230469 253.382812 56.261719 C 253.832031 56.464844 254.277344 56.453125 254.710938 55.96875 C 254.992188 56.144531 254.867188 56.324219 254.722656 56.503906 C 254.902344 56.679688 255.085938 56.851562 255.265625 57.027344 C 254.867188 57.132812 254.113281 56.710938 254.472656 57.308594 C 253.761719 57.5 253.027344 56.289062 252.328125 56.8125 C 252.542969 57.523438 252.007812 58.242188 252.367188 58.949219 C 252.769531 58.972656 253.519531 59.242188 253.183594 59.734375 C 252.410156 60.199219 251.066406 60.851562 251.050781 59.773438 C 249.960938 60.414062 251.570312 61.007812 251.351562 61.636719 C 250.226562 63.226562 249.046875 62.003906 247.917969 63.566406 C 249.121094 64.761719 251.339844 64.421875 251.695312 65.632812 C 251.082031 66.117188 250.445312 65.472656 249.824219 65.398438 C 249.367188 66.554688 249.011719 66.65625 247.980469 66.765625 C 247.113281 65.984375 246.589844 65.191406 246.601562 64.390625 C 245.34375 63.75 244.128906 65.328125 242.875 64.992188 C 242.714844 65.261719 242.886719 65.527344 242.625 65.796875 C 243.433594 66.132812 244.230469 66.054688 245.011719 64.953125 C 246.191406 65.910156 245.679688 66.898438 245.867188 67.875 C 244.90625 68.515625 245.535156 67.054688 244.78125 66.824219 C 245.191406 67.523438 243.972656 68.289062 244.003906 68.175781 C 243.8125 68.835938 244.679688 69.355469 243.773438 70.046875 C 243.789062 69.066406 242.699219 68.109375 243.449219 67.117188 C 242.105469 66.585938 240.769531 66.390625 239.464844 67.992188 C 239.03125 68.667969 238.585938 68.53125 238.144531 68.816406 C 238.789062 69.902344 239.382812 68.296875 240.007812 68.515625 C 240.410156 68.605469 241.148438 68.15625 240.8125 68.765625 C 240.726562 68.859375 240.640625 68.949219 240.550781 69.039062 C 239.855469 68.425781 239.628906 69.882812 240.039062 70.117188 C 239.308594 70.027344 237.210938 69.828125 237.390625 71.230469 C 236.769531 71.800781 237.046875 70.21875 236.03125 69.921875 C 236.304688 69.738281 236.171875 69.5625 236.023438 69.386719 C 235.515625 69.675781 235.777344 68.945312 235.207031 68.601562 C 234.976562 68.25 235.542969 67.882812 235.1875 67.535156 C 234.425781 67.835938 233.371094 68.171875 233.09375 69.707031 C 232.554688 69.777344 232.5 69.105469 231.480469 69.203125 C 231.390625 69.117188 231.300781 69.03125 231.210938 68.941406 C 231.554688 68.429688 231.917969 68.722656 232.265625 68.390625 C 231.625 67.3125 231.015625 67.988281 230.394531 68.15625 C 230.121094 67.894531 229.851562 67.632812 229.578125 67.371094 C 229.214844 66.871094 228.863281 67.175781 228.5 66.855469 C 228.96875 65.890625 227.074219 65.925781 227.433594 66.878906 C 226.367188 67.519531 227.054688 68.128906 226.671875 68.757812 C 226.644531 67.273438 225.308594 68.417969 224.515625 67.730469 C 223.464844 69.519531 222.546875 68.105469 222.152344 69.640625 C 221.695312 69.136719 221.257812 69.421875 220.800781 68.867188 C 221.320312 68.175781 221.851562 67.90625 222.390625 68.304688 C 222.25 67.503906 222.5625 66.699219 221.546875 65.917969 C 221.828125 65.140625 220.238281 64.890625 220.738281 65.664062 C 219.742188 66.375 220.441406 66.996094 219.429688 67.023438 C 218.917969 66.675781 219.210938 66.316406 218.878906 65.964844 C 219.714844 65.328125 218.109375 64.734375 218.574219 64.105469 C 218.964844 63.714844 219.441406 63.117188 219.351562 62.753906 C 219.171875 62.039062 217.914062 63.523438 217.488281 63.054688 C 217.128906 62.839844 216.78125 63.417969 216.421875 63.074219 C 215.921875 62.375 216.117188 61.65625 215.847656 60.953125 C 216.160156 60.433594 215.136719 60.730469 215.5625 60.15625 C 215.8125 59.707031 215.496094 59.265625 215.804688 58.816406 C 216.074219 58.976562 216.339844 58.804688 216.609375 59.070312 C 217.246094 59.769531 217.863281 59.472656 218.484375 59.300781 C 217.933594 58.390625 217.417969 59.316406 216.871094 58.796875 C 216.195312 58.367188 216.332031 57.917969 216.046875 57.480469 C 216.222656 57.296875 216.394531 57.117188 216.570312 56.933594 C 216.167969 56.910156 215.417969 56.640625 215.753906 56.148438 C 215.929688 55.96875 216.101562 55.789062 216.277344 55.605469 C 216.453125 55.425781 216.625 55.246094 216.800781 55.0625 C 217.773438 55.527344 217.535156 53.84375 217.304688 53.453125 C 216.792969 53.191406 217.101562 53.71875 216.78125 53.996094 C 216.222656 52.644531 215.726562 54.761719 215.179688 54.023438 C 214.015625 52.992188 215.839844 52.320312 214.070312 51.910156 C 214.757812 50.503906 215.496094 52.015625 216.195312 51.339844 C 216.832031 52.03125 215.390625 52.335938 215.148438 52.425781 C 216.328125 53.6875 217.4375 51.171875 218.613281 52.09375 C 218.882812 51.644531 218.148438 51.214844 217.785156 50.777344 C 218.027344 50.683594 219.46875 50.382812 218.832031 49.6875 C 219.359375 49.375 219.910156 50.28125 220.421875 49.125 C 220.535156 48.769531 220.652344 48.410156 220.402344 48.058594 Z M 240.542969 40.753906 C 240.371094 40.933594 240.195312 41.113281 240.019531 41.296875 C 241.613281 41.417969 240.085938 42.796875 241.378906 42.605469 C 241.277344 41.984375 241.554688 41.355469 241.078125 40.742188 C 240.902344 40.890625 240.726562 41.023438 240.542969 40.753906 Z M 245.257812 50.003906 C 245.628906 51.363281 244.605469 51.25 243.679688 51.101562 C 244.257812 52.105469 244.554688 52.394531 245.582031 52.933594 C 246.074219 52.109375 246.835938 49.90625 245.257812 50.003906 Z M 247.417969 65.175781 C 247.882812 64.722656 247.878906 64.277344 247.65625 63.839844 C 247.191406 64.292969 247.195312 64.734375 247.417969 65.175781 Z M 217.980469 60.914062 C 218.277344 60.460938 217.683594 60.027344 217.6875 59.582031 C 217.300781 60.035156 216.746094 60.488281 217.445312 60.921875 C 215.480469 62.480469 218.585938 61.433594 217.980469 60.914062 Z M 218.902344 53.421875 C 219.175781 53.683594 219.449219 53.949219 219.71875 54.210938 C 219.863281 53.941406 220.230469 53.667969 219.972656 53.402344 C 220.753906 52.429688 218.085938 52.480469 218.902344 53.421875 Z M 221.5625 52.839844 C 222.460938 52.429688 221.207031 50.765625 220.996094 51.25 C 221.261719 51.777344 221.296875 52.3125 221.5625 52.839844 Z M 220.042969 57.140625 C 220.371094 56.433594 218.453125 55.246094 218.964844 56.625 C 219.699219 55.695312 219.085938 58.070312 220.042969 57.140625 Z M 238.410156 40.789062 C 238.179688 41.320312 236.714844 40.433594 237.351562 41.34375 C 237.953125 40.988281 237.53125 41.742188 237.636719 42.140625 C 237.808594 41.988281 237.984375 41.855469 238.167969 42.128906 C 238.539062 41.765625 238.617188 41.410156 238.683594 41.054688 C 239.03125 40.695312 239.398438 41.261719 239.75 41.03125 C 239.757812 40.328125 238.820312 39.332031 238.128906 39.996094 C 238.402344 40.257812 238.238281 40.527344 238.410156 40.789062 Z M 221.695312 59.777344 C 220.320312 61.203125 222.5625 61.164062 221.695312 59.777344 Z M 247.261719 57.171875 C 248.554688 57.632812 247.339844 55.964844 248.300781 55.554688 C 247.574219 54.914062 246.867188 55.136719 246.15625 55.058594 C 246.867188 55.667969 247.523438 56.28125 246.992188 56.910156 C 245.835938 57.988281 247.292969 58.605469 247.261719 57.171875 Z M 245.117188 56.679688 C 243.152344 58.238281 246.257812 57.191406 245.652344 56.667969 C 245.796875 56.398438 245.730469 56.132812 245.371094 55.875 C 245.195312 56.054688 245.019531 56.238281 244.847656 56.417969 C 244.9375 56.503906 245.027344 56.59375 245.117188 56.679688 Z M 243.832031 59.105469 C 243.566406 59.464844 243.042969 59.832031 243.316406 60.179688 C 243.15625 60.570312 243.453125 62.148438 244.132812 60.96875 C 243.328125 59.808594 245.449219 60.117188 245.160156 58.8125 C 244.722656 59.136719 244.269531 58.839844 243.832031 59.105469 Z M 250.183594 56.320312 C 250.554688 55.691406 252.128906 55.039062 250.949219 54.4375 C 250.257812 55.074219 249.625 55.707031 250.183594 56.320312 Z M 247.839844 59.296875 C 248.277344 58.972656 248.726562 59.269531 249.167969 59.007812 C 248.894531 58.746094 248.621094 58.484375 248.351562 58.222656 C 248.175781 58.402344 248 58.582031 247.828125 58.765625 C 247.683594 58.945312 247.558594 59.125 247.839844 59.296875 Z M 245.734375 60.9375 C 246.019531 61.417969 245.878906 61.707031 246.550781 61.722656 C 246.691406 61.453125 247.058594 61.179688 246.800781 60.917969 C 246.453125 61.273438 246.085938 60.707031 245.734375 60.9375 Z M 245.734375 60.9375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#355f36b64b)">
                <g clipPath="url(#4e97f33132)">
                  <g clipPath="url(#b745d26a2a)">
                    <g clipPath="url(#8d1f8acd55)">
                      <path
                        fill="#6ca5ee"
                        d="M 222.90625 39.472656 C 223.523438 39.066406 224.15625 39.730469 224.757812 38.640625 C 225.214844 39.144531 225.652344 38.859375 226.109375 39.414062 C 225.214844 39.449219 224.757812 40.230469 224.257812 40.25 C 223.878906 40.261719 224.230469 39.699219 224.246094 39.714844 C 223.976562 39.449219 223.230469 40.203125 222.90625 39.472656 Z M 222.90625 39.472656 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#92788ee25e)">
                <g clipPath="url(#a7dff3c1d0)">
                  <g clipPath="url(#d6f1b2f0a2)">
                    <g clipPath="url(#086422cb07)">
                      <path
                        fill="#6ca5ee"
                        d="M 221.980469 74.714844 C 222.246094 74.226562 222.09375 73.941406 222.765625 73.902344 C 222.933594 74.164062 222.773438 74.433594 223.046875 74.695312 C 222.695312 74.820312 222.339844 74.953125 221.980469 74.714844 Z M 221.980469 74.714844 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#56babf62b3)">
                <g clipPath="url(#da7f236d22)">
                  <g clipPath="url(#f90ce405ae)">
                    <g clipPath="url(#c4ac028600)">
                      <path
                        fill="#6ca5ee"
                        d="M 227.445312 39.65625 C 228.40625 38.933594 227.878906 38.023438 229.015625 38.027344 C 229.574219 38.640625 228.941406 39.273438 228.253906 39.910156 C 227.777344 40.433594 227.488281 40.28125 227.445312 39.65625 Z M 227.445312 39.65625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#a8cd94940f)">
                <g clipPath="url(#b2b72904a0)">
                  <g clipPath="url(#e3df435311)">
                    <g clipPath="url(#396355cbfd)">
                      <path
                        fill="#6ca5ee"
                        d="M 249.980469 45.648438 C 249.777344 46.097656 249.789062 46.542969 250.269531 46.976562 C 249.664062 47.761719 249.046875 48.050781 248.410156 47.277344 C 249.027344 46.824219 249.171875 46.375 248.648438 45.941406 C 248.792969 45.761719 248.917969 45.578125 248.640625 45.40625 C 249.078125 45.1875 249.523438 45.183594 249.980469 45.648438 Z M 249.980469 45.648438 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#73ee790d75)">
                <g clipPath="url(#f03f6b332c)">
                  <g clipPath="url(#92ff575a4d)">
                    <g clipPath="url(#365d2e8d4f)">
                      <path
                        fill="#6ca5ee"
                        d="M 251.851562 45.882812 C 252.195312 45.324219 252.554688 45.574219 252.917969 45.863281 C 252.832031 45.953125 252.742188 46.042969 252.65625 46.132812 C 252.480469 46.285156 252.304688 46.417969 252.121094 46.144531 C 252.03125 46.054688 251.941406 45.96875 251.851562 45.882812 Z M 251.851562 45.882812 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c5a576853e)">
                <g clipPath="url(#f4feebac25)">
                  <g clipPath="url(#e886a89811)">
                    <g clipPath="url(#a0e730eb4b)">
                      <path
                        fill="#6ca5ee"
                        d="M 252.425781 48.007812 C 253.398438 48.714844 254.144531 48.546875 255.132812 50.089844 C 254.246094 50.199219 253.347656 49.675781 252.464844 50.140625 C 252.285156 49.964844 252.105469 49.792969 251.921875 49.617188 C 252.195312 49.433594 252.0625 49.257812 251.910156 49.082031 C 251.980469 48.726562 252.054688 48.367188 252.425781 48.007812 Z M 252.425781 48.007812 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#8968f9eae4)">
                <g clipPath="url(#ea60d04f96)">
                  <g clipPath="url(#94894c8b6e)">
                    <g clipPath="url(#9fc8d2dbf9)">
                      <path
                        fill="#6ca5ee"
                        d="M 235.5 69.933594 C 235.238281 70.203125 234.976562 70.476562 234.714844 70.746094 C 234.53125 70.472656 234.355469 70.605469 234.179688 70.757812 C 234.011719 70.492188 234.171875 70.222656 233.898438 69.960938 C 233.808594 69.875 233.71875 69.785156 233.625 69.699219 C 234.070312 69.660156 234.507812 69.367188 234.945312 68.875 C 235.023438 69.230469 235.113281 69.582031 235.5 69.933594 Z M 235.5 69.933594 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#6fb4ece037)">
                <g clipPath="url(#9edb67149f)">
                  <g clipPath="url(#093e1ca43f)">
                    <g clipPath="url(#2263c424ab)">
                      <path
                        fill="#6ca5ee"
                        d="M 214.695312 56.703125 C 215.046875 56.425781 215.414062 56.953125 215.773438 57.21875 C 215.457031 57.578125 215.761719 57.929688 215.261719 58.292969 C 214.992188 58.132812 214.726562 58.304688 214.457031 58.042969 C 215.074219 57.585938 215.21875 57.136719 214.695312 56.703125 Z M 214.695312 56.703125 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#db53d242b9)">
                <g clipPath="url(#3c99e6d59f)">
                  <g clipPath="url(#164a7c8a33)">
                    <g clipPath="url(#7d682c356f)">
                      <path
                        fill="#6ca5ee"
                        d="M 252.101562 45.078125 C 251.882812 44.636719 251.878906 44.191406 252.34375 43.738281 C 252.820312 44.171875 252.851562 44.617188 252.636719 45.066406 C 252.460938 45.21875 252.285156 45.347656 252.101562 45.078125 Z M 252.101562 45.078125 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#dc554a5afa)">
                <g clipPath="url(#fd32305495)">
                  <g clipPath="url(#9ba37e6bec)">
                    <g clipPath="url(#fece56e46e)">
                      <path
                        fill="#d76a28"
                        d="M 63.777344 175.269531 C 64.449219 175.289062 64.308594 175.574219 64.59375 176.054688 C 64.417969 176.238281 64.246094 176.417969 64.070312 176.601562 C 63.886719 176.328125 63.710938 176.457031 63.539062 176.609375 C 63.367188 176.34375 63.527344 176.074219 63.253906 175.8125 C 63.429688 175.632812 63.605469 175.453125 63.777344 175.269531 Z M 63.777344 175.269531 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#9a3895321d)">
                <g clipPath="url(#62130ff41c)">
                  <g clipPath="url(#3325e03a19)">
                    <g clipPath="url(#0ee1cf47dc)">
                      <path
                        fill="#d76a28"
                        d="M 62.007812 180.371094 C 61.34375 180.664062 61.476562 179.9375 61.191406 179.585938 C 61.636719 179.550781 62.074219 179.257812 62.511719 178.761719 C 62.636719 179.117188 62.769531 179.46875 62.53125 179.828125 C 62.148438 179.570312 62.074219 179.96875 62.007812 180.371094 Z M 62.007812 180.371094 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#4664958b07)">
                <g clipPath="url(#9979ff8c70)">
                  <g clipPath="url(#0ff686d386)">
                    <g clipPath="url(#21dc807cde)">
                      <path
                        fill="#d76a28"
                        d="M 62.8125 180.625 C 62.902344 180.535156 62.988281 180.445312 63.074219 180.355469 C 63.386719 180.132812 64.972656 180.765625 64.402344 180.0625 C 65.011719 179.347656 65.628906 179.070312 66.253906 179.226562 C 67.035156 178.589844 64.488281 178.015625 65.953125 177.367188 C 67.304688 177.371094 66.398438 178.925781 67.332031 179.742188 C 67.890625 180.085938 67.640625 180.449219 67.355469 180.808594 C 68.066406 181.339844 68.695312 180.683594 68.140625 179.992188 C 69.835938 179.25 67.414062 178.585938 68.632812 177.851562 C 69.136719 177.394531 68.851562 176.957031 69.40625 176.5 C 69.496094 176.589844 69.585938 176.675781 69.679688 176.761719 C 70.386719 177.285156 69.222656 177.839844 69.710938 178.363281 C 70.054688 177.957031 70.40625 177.550781 70.765625 177.8125 C 70.9375 178.074219 70.773438 178.34375 71.046875 178.605469 C 71.574219 178.355469 72.082031 176.898438 72.628906 177.511719 C 73.710938 178.023438 72.527344 178.578125 72.125 179.121094 C 72.671875 179.734375 73.175781 178.277344 73.703125 178.023438 C 74.394531 177.730469 73.839844 178.46875 73.453125 178.828125 C 74.1875 179.949219 74.890625 179.632812 75.609375 179.859375 C 75.542969 180.628906 74.914062 181.296875 74.8125 180.136719 C 74.464844 180.5 74.113281 180.863281 73.765625 181.226562 C 74.21875 181.730469 74.660156 181.445312 75.117188 182 C 75.289062 181.820312 75.464844 181.636719 75.636719 181.457031 C 75.8125 181.277344 75.988281 181.09375 76.160156 180.914062 C 76.527344 181.414062 76.875 181.109375 77.238281 181.429688 C 77.421875 181.601562 77.601562 181.777344 77.78125 181.953125 C 77.238281 182.363281 77.503906 182.757812 77.792969 182.484375 C 77.972656 182.660156 78.15625 182.835938 78.335938 183.007812 C 77.636719 183.03125 77.378906 183.667969 77.5625 184.359375 C 78.421875 182.910156 79.328125 183.652344 80.210938 183.242188 C 80.652344 184.046875 81.578125 185.886719 82.636719 184.53125 C 83.007812 186.089844 84.167969 186.070312 84.769531 184.492188 C 85.125 185.199219 84.796875 185.914062 84.277344 186.636719 C 83.824219 186.175781 83.378906 186.160156 82.9375 186.394531 C 82.675781 186.753906 83.214844 187.101562 83.492188 187.453125 C 83.558594 187.046875 83.632812 186.648438 84.015625 186.910156 C 84.105469 186.996094 84.195312 187.082031 84.289062 187.171875 C 84.027344 187.441406 83.765625 187.714844 83.503906 187.984375 C 83.882812 190.292969 85.625 190.164062 86.511719 191.933594 C 84.914062 191.289062 86.496094 192.96875 85.195312 192.757812 C 85.171875 192.222656 85.160156 191.691406 85.164062 191.15625 C 83.492188 190.394531 84.574219 192.285156 84.933594 193.027344 C 84.847656 193.121094 84.757812 193.210938 84.671875 193.300781 C 84.496094 193.480469 84.324219 193.664062 84.148438 193.84375 C 83.886719 194.117188 83.625 194.386719 83.363281 194.660156 C 83.695312 195.425781 85.273438 195.675781 84.703125 194.902344 C 85.398438 194.484375 85.679688 194.734375 85.78125 195.414062 C 84.503906 195.414062 85.496094 196.316406 85.277344 197.027344 C 85.722656 197.070312 86.164062 196.929688 86.605469 196.734375 C 86.175781 197.390625 89.171875 201.054688 87.199219 199.925781 C 87.121094 199.570312 87.03125 199.21875 86.644531 198.867188 C 86.382812 199.140625 86.121094 199.410156 85.859375 199.683594 C 85.503906 199.570312 85.144531 199.453125 84.792969 199.703125 C 84.523438 199.457031 84.261719 199.832031 84 199.984375 C 84.367188 200.53125 84.714844 200.265625 85.066406 199.964844 C 85.09375 201.042969 85.714844 200.359375 86.414062 200.742188 C 86.34375 201.425781 86.070312 201.6875 85.359375 201.292969 C 85.40625 202.359375 85.867188 203.417969 84.886719 204.503906 C 83.695312 203.648438 84.082031 205.757812 82.773438 205.613281 C 82.078125 206.414062 81.351562 205.753906 80.628906 205.117188 C 80.992188 203.878906 82.933594 206.25 81.683594 204.5625 C 82.382812 204.144531 82.664062 204.394531 82.761719 205.078125 C 83.199219 204.625 83.632812 204.171875 84.070312 203.71875 C 83.613281 203.058594 83.171875 203.210938 82.722656 202.941406 C 82.363281 202.875 82.007812 202.800781 81.644531 202.429688 C 81.484375 202.699219 81.65625 202.960938 81.394531 203.234375 C 81.144531 203.507812 81.523438 203.765625 81.675781 204.03125 C 80.683594 203.890625 79.75 204.75 79.84375 205.933594 C 78.773438 206.507812 79.417969 204.921875 79.019531 204.613281 C 78.746094 204.453125 78.484375 204.625 78.210938 204.359375 C 78.167969 204.804688 78.308594 205.246094 78.503906 205.6875 C 78.332031 205.96875 78.152344 205.84375 77.96875 205.699219 C 77.789062 205.425781 77.613281 205.558594 77.4375 205.707031 C 76.972656 205.183594 78.15625 204.628906 77.941406 204.097656 C 77.3125 204.238281 76.089844 203.839844 75.273438 204.148438 C 74.5 204.4375 74.132812 206.074219 73.160156 205.253906 C 73.070312 205.699219 73.511719 206.136719 72.917969 206.59375 C 72.464844 206.199219 72.007812 205.460938 71.566406 205.816406 C 71.398438 205.554688 71.558594 205.28125 71.285156 205.019531 C 71.8125 204.308594 71.832031 203.292969 72.867188 203.925781 C 72.996094 202.691406 70.886719 201.789062 70.179688 202.90625 C 69.066406 202.371094 70.691406 203.914062 70.46875 204.234375 C 69.601562 205.371094 68.703125 204.917969 67.8125 204.816406 C 68.085938 204.636719 67.953125 204.460938 67.804688 204.285156 C 68.335938 204.1875 68.863281 203.902344 69.382812 203.1875 C 67.886719 202.789062 68.828125 201.878906 68.535156 200.800781 C 66.894531 200.582031 68.75 204.148438 66.421875 201.90625 C 66.773438 201.632812 66.828125 201.367188 66.675781 201.101562 C 66.238281 201.625 65.789062 201.355469 65.355469 201.925781 C 65.628906 202.1875 65.898438 202.449219 66.171875 202.710938 C 65.820312 202.988281 65.457031 202.464844 65.09375 202.199219 C 65.207031 201.839844 65.324219 201.484375 65.074219 201.132812 C 64.984375 201.046875 64.890625 200.957031 64.800781 200.871094 C 63.617188 200.488281 64.140625 202.273438 62.96875 202.769531 C 62.410156 202.425781 62.660156 202.066406 62.949219 201.703125 C 62.230469 201.3125 61.523438 201.628906 60.796875 200.675781 C 61.421875 200.636719 61.570312 200.347656 61.046875 199.871094 C 62.253906 199.757812 61.992188 199.667969 62.890625 198.503906 C 63.898438 198.492188 63.226562 199.136719 64.246094 199.8125 C 64.628906 199.183594 64.320312 198.566406 65.011719 197.929688 C 63.777344 198.5625 62.507812 197.253906 61.277344 198 C 60.984375 197.332031 61.714844 197.46875 62.0625 197.183594 C 61.421875 196.082031 58.566406 197.066406 59.625 195.359375 C 59.085938 195.066406 58.570312 195.992188 58.015625 194.855469 C 57.742188 195.039062 57.875 195.214844 58.027344 195.390625 C 56.539062 195.105469 57.851562 194.003906 58.789062 193.507812 C 58.617188 194.644531 58.859375 194.335938 59.878906 194.554688 C 59.886719 193.933594 59.574219 193.316406 60.640625 192.671875 C 60.28125 192.324219 59.917969 191.976562 59.554688 191.625 C 60.226562 191.082031 60.472656 190.542969 60.058594 190.015625 C 60.40625 189.742188 60.464844 189.472656 60.308594 189.210938 C 60.394531 189.121094 60.484375 189.03125 60.570312 188.9375 C 60.65625 188.847656 60.746094 188.757812 60.832031 188.667969 C 61.015625 188.839844 61.195312 189.015625 61.375 189.191406 C 61.878906 188.738281 61.59375 188.296875 62.152344 187.84375 C 62.59375 187.863281 63.046875 188.140625 63.5 188.617188 C 64.492188 189.621094 63.980469 189.667969 65.132812 190.191406 C 66.140625 189.546875 64.886719 188.949219 65.894531 188.308594 C 66.523438 187.980469 66.183594 186.410156 67.203125 186.949219 C 67.566406 187.296875 67.929688 187.648438 68.292969 187.996094 C 68.453125 187.726562 68.28125 187.464844 68.542969 187.191406 C 68.628906 187.101562 68.71875 187.011719 68.804688 186.917969 C 68.660156 185.574219 70.117188 184.289062 70.355469 184.222656 C 70.402344 184.210938 70.875 184.769531 70.898438 184.746094 C 71.398438 184.214844 70.546875 183.308594 71.402344 183.136719 C 71.949219 183.824219 72.460938 182.644531 73.003906 183.105469 C 73.449219 182.074219 71.289062 181.699219 71.664062 182.863281 C 70.328125 182.800781 69.007812 183.574219 67.65625 182.671875 C 67.464844 183.59375 66.75 183.34375 66.359375 184.5625 C 66.71875 184.910156 67.082031 185.261719 67.445312 185.609375 C 67.359375 185.703125 67.269531 185.792969 67.183594 185.882812 C 66.796875 187.101562 64.640625 186.878906 65.886719 187.773438 C 64.457031 188.769531 65.601562 186.753906 64.808594 187.261719 C 64.535156 187 64.265625 186.738281 63.992188 186.472656 C 64.078125 186.382812 64.167969 186.292969 64.253906 186.203125 C 64.515625 185.929688 64.777344 185.660156 65.039062 185.386719 C 64.769531 185.226562 64.503906 185.398438 64.234375 185.136719 C 64.144531 185.046875 64.054688 184.960938 63.960938 184.875 C 63.871094 184.785156 63.78125 184.699219 63.691406 184.613281 C 63.832031 183.917969 64.488281 183.273438 63.398438 183.28125 C 63.570312 183.101562 63.746094 182.921875 63.921875 182.738281 C 64.980469 181.8125 66.429688 183.449219 67.121094 182.683594 C 67.410156 182.363281 66.960938 182.234375 66.851562 182.417969 C 66.410156 181.285156 66.640625 180.871094 65.230469 181.382812 C 64.957031 181.121094 64.6875 180.859375 64.414062 180.597656 C 64.34375 181.300781 64.070312 181.582031 63.367188 181.683594 C 63.097656 181.421875 62.824219 181.160156 62.550781 180.898438 C 62.640625 180.804688 62.726562 180.714844 62.8125 180.625 Z M 80.523438 185.636719 C 80.25 185.375 80.410156 185.105469 80.238281 184.84375 C 79.976562 185.203125 79.449219 185.566406 79.726562 185.917969 C 81.449219 186.597656 79.058594 187.355469 80.300781 188.042969 C 80.941406 187.320312 81.394531 186.601562 81.328125 185.890625 C 81.0625 186.042969 80.796875 185.988281 80.523438 185.636719 Z M 63.171875 199.300781 C 61.578125 201.003906 63.851562 200.964844 63.171875 199.300781 Z M 62.273438 194.246094 C 62.003906 194.101562 61.730469 193.734375 61.46875 193.992188 C 62.042969 195.0625 60.457031 194.417969 60.148438 194.816406 C 60.511719 195.191406 60.871094 195.265625 61.226562 195.332031 C 61.769531 195.78125 62.308594 196.027344 62.835938 195.835938 C 61.683594 195.324219 62.585938 194.773438 62.273438 194.246094 Z M 62.253906 193.179688 C 63.640625 194.050781 63.125 191.285156 62.222656 191.578125 C 62.929688 192.097656 61.769531 192.652344 62.253906 193.179688 Z M 63.28125 191.023438 C 63.402344 192.730469 65.070312 190.8125 63.28125 191.023438 Z M 66.773438 192.292969 C 67.769531 191.652344 67.449219 191.035156 68.070312 190.402344 C 68.410156 191.566406 69.953125 189.953125 69.390625 189.578125 C 68.152344 189.597656 68.210938 189.15625 66.984375 189.355469 C 67.113281 189.335938 67.269531 189.8125 66.992188 189.886719 C 66.734375 189.960938 66.191406 189.074219 65.925781 189.910156 C 65.839844 190 65.753906 190.089844 65.664062 190.179688 C 65.699219 191.574219 66.300781 189.945312 67.015625 190.957031 C 66.75 191.316406 66.226562 191.679688 66.5 192.03125 C 65.5625 193.222656 69.539062 194.328125 66.511719 192.566406 C 66.539062 192.582031 66.734375 192.300781 66.773438 192.292969 Z M 66.824219 194.960938 C 66.09375 194.015625 65.382812 194.03125 64.691406 195 C 65.417969 195.949219 66.113281 195.054688 66.824219 194.960938 Z M 64.175781 196.078125 C 64.46875 197.109375 66.117188 198.671875 67.660156 196.816406 C 66.492188 196.1875 65.339844 196.367188 64.175781 196.078125 Z M 80.875 190.167969 C 81.652344 189.839844 81.347656 188.269531 80.582031 188.839844 C 80.910156 189.277344 80.609375 189.726562 80.875 190.167969 Z M 77.617188 201.167969 C 77.441406 201.351562 77.269531 201.53125 77.09375 201.710938 C 77.273438 201.886719 77.457031 202.0625 77.636719 202.234375 C 77.8125 202.054688 77.984375 201.875 78.160156 201.691406 C 77.980469 201.519531 77.796875 201.34375 77.617188 201.167969 Z M 64.222656 184.601562 C 65.34375 183.929688 65.058594 184.949219 65.3125 185.648438 C 66.039062 184.992188 66.402344 182.988281 65 183.253906 C 65.878906 184.246094 63.34375 183.609375 64.222656 184.601562 Z M 64.222656 184.601562 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#ea6793bcdc)">
                <g clipPath="url(#1998440f0e)">
                  <g clipPath="url(#e5671a7841)">
                    <g clipPath="url(#8b594e142a)">
                      <path
                        fill="#d76a28"
                        d="M 58.457031 190.046875 C 58.109375 190.558594 57.75 190.265625 57.398438 190.597656 C 56.734375 189.90625 57.734375 188.96875 58.4375 188.976562 C 58.710938 189.238281 58.546875 189.511719 58.71875 189.773438 C 58.984375 189.621094 59.242188 189.242188 59.511719 189.492188 C 59.167969 190.003906 58.804688 189.710938 58.457031 190.046875 Z M 58.457031 190.046875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#06842a9890)">
                <g clipPath="url(#0b2a960a3d)">
                  <g clipPath="url(#fafa31b0e1)">
                    <g clipPath="url(#bef8cc48b0)">
                      <path
                        fill="#d76a28"
                        d="M 55.828125 192.226562 C 56.261719 191.550781 56.710938 191.6875 57.148438 191.402344 C 57.414062 191.84375 57.117188 192.292969 57.441406 192.730469 C 56.914062 193.148438 56.375 192.902344 55.828125 192.226562 Z M 55.828125 192.226562 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#08fd1179df)">
                <g clipPath="url(#db4151ab40)">
                  <g clipPath="url(#ecfb7e1d58)">
                    <g clipPath="url(#61f449f344)">
                      <path
                        fill="#d76a28"
                        d="M 74.78125 178.539062 C 75.382812 177.4375 76.03125 178.65625 76.644531 178.238281 C 77.066406 179.136719 75.265625 178.96875 74.78125 178.539062 Z M 74.78125 178.539062 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#9ab78f6ad7)">
                <g clipPath="url(#f24e5ef137)">
                  <g clipPath="url(#290a6bea40)">
                    <g clipPath="url(#3d74276fdc)">
                      <path
                        fill="#d76a28"
                        d="M 78.808594 179.800781 C 79.066406 181.28125 76.796875 179.976562 78.808594 179.800781 Z M 78.808594 179.800781 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#fa40b003c6)">
                <g clipPath="url(#f38fe3f82c)">
                  <g clipPath="url(#97434076c4)">
                    <g clipPath="url(#61d7094d20)">
                      <path
                        fill="#d76a28"
                        d="M 59.734375 187.085938 C 60.820312 186 59.523438 184.957031 60.207031 183.875 C 60.847656 184.875 61.457031 184.175781 62.101562 185.175781 C 62.898438 185.636719 59.761719 186.050781 61.335938 187.058594 C 61.511719 186.875 61.683594 186.695312 61.859375 186.511719 C 61.984375 186.867188 62.117188 187.222656 61.878906 187.582031 C 61.789062 187.492188 61.699219 187.40625 61.605469 187.320312 C 60.988281 187.488281 60.371094 187.789062 59.734375 187.085938 Z M 59.734375 187.085938 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#a79c6f44c2)">
                <g clipPath="url(#d7f87810b6)">
                  <g clipPath="url(#8085dd754a)">
                    <g clipPath="url(#3427584275)">
                      <path
                        fill="#d76a28"
                        d="M 72.859375 175.636719 C 72.792969 176.785156 72.5 175.875 71.800781 176.191406 C 71.164062 175.5 72.609375 175.195312 72.847656 175.105469 C 73 175.28125 73.132812 175.453125 72.859375 175.636719 Z M 72.859375 175.636719 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#02b9d41c48)">
                <g clipPath="url(#d7373b0f85)">
                  <g clipPath="url(#c51961a963)">
                    <g clipPath="url(#0a6127986d)">
                      <path
                        fill="#d76a28"
                        d="M 85.65625 189.011719 C 85.636719 188.085938 86.972656 187.042969 87.761719 187.375 C 88.996094 188.40625 86.640625 189.089844 86.199219 189.535156 C 86.019531 189.363281 85.839844 189.1875 85.65625 189.011719 Z M 85.65625 189.011719 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#06ada924b9)">
                <g clipPath="url(#989c4c7387)">
                  <g clipPath="url(#95220d2a15)">
                    <g clipPath="url(#2dd084ca1a)">
                      <path
                        fill="#d76a28"
                        d="M 88.667969 192.960938 C 88.757812 193.046875 88.847656 193.136719 88.941406 193.222656 C 88.421875 193.984375 87.875 193.335938 87.359375 194.320312 C 86.726562 193.796875 88.164062 193.238281 88.394531 192.699219 C 88.488281 192.785156 88.578125 192.875 88.667969 192.960938 Z M 88.667969 192.960938 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#db7d991f49)">
                <g clipPath="url(#b2f06ca9c2)">
                  <g clipPath="url(#6ea88f7f91)">
                    <g clipPath="url(#b5bcfbfaa9)">
                      <path
                        fill="#d76a28"
                        d="M 82.257812 206.6875 C 83.070312 207.683594 81.167969 208.125 80.425781 208.589844 C 79.75 208.15625 79.886719 207.710938 79.601562 207.269531 C 80.472656 206.21875 81.386719 207.570312 82.257812 206.6875 Z M 82.257812 206.6875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#1aadfd0475)">
                <g clipPath="url(#81b25dbebc)">
                  <g clipPath="url(#e038ee9a6f)">
                    <g clipPath="url(#09b7e4265e)">
                      <path
                        fill="#d76a28"
                        d="M 69.363281 174.367188 C 69.726562 174.71875 70.089844 175.066406 70.453125 175.414062 C 70.277344 175.597656 70.105469 175.777344 69.929688 175.957031 C 69.566406 175.609375 69.203125 175.261719 68.839844 174.910156 C 69.015625 174.730469 69.191406 174.546875 69.363281 174.367188 Z M 69.363281 174.367188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#a1ae13401d)">
                <g clipPath="url(#bcc45c684d)">
                  <g clipPath="url(#4b253296f0)">
                    <g clipPath="url(#1a544f731d)">
                      <path
                        fill="#d76a28"
                        d="M 62.664062 186.765625 C 62.484375 186.589844 62.300781 186.417969 62.121094 186.242188 C 62.527344 186.003906 64.660156 184.964844 63.460938 186.484375 C 63.316406 186.664062 63.191406 186.84375 63.46875 187.019531 C 62.996094 187.539062 62.707031 187.390625 62.664062 186.765625 Z M 62.664062 186.765625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#6ac68ce619)">
                <g clipPath="url(#b8cdc53998)">
                  <g clipPath="url(#f86d00fbee)">
                    <g clipPath="url(#80077c1dd9)">
                      <path
                        fill="#d76a28"
                        d="M 82.574219 181.332031 C 83.09375 181.765625 82.828125 182.214844 83.398438 182.648438 C 82.875 183.132812 82.320312 181.972656 81.800781 182.679688 C 81.511719 182.238281 82.230469 181.78125 82.574219 181.332031 Z M 82.574219 181.332031 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#7e1ea98144)">
                <g clipPath="url(#03d9e2f506)">
                  <g clipPath="url(#8ed0699234)">
                    <g clipPath="url(#a9bc89ba84)">
                      <path
                        fill="#d76a28"
                        d="M 90.71875 188.652344 C 89.347656 190.167969 89.28125 186.578125 90.71875 188.652344 Z M 90.71875 188.652344 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#3823169fa4)">
                <g clipPath="url(#e06f7cfec5)">
                  <g clipPath="url(#8936ffad51)">
                    <g clipPath="url(#117a388df6)">
                      <path
                        fill="#7bdcb6"
                        d="M 220.71875 198.558594 C 220.898438 198.734375 221.082031 198.90625 221.261719 199.082031 C 221.085938 199.261719 220.914062 199.445312 220.738281 199.625 C 220.558594 199.449219 220.375 199.277344 220.195312 199.101562 C 220.371094 198.921875 220.542969 198.738281 220.71875 198.558594 Z M 220.71875 198.558594 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#74cd5377d1)">
                <g clipPath="url(#5e49839184)">
                  <g clipPath="url(#697ccc8626)">
                    <g clipPath="url(#ef7307d65e)">
                      <path
                        fill="#7bdcb6"
                        d="M 217.371094 177.003906 C 218.449219 177.59375 219.507812 177.082031 220.589844 178.011719 C 220.242188 178.285156 220.1875 178.554688 220.339844 178.816406 C 219.300781 178.605469 218.941406 178.261719 218.488281 179.652344 C 217.355469 178.867188 216.402344 178.351562 217.371094 177.003906 Z M 217.371094 177.003906 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#3133facfad)">
                <g clipPath="url(#0186b707b3)">
                  <g clipPath="url(#02b4ed27c0)">
                    <g clipPath="url(#c82b98e913)">
                      <path
                        fill="#7bdcb6"
                        d="M 224.820312 175.800781 C 224.644531 175.980469 224.46875 176.164062 224.296875 176.34375 C 223.304688 175.339844 223.816406 175.292969 222.664062 174.773438 C 223.464844 174.816406 224.265625 174.832031 225.070312 174.996094 C 224.808594 175.265625 224.980469 175.53125 224.820312 175.800781 Z M 224.820312 175.800781 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#6ec22c7cb8)">
                <g clipPath="url(#d1368e4aee)">
                  <g clipPath="url(#b83e0119df)">
                    <g clipPath="url(#0c62563c21)">
                      <path
                        fill="#7bdcb6"
                        d="M 215.320312 195.453125 C 215.140625 195.28125 214.960938 195.105469 214.777344 194.929688 C 214.800781 194.484375 215.078125 194.035156 215.550781 193.582031 C 214.910156 193.472656 215.046875 192.574219 215 192.523438 C 214.410156 191.945312 214.007812 192.480469 213.660156 192.28125 C 212.972656 191.894531 213.582031 190.765625 212.582031 191.769531 C 211.761719 190.761719 212.945312 190.703125 211.484375 190.1875 C 212.960938 189.09375 212.589844 188.03125 212.492188 186.96875 C 213.511719 186.222656 213.890625 187.566406 214.382812 188.265625 C 214.273438 188.625 214.152344 188.980469 214.402344 189.332031 C 214.84375 189.070312 215.292969 189.367188 215.734375 189.042969 C 215.820312 188.953125 215.90625 188.863281 215.996094 188.769531 C 216.011719 188.097656 216.300781 188.242188 216.78125 187.957031 C 217.398438 187.789062 218.007812 187.113281 218.652344 188.1875 C 219 187.824219 219.347656 187.464844 219.699219 187.101562 C 220.128906 186.421875 220.578125 186.5625 221.015625 186.277344 C 221.199219 186.453125 221.378906 186.625 221.5625 186.800781 C 220.554688 187.53125 220.527344 188.242188 220 188.964844 C 221.125 190.066406 223.195312 188.285156 223.433594 187.03125 C 222.890625 186.515625 222.375 187.441406 221.820312 186.527344 C 222.253906 185.78125 222.714844 186.640625 223.152344 186.238281 C 223.59375 185.695312 222.390625 185.183594 222.585938 184.648438 C 223.898438 183.558594 225.261719 184.949219 226.5625 183.238281 C 224.996094 183.019531 224.46875 183.351562 223.339844 182.230469 C 222.796875 182.070312 222.777344 183.085938 221.761719 183.328125 C 221.671875 183.242188 221.578125 183.152344 221.488281 183.066406 C 221.320312 182.800781 221.480469 182.53125 221.207031 182.269531 C 222.949219 181.4375 221.296875 180.667969 221.429688 179.863281 C 221.601562 179.683594 221.777344 179.503906 221.953125 179.320312 C 222.046875 179.730469 222.34375 180.917969 223.027344 179.835938 C 223.300781 180.082031 223.558594 179.707031 223.824219 179.554688 C 224.210938 179.261719 225.894531 178.984375 225.402344 178.457031 C 225.222656 178.28125 225.042969 178.109375 224.859375 177.933594 C 224.644531 177.402344 225.828125 176.847656 225.363281 176.324219 C 225.238281 175.96875 225.105469 175.617188 225.34375 175.257812 C 225.804688 176.390625 226.453125 176.789062 227.496094 176.285156 C 228.628906 177.777344 225.582031 179.34375 227.316406 180.824219 C 226.195312 181.386719 226.5 181.417969 226.28125 182.445312 C 226.90625 182.53125 227.523438 182.242188 228.144531 182.144531 C 227.78125 181.347656 228.476562 180.535156 229.429688 179.71875 C 229.722656 180.074219 229.0625 180.722656 229.191406 181.058594 C 229.289062 181.316406 229.980469 181.574219 230.003906 181.84375 C 230.035156 182.164062 229.414062 182.589844 229.492188 182.917969 C 229.53125 183.082031 230.722656 183.113281 229.773438 183.714844 C 230.132812 183.78125 230.488281 183.855469 230.851562 184.230469 C 230.503906 184.742188 230.144531 184.449219 229.796875 184.78125 C 229.703125 184.695312 229.613281 184.605469 229.523438 184.519531 C 229.261719 184.878906 228.996094 184.945312 228.726562 184.800781 C 229.074219 184.527344 229.132812 184.261719 228.980469 183.996094 C 229.617188 183.167969 228.585938 182.515625 227.902344 183.484375 C 227.542969 183.414062 227.1875 183.339844 226.824219 182.96875 C 227.046875 183.28125 226.414062 184.867188 227.117188 184.296875 C 227.386719 184.558594 227.660156 184.820312 227.933594 185.082031 C 228.746094 186.089844 226.175781 184.519531 227.679688 185.886719 C 227.796875 186.3125 228.542969 187.191406 228.527344 188.273438 C 230.082031 187.355469 227.601562 186.511719 229.542969 185.585938 C 229.894531 185.3125 230.257812 185.835938 230.621094 186.101562 C 229.445312 185.941406 229.898438 187.996094 230.890625 186.363281 C 232.75 186.035156 230.542969 187.261719 230.378906 187.441406 C 230.101562 187.738281 230.257812 188.5625 230.136719 188.777344 C 230.160156 188.742188 227.339844 190.410156 229.121094 191.464844 C 228.882812 191.554688 227.4375 191.859375 228.074219 192.550781 C 227.546875 192.816406 227.011719 192.847656 226.484375 193.113281 C 226.304688 192.941406 226.121094 192.765625 225.941406 192.589844 C 225.539062 192.839844 225.824219 194.285156 226.496094 193.648438 C 227.046875 194.613281 227.566406 193.945312 228.117188 194.6875 C 227.164062 195.726562 227.675781 195.753906 226.546875 196.316406 C 226.078125 195.792969 225.808594 195.261719 225.980469 194.726562 C 224.40625 194.125 223.902344 195.617188 222.820312 196.917969 C 223.972656 197.4375 223.460938 197.488281 224.453125 198.488281 C 224.191406 198.660156 223.917969 198.496094 223.65625 198.769531 C 223.472656 198.5 223.300781 198.628906 223.125 198.78125 C 222.847656 198.429688 223.371094 198.066406 223.636719 197.703125 C 222.28125 196.957031 222.914062 198.59375 222.066406 199.332031 C 221.511719 198.949219 222.457031 197.242188 221.503906 197.742188 C 221 196.742188 222.597656 197.398438 222.277344 196.394531 C 222.097656 196.21875 221.914062 196.046875 221.734375 195.871094 C 221.03125 195.339844 220.410156 195.996094 220.414062 196.695312 C 219.746094 196.679688 219.886719 196.390625 219.601562 195.910156 C 219.480469 197.21875 218.488281 196.890625 219.640625 198.042969 C 218.261719 199.550781 217.03125 196.808594 217.464844 195.949219 C 217.988281 195.40625 218.511719 194.863281 219.035156 194.320312 C 218.3125 193.789062 217.632812 195.449219 216.902344 194.359375 C 216.640625 194.765625 217.179688 195.152344 217.445312 194.882812 C 217.933594 195.507812 216.332031 195.226562 217.203125 196.222656 C 216.578125 196.710938 216.855469 195.109375 215.867188 195.976562 C 215.683594 195.804688 215.503906 195.628906 215.320312 195.453125 Z M 221.914062 191.332031 C 222.007812 191.742188 222.308594 192.929688 222.992188 191.84375 C 222.628906 191.578125 222.265625 191.054688 221.914062 191.332031 Z M 223.746094 189.429688 C 223.597656 190.054688 223.324219 190.683594 224.046875 191.292969 C 225.269531 189.972656 226.535156 191 227.753906 189.621094 C 227.210938 189.097656 226.664062 188.574219 226.121094 188.050781 C 225.429688 188.6875 225.738281 189.304688 225.355469 189.933594 C 225.265625 189.847656 225.175781 189.757812 225.085938 189.671875 C 224.773438 189.90625 223.167969 188.339844 223.746094 189.429688 Z M 216.296875 190.632812 C 217.394531 191.167969 216.699219 189.605469 216.539062 189.292969 C 216.277344 189.566406 216.015625 189.835938 215.753906 190.109375 C 215.132812 190.65625 215.144531 191.1875 215.785156 191.710938 C 216.15625 191.347656 216.230469 190.992188 216.296875 190.632812 Z M 218.148438 189.796875 C 217.804688 190.25 217.085938 190.707031 217.375 191.148438 C 217.605469 190.617188 219.070312 191.503906 218.429688 190.59375 C 218.894531 190.140625 218.890625 189.695312 218.671875 189.253906 C 218.496094 189.4375 218.324219 189.617188 218.148438 189.796875 Z M 226.644531 187.507812 C 227.109375 187.054688 227.105469 186.609375 226.886719 186.167969 C 226.113281 186.191406 225.847656 186.828125 226.644531 187.507812 Z M 224.640625 180.339844 C 224.269531 180.703125 224.191406 181.058594 224.125 181.417969 C 223.855469 181.273438 223.582031 180.90625 223.320312 181.164062 C 223.683594 181.511719 224.046875 181.863281 224.40625 182.210938 C 225.109375 181.578125 224.808594 180.960938 224.640625 180.339844 Z M 224.640625 180.339844 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#3037983659)">
                <g clipPath="url(#6eb350f09f)">
                  <g clipPath="url(#a88631ff5d)">
                    <g clipPath="url(#5bf4724409)">
                      <path
                        fill="#7bdcb6"
                        d="M 222.203125 178.515625 C 222.019531 178.339844 221.839844 178.167969 221.660156 177.992188 C 222.054688 177.628906 222.445312 177.265625 222.171875 176.914062 C 222.613281 176.855469 223.0625 176.980469 223.511719 177.15625 C 223.867188 177.226562 224.226562 177.300781 224.589844 177.671875 C 224.5 177.761719 224.414062 177.851562 224.328125 177.945312 C 224.027344 179.332031 224.371094 178.972656 223.542969 178.757812 C 223.359375 178.484375 223.183594 178.617188 223.007812 178.769531 C 222.734375 178.421875 222.46875 178.363281 222.203125 178.515625 Z M 222.203125 178.515625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#b282771d34)">
                <g clipPath="url(#c682517f70)">
                  <g clipPath="url(#3133dd0386)">
                    <g clipPath="url(#a1eeb28769)">
                      <path
                        fill="#7bdcb6"
                        d="M 219.886719 183.09375 C 218.878906 183.121094 219.203125 183.75 218.582031 184.453125 C 217.5625 183.972656 218.941406 181.394531 219.878906 182.5625 C 220.03125 182.738281 220.160156 182.914062 219.886719 183.09375 Z M 219.886719 183.09375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#94f68c0548)">
                <g clipPath="url(#57321f2189)">
                  <g clipPath="url(#378ebe2832)">
                    <g clipPath="url(#d876a2eb8d)">
                      <path
                        fill="#7bdcb6"
                        d="M 219.976562 173.753906 C 220.042969 174.464844 219.589844 175.183594 218.949219 175.90625 C 218.4375 175.117188 217.777344 174.328125 218.636719 173.511719 C 219.09375 174.128906 219.542969 174.273438 219.976562 173.753906 Z M 219.976562 173.753906 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#76e0888be6)">
                <g clipPath="url(#778be1952d)">
                  <g clipPath="url(#9bc88fa68a)">
                    <g clipPath="url(#54f03ff2c8)">
                      <path
                        fill="#7bdcb6"
                        d="M 215.550781 179.4375 C 216.632812 180.125 215.445312 180.421875 215.035156 180.515625 C 214.757812 180.164062 215.28125 179.800781 215.550781 179.4375 Z M 215.550781 179.4375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#a67400f670)">
                <g clipPath="url(#1fa9f53be3)">
                  <g clipPath="url(#1e299762ee)">
                    <g clipPath="url(#3d3916be25)">
                      <path
                        fill="#7bdcb6"
                        d="M 215.640625 184.242188 C 216.332031 183.253906 217.085938 185.4375 217.773438 184.203125 C 218.0625 184.640625 217.34375 185.097656 217 185.550781 C 216.726562 185.289062 216.457031 185.027344 216.183594 184.765625 C 216.003906 184.589844 215.820312 184.414062 215.640625 184.242188 Z M 215.640625 184.242188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#f284b5a454)">
                <g clipPath="url(#309e42b911)">
                  <g clipPath="url(#5e97c1db41)">
                    <g clipPath="url(#318918dfa8)">
                      <path
                        fill="#7bdcb6"
                        d="M 221.085938 175.867188 C 220.414062 177.269531 219.167969 176.066406 220.539062 175.34375 C 220.820312 175.664062 221.34375 175.355469 221.085938 175.867188 Z M 221.085938 175.867188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#e49c9d6ae3)">
                <g clipPath="url(#ebd623a06d)">
                  <g clipPath="url(#77decf4092)">
                    <g clipPath="url(#000f0f5692)">
                      <path
                        fill="#7bdcb6"
                        d="M 214.90625 187.722656 C 214.867188 187.28125 214.574219 186.839844 214.082031 186.402344 C 214.34375 186.132812 214.605469 185.859375 214.867188 185.589844 C 215.71875 185.550781 215.835938 186.703125 216.234375 187.433594 C 215.800781 188.042969 215.347656 187.617188 214.90625 187.722656 Z M 214.90625 187.722656 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#3f9eee122a)">
                <g clipPath="url(#31842c99e1)">
                  <g clipPath="url(#520168e4cd)">
                    <g clipPath="url(#66a5f0c4dd)">
                      <path
                        fill="#7bdcb6"
                        d="M 219.949219 186.296875 C 219.429688 185.863281 219.695312 185.410156 219.125 184.976562 C 219.824219 184.617188 221.179688 184.652344 220.472656 185.753906 C 220.300781 185.933594 220.125 186.117188 219.949219 186.296875 Z M 219.949219 186.296875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#6e59098a95)">
                <g clipPath="url(#24d6114e6f)">
                  <g clipPath="url(#4b194c07f0)">
                    <g clipPath="url(#f72fbdaf48)">
                      <path
                        fill="#eece38"
                        d="M 387.121094 54.25 C 386.855469 53.722656 386.824219 53.1875 386.558594 52.660156 C 386.933594 52.097656 388.546875 53.644531 387.382812 53.980469 C 387.296875 54.070312 387.210938 54.160156 387.121094 54.25 Z M 387.121094 54.25 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#60e4f55969)">
                <g clipPath="url(#55ada97b2a)">
                  <g clipPath="url(#0c0c6d5766)">
                    <g clipPath="url(#5b94e5008a)">
                      <path
                        fill="#eece38"
                        d="M 357.988281 51.847656 C 359.210938 51.425781 358.050781 53.242188 358.824219 53.703125 C 358.195312 53.882812 358.488281 53.234375 357.476562 52.925781 C 357.871094 52.5625 358.261719 52.199219 357.988281 51.847656 Z M 357.988281 51.847656 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#4e2a36934f)">
                <g clipPath="url(#bedef21c31)">
                  <g clipPath="url(#5f5ed6a8ee)">
                    <g clipPath="url(#24be4b2a9d)">
                      <path
                        fill="#eece38"
                        d="M 370.992188 48.140625 C 371.351562 48.386719 371.40625 48.015625 371.253906 47.871094 C 371.429688 47.589844 371.609375 47.714844 371.789062 47.859375 C 371.648438 48.699219 373.265625 47.195312 373.410156 48.898438 C 373.875 48.269531 372.644531 47.667969 373.109375 47.035156 C 373.195312 46.945312 373.28125 46.855469 373.367188 46.765625 C 373.925781 47.578125 373.972656 48.039062 374.988281 47.800781 C 375.082031 47.890625 375.171875 47.976562 375.261719 48.0625 C 375.609375 47.789062 375.667969 47.523438 375.511719 47.257812 C 375.730469 46.898438 375.148438 46.554688 375.492188 46.191406 C 375.597656 44.707031 377.371094 46.203125 377.648438 47.21875 C 378.542969 47.605469 377.804688 45.824219 378.945312 45.328125 C 380.53125 46.277344 378.222656 47.296875 378.734375 48.265625 C 379.140625 48.539062 379.871094 47.800781 379.519531 47.453125 C 380.5 47.511719 381.503906 48.789062 382.488281 49.265625 C 382.472656 49.9375 382.183594 49.796875 381.703125 50.082031 C 382.164062 50.765625 382.597656 50.191406 383.035156 49.789062 C 383.667969 50.414062 384.285156 50.09375 384.925781 51.089844 C 385.464844 51.261719 385.992188 50.996094 386.515625 50.527344 C 387.875 51.796875 386.027344 52.109375 385.230469 52.953125 C 385.140625 52.863281 385.046875 52.777344 384.957031 52.691406 C 386.011719 51.695312 384.832031 52.375 384.402344 51.632812 C 384.359375 52.078125 384.5 52.519531 384.695312 52.960938 C 384.726562 54.039062 385.34375 53.355469 386.046875 53.738281 C 385.503906 54.441406 387.089844 55.042969 387.40625 55.046875 C 387.132812 55.496094 387.867188 55.925781 388.230469 56.367188 C 387.792969 56.820312 387.359375 57.269531 386.921875 57.722656 C 386.707031 58.085938 387.285156 58.429688 386.941406 58.792969 C 388.449219 58.996094 389.851562 59.011719 390.699219 59.789062 C 390.953125 60.050781 390.585938 60.324219 390.445312 60.59375 C 390.082031 60.246094 389.722656 59.894531 389.359375 59.546875 C 389.011719 59.820312 388.953125 60.089844 389.105469 60.351562 C 388.488281 60.808594 388.34375 61.257812 388.867188 61.691406 C 388.328125 62.015625 389 63.578125 389.691406 63.011719 C 389.832031 64.074219 389.484375 65.148438 388.6875 66.230469 C 389.042969 66.296875 389.402344 66.371094 389.761719 66.746094 C 388.765625 67.386719 389.085938 68.003906 388.464844 68.636719 C 388.824219 68.703125 389.179688 68.777344 389.542969 69.152344 C 389.195312 69.511719 388.84375 69.875 388.496094 70.238281 C 388.136719 70.125 387.78125 70.007812 387.429688 70.257812 C 387.6875 70.519531 387.320312 70.792969 387.175781 71.0625 C 386.769531 72.089844 385.90625 73.445312 384.792969 71.90625 C 386.242188 71.902344 385.039062 71.007812 385.828125 70.285156 C 386.265625 69.953125 386.730469 70.972656 387.167969 70.527344 C 387.375 68.847656 385.402344 70.246094 384.742188 69.238281 C 384.46875 69.421875 384.601562 69.597656 384.75 69.773438 C 384.355469 70.136719 383.964844 70.5 384.238281 70.847656 C 384.207031 71.234375 383.699219 70.867188 383.703125 70.859375 C 383.394531 71.285156 384.058594 71.300781 383.988281 71.65625 C 383.875 72.191406 382.144531 73.058594 383.484375 73.265625 C 382.964844 73.976562 382.433594 74.265625 381.902344 74.359375 C 382.738281 72.976562 380.808594 72.832031 381.308594 71.171875 C 379.707031 72.65625 378.746094 73.15625 376.828125 74.1875 C 376.210938 74.355469 375.59375 74.65625 374.957031 73.953125 C 374.316406 72.957031 373.707031 73.652344 373.0625 72.65625 C 372.996094 73.011719 372.921875 73.371094 372.550781 73.730469 C 371.53125 73.128906 372.203125 72.492188 371.179688 71.890625 C 370.761719 70.449219 369.09375 71.664062 369.558594 70.851562 C 370.027344 69.871094 368.15625 71.09375 368.472656 69.804688 C 368.011719 70.257812 367.996094 70.703125 368.230469 71.140625 C 367.582031 70.902344 365.585938 70.769531 365.804688 69.851562 C 365.265625 69.457031 364.734375 69.722656 364.214844 70.414062 C 364.1875 69.328125 363.566406 70.003906 362.875 70.171875 C 362.695312 70 362.515625 69.824219 362.332031 69.648438 C 362.554688 68.933594 362.238281 68.226562 363.359375 67.496094 C 363.878906 68.753906 364.738281 68.738281 364.425781 67.476562 C 364.6875 67.304688 364.957031 67.46875 365.21875 67.195312 C 364.765625 66.734375 364.320312 66.71875 363.882812 66.953125 C 363.515625 66.40625 363.164062 66.667969 362.816406 66.972656 C 362.453125 66.621094 362.089844 66.273438 361.726562 65.925781 C 362.488281 64.453125 360.585938 64.878906 359.824219 64.089844 C 359.890625 63.734375 359.964844 63.378906 360.335938 63.015625 C 360.15625 62.839844 359.976562 62.664062 359.792969 62.492188 C 359.347656 62.46875 358.898438 62.191406 358.445312 61.714844 C 358.085938 61.453125 358.019531 61.1875 358.164062 60.917969 C 358.148438 59.839844 358.796875 60.503906 359.480469 60.09375 C 359.300781 59.917969 359.117188 59.746094 358.9375 59.570312 C 358.832031 58.597656 358.566406 59.261719 357.847656 58.523438 C 358.113281 58.25 357.941406 57.988281 358.101562 57.71875 C 358.824219 58.777344 359.078125 57.578125 359.15625 57.164062 C 359.558594 57.128906 360.296875 56.828125 359.941406 56.351562 C 360.375 55.648438 360.828125 56.207031 361.28125 56.59375 C 361.539062 55.34375 360.285156 54.121094 360.675781 52.867188 C 362.082031 51.953125 361.824219 51.066406 362.226562 50.171875 C 362.589844 50.519531 362.949219 50.871094 363.3125 51.21875 C 364.015625 50.8125 364.695312 49.109375 365.417969 49.578125 C 365.75 48.773438 364.644531 47.992188 364.570312 47.191406 C 365.101562 46.925781 365.632812 46.894531 366.160156 46.628906 C 367.386719 47.730469 367.339844 48.910156 368.871094 48.714844 C 369.800781 49.40625 369.566406 50.761719 370.761719 50.015625 C 370.199219 48.886719 370.171875 49.398438 369.132812 48.441406 C 369.304688 48.261719 369.480469 48.082031 369.65625 47.898438 C 370.097656 47.878906 370.554688 48.457031 370.992188 48.140625 Z M 382.667969 72.480469 C 383.757812 71.835938 382.148438 71.242188 382.363281 70.617188 C 381.59375 71.253906 382.257812 71.863281 382.667969 72.480469 Z M 363.363281 53.886719 C 363.007812 53.535156 363.574219 53.171875 363.34375 52.820312 C 362.496094 53.074219 362.523438 54.523438 363.363281 53.886719 Z M 360.800781 59.269531 C 361.082031 59.234375 360.460938 60.011719 360.015625 60.085938 C 361.015625 61.269531 361.898438 59.136719 360.800781 59.269531 Z M 366.355469 56.765625 C 364.550781 58.066406 367.425781 58.015625 366.355469 56.765625 Z M 387.796875 61.710938 C 387.089844 61.191406 388.253906 60.636719 387.769531 60.109375 C 386.546875 59.796875 387.222656 62.152344 387.796875 61.710938 Z M 385.777344 67.617188 C 384.886719 68.167969 385.832031 68.683594 385.808594 69.21875 C 386.402344 67.800781 387.074219 70.335938 387.671875 68.917969 C 387.019531 67.535156 386.429688 69.160156 385.789062 68.152344 C 385.929688 67.972656 386.054688 67.792969 385.777344 67.617188 Z M 385.777344 67.617188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#935735d17c)">
                <g clipPath="url(#aaa4023b72)">
                  <g clipPath="url(#bc38742f66)">
                    <g clipPath="url(#a9a357b3d3)">
                      <path
                        fill="#eece38"
                        d="M 357.585938 58.796875 C 358.222656 60.027344 354.40625 59.1875 356.519531 58.816406 C 356.882812 59.050781 357.234375 58.921875 357.585938 58.796875 Z M 357.585938 58.796875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c38bc17859)">
                <g clipPath="url(#a6b0cfc8f5)">
                  <g clipPath="url(#d20b9c8a5a)">
                    <g clipPath="url(#10d80905d0)">
                      <path
                        fill="#eece38"
                        d="M 368.585938 47.917969 C 368.507812 47.519531 368.417969 47.121094 368.042969 47.394531 C 367.785156 47.132812 368.152344 46.859375 368.296875 46.589844 C 369.066406 46.585938 369.359375 47.210938 368.585938 47.917969 Z M 368.585938 47.917969 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#399dd61530)">
                <g clipPath="url(#e6e4a5df51)">
                  <g clipPath="url(#4f0379f2b3)">
                    <g clipPath="url(#a0ecf94c5b)">
                      <path
                        fill="#eece38"
                        d="M 356.117188 51.617188 C 356.832031 52.226562 356.546875 52.855469 356.953125 53.46875 C 356.339844 54.023438 355.707031 53.394531 355.070312 52.703125 C 355.417969 52.339844 355.765625 51.980469 356.117188 51.617188 Z M 356.117188 51.617188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#83ce91621d)">
                <g clipPath="url(#4814a5ec52)">
                  <g clipPath="url(#5a08cd36c4)">
                    <g clipPath="url(#f08f87ca3d)">
                      <path
                        fill="#eece38"
                        d="M 358.332031 55.847656 C 358.101562 55.496094 358.667969 55.128906 358.3125 54.777344 C 358.574219 54.523438 358.847656 54.890625 359.117188 55.03125 C 358.730469 55.484375 359.605469 55.910156 358.875 56.371094 C 358.695312 56.195312 358.511719 56.019531 358.332031 55.847656 Z M 358.332031 55.847656 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c98a97c1df)">
                <g clipPath="url(#0aa93d60ac)">
                  <g clipPath="url(#bfe0935149)">
                    <g clipPath="url(#759d5838d2)">
                      <path
                        fill="#eece38"
                        d="M 368.542969 73.539062 C 368.28125 73.808594 368.019531 74.082031 367.757812 74.351562 C 366.777344 73.660156 367.945312 72.925781 366.652344 72.238281 C 368.40625 71.519531 367.011719 73.371094 368.542969 73.539062 Z M 368.542969 73.539062 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#01b9c892d0)">
                <g clipPath="url(#4cca199edd)">
                  <g clipPath="url(#9d862b915a)">
                    <g clipPath="url(#3376208b21)">
                      <path
                        fill="#eece38"
                        d="M 372.832031 74.527344 C 372.660156 74.707031 372.484375 74.890625 372.308594 75.070312 C 372.128906 74.894531 371.949219 74.722656 371.765625 74.546875 C 371.941406 74.367188 372.117188 74.183594 372.289062 74.003906 C 372.472656 74.179688 372.652344 74.351562 372.832031 74.527344 Z M 372.832031 74.527344 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c9333b45c7)">
                <g clipPath="url(#11f558121f)">
                  <g clipPath="url(#ba6c3e7bd0)">
                    <g clipPath="url(#0d35648436)">
                      <path
                        fill="#eece38"
                        d="M 390.363281 56.328125 C 391.90625 55.042969 390.871094 57.191406 390.375 56.859375 C 390.132812 56.699219 390.175781 56.480469 390.363281 56.328125 Z M 390.363281 56.328125 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#2cb74a88f9)">
                <g clipPath="url(#8473f76150)">
                  <g clipPath="url(#eb88c05c22)">
                    <g clipPath="url(#2d0453b483)">
                      <path
                        fill="#eece38"
                        d="M 390.949219 58.984375 C 389.878906 57.738281 392.753906 57.683594 390.949219 58.984375 Z M 390.949219 58.984375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#8a5e42d96d)">
                <g clipPath="url(#1b2e45753b)">
                  <g clipPath="url(#3abb6b010e)">
                    <g clipPath="url(#cf1a7fb3e7)">
                      <path
                        fill="#eece38"
                        d="M 378.167969 74.429688 C 378.792969 73.199219 379.503906 75.082031 378.722656 75.488281 C 378.542969 75.3125 378.359375 75.136719 378.179688 74.960938 C 378.324219 74.78125 378.449219 74.601562 378.167969 74.429688 Z M 378.167969 74.429688 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#e2adb44b83)">
                <g clipPath="url(#daa43506c8)">
                  <g clipPath="url(#2255b76e12)">
                    <g clipPath="url(#2b5b9c2a11)">
                      <path
                        fill="#eece38"
                        d="M 356.238281 58.019531 C 355.535156 57.585938 356.09375 57.132812 356.480469 56.679688 C 356.867188 57.027344 356.953125 57.382812 357.035156 57.738281 C 356.769531 57.90625 356.5 57.746094 356.238281 58.019531 Z M 356.238281 58.019531 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#b51f737524)">
                <g clipPath="url(#5da21e38e1)">
                  <g clipPath="url(#445425c138)">
                    <g clipPath="url(#aaef2a08ee)">
                      <path
                        fill="#eece38"
                        d="M 361.457031 65.664062 C 360.210938 66.753906 361.683594 67.792969 359.917969 68.894531 C 358.929688 68.199219 359.425781 67.480469 358.273438 66.789062 C 358.816406 66.136719 359.101562 64.132812 359.5625 64.363281 C 359.566406 65.773438 360.703125 64.820312 361.457031 65.664062 Z M 361.457031 65.664062 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#e590c21e7e)">
                <g clipPath="url(#a8fc593696)">
                  <g clipPath="url(#9b9bd4d2be)">
                    <g clipPath="url(#03f8ec3034)">
                      <path
                        fill="#dfa6ce"
                        d="M 424.761719 205.617188 C 424.246094 205.269531 424.539062 204.910156 424.207031 204.558594 C 424.582031 203.902344 426.496094 204.882812 425.292969 205.609375 C 425.113281 205.464844 424.933594 205.339844 424.761719 205.617188 Z M 424.761719 205.617188 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#4acfb6de40)">
                <g clipPath="url(#44632d973a)">
                  <g clipPath="url(#6e2f9656de)">
                    <g clipPath="url(#d477b1aaec)">
                      <path
                        fill="#dfa6ce"
                        d="M 452.285156 207.515625 C 452.601562 207.152344 452.296875 206.804688 452.796875 206.4375 C 453.355469 206.785156 453.105469 207.144531 452.816406 207.503906 C 452.730469 207.597656 452.644531 207.6875 452.554688 207.777344 C 452.464844 207.691406 452.375 207.601562 452.285156 207.515625 Z M 452.285156 207.515625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c8932545ee)">
                <g clipPath="url(#f41b7212e5)">
                  <g clipPath="url(#f8791bb427)">
                    <g clipPath="url(#61a9bb5897)">
                      <path
                        fill="#dfa6ce"
                        d="M 452.105469 212.054688 C 452.621094 211.511719 451.695312 210.996094 452.605469 210.445312 C 452.878906 210.707031 453.148438 210.96875 453.421875 211.230469 C 453.160156 211.5 452.898438 211.773438 452.636719 212.046875 C 452.460938 212.195312 452.285156 212.328125 452.105469 212.054688 Z M 452.105469 212.054688 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#cefe119e68)">
                <g clipPath="url(#65d7b0faf2)">
                  <g clipPath="url(#bb32f52bca)">
                    <g clipPath="url(#b26dbcd497)">
                      <path
                        fill="#dfa6ce"
                        d="M 431.742188 194.015625 C 430.503906 193.078125 432.605469 193.039062 432.277344 194.003906 C 432.105469 194.285156 431.925781 194.160156 431.742188 194.015625 Z M 431.742188 194.015625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#771b059f49)">
                <g clipPath="url(#6f50902f44)">
                  <g clipPath="url(#d6a5ccfcf0)">
                    <g clipPath="url(#cf105421d3)">
                      <path
                        fill="#dfa6ce"
                        d="M 425.996094 200.523438 C 426.355469 200.636719 426.714844 200.753906 427.066406 200.503906 C 426.707031 200.246094 426.636719 199.980469 426.78125 199.710938 C 427.195312 199.789062 428.394531 200.042969 427.335938 200.765625 C 426.425781 201.316406 427.351562 201.835938 426.832031 202.378906 C 425.789062 203.003906 425.140625 202.726562 426.550781 201.582031 C 426.144531 201.234375 425.738281 200.886719 425.996094 200.523438 Z M 425.996094 200.523438 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#0f77861cd9)">
                <g clipPath="url(#2e2ec92781)">
                  <g clipPath="url(#f88997f974)">
                    <g clipPath="url(#bcdbae327e)">
                      <path
                        fill="#dfa6ce"
                        d="M 432.558594 194.800781 C 432.285156 194.425781 432.683594 194.339844 433.082031 194.257812 C 433.070312 195.230469 434.28125 194.695312 433.648438 195.847656 C 433.285156 195.5 432.921875 195.148438 432.558594 194.800781 Z M 432.558594 194.800781 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#fc68eb86f8)">
                <g clipPath="url(#8c78dbdc0d)">
                  <g clipPath="url(#169cab1d94)">
                    <g clipPath="url(#e6b29c3089)">
                      <path
                        fill="#dfa6ce"
                        d="M 431.785156 196.148438 C 432.320312 196.175781 432.835938 195.226562 433.386719 196.121094 C 433.875 196.847656 435.644531 195.402344 435.257812 196.351562 C 435.527344 196.601562 435.789062 196.222656 436.054688 196.070312 C 436.414062 196.289062 436.757812 195.707031 437.121094 196.050781 C 435.917969 196.515625 436.148438 197.148438 436.09375 198.203125 C 436.789062 198.816406 437.015625 197.363281 436.605469 197.128906 C 437.605469 196.554688 437.324219 198.132812 437.964844 198.4375 C 438.179688 197.722656 437.492188 197.023438 437.390625 196.3125 C 437.566406 196.132812 437.742188 195.949219 437.914062 195.769531 C 438.003906 195.679688 438.089844 195.589844 438.175781 195.5 C 439.316406 195.453125 438.820312 196.382812 439.808594 197.070312 C 440.269531 196.4375 439.605469 195.828125 439.503906 195.207031 C 440.203125 194.546875 440.917969 194.535156 441.640625 195.167969 C 440.957031 195.851562 441.523438 195.695312 441.921875 195.964844 C 441.382812 196.289062 442.058594 197.851562 442.746094 197.28125 C 443.105469 197.394531 443.464844 197.511719 443.8125 197.261719 C 443.871094 198.59375 445.394531 197.949219 446.222656 197.484375 C 446.402344 198.105469 446.148438 198.730469 445.457031 199.367188 C 445.710938 200.113281 447.148438 199.429688 446.542969 200.414062 C 446.269531 200.597656 446.402344 200.773438 446.554688 200.949219 C 445.9375 201.351562 445.3125 201.066406 444.703125 201.78125 C 445.492188 202.332031 446.847656 202.058594 446.824219 201.210938 C 446.914062 201.121094 447 201.03125 447.085938 200.9375 C 447.851562 201.628906 447.199219 201.917969 448.175781 201.988281 C 448.445312 201.535156 447.710938 201.105469 447.347656 200.667969 C 448.390625 199.972656 449.070312 201.988281 449.503906 201.695312 C 449.679688 201.515625 449.851562 201.332031 450.027344 201.152344 C 451.011719 201.507812 451.972656 200.445312 452.964844 201.363281 C 452.617188 201.726562 452.269531 202.089844 451.921875 202.453125 C 451.558594 202.101562 451.195312 201.753906 450.832031 201.402344 C 450.394531 202.941406 448.597656 202.851562 449.554688 204.363281 C 449.203125 204.59375 448.835938 204.027344 448.488281 204.382812 C 448.71875 204.734375 448.152344 205.101562 448.507812 205.449219 C 448.332031 205.628906 448.160156 205.8125 447.984375 205.992188 C 448.894531 206.976562 449.75 205.234375 450.664062 206.476562 C 450.929688 207.007812 450.960938 207.539062 451.226562 208.066406 C 450.527344 208.089844 449.894531 208.734375 450.453125 209.417969 C 451.4375 210.023438 450.75 208.585938 451.5 208.332031 C 452.90625 208.925781 451.300781 209.578125 452.335938 210.183594 C 451.570312 211.015625 450.207031 210.789062 450.191406 209.6875 C 450.085938 209.578125 448.929688 210.257812 448.871094 210.511719 C 448.648438 211.464844 449.574219 210.796875 449.425781 211.570312 C 449.410156 212.242188 449.121094 212.101562 448.640625 212.386719 C 449.179688 212.609375 449.710938 212.601562 450.242188 212.355469 C 450.414062 212.078125 450.59375 212.203125 450.773438 212.347656 C 450.867188 212.433594 450.957031 212.519531 451.046875 212.609375 C 449.597656 212.628906 451.097656 213.960938 450.019531 214.761719 C 449.851562 214.496094 450.011719 214.226562 449.738281 213.964844 C 449.824219 213.875 449.914062 213.785156 450 213.695312 C 449.28125 212.957031 449.015625 213.621094 448.914062 212.648438 C 448.519531 213.011719 448.125 213.375 448.398438 213.722656 C 449.195312 214.445312 448.921875 214.679688 448.703125 215.585938 C 448.460938 216.582031 450.097656 217.28125 448.472656 217.457031 C 448.835938 217.855469 449.199219 218.246094 449.546875 217.972656 C 449.089844 218.789062 448.011719 220.015625 446.679688 221.496094 C 446.417969 221.855469 446.957031 222.199219 447.234375 222.550781 C 446.714844 223.3125 446.167969 222.664062 445.652344 223.648438 C 445.40625 222.761719 445.316406 221.875 445.070312 220.988281 C 445.757812 219.695312 446.492188 220.867188 447.183594 219.882812 C 448.703125 220.257812 448.164062 217.394531 446.902344 219.089844 C 445.597656 219.421875 445.953125 219.644531 444.789062 220.195312 C 444.5625 220.027344 443.5625 221.0625 443.742188 221.28125 C 443.964844 222.253906 442.761719 221.613281 443.226562 222.359375 C 443.140625 222.449219 443.054688 222.539062 442.964844 222.628906 C 443.675781 222.59375 444.40625 223.5 445.128906 224.191406 C 444.535156 225.609375 443.863281 223.074219 443.269531 224.492188 C 443.460938 222.601562 442.019531 223.601562 440.820312 222.136719 C 440.082031 222.851562 440.746094 223.117188 439.773438 223.222656 C 439.15625 223.476562 440.632812 224.898438 440.863281 224.269531 C 441.140625 224.441406 441.015625 224.621094 440.871094 224.804688 C 440.601562 224.984375 440.730469 225.160156 440.882812 225.335938 C 439.886719 225.910156 440.164062 224.332031 439.523438 224.027344 C 438.492188 223.488281 439.761719 225.042969 438.75 225.375 C 438.480469 225.214844 438.214844 225.386719 437.945312 225.125 C 437.160156 224.433594 436.511719 224.742188 437.660156 224.328125 C 437.390625 224.066406 437.117188 223.804688 436.847656 223.542969 C 436.675781 223.277344 436.835938 223.007812 436.5625 222.746094 C 435.105469 223.765625 435.6875 225.351562 434.199219 224.660156 C 434.285156 224.035156 433.996094 223.417969 433.894531 222.796875 C 433.164062 223.253906 434.042969 223.683594 433.65625 224.132812 C 433.382812 224.316406 433.515625 224.492188 433.664062 224.667969 C 432.5 225.296875 432.824219 223.890625 431.511719 223.640625 C 430.261719 223.382812 429.023438 223.871094 427.777344 223.707031 C 427.6875 224.15625 428.128906 224.589844 427.535156 225.046875 C 426.414062 224.355469 428.050781 223.613281 427.492188 222.914062 C 427.582031 222.824219 427.667969 222.730469 427.753906 222.640625 C 428.296875 223.09375 428.835938 223.339844 429.367188 223.144531 C 429.4375 222.246094 428.339844 222.363281 427.210938 222.117188 C 426.484375 221.359375 427.910156 220.96875 428.226562 219.429688 C 428.300781 219.082031 427.902344 218.910156 427.945312 218.636719 C 427.941406 218.648438 428.738281 217.5625 427.382812 217.042969 C 427.734375 215.386719 428.910156 215.371094 429.453125 213.804688 C 429.179688 213.457031 428.914062 213.398438 428.648438 213.550781 C 427.496094 212.914062 428.03125 214.128906 427.058594 214.113281 C 426.660156 214.390625 426.253906 213.867188 426.515625 213.589844 C 427.800781 214.050781 425.914062 212.394531 427.015625 211.980469 C 428.222656 212.582031 426.34375 211.167969 427.53125 210.902344 C 427.078125 210.445312 426.632812 210.425781 426.191406 210.660156 C 426.113281 210.308594 426.023438 209.953125 425.636719 209.605469 C 425.570312 209.960938 425.496094 210.320312 425.125 210.679688 C 425.398438 210.941406 425.667969 211.203125 425.941406 211.46875 C 426.121094 211.640625 426.300781 211.816406 426.484375 211.992188 C 426.496094 213.070312 425.851562 212.40625 425.164062 212.816406 C 424.617188 212.074219 424.097656 212.742188 423.542969 211.777344 C 424.027344 210.597656 424.5625 209.128906 425.898438 209.332031 C 425.988281 208.886719 425.546875 208.449219 426.140625 207.992188 C 426.832031 207.011719 427.566406 208.183594 428.253906 206.886719 C 427.375 207.453125 426.46875 206.640625 425.597656 207.46875 C 425.199219 207.6875 424.453125 207.699219 424.792969 207.21875 C 425.3125 206.457031 425.855469 207.105469 426.371094 206.121094 C 427.101562 205.753906 428.257812 205.867188 428.214844 204.753906 C 427.570312 203.753906 426.960938 204.453125 426.320312 203.453125 C 426.582031 203.183594 426.84375 202.910156 427.105469 202.640625 C 427.367188 202.382812 427.640625 202.75 427.910156 202.890625 C 428.699219 203.738281 429.304688 201.203125 428.164062 202.085938 C 427.882812 201.914062 428.007812 201.734375 428.152344 201.550781 C 429.578125 201.085938 428.804688 200.460938 429.179688 199.398438 C 429.695312 199.667969 429.40625 198.949219 429.964844 198.582031 C 430.878906 199.910156 431.75 198.886719 432.640625 199.070312 C 432.839844 198.085938 431.664062 197.128906 431.785156 196.148438 Z M 449.34375 207.300781 C 449.273438 207.304688 448.855469 207.773438 448.820312 207.84375 C 448.085938 209.386719 450.394531 207.28125 449.34375 207.300781 Z M 441.992188 199.699219 C 442.9375 200.03125 442.925781 197.878906 442.234375 198.359375 C 442.679688 198.796875 441.660156 199.257812 441.992188 199.699219 Z M 429.292969 219.410156 C 428.074219 220.300781 429.582031 221.402344 430.382812 220.457031 C 430.019531 220.109375 429.65625 219.761719 429.292969 219.410156 Z M 430.683594 222.320312 C 430.476562 222.488281 430.558594 221.625 430.675781 221.789062 C 430.632812 221.730469 428.453125 221.742188 429.878906 222.070312 C 430.226562 222.148438 430.335938 222.597656 430.683594 222.320312 Z M 430.683594 222.320312 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#2035896f35)">
                <g clipPath="url(#2bf95558e1)">
                  <g clipPath="url(#b88f113f1d)">
                    <g clipPath="url(#3cf0de9cd3)">
                      <path
                        fill="#dfa6ce"
                        d="M 451.195312 206.46875 C 451.261719 206.109375 451.335938 205.753906 451.710938 205.390625 C 451.988281 205.5625 451.863281 205.742188 451.71875 205.925781 C 451.378906 206.285156 451.957031 206.632812 451.738281 206.992188 C 451.558594 206.816406 451.378906 206.640625 451.195312 206.46875 Z M 451.195312 206.46875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#c7b34d66c8)">
                <g clipPath="url(#c46ee8b938)">
                  <g clipPath="url(#b4cf767c1e)">
                    <g clipPath="url(#5eca37fb1f)">
                      <path
                        fill="#dfa6ce"
                        d="M 436.113281 227.023438 C 436.078125 228.742188 434.316406 226.992188 434.492188 225.988281 C 435.449219 225.171875 434.988281 227.84375 436.113281 227.023438 Z M 436.113281 227.023438 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#1f548e0ef7)">
                <g clipPath="url(#ef6ea23f81)">
                  <g clipPath="url(#19e9eb55f5)">
                    <g clipPath="url(#ebaac7889d)">
                      <path
                        fill="#dfa6ce"
                        d="M 437.160156 225.9375 C 436.804688 226.019531 436.449219 226.105469 436.101562 226.492188 C 435.429688 225.371094 436.449219 225.65625 437.148438 225.40625 C 437.300781 225.582031 437.429688 225.753906 437.160156 225.9375 Z M 437.160156 225.9375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#af996ff0ad)">
                <g clipPath="url(#d606abc9a8)">
                  <g clipPath="url(#6033eac676)">
                    <g clipPath="url(#84eb74a31d)">
                      <path
                        fill="#dfa6ce"
                        d="M 451.308594 212.335938 C 451.394531 212.246094 451.484375 212.15625 451.570312 212.066406 C 452.082031 212.410156 451.792969 212.769531 452.125 213.121094 C 452.683594 213.46875 452.433594 213.828125 452.144531 214.1875 C 451.960938 213.917969 451.785156 214.046875 451.609375 214.199219 C 451.519531 214.113281 451.429688 214.023438 451.339844 213.9375 C 451.425781 213.847656 451.511719 213.757812 451.601562 213.664062 C 451.820312 213.21875 451.785156 212.773438 451.308594 212.335938 Z M 451.308594 212.335938 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#fdd2206587)">
                <g clipPath="url(#a227cf1174)">
                  <g clipPath="url(#b1674b3209)">
                    <g clipPath="url(#e0997353d0)">
                      <path
                        fill="#dfa6ce"
                        d="M 431.503906 195.351562 C 430.945312 195.007812 431.195312 194.648438 431.480469 194.285156 C 431.664062 194.460938 431.84375 194.636719 432.027344 194.808594 C 431.851562 194.992188 431.675781 195.171875 431.503906 195.351562 Z M 431.503906 195.351562 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#b03f38a988)">
                <g clipPath="url(#c977dbd98e)">
                  <g clipPath="url(#46c6afd41a)">
                    <g clipPath="url(#e110f3f84c)">
                      <path
                        fill="#dfa6ce"
                        d="M 442.164062 194.625 C 441.089844 193.242188 443.964844 193.191406 442.164062 194.625 Z M 442.164062 194.625 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#35278330f1)">
                <g clipPath="url(#c1ca97a95e)">
                  <g clipPath="url(#9447cae4fa)">
                    <g clipPath="url(#93d8578438)">
                      <path
                        fill="#dfa6ce"
                        d="M 426.648438 220.527344 C 426.207031 220.816406 425.75 220.097656 425.296875 219.75 C 425.980469 219.195312 426.625 219.824219 426.648438 220.527344 Z M 426.648438 220.527344 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#7dbf9bb5c3)">
                <g clipPath="url(#dc0691b301)">
                  <g clipPath="url(#1c545a878d)">
                    <g clipPath="url(#00ead392ec)">
                      <path
                        fill="#dfa6ce"
                        d="M 438.660156 192.820312 C 438.667969 193.675781 437.9375 193.78125 437.351562 194.179688 C 436.78125 193.496094 438.34375 192.835938 438.660156 192.820312 Z M 438.660156 192.820312 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#3403018780)">
                <g clipPath="url(#c31e678afb)">
                  <g clipPath="url(#a300d797cf)">
                    <g clipPath="url(#ecc6bf1d7e)">
                      <path
                        fill="#dfa6ce"
                        d="M 452.738281 217.378906 C 452.21875 218.019531 451.683594 218.03125 451.140625 217.410156 C 451.660156 216.769531 452.195312 216.761719 452.738281 217.378906 Z M 452.738281 217.378906 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#5652c7588e)">
                <g clipPath="url(#b6d88f4aff)">
                  <g clipPath="url(#1e8257f73f)">
                    <g clipPath="url(#d725a3db14)">
                      <path
                        fill="#7bdcb6"
                        d="M 394.128906 395.191406 C 393.6875 395.410156 393.242188 395.414062 392.789062 394.949219 C 393.226562 394.429688 393.675781 394.695312 394.109375 394.125 C 394.339844 394.476562 393.773438 394.84375 394.128906 395.191406 Z M 394.128906 395.191406 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#84a2802313)">
                <g clipPath="url(#ce93819dc3)">
                  <g clipPath="url(#b482541835)">
                    <g clipPath="url(#d8254c7162)">
                      <path
                        fill="#7bdcb6"
                        d="M 421.371094 396.292969 C 421.28125 396.207031 421.1875 396.117188 421.097656 396.03125 C 421.449219 395.800781 421.816406 396.367188 422.164062 396.011719 C 422.421875 396.273438 422.054688 396.546875 421.914062 396.816406 C 421.734375 396.640625 421.550781 396.46875 421.371094 396.292969 Z M 421.371094 396.292969 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#9c006aa595)">
                <g clipPath="url(#ae7bf5b541)">
                  <g clipPath="url(#cd9f428ce7)">
                    <g clipPath="url(#5482f0ad0f)">
                      <path
                        fill="#7bdcb6"
                        d="M 421.421875 398.960938 C 421.148438 398.585938 421.546875 398.5 421.945312 398.417969 C 423.023438 398.808594 421.851562 400.023438 421.421875 398.960938 Z M 421.421875 398.960938 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#751d435311)">
                <g clipPath="url(#3ca9dd3a96)">
                  <g clipPath="url(#d6f1595042)">
                    <g clipPath="url(#e89f45d59b)">
                      <path
                        fill="#7bdcb6"
                        d="M 417.972656 413.96875 C 417.78125 413.4375 418.027344 412.898438 418.476562 412.359375 C 418.746094 412.5 419.019531 412.867188 419.28125 412.609375 C 419.558594 412.78125 419.433594 412.964844 419.292969 413.144531 C 418.855469 413.636719 418.417969 413.929688 417.972656 413.96875 Z M 417.972656 413.96875 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#8095b6c05e)">
                <g clipPath="url(#b4835e2f39)">
                  <g clipPath="url(#ef53006696)">
                    <g clipPath="url(#e26a77b15c)">
                      <path
                        fill="#7bdcb6"
                        d="M 394.894531 393.308594 C 395.164062 392.792969 394.441406 393.082031 394.078125 392.523438 C 394.421875 391.964844 394.785156 392.214844 395.144531 392.503906 C 395.140625 391.882812 395.761719 391.246094 396.445312 390.613281 C 397.625 391.214844 396.054688 391.863281 395.679688 392.496094 C 395.933594 393.242188 397.371094 392.554688 396.765625 393.542969 C 397.511719 393.96875 398.636719 392.308594 398.640625 393.773438 C 399.402344 394.382812 398.714844 392.949219 399.6875 392.6875 C 400.316406 393.140625 400.925781 392.464844 401.558594 392.921875 C 402.867188 394.25 403.816406 391.992188 402.070312 391.84375 C 401.980469 391.757812 401.890625 391.667969 401.800781 391.582031 C 402.199219 391.542969 402.9375 391.246094 402.585938 390.765625 C 402.230469 390.847656 401.875 390.933594 401.527344 391.320312 C 401.082031 391.34375 400.628906 390.765625 400.1875 391.078125 C 400.007812 390.902344 399.828125 390.726562 399.644531 390.554688 C 399.867188 389.574219 401.328125 390.207031 400.691406 389.46875 C 400.960938 388.992188 400.234375 388.984375 399.886719 389.214844 C 399.382812 388.140625 401.085938 388.867188 401.476562 388.652344 C 401.753906 389.003906 401.230469 389.367188 400.964844 389.730469 C 401.503906 390.179688 402.042969 390.425781 402.574219 390.234375 C 402.757812 390.507812 402.933594 390.375 403.109375 390.222656 C 403.5625 390.726562 404 390.441406 404.457031 391 C 404.5 390.554688 404.359375 390.113281 404.164062 389.671875 C 404.339844 389.488281 404.511719 389.308594 404.6875 389.128906 C 403.800781 389.214844 402.90625 388.980469 402.011719 388.640625 C 401.917969 388.554688 401.828125 388.46875 401.738281 388.378906 C 401.648438 388.292969 401.558594 388.207031 401.464844 388.117188 C 401.726562 387.847656 401.988281 387.574219 402.25 387.304688 C 402.609375 387.5625 402.675781 387.828125 402.535156 388.097656 C 403.277344 387.878906 405.207031 388.804688 404.386719 387.265625 C 404.917969 386.742188 405.011719 387.832031 404.929688 387.789062 C 405.246094 387.964844 406.320312 387.625 407.074219 388.28125 C 407.230469 387.65625 406.578125 387.046875 406.238281 386.429688 C 406.5 386.070312 405.960938 385.722656 405.683594 385.371094 C 406.210938 385.128906 406.746094 385.117188 407.285156 385.34375 C 407.554688 385.605469 407.828125 385.867188 408.097656 386.128906 C 408.644531 385.761719 408.382812 385.414062 408.078125 385.0625 C 408.695312 384.644531 409.347656 386.238281 409.941406 384.761719 C 412.183594 386.371094 409.164062 386.421875 410.535156 387.953125 C 411.007812 388.222656 411.019531 387.496094 410.789062 387.148438 C 411.964844 387.039062 411.957031 390.269531 413.757812 388.960938 C 414.742188 390.308594 416.589844 390.441406 416.699219 389.175781 C 417.355469 388.46875 417.21875 389.039062 417.503906 389.425781 C 417.253906 389.699219 417.632812 389.957031 417.785156 390.222656 C 417.34375 390.484375 416.894531 390.1875 416.457031 390.511719 C 416.0625 390.875 415.671875 391.238281 415.941406 391.589844 C 416.203125 391.230469 416.46875 391.164062 416.738281 391.308594 C 415.347656 392.402344 418.207031 395.300781 418.640625 393.140625 C 418.824219 393.316406 419.003906 393.492188 419.183594 393.664062 C 419.011719 393.847656 418.835938 394.027344 418.660156 394.207031 C 418.265625 394.75 418.53125 395.277344 419.226562 395.796875 C 419.910156 395.34375 419.335938 394.90625 418.933594 394.46875 C 419.105469 394.191406 419.285156 394.316406 419.46875 394.460938 C 419.824219 394.527344 420.183594 394.601562 420.542969 394.972656 C 419.917969 395.015625 419.769531 395.304688 420.292969 395.78125 C 420.269531 396.226562 419.996094 396.675781 419.519531 397.128906 C 419.875 397.195312 420.234375 397.269531 420.59375 397.640625 C 420.6875 397.730469 420.777344 397.816406 420.867188 397.902344 C 420.890625 398.347656 420.3125 398.804688 420.625 399.242188 C 420.363281 399.515625 420.101562 399.785156 419.839844 400.058594 C 420.472656 400.4375 421.089844 400.128906 421.722656 400.824219 C 421.539062 402.003906 420.816406 401.527344 420.425781 402.714844 C 419.222656 402.203125 421.066406 401.636719 419.863281 401.125 C 418.679688 401.679688 420.542969 402.179688 419.359375 402.734375 C 419.910156 403.699219 420.433594 403.03125 420.980469 403.773438 C 419.84375 404.871094 420.492188 404.5625 421.261719 404.566406 C 421.433594 404.832031 421.269531 405.101562 421.542969 405.363281 C 421.457031 405.453125 421.371094 405.542969 421.28125 405.636719 C 420.609375 405.617188 420.753906 405.328125 420.464844 404.847656 C 419.695312 405.558594 419.984375 406.183594 420.757812 406.179688 C 420.941406 406.351562 421.121094 406.527344 421.300781 406.703125 C 420.53125 408.304688 419.703125 406.769531 418.925781 408.078125 C 420.027344 407.953125 422.148438 408.808594 422.429688 409.882812 C 421.597656 409.957031 420.058594 409.695312 420.054688 411.261719 C 419.96875 411.351562 419.882812 411.441406 419.792969 411.53125 C 419.523438 411.269531 419.25 411.007812 418.976562 410.746094 C 418.730469 411.019531 419.109375 411.277344 419.261719 411.542969 C 418.996094 411.714844 418.726562 411.550781 418.464844 411.824219 C 417.46875 412.464844 418.164062 413.074219 417.167969 413.714844 C 416.527344 413.035156 416.386719 413.601562 416.90625 413.988281 C 415.667969 413.515625 414.738281 414.289062 415.867188 415.609375 C 415.476562 416.058594 414.742188 416.519531 415.09375 416.957031 C 414.605469 417.5625 414.0625 416.109375 414.277344 416.171875 C 413.570312 415.964844 413.648438 416.855469 412.960938 416.996094 C 412.632812 417.0625 412.539062 416.328125 412.15625 416.742188 C 411.589844 417.355469 412.175781 417.515625 411.914062 418.082031 C 411.414062 418.359375 411.703125 417.824219 411.371094 417.558594 C 410.699219 418.105469 410.449219 418.640625 410.867188 419.167969 C 409.992188 419.964844 409.097656 419.605469 408.210938 419.75 C 407.027344 420.308594 408.890625 420.804688 407.707031 421.359375 C 407.464844 421.238281 406.84375 421.292969 406.628906 420.847656 C 406.613281 420.8125 406.664062 419.921875 406.878906 420.042969 C 405.675781 419.359375 404.402344 420.523438 405.320312 422.207031 C 404.523438 421.90625 403.726562 420.84375 402.351562 420.390625 C 402.132812 421.417969 402.4375 421.449219 401.316406 422.011719 C 400.679688 421.320312 400.050781 421.066406 399.429688 421.246094 C 399.25 421.070312 399.070312 420.898438 398.886719 420.722656 C 398.726562 420.992188 398.898438 421.253906 398.636719 421.527344 C 398.910156 421.875 399.175781 421.933594 399.441406 421.78125 C 399.710938 421.941406 399.976562 421.769531 400.246094 422.03125 C 400.335938 422.117188 400.429688 422.207031 400.519531 422.292969 C 399.566406 423.675781 398.566406 422.507812 397.570312 421.546875 C 398.714844 420.902344 398.050781 420.292969 397.265625 419.683594 C 397.53125 418.941406 396.824219 419.824219 396.460938 419.433594 C 396.371094 419.34375 396.28125 419.257812 396.191406 419.171875 C 395.640625 418.433594 395.148438 420.554688 394.589844 419.199219 C 394.851562 418.792969 394.3125 418.40625 394.046875 418.675781 C 394.777344 417.417969 394.722656 416.171875 392.90625 414.960938 C 392.992188 414.871094 393.082031 414.78125 393.167969 414.6875 C 392.410156 414.292969 393.042969 413.085938 392.089844 414.175781 C 391.742188 414.453125 391.375 413.925781 391.011719 413.660156 C 390.738281 413.3125 390.472656 413.253906 390.207031 413.410156 C 389.699219 412.019531 391.421875 413.722656 391.789062 412.3125 C 391.515625 412.066406 391.257812 412.441406 390.992188 412.59375 C 390.902344 412.507812 390.8125 412.421875 390.722656 412.332031 C 390.632812 412.246094 390.539062 412.15625 390.449219 412.070312 C 390.871094 411.261719 390.246094 410.472656 390.671875 409.664062 C 389.496094 409.800781 389.976562 409.523438 388.789062 408.898438 C 389.050781 408.640625 389.324219 409.007812 389.59375 409.152344 C 389.667969 408.617188 389.9375 408.078125 390.628906 407.53125 C 390.789062 406.894531 390.152344 407.214844 389.804688 406.210938 C 389.828125 406.65625 389.25 407.113281 389.5625 407.550781 C 388.589844 407.652344 389.253906 407.917969 388.515625 408.636719 C 387.59375 407.941406 388.804688 407.207031 389.007812 406.492188 C 389.53125 405.949219 390.054688 405.40625 390.578125 404.863281 C 389.296875 403.675781 389.347656 406.800781 388.453125 405.4375 C 388.71875 405.074219 388.179688 404.730469 387.902344 404.378906 C 388.429688 404.128906 388.933594 402.667969 389.480469 403.28125 C 389.898438 402.039062 389.203125 401.3125 389.964844 400.605469 C 390.1875 400.394531 392.234375 400.699219 391.011719 399.519531 C 391.359375 399.132812 391.710938 399.042969 392.066406 398.964844 C 391.703125 398.59375 391.347656 398.519531 390.988281 398.453125 C 392.421875 397.882812 391.445312 397.863281 391.492188 396.839844 C 391.890625 396.5625 392.296875 397.085938 392.035156 397.363281 C 392.546875 397.625 392.238281 397.097656 392.558594 396.820312 C 394.050781 397.355469 395 396.148438 394.925781 394.910156 C 395.171875 394.636719 394.792969 394.378906 394.640625 394.113281 C 394.992188 393.839844 395.046875 393.574219 394.894531 393.308594 Z M 413.734375 415.648438 C 413.378906 415.296875 413.945312 414.929688 413.714844 414.578125 C 413.367188 414.914062 413.003906 414.621094 412.65625 415.132812 C 413.019531 415.398438 413.382812 415.921875 413.734375 415.648438 Z M 396.703125 418.09375 C 396.527344 418.273438 396.355469 418.457031 396.179688 418.636719 C 396.359375 418.8125 396.542969 418.984375 396.722656 419.160156 C 396.898438 418.980469 397.070312 418.796875 397.246094 418.617188 C 397.066406 418.441406 396.882812 418.269531 396.703125 418.09375 Z M 391.0625 402.1875 C 390.210938 402.972656 392.75 403.582031 391.867188 402.4375 C 392.714844 401.652344 390.175781 401.042969 391.0625 402.1875 Z M 407.917969 390.667969 C 407.570312 391.023438 407.203125 390.457031 406.851562 390.6875 C 407.609375 390.917969 406.976562 392.378906 407.941406 391.734375 C 407.582031 391.386719 408.148438 391.019531 407.917969 390.667969 Z M 407.144531 392.015625 C 406.648438 391.347656 405.410156 392.722656 406.359375 392.832031 C 406.503906 392.847656 406.734375 392.328125 406.882812 392.289062 C 406.945312 392.273438 407.492188 392.484375 407.144531 392.015625 Z M 410.316406 390.359375 C 409.910156 389.742188 410.570312 389.109375 409.480469 388.503906 C 408.445312 389.167969 408.96875 391.15625 409.792969 390.902344 C 409.972656 391.046875 410.152344 391.171875 410.324219 390.890625 C 410.597656 391.152344 410.4375 391.421875 410.609375 391.6875 C 411.011719 392.46875 412.894531 391.761719 411.664062 391.132812 C 411.574219 391.046875 411.484375 390.960938 411.394531 390.871094 C 411.535156 390.601562 411.902344 390.328125 411.644531 390.066406 C 411.46875 390.21875 411.292969 390.347656 411.109375 390.078125 C 411.253906 389.808594 411.621094 389.535156 411.363281 389.269531 C 411.011719 389.632812 410.664062 389.996094 410.316406 390.359375 Z M 410.316406 390.359375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#a7da652067)">
                <g clipPath="url(#462a9f97b8)">
                  <g clipPath="url(#e66b63a02a)">
                    <g clipPath="url(#05c6d87a95)">
                      <path
                        fill="#7bdcb6"
                        d="M 390.132812 395.53125 C 390.917969 396.140625 391.207031 396.757812 390.4375 397.394531 C 390.027344 396.777344 389.359375 396.167969 390.132812 395.53125 Z M 390.132812 395.53125 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#7dd14e55b5)">
                <g clipPath="url(#047a1651a1)">
                  <g clipPath="url(#9bade451f2)">
                    <g clipPath="url(#8a4b5081da)">
                      <path
                        fill="#7bdcb6"
                        d="M 415.085938 388.667969 C 413.292969 388.878906 414.964844 386.960938 415.085938 388.667969 Z M 415.085938 388.667969 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#9bc9828e4e)">
                <g clipPath="url(#d59502b484)">
                  <g clipPath="url(#87dd95f8f8)">
                    <g clipPath="url(#8ef022b656)">
                      <path
                        fill="#7bdcb6"
                        d="M 418.902344 392.871094 C 418.8125 392.78125 418.722656 392.695312 418.632812 392.609375 C 418.410156 392.167969 418.40625 391.722656 418.871094 391.269531 C 419.734375 391.785156 419.746094 392.320312 418.902344 392.871094 Z M 418.902344 392.871094 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#bfaee475a5)">
                <g clipPath="url(#fd61afae65)">
                  <g clipPath="url(#04e845d929)">
                    <g clipPath="url(#61d216710e)">
                      <path
                        fill="#7bdcb6"
                        d="M 397.359375 424.488281 C 396.71875 423.964844 396.707031 423.429688 397.328125 422.886719 C 397.96875 423.40625 397.980469 423.941406 397.359375 424.488281 Z M 397.359375 424.488281 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#35a1742381)">
                <g clipPath="url(#14e0c95cfb)">
                  <g clipPath="url(#076a54116d)">
                    <g clipPath="url(#ca2b11e2ca)">
                      <path
                        fill="#7bdcb6"
                        d="M 407.476562 423.234375 C 406.953125 422.796875 407.222656 422.347656 406.648438 421.914062 C 407.464844 421.613281 408.570312 422.328125 407.476562 423.234375 Z M 407.476562 423.234375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g clipPath="url(#cb1cacf1f8)">
                <g clipPath="url(#e4df8ef618)">
                  <g clipPath="url(#39e1beb1e4)">
                    <g clipPath="url(#10a11e633c)">
                      <path
                        fill="#7bdcb6"
                        d="M 399.394531 391.359375 C 399.5625 391.621094 399.402344 391.890625 399.675781 392.152344 C 398.925781 393.339844 398.242188 391.765625 399.394531 391.359375 Z M 399.394531 391.359375 "
                        fillOpacity="1"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SplashBackgroundSVG;

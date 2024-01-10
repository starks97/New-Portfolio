import React from "react";

type Props = {
  color: string;
  width: number | string;
  height: number | string;
};

export default function Logo({ color, width, height }: Props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1200.000000 304.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,304.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M263 2760 c-46 -28 -56 -71 -52 -234 l4 -138 33 -29 c39 -35 -6 -32
622 -34 513 0 512 0 650 -67 84 -40 221 -176 268 -266 76 -143 111 -320 97
-492 -18 -223 -114 -418 -263 -535 -74 -59 -138 -90 -236 -115 -74 -19 -111
-20 -585 -20 -484 0 -507 -1 -538 -20 -46 -28 -56 -71 -52 -234 l4 -138 33
-29 32 -29 539 0 c612 0 641 3 832 79 146 59 239 120 349 231 186 186 289 386
335 649 23 128 20 388 -5 512 -88 430 -378 762 -765 878 -166 49 -198 51 -750
51 -498 0 -521 -1 -552 -20z"
        />
        <path
          d="M3785 2761 c-27 -16 -48 -57 -150 -297 -65 -154 -219 -514 -342 -801
-123 -288 -223 -530 -223 -538 0 -34 30 -84 59 -99 44 -23 341 -23 380 0 36
21 40 28 106 190 31 76 86 209 122 294 184 437 222 528 237 564 19 46 30 41
57 -26 9 -24 47 -115 84 -203 37 -88 77 -185 90 -215 28 -67 123 -294 239
-570 47 -113 84 -211 81 -217 -3 -10 -168 -13 -777 -13 l-773 0 -27 -23 c-18
-14 -46 -67 -83 -154 -66 -158 -70 -200 -26 -244 l29 -29 1124 0 c1002 0 1126
2 1146 16 25 17 52 64 52 90 0 15 -42 119 -190 464 -32 74 -101 239 -155 365
-54 127 -130 307 -170 400 -40 94 -123 289 -185 435 -62 146 -139 327 -171
403 -33 75 -59 141 -59 146 0 5 -15 26 -34 45 l-33 36 -189 0 c-167 0 -193 -2
-219 -19z"
        />
        <path
          d="M5562 2755 c-57 -48 -59 -70 -14 -181 46 -116 379 -940 482 -1194
133 -325 343 -845 367 -907 15 -36 38 -73 55 -88 29 -25 32 -25 209 -25 196 0
215 5 244 60 7 14 47 109 88 211 313 774 357 883 482 1189 84 207 291 719 316
783 23 57 24 79 4 117 -27 53 -57 60 -235 60 -181 0 -207 -7 -235 -66 -8 -17
-53 -130 -101 -250 -47 -121 -138 -349 -201 -509 -63 -159 -164 -416 -224
-570 -61 -154 -114 -291 -120 -304 -7 -18 -12 -21 -23 -12 -8 7 -17 24 -21 38
-7 31 -426 1088 -455 1151 -11 24 -18 48 -15 53 4 5 127 9 297 9 l290 0 34 34
34 34 0 162 0 162 -34 34 -34 34 -580 0 -580 0 -30 -25z"
        />
        <path
          d="M8438 2764 c-56 -30 -58 -43 -58 -396 0 -347 1 -353 53 -392 26 -19
42 -21 180 -21 133 0 156 2 180 19 15 10 32 27 38 37 14 26 13 692 -1 719 -22
41 -60 50 -217 50 -111 -1 -155 -4 -175 -16z"
        />
        <path
          d="M9724 2761 c-49 -30 -56 -61 -52 -226 l3 -147 31 -27 c28 -26 40 -29
135 -35 57 -4 289 -6 514 -5 226 1 428 -2 450 -6 193 -33 363 -162 455 -344
129 -257 118 -596 -28 -831 -103 -166 -230 -259 -405 -296 -54 -11 -172 -14
-574 -14 -487 0 -506 -1 -533 -20 -45 -32 -52 -63 -48 -225 l3 -147 33 -29 32
-29 543 0 c538 0 543 0 647 24 274 64 467 185 636 403 185 235 274 560 245
884 -28 303 -108 499 -291 715 -161 189 -383 312 -650 359 -68 12 -188 15
-600 15 -486 0 -517 -1 -546 -19z"
        />
        <path
          d="M8445 1801 c-11 -5 -29 -19 -40 -31 -20 -22 -20 -36 -20 -677 l0
-655 33 -29 32 -29 164 0 c162 0 165 0 195 26 l31 26 0 660 0 660 -29 29 -29
29 -159 -1 c-87 0 -167 -4 -178 -8z"
        />
      </g>
    </svg>
  );
}
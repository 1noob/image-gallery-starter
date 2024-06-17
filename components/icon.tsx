import React from "react";

import { IconSvgProps } from "@/types";

const XIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      color={"grey-500"}
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
};

const MailIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      viewBox="0 49.4 512 399.4200000000001"
      height={size || height}
      width={size || width}
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero">
          <path
            d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
            fill="#4285f4"
          />
          <path
            d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
            fill="#34a853"
          />
          <path
            d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
            fill="#fbbc04"
          />
        </g>
        <path
          d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
          fill="#ea4335"
        />
        <path
          d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
          fill="#c5221f"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
    </svg>
  );
};

const TiktokIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 34 39"
      width={size || width}
      {...props}
    >
      <g fill="none">
        <path
          d="M14 15.599v-1.486A13.1 13.1 0 0 0 12.337 14C5.535 14 0 19.18 0 25.547 0 29.452 2.086 32.91 5.267 35c-2.13-2.132-3.315-4.942-3.313-7.861 0-6.276 5.377-11.394 12.046-11.54"
          fill="#00f2ea"
        />
        <path
          d="M14.327 32c2.876 0 5.221-2.273 5.328-5.107l.01-25.292h4.65A8.72 8.72 0 0 1 24.164 0h-6.35l-.011 25.293c-.106 2.832-2.453 5.105-5.328 5.105a5.329 5.329 0 0 1-2.476-.61A5.34 5.34 0 0 0 14.327 32m18.672-21.814V8.78a8.818 8.818 0 0 1-4.81-1.421A8.85 8.85 0 0 0 33 10.186"
          fill="#00f2ea"
        />
        <path
          d="M28 7.718A8.63 8.63 0 0 1 25.832 2h-1.697A8.735 8.735 0 0 0 28 7.718M12.325 20.065c-2.94.004-5.322 2.361-5.325 5.27A5.267 5.267 0 0 0 9.854 30a5.2 5.2 0 0 1-1.008-3.073c.003-2.91 2.385-5.268 5.325-5.271.55 0 1.075.09 1.572.244v-6.4a11.72 11.72 0 0 0-1.572-.114c-.092 0-.183.006-.274.007v4.916a5.286 5.286 0 0 0-1.572-.244"
          fill="#ff004f"
        />
        <path
          d="M32.153 11v4.884a15.15 15.15 0 0 1-8.813-2.811V25.84c0 6.377-5.23 11.565-11.658 11.565-2.485 0-4.789-.778-6.682-2.097A11.67 11.67 0 0 0 13.528 39c6.429 0 11.659-5.188 11.659-11.564V14.668A15.15 15.15 0 0 0 34 17.478v-6.283A8.87 8.87 0 0 1 32.153 11"
          fill="#ff004f"
        />
        <path
          d="M23.979 25.42V12.632A15.741 15.741 0 0 0 33 15.448v-4.89a9.083 9.083 0 0 1-4.912-2.82C26.016 6.431 24.586 4.358 24.132 2h-4.747l-.01 25.215c-.11 2.824-2.505 5.09-5.44 5.09-1.754-.002-3.398-.822-4.42-2.204-1.794-.913-2.919-2.716-2.92-4.682.003-2.92 2.44-5.285 5.45-5.289.56 0 1.098.09 1.608.245v-4.933C7.202 15.589 2 20.722 2 27.016c0 3.045 1.219 5.816 3.205 7.885A12.115 12.115 0 0 0 12.045 37c6.58 0 11.934-5.195 11.934-11.58"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const TiktokDarkIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 2000 2265"
      width={size || width}
      {...props}
    >
      <g
        fill="#25f4ee"
        transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"
      >
        <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z" />
        <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z" />
      </g>
      <path
        d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
        fill="#fe2c55"
        transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"
      />
      <path
        d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
        fill="#fe2c55"
        transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"
      />
      <path
        d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z"
        transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"
      />
    </svg>
  );
};

const SinaIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 724.7 587.1"
      width={size || width}
      {...props}
    >
      <path
        d="M 53.3 403.723 C 53.3 488.123 163.2 556.523 298.7 556.523 C 434.2 556.523 544.1 488.123 544.1 403.723 C 544.1 319.323 434.2 250.923 298.7 250.923 C 163.2 250.923 53.3 319.323 53.3 403.723"
        fill="#fff"
      />
      <path
        d="M 304.5 544.123 C 184.5 556.023 80.9 501.723 73.1 423.023 C 65.3 344.223 156.3 270.823 276.2 258.923 C 396.2 247.023 499.8 301.323 507.5 380.023 C 515.4 458.823 424.4 532.323 304.5 544.123 M 544.4 282.623 C 534.2 279.523 527.2 277.523 532.5 264.123 C 544.1 235.023 545.3 209.923 532.7 191.923 C 509.2 158.323 444.8 160.123 371 191.023 C 371 191.023 347.8 201.123 353.8 182.823 C 365.1 146.323 363.4 115.823 345.8 98.123 C 305.8 58.023 199.3 99.623 108 190.923 C 39.7 259.223 0 331.723 0 394.423 C 0 514.223 153.7 587.123 304 587.123 C 501.1 587.123 632.2 472.623 632.2 381.723 C 632.3 326.723 586 295.523 544.4 282.623"
        fill="#e6162d"
      />
      <path
        d="M 675.3 63.323 C 627.7 10.523 557.5 -9.577 492.7 4.223 C 477.7 7.423 468.2 22.223 471.4 37.123 C 474.6 52.123 489.3 61.623 504.3 58.423 C 550.4 48.623 600.3 62.923 634.1 100.423 C 667.9 137.923 677.1 189.023 662.6 233.823 C 657.9 248.423 665.9 264.023 680.5 268.723 C 695.1 273.423 710.7 265.423 715.4 250.923 L 715.4 250.823 C 735.8 187.923 722.9 116.023 675.3 63.323"
        fill="#f93"
      />
      <path
        d="M 602.2 129.323 C 579 103.623 544.8 93.823 513.3 100.623 C 500.4 103.323 492.2 116.123 494.9 129.023 C 497.7 141.923 510.4 150.123 523.2 147.323 C 538.6 144.023 555.4 148.823 566.7 161.323 C 578 173.923 581.1 191.023 576.2 206.023 C 572.2 218.523 579 232.023 591.6 236.123 C 604.2 240.123 617.6 233.323 621.7 220.723 C 631.6 190.023 625.4 155.023 602.2 129.323"
        fill="#f93"
      />
      <path d="M 311.1 401.523 C 306.9 408.723 297.6 412.123 290.4 409.123 C 283.2 406.223 281 398.123 285.1 391.123 C 289.3 384.123 298.2 380.723 305.3 383.523 C 312.5 386.123 315.1 394.223 311.1 401.523 M 272.8 450.523 C 261.2 469.023 236.3 477.123 217.6 468.623 C 199.2 460.223 193.7 438.723 205.3 420.623 C 216.8 402.623 240.8 394.623 259.4 402.423 C 278.2 410.523 284.2 431.823 272.8 450.523 M 316.4 319.523 C 259.3 304.623 194.8 333.123 170 383.423 C 144.7 434.723 169.2 491.723 226.8 510.323 C 286.6 529.623 357 500.023 381.5 444.723 C 405.7 390.523 375.5 334.823 316.4 319.523" />
    </svg>
  );
};

const UmamiIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 428 389.11"
      width={size || width}
      {...props}
    >
      <circle
        cx="214.15"
        cy="171"
        r="171"
        stroke="currentColor"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="20"
        transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
      />
      <path
        d="M 413 124.11 L 15.29 124.11 C 7.005 124.11 0.29 130.826 0.29 139.11 L 0.29 154.41 C 0.12 158 0 161.52 0 165.11 C 0 283.3 95.81 379.11 214 379.11 C 330.4 379.11 425.1 286.17 427.93 170.44 C 427.93 170 428 169.56 428 169.11 L 428 139.11 C 428 130.826 421.284 124.11 413 124.11 Z"
        transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
        fill="currentColor"
      />
    </svg>
  );
};

const CloudinaryIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 120.7 79"
      width={size || width}
      {...props}
    >
      <path
        fill="currentColor"
        d="M97.91,28.11A40.38,40.38,0,0,0,59.73,0,39.62,39.62,0,0,0,24.6,20.87a29.88,29.88,0,0,0-7.21,56.56l.75.34h.05v-8.5a22.29,22.29,0,0,1,9.29-41.16l2.1-.22L30.5,26A32.15,32.15,0,0,1,59.73,7.57a32.7,32.7,0,0,1,31.55,25L92,35.43l3,0a18.53,18.53,0,0,1,18.15,18.46c0,7.05-4.07,12.82-11,15.74v8.06l.5-.16c11.14-3.65,18.06-12.71,18.06-23.64A26.19,26.19,0,0,0,97.91,28.11Z"
      />
      <path
        fill="currentColor"
        d="M45.07,76.79l1.66,1.66a.33.33,0,0,1-.23.56H33.4a6,6,0,0,1-6-6V47.57a.33.33,0,0,0-.33-.33H24.27a.33.33,0,0,1-.24-.56L35.15,35.56a.33.33,0,0,1,.47,0L46.73,46.68a.33.33,0,0,1-.23.56H43.66a.34.34,0,0,0-.34.33v25A6,6,0,0,0,45.07,76.79Z"
      />
      <path
        fill="currentColor"
        d="M69.64,76.79l1.67,1.66a.33.33,0,0,1-.24.56H58a6,6,0,0,1-6-6V54a.34.34,0,0,0-.33-.34H48.84a.33.33,0,0,1-.23-.56L59.72,42a.33.33,0,0,1,.47,0L71.31,53.08a.33.33,0,0,1-.24.56H68.23a.34.34,0,0,0-.33.34V72.57A6,6,0,0,0,69.64,76.79Z"
      />
      <path
        fill="currentColor"
        d="M94.22,76.79l1.66,1.66a.33.33,0,0,1-.23.56H82.54a6,6,0,0,1-6-6V60.38a.33.33,0,0,0-.33-.33H73.41a.33.33,0,0,1-.23-.57L84.3,48.37a.32.32,0,0,1,.46,0L95.88,59.48a.33.33,0,0,1-.23.57H92.8a.33.33,0,0,0-.33.33V72.57A6,6,0,0,0,94.22,76.79Z"
      />
    </svg>
  );
};

const JackeyLoveIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 1000 1000"
      width={size || width}
      {...props}
    >
      <defs>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          cx="1366.902"
          cy="5235"
          r="967.321"
          id="gradient-0"
        >
          <stop offset="0" stopColor="rgb(0% 18.431% 65.49%)" />
          <stop offset="1" stopColor="rgb(0% 10.889% 49.447%)" />
        </radialGradient>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          cx="5526.111"
          cy="4800.124"
          r="3813.889"
          id="gradient-1"
        >
          <stop offset="0" stopColor="rgb(0% 18.431% 65.49%)" />
          <stop offset="1" stopColor="rgb(0% 10.889% 49.447%)" />
        </radialGradient>
      </defs>
      <g
        transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 1.4210854715202004e-14, 1000.0000000000001)"
        fill="#currentColor"
        stroke="none"
      >
        <path
          d="M2109 7022 c-15 -9 -51 -34 -80 -54 -329 -228 -721 -453 -874 -499&#10;-16 -5 -61 -14 -99 -19 -86 -13 -111 -6 -226 57 -47 26 -63 30 -113 27 -71 -5&#10;-92 -15 -113 -56 -13 -26 -14 -38 -5 -70 10 -31 21 -43 60 -62 26 -14 68 -40&#10;92 -59 25 -19 76 -43 115 -55 193 -58 370 -41 555 54 105 53 99 62 99 -148 0&#10;-101 -4 -217 -10 -258 -5 -41 -14 -136 -20 -210 -6 -74 -18 -205 -27 -290 -9&#10;-85 -19 -207 -23 -270 -7 -124 -48 -436 -80 -615 -41 -224 -88 -512 -95 -575&#10;-6 -57 -26 -162 -41 -213 -4 -14 -12 -16 -47 -10 -23 3 -60 16 -82 28 -79 42&#10;-211 119 -268 156 -32 21 -67 41 -79 45 -12 3 -49 26 -82 50 -33 24 -68 44&#10;-79 44 -10 0 -27 5 -39 11 -24 13 -104 -4 -130 -28 -26 -24 -24 -102 3 -137&#10;12 -16 71 -51 138 -83 64 -31 139 -70 166 -88 95 -61 120 -75 222 -125 158&#10;-79 336 -140 405 -140 41 0 54 5 88 36 49 45 55 65 85 289 41 303 45 336 65&#10;455 11 63 27 160 35 215 9 55 22 118 30 140 16 45 24 118 60 525 14 157 29&#10;301 34 320 27 100 37 256 45 715 4 212 15 315 35 339 7 8 67 53 134 100 67 47&#10;160 118 207 156 47 38 90 70 96 70 28 0 84 93 64 105 -6 4 -10 13 -10 20 0 14&#10;-6 23 -50 74 -22 26 -75 51 -107 51 -15 0 -40 -8 -54 -18z"
          fill="url('#gradient-0')"
        />
        <path
          d="M7314 6500 c-27 -11 -84 -80 -84 -102 0 -9 -4 -19 -9 -22 -4 -3 -11&#10;-25 -15 -48 -15 -104 -38 -214 -47 -230 -5 -10 -9 -41 -9 -70 0 -29 -9 -76&#10;-20 -105 -11 -30 -22 -92 -26 -147 -6 -76 -11 -99 -28 -118 -26 -29 -103 -91&#10;-176 -143 -30 -21 -73 -55 -95 -75 -22 -20 -71 -59 -110 -85 -38 -27 -88 -64&#10;-109 -82 -43 -36 -83 -43 -92 -15 -22 67 -78 112 -140 112 -61 0 -98 -37 -114&#10;-115 -7 -33 -16 -69 -20 -80 -5 -11 -12 -42 -16 -70 -4 -27 -8 -53 -10 -57 -1&#10;-5 -2 -15 -3 -23 -2 -27 -81 -16 -81 11 0 8 -4 14 -10 14 -5 0 -10 7 -10 16 0&#10;26 -59 103 -101 131 -32 21 -47 25 -85 20 -27 -3 -54 -13 -68 -26 -26 -24 -76&#10;-123 -95 -186 -7 -22 -22 -60 -33 -85 -11 -25 -24 -54 -28 -65 -37 -99 -150&#10;-304 -172 -313 -4 -2 -8 -12 -8 -23 0 -10 -4 -19 -10 -19 -5 0 -10 -5 -10 -11&#10;0 -20 -96 -97 -165 -132 -107 -53 -254 -74 -333 -46 -57 20 -109 174 -69 207&#10;6 6 81 24 165 41 173 36 243 65 311 132 42 41 43 45 38 90 -13 105 -109 224&#10;-232 287 -65 33 -76 36 -162 36 -85 0 -97 -3 -165 -37 -63 -30 -138 -92 -138&#10;-112 0 -3 -12 -18 -26 -33 -110 -117 -123 -375 -28 -577 43 -92 136 -192 209&#10;-224 39 -17 45 -23 35 -35 -9 -12 -35 -14 -133 -10 -267 10 -417 38 -542 102&#10;-60 30 -177 109 -224 151 -41 38 -36 47 53 94 54 28 206 162 206 181 0 4 6 13&#10;13 20 48 49 157 241 157 276 0 11 5 22 10 25 6 3 10 39 10 78 0 70 -1 74 -37&#10;115 -23 24 -62 53 -97 68 -59 27 -61 27 -218 21 -138 -6 -160 -4 -165 9 -3 8&#10;-1 20 6 27 6 6 11 35 11 63 0 29 4 55 9 58 4 3 12 36 16 73 21 198 25 234 35&#10;303 6 41 13 111 16 155 2 44 9 89 14 100 14 32 22 92 27 211 4 110 4 111 -24&#10;144 -37 44 -98 71 -132 59 -42 -15 -71 -32 -71 -40 0 -5 -11 -32 -24 -61 -13&#10;-29 -27 -81 -30 -116 -3 -35 -11 -73 -18 -85 -6 -12 -15 -78 -20 -147 -4 -69&#10;-11 -165 -14 -215 -3 -49 -10 -98 -15 -107 -5 -9 -9 -52 -9 -95 0 -44 -4 -83&#10;-9 -89 -9 -8 -12 -37 -26 -229 -3 -38 -10 -79 -15 -90 -14 -31 -20 -86 -30&#10;-250 -11 -179 -18 -243 -30 -270 -5 -11 -11 -54 -14 -95 -9 -140 -56 -217&#10;-196 -320 -89 -65 -155 -97 -232 -110 -89 -16 -142 -10 -146 14 -4 20 13 87&#10;29 118 5 10 9 26 9 35 0 10 18 41 40 68 21 28 47 64 56 80 9 17 48 62 87 102&#10;66 68 70 74 70 117 0 72 -28 116 -88 142 -59 24 -102 6 -195 -84 -70 -68 -170&#10;-207 -170 -237 0 -5 -9 -21 -20 -35 -11 -14 -20 -33 -20 -42 0 -10 -4 -18 -8&#10;-18 -4 0 -16 -14 -26 -32 -23 -39 -53 -69 -131 -133 -33 -28 -62 -53 -65 -56&#10;-10 -12 -50 -20 -70 -14 -18 6 -20 13 -16 68 9 124 19 198 27 203 5 3 9 35 9&#10;71 0 63 -2 68 -38 104 -24 23 -53 40 -76 44 -38 8 -76 45 -76 74 0 23 -56 74&#10;-105 97 -61 29 -166 25 -230 -9 -48 -25 -115 -80 -115 -95 0 -4 -16 -25 -35&#10;-47 -19 -22 -47 -65 -62 -95 -15 -30 -31 -56 -35 -58 -4 -2 -8 -14 -8 -27 0&#10;-13 -4 -27 -10 -30 -5 -3 -10 -17 -10 -30 0 -13 -4 -27 -10 -30 -5 -3 -10 -30&#10;-10 -59 0 -28 -5 -57 -11 -63 -7 -7 -9 -29 -4 -60 3 -26 9 -86 11 -133 4 -55&#10;11 -93 23 -110 9 -14 23 -37 30 -52 47 -94 148 -159 257 -166 57 -4 77 -1 110&#10;16 39 20 74 54 74 71 0 5 4 11 8 13 11 4 72 94 72 106 0 14 35 42 52 42 8 0&#10;34 -14 57 -30 84 -61 216 -63 324 -6 67 35 78 35 117 1 39 -34 95 -63 157 -81&#10;112 -32 294 -1 417 71 26 15 53 24 61 21 17 -6 20 -51 5 -61 -29 -18 9 -79 67&#10;-109 18 -9 53 -16 78 -16 36 0 51 6 73 28 36 36 52 66 52 97 0 14 5 25 10 25&#10;6 0 10 15 10 34 0 19 5 38 10 41 6 3 10 23 10 44 0 20 4 41 9 47 6 5 11 32 13&#10;59 2 41 6 50 23 53 21 3 35 -5 149 -93 180 -137 326 -194 586 -226 105 -13&#10;357 -6 455 12 33 6 71 12 85 13 38 2 37 -32 -2 -75 -18 -20 -37 -43 -43 -51&#10;-5 -8 -38 -56 -72 -106 -35 -50 -63 -96 -63 -101 0 -6 -10 -27 -21 -48 -15&#10;-26 -22 -57 -23 -99 -1 -56 3 -67 34 -110 60 -84 83 -104 155 -139 138 -65&#10;231 -76 492 -55 197 16 288 44 344 105 13 15 34 37 47 50 12 13 22 28 22 34 0&#10;5 3 11 8 13 6 3 43 75 63 123 4 11 21 49 37 85 16 36 38 90 48 120 10 30 22&#10;59 26 64 4 6 8 18 8 28 0 10 5 18 10 18 6 0 10 11 10 25 0 14 5 25 10 25 6 0&#10;10 9 10 20 0 11 5 20 10 20 6 0 10 9 10 19 0 11 5 23 10 26 6 3 10 15 10 26 0&#10;10 4 27 9 37 37 74 51 106 51 118 0 8 5 24 12 37 22 44 28 57 28 66 0 4 10 30&#10;22 57 12 27 23 66 25 86 1 21 7 47 13 57 5 11 10 35 10 55 0 19 5 38 10 41 6&#10;3 10 33 10 65 0 32 5 62 10 65 6 3 10 30 10 60 0 30 5 57 10 60 6 3 10 38 10&#10;77 0 84 20 127 83 175 39 30 67 54 142 122 17 14 53 44 80 65 28 20 70 57 95&#10;80 25 24 56 46 68 50 21 7 22 4 22 -38 0 -25 -3 -46 -7 -46 -11 0 -33 -50 -33&#10;-72 0 -9 -5 -30 -11 -45 -19 -46 -26 -64 -64 -163 -20 -52 -41 -103 -46 -112&#10;-5 -10 -9 -26 -9 -35 0 -10 -9 -33 -20 -51 -11 -18 -20 -41 -20 -52 0 -11 -4&#10;-20 -10 -20 -5 0 -10 -9 -10 -20 0 -11 -4 -28 -9 -38 -5 -9 -13 -28 -18 -42&#10;-6 -14 -15 -36 -20 -50 -6 -14 -20 -56 -33 -94 -12 -39 -37 -101 -56 -140 -19&#10;-38 -34 -75 -34 -81 0 -11 -23 -36 -112 -122 -34 -32 -35 -64 -6 -106 74 -105&#10;141 -112 395 -46 87 23 177 45 199 50 82 16 208 51 235 64 43 23 99 80 99 102&#10;0 41 23 45 86 16 106 -48 218 -31 307 47 20 17 37 39 37 47 0 21 47 63 69 63&#10;23 0 51 -41 51 -74 0 -29 19 -68 54 -106 14 -17 26 -32 26 -35 0 -9 32 -40 69&#10;-65 24 -16 52 -24 102 -28 63 -4 72 -2 108 23 35 23 111 131 111 155 0 5 3 10&#10;8 12 13 6 52 89 52 112 0 24 17 46 37 46 22 0 53 -43 53 -75 0 -33 20 -85 33&#10;-85 4 0 7 -6 7 -12 1 -20 70 -110 116 -151 22 -20 75 -53 116 -72 63 -30 90&#10;-37 165 -42 62 -4 92 -2 97 6 4 6 16 11 27 11 36 0 79 29 79 53 -1 30 -67 80&#10;-160 120 -89 39 -183 99 -202 130 -8 12 -20 42 -27 67 -7 25 -17 53 -22 62 -5&#10;10 -9 40 -9 67 0 56 -6 53 123 66 77 7 121 24 192 70 89 59 161 137 192 205&#10;38 88 53 134 53 171 0 27 -34 102 -57 127 -7 7 -16 18 -20 25 -11 17 -107 95&#10;-163 133 -58 39 -94 54 -128 54 -50 0 -147 -55 -215 -123 -62 -61 -67 -64&#10;-126 -70 -74 -8 -131 -36 -131 -64 0 -4 -11 -21 -25 -38 -22 -27 -106 -189&#10;-149 -290 -10 -22 -22 -48 -27 -57 -5 -10 -9 -25 -9 -33 0 -8 -4 -15 -10 -15&#10;-5 0 -10 -15 -10 -34 0 -19 -4 -38 -10 -41 -5 -3 -10 -17 -10 -30 0 -13 -4&#10;-27 -10 -30 -5 -3 -10 -19 -10 -35 0 -29 -22 -50 -53 -50 -20 0 -47 60 -47&#10;104 0 35 -3 43 -28 93 -7 13 -12 36 -12 52 0 17 -4 33 -10 36 -5 3 -10 15 -10&#10;26 0 19 -4 28 -28 76 -7 13 -12 30 -12 38 0 8 -4 15 -10 15 -5 0 -10 8 -10 18&#10;0 25 -60 89 -95 102 -37 14 -117 4 -147 -19 -13 -9 -36 -22 -51 -29 -40 -17&#10;-126 -101 -142 -138 -11 -27 -20 -32 -57 -38 -24 -4 -58 -15 -75 -26 -34 -20&#10;-113 -120 -113 -143 0 -7 -5 -18 -11 -24 -11 -11 -8 -107 6 -170 6 -28 4 -33&#10;-22 -46 -40 -21 -123 -42 -290 -72 -128 -23 -173 -24 -173 -6 0 3 9 24 19 46&#10;11 22 27 60 36 85 10 25 22 56 28 70 5 14 13 34 17 45 11 29 34 79 40 85 3 3&#10;11 19 19 35 7 17 17 38 22 47 5 10 9 25 9 33 0 8 5 24 10 35 6 11 15 29 20 40&#10;6 11 10 27 10 35 0 8 5 24 10 35 6 11 15 29 20 40 6 11 10 26 10 33 0 7 10 35&#10;23 63 13 27 29 69 36 94 7 25 17 53 22 62 5 10 9 29 9 42 0 14 5 28 10 31 6 3&#10;10 22 10 41 0 19 5 34 10 34 6 0 10 14 10 30 0 17 5 30 10 30 6 0 10 15 10 34&#10;0 19 5 38 10 41 6 3 10 17 10 30 0 13 5 27 10 30 6 3 10 15 10 26 0 10 4 27 9&#10;37 5 9 15 37 22 61 7 24 28 57 46 74 18 17 33 38 33 47 0 8 14 29 30 47 33 35&#10;38 48 15 39 -13 -4 -14 -2 -5 15 10 18 82 75 210 164 61 43 65 46 120 95 21&#10;19 54 45 72 58 175 121 299 223 279 230 -6 2 -36 -12 -65 -32 -30 -20 -59 -36&#10;-66 -36 -23 0 -102 -47 -340 -202 -48 -32 -92 -58 -98 -58 -5 0 -23 -13 -38&#10;-29 -31 -32 -80 -55 -95 -45 -10 6 -3 77 11 109 5 11 11 54 14 95 5 72 18 169&#10;32 238 7 37 -11 83 -50 125 -26 28 -77 35 -122 17z m86 -774 c0 -3 -4 -8 -10&#10;-11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1611 -736 c5 0 9 -6&#10;9 -13 0 -7 9 -19 20 -27 11 -8 20 -20 20 -26 0 -23 -45 -99 -75 -127 -70 -63&#10;-109 -83 -141 -68 -13 6 -24 14 -24 19 0 11 59 124 74 142 7 8 20 32 30 52 18&#10;40 43 60 64 53 8 -3 18 -5 23 -5z m-4835 -24 c15 -12 17 -17 7 -27 -7 -7 -13&#10;-20 -13 -29 0 -8 -18 -51 -39 -95 -49 -101 -156 -215 -202 -215 -29 0 -29 1&#10;-29 58 1 31 5 77 11 102 6 25 13 59 15 75 7 40 24 74 53 107 19 21 34 28 75&#10;31 28 2 63 4 77 5 14 1 34 -4 45 -12z m942 -66 c69 -42 28 -83 -105 -106 -124&#10;-22 -140 -10 -75 55 71 72 122 86 180 51z m880 -69 c27 -24 29 -62 2 -81 -11&#10;-8 -20 -20 -20 -26 0 -21 -51 -54 -81 -54 -38 0 -38 18 3 100 44 88 55 94 96&#10;61z m1756 -167 c22 -9 20 -63 -4 -94 -11 -14 -20 -35 -20 -47 0 -13 -4 -23&#10;-10 -23 -5 0 -10 -5 -10 -11 0 -6 -10 -24 -21 -41 -26 -36 -66 -53 -85 -37&#10;-19 16 -17 36 6 69 15 21 21 47 23 92 l2 62 45 18 c52 20 53 20 74 12z m-5424&#10;-99 c0 -8 -4 -23 -9 -33 -5 -9 -24 -48 -42 -87 -19 -38 -37 -71 -41 -73 -5 -2&#10;-8 -14 -8 -26 0 -12 -4 -26 -8 -31 -5 -6 -15 -30 -22 -55 -8 -25 -21 -56 -30&#10;-70 -16 -23 -49 -87 -80 -152 -21 -43 -50 -69 -73 -66 -18 2 -23 11 -25 46 -2&#10;23 -7 42 -13 42 -12 0 -12 157 1 165 6 3 10 26 10 51 0 30 10 67 31 109 32 66&#10;110 166 144 183 11 6 53 11 93 11 58 1 72 -2 72 -14z m3860 -34 c0 -22 -4 -42&#10;-8 -45 -5 -3 -14 -38 -21 -78 -7 -40 -17 -82 -21 -93 -24 -58 -60 -162 -60&#10;-173 0 -11 -30 -85 -51 -124 -5 -10 -9 -27 -9 -38 0 -11 -3 -20 -7 -20 -11 0&#10;-33 -50 -33 -72 0 -10 -3 -18 -7 -18 -10 0 -33 -49 -33 -67 0 -7 -4 -21 -9&#10;-31 -59 -116 -121 -250 -121 -259 0 -7 -4 -13 -8 -13 -5 0 -14 -16 -22 -35&#10;-27 -70 -54 -82 -255 -117 -276 -49 -414 -17 -347 79 10 16 26 45 36 65 14 32&#10;77 123 95 138 3 3 19 23 36 45 16 21 36 46 45 55 8 8 26 31 40 50 21 30 57 72&#10;105 124 6 6 18 22 27 35 22 32 120 141 198 221 36 36 94 98 130 137 102 113&#10;115 126 151 159 19 17 49 50 67 73 23 28 41 41 58 41 21 0 24 -4 24 -39z"
          fill="url('#gradient-1')"
        />
      </g>
    </svg>
  );
};

export {
  XIcon,
  TwitterIcon,
  GithubIcon,
  TiktokIcon,
  TiktokDarkIcon,
  SinaIcon,
  UmamiIcon,
  CloudinaryIcon,
  JackeyLoveIcon,
  MailIcon,
};

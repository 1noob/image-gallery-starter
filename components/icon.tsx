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
      viewBox="0 0 24 24"
      width={size || width}
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
      <path
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      />
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
              fill="#00f2ea"/>
          <path
              d="M14.327 32c2.876 0 5.221-2.273 5.328-5.107l.01-25.292h4.65A8.72 8.72 0 0 1 24.164 0h-6.35l-.011 25.293c-.106 2.832-2.453 5.105-5.328 5.105a5.329 5.329 0 0 1-2.476-.61A5.34 5.34 0 0 0 14.327 32m18.672-21.814V8.78a8.818 8.818 0 0 1-4.81-1.421A8.85 8.85 0 0 0 33 10.186"
              fill="#00f2ea"/>
          <path
              d="M28 7.718A8.63 8.63 0 0 1 25.832 2h-1.697A8.735 8.735 0 0 0 28 7.718M12.325 20.065c-2.94.004-5.322 2.361-5.325 5.27A5.267 5.267 0 0 0 9.854 30a5.2 5.2 0 0 1-1.008-3.073c.003-2.91 2.385-5.268 5.325-5.271.55 0 1.075.09 1.572.244v-6.4a11.72 11.72 0 0 0-1.572-.114c-.092 0-.183.006-.274.007v4.916a5.286 5.286 0 0 0-1.572-.244"
              fill="#ff004f"/>
          <path
              d="M32.153 11v4.884a15.15 15.15 0 0 1-8.813-2.811V25.84c0 6.377-5.23 11.565-11.658 11.565-2.485 0-4.789-.778-6.682-2.097A11.67 11.67 0 0 0 13.528 39c6.429 0 11.659-5.188 11.659-11.564V14.668A15.15 15.15 0 0 0 34 17.478v-6.283A8.87 8.87 0 0 1 32.153 11"
              fill="#ff004f"/>
          <path
              d="M23.979 25.42V12.632A15.741 15.741 0 0 0 33 15.448v-4.89a9.083 9.083 0 0 1-4.912-2.82C26.016 6.431 24.586 4.358 24.132 2h-4.747l-.01 25.215c-.11 2.824-2.505 5.09-5.44 5.09-1.754-.002-3.398-.822-4.42-2.204-1.794-.913-2.919-2.716-2.92-4.682.003-2.92 2.44-5.285 5.45-5.289.56 0 1.098.09 1.608.245v-4.933C7.202 15.589 2 20.722 2 27.016c0 3.045 1.219 5.816 3.205 7.885A12.115 12.115 0 0 0 12.045 37c6.58 0 11.934-5.195 11.934-11.58"
              fill="#fff"/>
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
        <g fill="#25f4ee" transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)">
          <path
              d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z"/>
          <path
              d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z"/>
        </g>
        <path
            d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
            fill="#fe2c55" transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"/>
        <path
            d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
            fill="#fe2c55" transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"/>
        <path
            d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z"
            transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 0)"/>
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
                fill="#fff"/>
            <path
                d="M 304.5 544.123 C 184.5 556.023 80.9 501.723 73.1 423.023 C 65.3 344.223 156.3 270.823 276.2 258.923 C 396.2 247.023 499.8 301.323 507.5 380.023 C 515.4 458.823 424.4 532.323 304.5 544.123 M 544.4 282.623 C 534.2 279.523 527.2 277.523 532.5 264.123 C 544.1 235.023 545.3 209.923 532.7 191.923 C 509.2 158.323 444.8 160.123 371 191.023 C 371 191.023 347.8 201.123 353.8 182.823 C 365.1 146.323 363.4 115.823 345.8 98.123 C 305.8 58.023 199.3 99.623 108 190.923 C 39.7 259.223 0 331.723 0 394.423 C 0 514.223 153.7 587.123 304 587.123 C 501.1 587.123 632.2 472.623 632.2 381.723 C 632.3 326.723 586 295.523 544.4 282.623"
                fill="#e6162d"/>
            <path
                d="M 675.3 63.323 C 627.7 10.523 557.5 -9.577 492.7 4.223 C 477.7 7.423 468.2 22.223 471.4 37.123 C 474.6 52.123 489.3 61.623 504.3 58.423 C 550.4 48.623 600.3 62.923 634.1 100.423 C 667.9 137.923 677.1 189.023 662.6 233.823 C 657.9 248.423 665.9 264.023 680.5 268.723 C 695.1 273.423 710.7 265.423 715.4 250.923 L 715.4 250.823 C 735.8 187.923 722.9 116.023 675.3 63.323"
                fill="#f93"/>
            <path
                d="M 602.2 129.323 C 579 103.623 544.8 93.823 513.3 100.623 C 500.4 103.323 492.2 116.123 494.9 129.023 C 497.7 141.923 510.4 150.123 523.2 147.323 C 538.6 144.023 555.4 148.823 566.7 161.323 C 578 173.923 581.1 191.023 576.2 206.023 C 572.2 218.523 579 232.023 591.6 236.123 C 604.2 240.123 617.6 233.323 621.7 220.723 C 631.6 190.023 625.4 155.023 602.2 129.323"
                fill="#f93"/>
            <path
                d="M 311.1 401.523 C 306.9 408.723 297.6 412.123 290.4 409.123 C 283.2 406.223 281 398.123 285.1 391.123 C 289.3 384.123 298.2 380.723 305.3 383.523 C 312.5 386.123 315.1 394.223 311.1 401.523 M 272.8 450.523 C 261.2 469.023 236.3 477.123 217.6 468.623 C 199.2 460.223 193.7 438.723 205.3 420.623 C 216.8 402.623 240.8 394.623 259.4 402.423 C 278.2 410.523 284.2 431.823 272.8 450.523 M 316.4 319.523 C 259.3 304.623 194.8 333.123 170 383.423 C 144.7 434.723 169.2 491.723 226.8 510.323 C 286.6 529.623 357 500.023 381.5 444.723 C 405.7 390.523 375.5 334.823 316.4 319.523"/>
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
            <circle cx="214.15" cy="171" r="171" stroke="currentColor" fill="none" strokeMiterlimit="10" strokeWidth="20"
                    transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"/>
            <path
                d="M 413 124.11 L 15.29 124.11 C 7.005 124.11 0.29 130.826 0.29 139.11 L 0.29 154.41 C 0.12 158 0 161.52 0 165.11 C 0 283.3 95.81 379.11 214 379.11 C 330.4 379.11 425.1 286.17 427.93 170.44 C 427.93 170 428 169.56 428 169.11 L 428 139.11 C 428 130.826 421.284 124.11 413 124.11 Z"
                transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" fill="currentColor"/>
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
            viewBox="0 0 120 79"
            width={size || width}
            {...props}
        >
            <path d="M97.91,28.11A40.38,40.38,0,0,0,59.73,0,39.62,39.62,0,0,0,24.6,20.87a29.88,29.88,0,0,0-7.21,56.56l.75.34h.05v-8.5a22.29,22.29,0,0,1,9.29-41.16l2.1-.22L30.5,26A32.15,32.15,0,0,1,59.73,7.57a32.7,32.7,0,0,1,31.55,25L92,35.43l3,0a18.53,18.53,0,0,1,18.15,18.46c0,7.05-4.07,12.82-11,15.74v8.06l.5-.16c11.14-3.65,18.06-12.71,18.06-23.64A26.19,26.19,0,0,0,97.91,28.11Z"
                  fill="currentColor"
            />
            <path fill="currentColor"
                  d="M45.07,76.79l1.66,1.66a.33.33,0,0,1-.23.56H33.4a6,6,0,0,1-6-6V47.57a.33.33,0,0,0-.33-.33H24.27a.33.33,0,0,1-.24-.56L35.15,35.56a.33.33,0,0,1,.47,0L46.73,46.68a.33.33,0,0,1-.23.56H43.66a.34.34,0,0,0-.34.33v25A6,6,0,0,0,45.07,76.79Z"/>
            <path fill="currentColor"
                  d="M69.64,76.79l1.67,1.66a.33.33,0,0,1-.24.56H58a6,6,0,0,1-6-6V54a.34.34,0,0,0-.33-.34H48.84a.33.33,0,0,1-.23-.56L59.72,42a.33.33,0,0,1,.47,0L71.31,53.08a.33.33,0,0,1-.24.56H68.23a.34.34,0,0,0-.33.34V72.57A6,6,0,0,0,69.64,76.79Z"/>
            <path fill="currentColor"
                  d="M94.22,76.79l1.66,1.66a.33.33,0,0,1-.23.56H82.54a6,6,0,0,1-6-6V60.38a.33.33,0,0,0-.33-.33H73.41a.33.33,0,0,1-.23-.57L84.3,48.37a.32.32,0,0,1,.46,0L95.88,59.48a.33.33,0,0,1-.23.57H92.8a.33.33,0,0,0-.33.33V72.57A6,6,0,0,0,94.22,76.79Z"/>
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
};

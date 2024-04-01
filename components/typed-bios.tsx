"use client";

import React from "react";
import Typed from "typed.js";
import {GithubIcon, TiktokDarkIcon, TiktokIcon, SinaIcon, XIcon} from "@/components/icon";
import Link from "next/link";

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 80,
      backSpeed: 20,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div className={"grid grid-flow-col px-3 mt-2"}>
      <ul id="bios" className="hidden">
        <li>今夜，我是天选，也是唯一。</li>
        <li>再给我一次机会，我还是会E上去。</li>
        <li>感觉我还有救。</li>
      </ul>
      <p className={"w-full min-h-full"}>
        "
        <span
          ref={el}
          className="text-neutral-900 dark:text-neutral-200 text-sm"
        />
        "
      </p>
      <div className={"flex justify-end content-center gap-2"}>
        <Link href={"https://m.weibo.cn/u/5966770936"} aria-label="Weibo" className={"hidden md:flex"}>
          <SinaIcon size={19}/>
        </Link>
        <Link href={"https://twitter.com/TESJKL1118"} aria-label="Twitter">
          <XIcon size={18}/>
        </Link>
        <Link href={"https://v.douyin.com/iYdXGgMa/"} aria-label="Tiktok" className="hidden dark:flex">
          <TiktokIcon size={17}/>
        </Link>
        <Link href={"https://v.douyin.com/iYdXGgMa/"} aria-label="Tiktok" className="dark:hidden">
          <TiktokDarkIcon size={17}/>
        </Link>
      </div>
    </div>
  );
};

export default TypedBios;

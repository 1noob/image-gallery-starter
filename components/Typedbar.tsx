import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import TypedBios from "./typed-bios";
import { JackeyLoveIcon, JackeyLoveLogo } from "./icon";

interface Props {
  className?: string;
}

const Typedbar: React.FC<Props> = ({ className }) => {
  return (
    <Navbar
      classNames={{
        base: "md:rounded-xl",
        wrapper: "bg-blur p-2 grid grid-rows-2 grid-cols-1 h-full gap-y-0",
      }}
      shouldHideOnScroll
    >
      <NavbarContent className="flex w-full" justify="center">
        <JackeyLoveLogo
          className="w-full flex m-auto justify-center"
          size={30}
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <TypedBios/>
      </NavbarContent>
    </Navbar>
  );
};

export default Typedbar;
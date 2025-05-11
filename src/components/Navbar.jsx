import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  Card,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  BellIcon,
  LanguageIcon,
  Square2StackIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Cog8ToothIcon, SunIcon } from "@heroicons/react/24/solid";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:">
      <IconButton
        variant="text"
        className="rounded-full bg-none hover:bg-gray-300"
      >
        <Squares2X2Icon
          className="h-5 w-5 cursor-pointer text-black "
          strokeWidth={2}
        />
         
      </IconButton>
      <IconButton
        variant="text"
        className="rounded-full bg-none hover:bg-gray-300"
      >
        <LanguageIcon className="h-5 w-5 cursor-pointer" strokeWidth={2} />{" "}
      </IconButton>
      <IconButton
        variant="text"
        className="rounded-full bg-none hover:bg-gray-300"
      >
        {" "}
        <SunIcon className="h-5 w-5 cursor-pointer" strokeWidth={2} />{" "}
      </IconButton>
      <IconButton
        variant="text"
        className="rounded-full bg-none hover:bg-gray-300"
      >
        {" "}
        <BellIcon className="h-5 w-5 cursor-pointer" strokeWidth={2} />{" "}
      </IconButton>
      <IconButton
        variant="text"
        className="rounded-full bg-none hover:bg-gray-300"
      >
        {" "}
        <Cog8ToothIcon className="h-5 w-5 cursor-pointer" strokeWidth={2} />{" "}
      </IconButton>
      <Avatar
        src="https://sumanthnagireddi-interview.web.app/imag3.jpg"
        alt="avatar"
        size="sm"
        className="cursor-pointer ml-4"
      />
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto shadow-none  rounded-none  px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 text-gray-900 text-base cursor-pointer pt-4"
        >
            Hi Sumanth <span class="animate-waving-hand inline-block -mt-1">👋</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

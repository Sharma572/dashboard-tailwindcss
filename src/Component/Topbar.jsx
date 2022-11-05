
import { Popover } from "@headlessui/react";
import { FiBell,  FiUser } from "react-icons/fi";
import { BsMenuAppFill } from "react-icons/bs";
import { useContext } from "react";
import { openContext } from "../Context-Api/ContextApi";


export default function Topbar() {
  const {open} = useContext(openContext)
  return (
    <Popover className={open ? "relative bg-[#8995ef]" : "bg-[#6778EF]"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h3 className="text-white">Dashobard</h3>
          </div>

          <div className="hidden items-center justify-end  md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap font-medium text-white text-2xl pr-5"
            >
              <FiBell />
            </a>
            <a
              href="#"
              className="whitespace-nowrap font-medium text-white text-2xl pr-6 border-r-2 border-white"
            >
              <BsMenuAppFill />
            </a>
            <div className="rounded-full flex items-center pl-6">
              <figure>
                <img
                  className="rounded-full h-8 mr-4 "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzM4BlE2x4m-cMkYV3sn4ytUSUDd3N3XklJMcyXHA&s"
                  alt="user"
                />
              </figure>
              <figcaption className=" text-white">Raunak Sharma</figcaption>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}

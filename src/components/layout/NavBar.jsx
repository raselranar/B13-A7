"use client";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { LuChartLine, LuClock3 } from "react-icons/lu";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const path = usePathname();
  const links = (
    <>
      <li
        className={`font-semibold text-base rounded ${path === "/" ? "bg-success-content text-white" : "text-gray-500"}`}>
        <Link href="/">
          <RiHome2Line size={20} /> Home
        </Link>
      </li>
      <li
        className={`font-semibold text-base rounded ${path === "/timeline" ? "bg-success-content text-white" : "text-gray-500"}`}>
        <Link href="/timeline" className="">
          <LuClock3 size={20} />
          Timeline
        </Link>
      </li>
      <li
        className={`font-semibold text-base rounded ${path === "/stats" ? "bg-success-content text-white" : "text-gray-500"}`}>
        <Link href="/stats">
          <LuChartLine size={20} />
          Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="shadow-md sticky top-0 z-10">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl gap-0">
            <span>Keen</span>
            <span className="text-success-content">Keeper</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

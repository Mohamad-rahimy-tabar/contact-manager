import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mb-4 text-sm py-2 hidden md:flex px-4 mt-2 bg-main-secondary text-main-tertiary  max-w-screen-lg mx-auto shadow-md rounded-md">
      <ul className="flex gap-2">
        <li className=" transition-all duration-300 ">
          <NavLink  className={({ isActive }) => `${isActive && " text-main-primary"} py-2 px-4 rounded-md  flex flex-col gap-1 items-center`} to="home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p>خانه</p>
          </NavLink>
        </li>
        <li className=" transition-all duration-300 ">
          <NavLink className={({ isActive }) => `${isActive && " text-main-primary"} py-2 px-4 rounded-md  flex flex-col gap-1 items-center`} to="contactlist">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <p>مخاطبین</p>
          </NavLink>
        </li>
        <li className=" rounded-md transition-all duration-300">
          <NavLink className={({ isActive }) => `${isActive && " text-main-primary"} py-2 px-4 rounded-md  flex flex-col gap-1 items-center`} to="addnew">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <p>افزودن مخاطب</p>
          </NavLink>
        </li>
        <li className=" rounded-md transition-all duration-300">
          <NavLink className={({ isActive }) => `${isActive && " text-main-primary"} py-2 px-4 rounded-md  flex flex-col gap-1 items-center`} to="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            <p>موردعلاقه</p>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

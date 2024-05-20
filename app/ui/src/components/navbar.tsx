
import { NavLink } from "react-router-dom"
import "../styles/navbar.scss"

const Navbar = () => {
    return (
        <div className="w-full pt-10 flex justify-center">
            <div className="flex w-10/12 items-center h-full  justify-between ">
                <div className="logo w-3/12 sm:hidden lg:block lg:w-2/12">
                    <img src={"/src/assets/Logo.svg"} alt="" />
                </div>
                <div className="link xl:w-5/12 xl:h-20  flex justify-center gap-8 items-center sm:absolute sm:hidden lg:flex lg:w-4/12 lg:static lg:gap-4 lg:h-16">
                    <NavLink to={"/home"} className={"font-body border border-transparent h-full"}>Home</NavLink>
                    <NavLink to={"/shop"} className={"font-body border border-transparent h-full"}>Shop</NavLink>
                    <NavLink to={"/plant"} className={"font-body border border-transparent h-full"}>Plant Care</NavLink>
                    <NavLink to={"/plant"} className={"font-body border border-transparent h-full"}>Blogs</NavLink>
                </div>
                <div className=" profile h-20 w-full flex items-center lg:justify-end gap-3 sm:w-full   lg:w-4/12 lg:h-16 md:justify-between ">
                    <input type="text" className="search-input lg:w-11 h-11  focus:w-7/12 focus:outline-none rounded-xl sm:w-10/12 w-10/12" />
                    <button className="shop w-10 h-10 bg-transparent rounded-xl md:hidden lg:block"></button>
                    <button className="bg-green-700  px-3 h-10  rounded-xl flex items-center gap-3 font-body text-white md:hidden lg:flex lg:gap-3 lg:w-auto ">
                        <img src="/src/assets/Logout.svg" alt="" />
                        <span className="login lg:block">Login</span>
                    </button>

                    <button className="profile_hidden bg-green-700 rounded-xl  lg:hidden md:block "></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
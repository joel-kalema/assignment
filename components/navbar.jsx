import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { PiArrowFatDownThin } from "react-icons/pi";
import { PiPercentLight } from "react-icons/pi";
import { BiBell } from "react-icons/bi";

const Nav = () => {
    return (
        <div className="py-4 border-b border-[#c5c5c5] fixed top-0 w-[100%] z-50 bg-[#fff]">
            <div className="flex justify-between items-center w-6/6 lg:w-4/6 mx-auto px-4">
                <div className="flex items-center text-[rgb(50,222,132)]">
                    <h1 className="font-bold lg:text-2xl mr-4">Testvalley</h1>
                    <div className="items-center justify-center hidden lg:flex">
                        <GiHamburgerMenu className="mr-1" />
                        <h1 className="text-[14px] mt-1">카테고리</h1>
                    </div>
                </div>
                <div className="border border-[#b7b7b7] hidden lg:flex items-center justify-between px-4 py-2 rounded w-2/6">
                    <GoSearch className="mr-2 text-[14px]" />
                    <input type="email" name="Email" id="email" placeholder="살까말까 고민된다면 검색해보세요!" required className="text-[12px]" />
                </div>
                <div className="hidden lg:flex items-center">
                    <div className="relative w-[2.5rem] h-[2.3rem] mr-2">
                        <PiArrowFatDownThin className="w-[100%] h-[100%] font-thin " />
                        <PiPercentLight className="absolute text-xs top-3 left-[.9rem]" />
                    </div>
                    <h1 className="text-[12px] border-l border-[#b7b7b7] pl-2">로그인 / 회원가입</h1>
                </div>

                <div className="flex items-center text-2xl lg:hidden">
                    <BiBell className="mr-4" />
                    <GoSearch className="mr-2" />
                </div>
            </div>
        </div>
    )
}

export default Nav;
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { PiArrowFatDownThin } from "react-icons/pi";
import { PiPercentLight } from "react-icons/pi";

const Nav = () => {
    return (
        <div className="py-6 border-b border-[#b7b7b7]">
            <div className="flex justify-between items-center w-4/6 mx-auto">
                <div className="flex items-center text-[#32de84]">
                    <h1 className="font-extrabold text-3xl mr-4">testvalley</h1>
                    <div className="flex items-center">
                        <GiHamburgerMenu />
                        <h1>카테고리</h1>
                    </div>
                </div>
                <div className="border border-[#b7b7b7] flex items-center justify-between px-4 py-2 rounded w-2/6">
                    <GoSearch className="mr-2 text-xl"/>
                    <input type="email" name="Email" id="email" placeholder="살까말까 고민된다면 검색해보세요!" required className="text-[14px]" />
                </div>
                <div className="flex items-center">
                    <div className="relative w-[2.5rem] h-[2.3rem] mr-3">
                        <PiArrowFatDownThin className="w-[100%] h-[100%] font-thin "/>
                        <PiPercentLight className="absolute text-xs top-3 left-[.9rem]"/>
                    </div>
                    <h1 className="text-[14px] border-l border-[#b7b7b7] pl-3">로그인 / 회원가입</h1>
                </div>
            </div>
        </div>
    )
}

export default Nav
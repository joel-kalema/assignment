import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";

const NavBottom = () => {
    return (
        <div className="fixed text-[#727272] bottom-0 w-[100%] z-50 bg-[#fff] lg:hidden flex justify-between px-4 py-4">
            <div className="flex flex-col items-center">
                <GoHomeFill className="text-xl text-[rgb(50,222,132)] mb-1" />
                <p className="text-[10px]">홈</p>
            </div>

            <div className="flex flex-col items-center">
                <GoSearch className="text-xl mb-1" />
                <p className="text-[10px]">검색</p>
            </div>

            <div className="flex flex-col items-center">
                <GiHamburgerMenu className="text-xl mb-1" />
                <p className="text-[10px]">카테고리</p>
            </div>

            <div className="flex flex-col items-center">
                <FaRegHeart className="text-xl mb-1" />
                <p className="text-[10px]">좋아요</p>
            </div>

            <div className="flex flex-col items-center">
                <CiUser className="text-xl mb-1" />
                <p className="text-[10px]">마이페이지</p>
            </div>
        </div>
    )
}

export default NavBottom;
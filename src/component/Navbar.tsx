import CircleIcon from '@/svg/CircleIcon';
import GameIcon from '@/svg/GameIcon';
import GroupIcon from '@/svg/GroupIcon';
import HomeIcon from '@/svg/homeicon';
import LogoIcon from '@/svg/LogoIcon';
import MarketIcon from '@/svg/MarketIcon';
import MessengerIcon from '@/svg/MessengerIcon';
import NotiIcon from '@/svg/NotiIcon';
import SearchIcon from '@/svg/SearchIcon';
import WatchIcon from '@/svg/WatchIcon';
import React from 'react';
interface Prop {
    profile_img: string;
}
function Navbar({ profile_img }: Prop) {
    return (
        <>
            <div className="grid grid-cols-3 md:w-full h-[3.6rem] bg-body-color border border-b-[1.5px]  border-bottom-menu">
                {/* Left section */}
                <div className="grid grid-cols-12 w-[20rem] h-full ">
                    {/* Logo */}
                    <div className="col-start-2 col-span-2 my-auto">
                        <LogoIcon />
                    </div>
                    {/* End Logo */}
                    {/* Search Bar  */}
                    <div className="col-start-4 col-span-7 my-auto bg-input-color rounded-full">
                        <div className="flex h-[2.5rem]">
                            <div className="h-full w-full pt-3 pl-3">
                                <SearchIcon />
                            </div>
                            <input
                                placeholder="ค้นหาบน Facebook:"
                                className="bg-input-color rounded-full pl-2"
                            />
                        </div>
                    </div>
                    {/* End search */}
                </div>
                {/* Center section */}
                <div className="grid grid-cols-5 ">
                    <div className="relative w-full h-full  hover:bg-hover-color hover:rounded-md">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <HomeIcon />
                        </div>
                    </div>
                    <div className="relative w-full h-full  hover:bg-hover-color hover:rounded-md">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <WatchIcon />
                        </div>
                    </div>
                    <div className="relative w-full h-full  hover:bg-hover-color hover:rounded-md">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <MarketIcon />
                        </div>
                    </div>
                    <div className="relative w-full h-full  hover:bg-hover-color hover:rounded-md">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <GroupIcon />
                        </div>
                    </div>
                    <div className="relative w-full h-full  hover:bg-hover-color hover:rounded-md">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <GameIcon />
                        </div>
                    </div>
                </div>
                {/* Right section */}
                <div className="grid grid-cols-4 justify-self-end items-center gap-[0.5rem] pr-3">
                    {/* circle Icon */}
                    <div className="rounded-full overflow-hidden ">
                        <div className="relative w-[2.5rem] h-[2.5rem] bg-input-color  hover:bg-hover-nav-right hover:rounded-md ">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <CircleIcon />
                            </div>
                        </div>
                    </div>
                    {/* Messenger Icon */}
                    <div className="rounded-full overflow-hidden">
                        <div className="relative w-[2.5rem] h-[2.5rem] bg-input-color   hover:bg-hover-nav-right hover:rounded-md ">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <MessengerIcon />
                            </div>
                        </div>
                    </div>
                    {/* Noti Icon */}
                    <div className="rounded-full overflow-hidden">
                        <div className="relative w-[2.5rem] h-[2.5rem] bg-input-color  hover:bg-hover-nav-right hover:rounded-md">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <NotiIcon />
                            </div>
                        </div>
                    </div>
                    {/* Profile Icon */}
                    <div className="rounded-full overflow-hidden w-[2.3rem] h-[2.3rem]">
                        <img
                            src={profile_img}
                            alt="profile"
                            className="w-full h-full object-cover  hover:contrast-[.6]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

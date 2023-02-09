import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/Navbar';
import Content from '../component/Content';
import ItemBar from '@/component/ItemBar';
import Dropdown from '@/component/Dropdown';
import SearchIcon from '@/svg/SearchIcon';
import VdoIcon from '@/svg/VdoIcon';
import MoreIcon from '@/svg/MoreIcon';

interface Info {
    img: string;
    text: string;
}
const profileArr = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: '/asset/img/friend.png',
        text: 'เพื่อน',
    },
    {
        img: '/asset/img/group.png',
        text: 'กลุ่ม',
    },
    {
        img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeGiMGLomcTF5I-qyW-kXOtOi9AM8exRZGeL0Azx7FFkZ_Li9vUOjq3kIXnoSWNfzMCAX0-RQ7nTesTR6okbIYbi',
        text: 'ล่าสุด',
    },
    {
        img: '/asset/img/marketplace.png',
        text: 'Marketplace',
    },
    {
        img: '/asset/img/watch.png',
        text: 'Watch',
    },
];
const shortCutArr = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
];
const chatProfileArr = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEA0OsTu3ZXjBGD1BfNPrZsxi0pbDntk6mQ&usqp=CAU',
        text: 'Otter Otter',
    },
];

export default function Home() {
    return (
        <>
            <Navbar profile_img={profileArr[0].img} />
            <div className="flex flex-row mt-4">
                {/* left content */}
                <div className="basis-1/6 min-h-[45rem] max-h-[50rem] hover:overflow-y-auto ">
                    {/* <div className="basis-1/6 border-2 border-rose-500"> */}
                    {/* <div className="border-2 border-green-400 min-h-[20rem]"> */}
                    <Dropdown profileArr={profileArr} shape={'circle'} />
                    <div className="border-t-[1.5px] my-3 border-bottom-menu mx-4 pt-3 text-base font-bold">
                        ทางลัดของคุณ
                    </div>
                    <Dropdown profileArr={shortCutArr} shape={'square'} />
                </div>
                {/* End left content */}
                {/* center content */}
                <div className="basis-4/6 min-h-fit h-24">
                    <Content
                        profile_img={profileArr[0].img}
                        profile_name={profileArr[0].text}
                    />
                </div>
                {/* End center content */}
                {/* right content */}
                <div className="basis-1/6 min-h-fit h-24">
                    {/* <div className="border-t-[1.5px] my-3 border-bottom-menu mx-4 pt-3 text-base font-bold"> */}
                    {/* title section */}
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-base font-bold flex mt-1">
                                ผู้ติดต่อ
                            </p>
                            <div className="grid grid-cols-3 justify-self-end pr-4">
                                {/* icon vdo  */}
                                <div className="w-[2rem] h-[2rem] overflow-hidden rounded-full">
                                    <div className="w-full h-full  hover:bg-hover-color">
                                        <div className="flex justify-center items-center w-[2rem] h-[2rem]">
                                            <VdoIcon />
                                        </div>
                                    </div>
                                </div>
                                {/* icon search*/}
                                <div className="w-[2rem] h-[2rem] overflow-hidden rounded-full">
                                    <div className="w-full h-full  hover:bg-hover-color">
                                        <div className="flex justify-center items-center w-[2rem] h-[2rem]">
                                            <SearchIcon />
                                        </div>
                                    </div>
                                </div>
                                {/* icon more */}
                                <div className="w-[2rem] h-[2rem] overflow-hidden rounded-full">
                                    <div className="w-full h-full  hover:bg-hover-color">
                                        <div className="flex justify-center items-center w-[2rem] h-[2rem]">
                                            <MoreIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* contect section */}
                    <div className="mt-1">
                        {chatProfileArr.map(({ img, text }) => {
                            return (
                                <ItemBar
                                    img={img}
                                    text={text}
                                    shape="circle"
                                    status={1}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* End right content */}
            </div>
        </>
    );
}

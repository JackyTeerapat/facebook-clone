import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/Navbar';
import Content from '../component/Content';
import ItemBar from '@/component/ItemBar';
import Dropdown from '@/component/Dropdown';

type Info = {
    img: string;
    text: string;
};
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

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-row mt-4 overflow-hidden">
                {/* left content */}
                <div className="basis-1/6 min-h-[50rem] max-h-[30rem] hover:overflow-y-auto">
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
                    <Content />
                </div>
                {/* End center content */}
                {/* right content */}
                <div className="basis-1/6 min-h-fit h-24">right content</div>
                {/* End right content */}
            </div>
        </>
    );
}

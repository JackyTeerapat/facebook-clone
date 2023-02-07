import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/Navbar';
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

export default function Home() {
    profileArr.map;
    return (
        <>
            <Navbar />
            <div className="flex flex-row mt-4">
                <div className="basis-1/6 min-h-[40rem]">
                    {/* <div className="basis-1/6 border-2 border-rose-500"> */}
                    {/* <div className="border-2 border-green-400 min-h-[20rem]"> */}
                    <div>
                        {profileArr.map(
                            (info: { img: string; text: string }) => {
                                return (
                                    <ItemBar img={info.img} text={info.text} />
                                );
                            }
                        )}
                    </div>
                    <Dropdown />

                    <p>profile</p>
                </div>
                <div className="basis-4/6 min-h-fit h-24">content</div>
                <div className="basis-1/6 min-h-fit h-24">contact</div>
            </div>
        </>
    );
}

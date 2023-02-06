import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-row mt-4">
                <div className="basis-1/6 border-2 border-rose-500">
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                    <p>profile</p>
                </div>
                {/* <div className="basis-4/6 border-2 border-rose-500 min-h-fit h-24">
                    content
                </div>
                <div className="basis-1/6 border-2 border-rose-500 min-h-fit h-24">
                    contact
                </div> */}
            </div>
        </>
    );
}

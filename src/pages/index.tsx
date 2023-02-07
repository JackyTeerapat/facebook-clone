import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/Navbar';
import Content from '../component/Content';

export default function Home() {
    return (
        <>
            <div className="bg-neutral-100">
                <Navbar />
                <div className="flex flex-row mt-4">
                    <div className="bg-neutral-100 basis-1/6 border-2 border-rose-500 h-[500px] ">
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                    </div>
                    <div className="bg-neutral-100 basis-4/6  ">
                        <Content />
                    </div>
                    <div className="bg-neutral-100 basis-1/6 border-2 border-rose-500 ">
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                    </div>
                </div>
            </div>
        </>
    );
}

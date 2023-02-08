import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
// import Post from './Post';

const postItem = [
    {
        name: 'ประยุทธ์ซ่า',
        pictureProfile: 'https://i.redd.it/faelbyv9bol21.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        picturePost: 'https://i.pinimg.com/originals/8f/69/78/prayutcza55+.jpg',
    },
    {
        name: 'หัวหน้าชมรมคนชอบหมี',
        pictureProfile:
            'https://img.soccersuck.com/images/2021/08/31/B719EC19-10C6-46F9-B206-944B4BEE7E93.jpg',
        description:
            'สวัสดีครับท่านสมาชิกชมรมคนชอบ หมี ไม่เข้าใจจริงๆเลยทั้งเด็กทั้งผู้ใหญ่ ตะโกนหา สรรหาแต่หมี วันพระวันเจ้าไม่เว้นกันเลยยยยยยย คนที่ไหน คนจังหวัดอะไรเนี่ยท่าน',
        picturePost: 'https://i.pinimg.com/originals/8f/69/78/prayutcza55+.jpg',
    },
    {
        name: 'พรี่โหน่ง',
        pictureProfile:
            'https://us-tuna-sounds-images.voicemod.net/f2704a30-e782-4217-9ac1-0ebb512c7dba-1664217479095.png',
        description: 'แกทำร้ายเพื่อนชั้น แกไม่รอดแน่ คนอีสาน',
        picturePost: 'https://i.pinimg.com/originals/8f/69/78/prayutcza55+.jpg',
    },
];
function Content() {
    const [textContent, setTextContent] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-body-color outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b-2 border-solid border-diviner  bg-body-color rounded-t">
                                    <p className="text-3xl ml-[10rem]">
                                        สร้างโพสต์
                                    </p>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block  hover:bg-hover-color bg-close-modal py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="ml-[1rem] mt-[0.5rem] w-[23rem] rounded-t-lg  bg-body-color  ">
                                    <div className="relative rounded-full w-10 h-10 bg-gray-700">
                                        {/* <img
                                            src={profileItem.pictureProfile}
                                            className="absolute mt-[1rem] ml-[1.5rem] rounded-full w-10 h-10 bg-image"
                                        ></img> */}
                                        {/* <img src={pictureProfile}></img> */}
                                        <p className="pt-[0.2rem] pl-[3.5rem] ">
                                            {/* {profileItem.name} */}
                                            test
                                        </p>
                                    </div>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <input
                                        placeholder="คุณคิดอะไรอยู่"
                                        className={
                                            ' bg-body-color  rounded-lg p-3 w-full '
                                        }
                                    ></input>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-diviner rounded-b">
                                    <button
                                        className="bg-place-holder-color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full h-[2.5rem]"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        โพสต์
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <div className=" grid-rows-2 mb-[1rem] ">
                <div className="flex place-content-center rounded-t-lg  border-solid bg-body-color  ml-[7rem] w-[45rem] h-[5rem] ">
                    <div className="mt-[1rem] mr-[1rem] rounded-full w-10 h-10 bg-gray-700"></div>
                    <button
                        placeholder="คุณคิดอะไรอยู่"
                        className="w-[35rem] bg-place-holder-color mt-[1.1rem] h-[2.3rem] rounded-full hover:bg-hover-color hover:rounded-full"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        <p className="flex ml-[1rem]">คุณคิดอะไรอยู่...</p>
                    </button>
                </div>
                {/* <div className="flex flex-row border-t-2 border-solid  border-diviner place-content-center rounded-b-lg bg-body-color  ml-[7rem] w-[45rem] h-[4rem]  pl-[7rem] pt-[1rem] "> */}
                <div
                    className="flex flex-row border-t-2 border-solid  border-diviner place-content-center rounded-b-lg bg-body-color 
                 w-[45rem] ml-[7rem] p-[0.4rem]"
                >
                    <div className="basis-2/6 p-[0.8rem] flex  hover:bg-hover-color hover:rounded-md">
                        <img src="/asset/img/facebook.png"></img>
                        <p className="ml-[2rem]">ถ่ายทอดสด</p>
                    </div>
                    <div className="basis-2/6 flex p-[0.8rem] hover:bg-hover-color hover:rounded-md">
                        <img src="/asset/img/gallery.png"></img>
                        <p className="ml-[2rem]">รูปภาพ/วิดีโอ</p>
                    </div>
                    <div className="basis-2/6 flex p-[0.8rem] hover:bg-hover-color hover:rounded-md ">
                        <img src="/asset/img/smile.png"></img>
                        <p className="ml-[2rem]">ความรู้สึก/กิจกรรม</p>
                    </div>
                </div>
            </div>

            {postItem.map((item, index) => (
                <Post
                    name={item.name}
                    description={item.description}
                    pictureProfile={item.pictureProfile}
                ></Post>
            ))}
            {/* <Post
                name="ประยุทธ์"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            /> */}
        </>
    );
}
const Post = ({ name, description, pictureProfile }) => {
    return (
        <>
            <div className="flex mt-4 ">
                <div className="ml-[7rem] w-[45rem] rounded-t-lg  bg-body-color  ">
                    <div className="relative rounded-full w-10 h-10 bg-image">
                        <img
                            src={pictureProfile}
                            className="absolute mt-[1rem] ml-[1.5rem] rounded-full w-10 h-10 bg-image"
                        ></img>
                        {/* <img src={pictureProfile}></img> */}
                        <p className="pt-[0.7rem] ml-[5rem] w-[15rem]">
                            {name}
                        </p>
                        <p className="ml-[5rem] text-neutral-400 w-[15rem]">
                            2 ช.ม.
                        </p>
                    </div>
                    <p className="mt-[1.5rem] mb-[1rem] ml-[1.5rem] mr-[1.5rem]">
                        {description}
                    </p>
                </div>
            </div>
            <div
                className="flex flex-row border-t-2 border-solid  h-[3rem] border-diviner place-content-center rounded-b-lg bg-body-color 
                 w-[45rem] ml-[7rem] p-[0.4rem]"
            >
                <div className="basis-2/6 p-[0.2rem] pl-[2rem] flex hover:bg-hover-color hover:rounded-md">
                    <img
                        className="ml-[2rem] w-[1.5rem] h-[1.5rem]"
                        src="/asset/img/like.png"
                    ></img>
                    <p className="ml-[2rem]">ถูกใจ</p>
                </div>
                <div className="basis-2/6 flex p-[0.2rem] hover:bg-hover-color hover:rounded-md">
                    <img
                        className="ml-[2rem] w-[1.5rem] h-[1.5rem]"
                        src="/asset/img/comment.png"
                    ></img>
                    <p className="ml-[2rem]">ความคิดเห็น</p>
                </div>
                <div className="basis-2/6 flex p-[0.2rem] hover:bg-hover-color hover:rounded-md ">
                    <img
                        className="ml-[2rem] w-[1.5rem] h-[1.5rem]"
                        src="/asset/img/chat.png"
                    ></img>
                    <p className="ml-[2rem]">ส่ง</p>
                </div>
            </div>
        </>
    );
};
export default Content;

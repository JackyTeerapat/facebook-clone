import React from 'react';
import { useState } from 'react';
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
];

function Content() {
    const [textContent, setTextContent] = useState('');
    return (
        <>
            <div className=" grid-rows-2 bg-neutral-100 mb-[1rem]">
                <div className="flex place-content-center rounded-t-lg border-t-2 border-r-2 border-l-2 border-solid  border-neutral-200 ml-[7rem] w-[50rem] h-[5rem] bg-white">
                    <div className="mt-[1rem] mr-[1rem] rounded-full w-10 h-10 bg-gray-700"></div>
                    <input
                        placeholder="คุณคิดอะไรอยู่"
                        className="w-[35rem] bg-neutral-100 mt-[1.1rem] h-[2.3rem] rounded-full border-solid border-2 "
                        value={textContent}
                        onChange={(event) => {
                            setTextContent(event.target.value);
                        }}
                    ></input>
                </div>
                <div className="flex flex-row place-content-center rounded-b-lg border-b-2 border-r-2 border-l-2 border-t-2 ml-[7rem] w-[50rem] h-[4rem] bg-white pl-[7rem] pt-[1rem] ">
                    <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200">
                        ถ่ายทอดสด
                    </div>
                    <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200">
                        รูปภาพ/วิดีโอ
                    </div>
                    <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200 ">
                        ความรู้สึก/กิจกรรม
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
                <div className="ml-[7rem] w-[50rem] rounded-t-lg border-t-2 border-r-2 border-l-2 bg-white   border-neutral-200 ">
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
            <div className="flex flex-row place-content-center  rounded-b-lg border-b-2 border-r-2 border-l-2 border-t-2  ml-[7rem] w-[50rem] h-[4rem] bg-white pl-[7rem] pt-[1rem] ">
                <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200">
                    ถูกใจ
                </div>
                <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200">
                    ความคิดเห็น
                </div>
                <div className="basis-2/6 text-neutral-400 hover:bg-neutral-200 ">
                    แชร์
                </div>
            </div>
        </>
    );
};
export default Content;

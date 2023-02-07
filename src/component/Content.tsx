import React from 'react';
import { useState } from 'react';
import Post from './Post';

const postItem = [
    {
        id: 1,
        name: 'prayut chanocha',
        pictureProfil:
            'https://i.pinimg.com/originals/8f/69/78/prayutcza55+.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
            <Post
                name="ประยุทธ์"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
        </>
    );
}

export default Content;

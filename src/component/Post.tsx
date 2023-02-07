import React from 'react';

function Post(props: any) {
    const { name, description } = props;
    return (
        <>
            {props.name && props.description ? (
                <>
                    <div className="flex mt-4 ">
                        <div className="ml-[7rem] w-[50rem] rounded-t-lg border-t-2 border-r-2 border-l-2 bg-white   border-neutral-200 ">
                            <div className="mt-[1rem] ml-[1.5rem] rounded-full w-10 h-10 bg-gray-700">
                                <p className="ml-[3.5rem]">{name}</p>
                                <p className="ml-[3.5rem] text-neutral-400">
                                    2ช.ม.
                                </p>
                            </div>
                            <p className="mt-[1rem] mb-[1rem] ml-[1.5rem] mr-[1.5rem]">
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
            ) : null}

            {/* <div className="flex mt-4 ">
                <div className="ml-[7rem] w-[50rem] rounded-t-lg border-t-2 border-r-2 border-l-2 bg-white   border-neutral-200 ">
                    <div className="mt-[1rem] ml-[1.5rem] rounded-full w-10 h-10 bg-gray-700">
                        <p className="ml-[3.5rem]">{name}</p>
                        <p className="ml-[3.5rem] text-neutral-400">2ช.ม.</p>
                    </div>
                    <p className="mt-[1rem] mb-[1rem] ml-[1.5rem] mr-[1.5rem]">
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
            </div> */}

            {/* <div className="bg-neutral-100">
                <div className="flex flex-row mt-4">
                    <div className="basis-1/6 flex flex-row rounded-lg border-solid  ml-[7rem] w-[50rem] bg-white">
                        <div className="flex  rounded-lg border-solid border-2 border-neutral-200 w-[50rem] bg-white">
                            <div className="mt-[1rem] mr-[1rem] ml-[1rem] rounded-full w-10 h-10 bg-gray-700">
                                <p className="ml-[3.5rem]">{name}</p>
                                <p className="ml-[3.5rem] text-neutral-400">
                                    2ช.ม.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
        // <div>
        //     <p>{name}</p>
        // </div>
    );
}

export default Post;

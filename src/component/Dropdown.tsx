import { useState } from 'react';
import ItemBar from './ItemBar';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Dropdown  */}
            <div className="px-2">
                <div
                    className="container grid grid-cols-12 max-h-8 min-h-12 w-full  hover:bg-hover-color hover:rounded-md px-2
          "
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="col-start-1 col-span-2 my-auto py-2">
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden drop-shadow-lg">
                            <div className="h-full w-full object-cover bg-hover-color relative">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {!isOpen ? (
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            width="1em"
                                            height="1em"
                                        >
                                            <g
                                                fill-rule="evenodd"
                                                transform="translate(-448 -544)"
                                            >
                                                <path
                                                    fill-rule="nonzero"
                                                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                                                ></path>
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            width="1em"
                                            height="1em"
                                        >
                                            <path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-3 col-span-8 my-auto pl-">
                        <span className="font-medium ">ดูเพิ่มเติม</span>
                    </div>
                </div>
            </div>
            {/* End Dropdow */}
        </>
    );
}

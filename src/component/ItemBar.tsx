import Link from 'next/link';

interface Props {
    img: string;
    text: string;
    shape: string;
    status?: number;
}

export default function ItemBar({ img, text, shape, status = -1 }: Props) {
    return (
        <>
            <Link href="#">
                <div className="px-2">
                    <div
                        className="container grid grid-cols-12 max-h-8 min-h-12 w-full  hover:bg-hover-color hover:rounded-md px-2
          "
                    >
                        <div className=""></div>

                        <div className="col-start-1 col-span-2 my-auto py-2">
                            <div className="relative w-[36px] h-[36px] ">
                                <img
                                    src={img}
                                    alt="img-profile"
                                    // className="rounded-[50%] w-[36px] h-[36px] object-cover object-center drop-shadow-lg"
                                    className={`${
                                        shape === 'circle'
                                            ? 'rounded-[50%]'
                                            : shape === 'square'
                                            ? 'rounded-md'
                                            : null
                                    } w-[36px] h-[36px] object-cover object-center drop-shadow-lg `}
                                />
                                {status === 1 && (
                                    <div className="absolute w-[1rem] h-[1rem] overflow-hidden rounded-full -bottom-[5px] -right-1 border-[3px]  border-background-color">
                                        <div className="w-full h-full bg-status-online"></div>
                                    </div>
                                )}
                            </div>

                            {/* {shape === 'circle' && (
                                <img
                                    src={img}
                                    alt="img-profile"
                                    className="rounded-[50%] w-[36px] h-[36px] object-cover object-center drop-shadow-lg"
                                />
                            )}
                            {shape === 'square' && (
                                <img
                                    src={img}
                                    alt="img-profile"
                                    className="rounded-md w-[36px] h-[36px] object-cover object-center drop-shadow-lg"
                                />
                            )} */}
                        </div>

                        <div className="col-start-3 col-span-8 my-auto pl-">
                            <span className="font-medium ">{text}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

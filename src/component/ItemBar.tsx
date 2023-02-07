import Link from 'next/link';

interface Props {
    img: string;
    text: string;
}

export default function ItemBar({ img, text }: Props) {
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
                            <img
                                src={img}
                                alt="img-profile"
                                className="rounded-[50%] w-[36px] h-[36px] object-cover object-center drop-shadow-lg"
                            />
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

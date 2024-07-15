import Image from "next/image";
import Link from "next/link";


const Birthdays = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between font-medium">
                <h4 className="text-gray-500">Birthdays</h4>
            </div>
            {/* users */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/6177894/pexels-photo-6177894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h6 className=" font-semibold">May Cannon</h6>
                </div>
                <div className=" flex items-center gap-2">
                    <button className=" bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
                </div>
            </div>
            {/* upcoming */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image
                    src="/gift.png"
                    alt="gift"
                    width={24}
                    height={24}
                />
                <Link href="" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
                    <span className="text-gray-500">See other 16 have upcoming birthdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthdays;
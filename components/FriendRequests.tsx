import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between font-medium">
                <h4 className="text-gray-500">Friend Requests</h4>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
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
                    <p className=" font-semibold">May Cannon</p>
                </div>
                <div className=" flex items-center gap-2">
                    <Image
                        src="/accept.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                    <Image
                        src="/reject.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/6177894/pexels-photo-6177894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h6 className=" font-semibold">Pauline Sutton</h6>
                </div>
                <div className=" flex items-center gap-2">
                    <Image
                        src="/accept.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                    <Image
                        src="/reject.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/6177894/pexels-photo-6177894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h6 className=" font-semibold">Genevieve Matthews</h6>
                </div>
                <div className=" flex items-center gap-2">
                    <Image
                        src="/accept.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                    <Image
                        src="/reject.png"
                        alt="user"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default FriendRequests;
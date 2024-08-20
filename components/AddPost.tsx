import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
    const { userId } = auth();

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex justify-between text-sm gap-4">
            <Image
                src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                alt="post photo"
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex-1">
                <form action="" className=" flex gap-4">
                    <textarea
                        placeholder="What's on your mind?"
                        className="flex-1 p-2 bg-slate-100 rounded-lg outline-none"
                        name="desc"
                    />
                    <Image
                        src="/emoji.png"
                        alt="emoji"
                        width={20}
                        height={20}
                        className="w-5 h-5 cursor-pointer self-end"
                    />
                    <button>Send</button>
                </form>
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image
                            src="/addimage.png"
                            alt="post photo"
                            width={20}
                            height={20}
                        />
                        <span>Photo</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image
                            src="/addVideo.png"
                            alt="post photo"
                            width={20}
                            height={20}
                        />
                        <span>Video</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image
                            src="/poll.png"
                            alt="post photo"
                            width={20}
                            height={20}
                        />
                        <span>Poll</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image
                            src="/addevent.png"
                            alt="post photo"
                            width={20}
                            height={20}
                        />
                        <span>Event</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;
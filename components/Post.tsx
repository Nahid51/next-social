import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="post"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    <h6 className=" font-medium">John Thomas</h6>
                </div>
                <Image
                    src="/more.png"
                    alt="post"
                    width={16}
                    height={16}
                />
            </div>
            <div className="flex flex-col gap4">
                <div className="w-full min-h-96 relative">
                    <Image
                        src="https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="post"
                        fill
                        sizes="100%"
                        className=" object-cover rounded-md"
                    />
                </div>
                <p className=" text-sm my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error doloremque distinctio hic, dolorum eligendi consequuntur beatae similique atque quisquam voluptatem adipisci, temporibus aliquid! Perspiciatis distinctio provident nisi dignissimos et!</p>
            </div>
            <div className="flex items-center justify-between text-sm">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-100 rounded-xl p-2">
                        <Image
                            src="/like.png"
                            alt="post"
                            width={16}
                            height={16}
                            className=" cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 rounded-xl p-2">
                        <Image
                            src="/comment.png"
                            alt="post"
                            width={16}
                            height={16}
                            className=" cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
                    </div>

                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-100 rounded-xl p-2">
                        <Image
                            src="/share.png"
                            alt="post"
                            width={16}
                            height={16}
                            className=" cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Share</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post;
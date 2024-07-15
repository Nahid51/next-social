import Image from "next/image";

const Comments = () => {
    return (
        <div>
            {/* write comment */}
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="commenter"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-1 bg-transparent outline-none"
                    />
                    <Image
                        src="/emoji.png"
                        alt="emoji"
                        width={16}
                        height={16}
                        className=" cursor-pointer"
                    />
                </div>
            </div>
            {/* comments */}
            <div className="">
                <div className="flex gap-4 justify-between mt-6">
                    <Image
                        src="https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="comment"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <h6 className="font-medium">William Jenkins</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quasi odio cupiditate quo. Impedit consectetur assumenda, libero beatae voluptatibus numquam?</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className=" flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt="more"
                                    width={12}
                                    height={12}
                                    className=" cursor-pointer w-4 h-4"
                                />
                                <span className=" text-gray-300">|</span>
                                <span className=" text-gray-500">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    <Image
                        src="/more.png"
                        alt="more"
                        width={16}
                        height={16}
                        className=" cursor-pointer w-4 h-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments;
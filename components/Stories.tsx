import Image from "next/image";

const Stories = async () => {

    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar_hide">
            <div className="flex gap-8 w-max">
                {/* <StoryList stories={stories} userId={currentUserId} /> */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                        alt="story"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full ring-2"
                    />
                    <span className="">Nahid</span>
                </div>
            </div>
        </div>
    );
};

export default Stories;
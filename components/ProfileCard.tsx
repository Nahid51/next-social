import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-6">
            <div className="h-20 relative">
                <Image
                    src="https://images.pexels.com/photos/171940/pexels-photo-171940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    fill
                    sizes="100%"
                    className="rounded-md object-cover"
                />
                <Image
                    src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full origin-center w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
                />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <h4 className=" font-semibold">Allen Stanley</h4>
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <Image
                            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full origin-center w-3 h-3"
                        />
                        <Image
                            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full origin-center w-3 h-3"
                        />
                        <Image
                            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full origin-center w-3 h-3"
                        />
                    </div>
                    <span className=" text-xs text-gray-500">500 Followers</span>
                </div>
                <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard;
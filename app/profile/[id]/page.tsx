import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <main className='py-6 flex gap-6'>
            <div className="hidden xl:block w-[20%]">
                <LeftMenu type="profile" />
            </div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
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
                                width={124}
                                height={124}
                                className="rounded-full origin-center w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-2 ring-white z-10"
                            />
                        </div>
                        <h4 className="mt-20 mb-4 text-2xl font-medium">Allen Stanley</h4>
                        <div className="flex items-center justify-center gap-12">
                            <div className="flex flex-col items-center">
                                <b>124</b><small>Posts</small>
                            </div>
                            <div className="flex flex-col items-center">
                                <b>1.2K</b><small>Followers</small>
                            </div>
                            <div className="flex flex-col items-center">
                                <b>1.4K</b><small>Following</small>
                            </div>
                        </div>
                    </div>
                    <Feed />
                </div>
            </div>
            <div className="hidden lg:block w-[30%]">
                <RightMenu userId="test" />
            </div>
        </main>
    )
}

export default ProfilePage;
import Image from "next/image";


const SponsoredAds = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* top */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <p className="">Sponsored Ads</p>
                <Image src="/more.png" alt="more" width={16} height={16} />
            </div>
            {/* bottom */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/10761134/pexels-photo-10761134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className=" rounded-lg object-cover" />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/6177894/pexels-photo-6177894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="users" width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
                    <p className="text-blue-500 font-medium">Emilie Douglas</p>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm"
                        ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                        : size === "md"
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla culpa tempora!"
                            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla culpa tempora!"
                    }
                </p>
                <button className="bg-gray-200 text-gray-700 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
    )
}

export default SponsoredAds;
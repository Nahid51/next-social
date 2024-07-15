import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <h4 className="text-gray-500">User Information</h4>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <h6 className=" text-xl text-black">Jordan Rios</h6>
          <span className=" text-sm">@jordan</span>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam excepturi enim, tempora laudantium nam facere magni debitis placeat ducimus!</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="city" width={16} height={16} />
          <span>Living in <b>Nobfifi</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="city" width={16} height={16} />
          <span>Went to <b>Nobfifi High School</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="city" width={16} height={16} />
          <span>Works at <b>Apple Inc.</b></span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="link" width={16} height={16} />
            <Link href="#" className="text-blue-500 font-medium">next.social</Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="date" width={16} height={16} />
            <span>Joined July 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className=" text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard;
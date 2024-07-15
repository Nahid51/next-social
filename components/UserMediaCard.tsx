import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <h4 className="text-gray-500">User Media</h4>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
        <div className="w-1/5 h-24 relative">
          <Image src="https://images.pexels.com/photos/7166123/pexels-photo-7166123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="100%" className="rounded-md object-cover" />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard;
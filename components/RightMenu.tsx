import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import SponsoredAds from "./SponsoredAds";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <SponsoredAds size="md" />
    </div>
  )
}

export default RightMenu;
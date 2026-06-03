import type { friendType } from "../types/friendType";
import Friend from "./Friend";

type friendsListProps = {
  friendsArr: friendType[];
  selectedFriend: friendType | null;
  onSelection: (friend: friendType) => void;
};

function FriendsList({
  friendsArr,
  selectedFriend,
  onSelection,
}: friendsListProps) {
  const friends: friendType[] = friendsArr;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;

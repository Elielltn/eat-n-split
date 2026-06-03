import type { friendType } from "../types/friendType";
import Friend from "./Friend";

type friendsListProps = {
  friendsArr: friendType[];
};

function FriendsList({friendsArr}: friendsListProps) {
  const friends: friendType[] = friendsArr;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;

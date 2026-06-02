import initialFriends from "../constants/initialFriends";
import type { friendType } from "../types/friendType";
import Friend from "./Friend";

function FriendsList() {
  const friends: friendType[] = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;

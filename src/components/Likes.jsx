import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function Likes() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  return (
    <div className="likes">
      <div className="heart-circle" onClick={handleClick}>
        <FaRegHeart className="heart" />
      </div>
      <div className="like-amount">{likes}</div>
    </div>
  );
}

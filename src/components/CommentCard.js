import React from "react";
import likeicon from "../assets/like.png";
import dislikeicon from "../assets/negative-vote.png";

const CommentCard = ({ snippet, id }) => {
  const commentDetails = snippet?.topLevelComment?.snippet;
  const openProfile = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex my-4">
      <div
        className="bg-gray-300 h-12 w-12 rounded-full overflow-hidden cursor-pointer"
        onClick={() => openProfile(commentDetails?.authorChannelUrl)}
      >
        <img
          className="bg-gray-300 h-12 w-12 rounded-full"
          alt="profile pic"
          src={commentDetails?.authorProfileImageUrl}
        />
      </div>
      <div className="flex flex-col px-5">
        <span
          className="font-semibold text-base cursor-pointer"
          onClick={() => openProfile(commentDetails?.authorChannelUrl)}
        >
          {commentDetails?.authorDisplayName}
          <span className="ml-2 font-normal">{commentDetails?.updatedAt}</span>
        </span>
        <span className="text-base">{commentDetails?.textOriginal}</span>
        <div className="mt-2 flex items-center">
          <img className="h-4 w-4 mr-2" alt="like" src={likeicon} />
          {commentDetails?.likeCount}
          <img className="h-4 w-4 ml-4" alt="dislike" src={dislikeicon} />
        </div>
      </div>
    </div>
  );
};

const arePropsEqual = (prev, next) => {
  return prev.id === next.id;
};

export default React.memo(CommentCard, arePropsEqual);

import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";
import CommentCard from "./CommentCard";

const CommentsList = ({ props }) => {
  const [commentList, setCommentList] = useState([]);
  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + props);
    const json = await data.json();
    setCommentList(json.items);
  };
  useEffect(() => {
    getComments();
  }, []);
  return commentList?.length ? (
    <>
      <span className="font-medium text-xl">{commentList.length} Comments</span>
      {commentList.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </>
  ) : null;
};

export default CommentsList;

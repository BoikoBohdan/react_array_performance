import React from "react";

export function view({ comments, checkComment }) {
  return comments.map(comment =>
    renderComments({ comment, click: checkComment })
  );
}

const renderComments = ({ comment, click }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }} key={comment.id}>
      <h1>{comment.name}</h1>
      <input
        type="checkbox"
        defaultChecked={comment.status}
        onClick={() => click({ id: comment.id, status: !comment.status })}
      />
    </div>
  );
};

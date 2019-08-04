import React from "react";

export function view({ comment, checkComment }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }} key={comment.id}>
      <h1>{comment.name}</h1>
      <input
        type="checkbox"
        defaultChecked={comment.status}
        onClick={() =>
          checkComment({ id: comment.id, status: !comment.status })
        }
      />
    </div>
  );
}

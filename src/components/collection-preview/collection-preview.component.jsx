import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <div className="title">{title}</div>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
    </div>
  );
};

export default CollectionPreview;

import React from 'react';

const TagButton = ({ tag, onClick }) => {
  return (
    <button onClick={() => onClick(tag)}>
      {tag}
    </button>
  );
}

export default TagButton;

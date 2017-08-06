import React from "react";

const emoji = {
  bomb: "💣",
};

export default function Emoji({ name, ...rest }) {
  return (
    <span role="img" aria-label={name} {...rest}>
      {emoji[name]}
    </span>
  );
}

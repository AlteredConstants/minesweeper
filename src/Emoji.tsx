import React from "react";

const emoji = {
  bomb: "💣",
  "party popper": "🎉",
};

export type EmojiType = keyof typeof emoji;

type EmojiProps = {
  type: EmojiType;
} & React.HTMLAttributes<HTMLSpanElement>;
export default function Emoji({ type, ...rest }: EmojiProps) {
  return (
    <span role="img" aria-label={type} {...rest}>
      {emoji[type]}
    </span>
  );
}

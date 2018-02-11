import * as React from "react";

const emoji = {
  bomb: "💣",
};

type EmojiProps = {
  name: keyof typeof emoji;
} & React.HTMLAttributes<HTMLSpanElement>;
export default function Emoji({ name, ...rest }: EmojiProps) {
  return (
    <span role="img" aria-label={name} {...rest}>
      {emoji[name]}
    </span>
  );
}

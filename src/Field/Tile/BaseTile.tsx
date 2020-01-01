import React from "react"

export default function BaseTile(props: React.SVGProps<SVGRectElement>) {
  return (
    <rect
      width="100%"
      height="100%"
      fill="darkGoldenRod"
      stroke="pink"
      strokeWidth="1px"
      {...props}
    />
  )
}

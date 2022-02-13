import * as React from "react"
import { SVGProps } from "react"

const Like = (props: SVGProps<SVGSVGElement>) => (
    <div className="list-item">
        <svg
        width={16}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        d="M15.825 5.02c0 3.067-3.9 5.517-7.015 8.94a.635.635 0 0 1-.945 0C4.75 10.538.85 8.088.85 5.02c0-3.515 4.79-6.03 7.357-2.432a.164.164 0 0 0 .267.004c2.71-3.604 7.351-1.088 7.351 2.427Z"
        fill="#fff"
        />
    </svg>
  </div>
)

export default Like

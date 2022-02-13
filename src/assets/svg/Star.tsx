import * as React from "react"
import { SVGProps } from "react"

const Star = (props: SVGProps<SVGSVGElement>) => (
    <div className="list-item">
        <svg
        width={21}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        d="m17.51 9.18-4.063 2.952 1.55 4.77a.417.417 0 0 1-.396.544.408.408 0 0 1-.242-.08L10.3 14.416l-4.058 2.948a.408.408 0 0 1-.579-.09.416.416 0 0 1-.059-.373l1.55-4.77L3.09 9.18a.414.414 0 0 1 .243-.75h5.021l1.551-4.776a.414.414 0 0 1 .788 0l1.551 4.776h5.021a.414.414 0 0 1 .244.75Z"
        fill="#fff"
        />
    </svg>
  </div>
)

export default Star

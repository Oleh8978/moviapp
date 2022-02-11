import * as React from "react"
import { SVGProps } from "react"

const DescriptionChar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="description"
  >
    <circle cx={11} cy={11} r={11} fill="#fff" fillOpacity={0.2} />
    <g opacity={0.4}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 11a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 14.75 11Zm-2.25 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 12.5 11ZM5.75 9.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.75 9.5Z"
        fill="#231F20"
      />
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={9}
        width={14}
        height={4}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.75 11a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 14.75 11Zm-2.25 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 12.5 11ZM5.75 9.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.75 9.5Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#fff" d="M20 2v18H2V2z" />
      </g>
    </g>
  </svg>
)

export default DescriptionChar

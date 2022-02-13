import * as React from "react"
import { SVGProps } from "react"

const BookMark = (props: SVGProps<SVGSVGElement>) => (
  <div className="list-item">
      <svg
        width={21}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#a)">
          <g clipPath="url(#b)">
            <path
              d="M16.538 5.253v13.084a.635.635 0 0 1-1.085.45l-4.317-4.318-4.318 4.317a.635.635 0 0 1-1.085-.45V5.254a1.271 1.271 0 0 1 1.272-1.27h8.262a1.271 1.271 0 0 1 1.27 1.27Z"
              fill="#fff"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path
              fill="#fff"
              transform="translate(.649 .169)"
              d="M0 0h20.338v20.338H0z"
            />
          </clipPath>
          <clipPath id="b">
            <path
              fill="#fff"
              transform="translate(.649 1.44)"
              d="M0 0h20.338v20.338H0z"
            />
          </clipPath>
        </defs>
      </svg>
  </div>
)

export default BookMark

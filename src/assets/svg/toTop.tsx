import * as React from "react"
import { SVGProps } from "react"

const ToTop = (props: SVGProps<SVGSVGElement>) => {

    const scrollElem = () => {
        const scrolledElem = document.querySelector('.films');
    
        if (scrolledElem) {
          scrolledElem.scrollTo(0, 0)
        }
      }

    return (
        <svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        onClick={() => scrollElem()}
        className="toTop"
      >
        <circle cx={25} cy={25} r={25} fill="#2D2D3A" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.983 17.939 16.94 24.41a1.5 1.5 0 0 1-1.88-2.338l9-7.242a1.497 1.497 0 0 1 1.9.018l9 7.5c.637.53.723 1.474.192 2.112a1.498 1.498 0 0 1-2.112.192l-8.057-6.714Zm-.923 7.392a1.497 1.497 0 0 1 1.9.017l9 7.5a1.5 1.5 0 0 1-1.92 2.304l-8.056-6.713-8.043 6.471a1.5 1.5 0 1 1-1.881-2.337l9-7.242Z"
          fill="#4B4B62"
        />
        <mask
          id="a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={14}
          y={14}
          width={22}
          height={22}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.983 17.939 16.94 24.41a1.5 1.5 0 0 1-1.88-2.338l9-7.242a1.497 1.497 0 0 1 1.9.018l9 7.5c.637.53.723 1.474.192 2.112a1.498 1.498 0 0 1-2.112.192l-8.057-6.714Zm-.923 7.392a1.497 1.497 0 0 1 1.9.017l9 7.5a1.5 1.5 0 0 1-1.92 2.304l-8.056-6.713-8.043 6.471a1.5 1.5 0 1 1-1.881-2.337l9-7.242Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#4B4B62" d="M7 7h36v36H7z" />
        </g>
      </svg>
    )
 
}

export default ToTop;

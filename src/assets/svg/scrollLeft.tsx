import * as React from "react"
import { SVGProps } from "react"

const LeftScroll = (props: SVGProps<SVGSVGElement>) => {

    const scrollElem = () => {
        const scrolledElem = document.querySelector('.top-rated');

        const xCoordinate = Number(scrolledElem?.scrollWidth) > Number(scrolledElem?.scrollLeft) + 300  ? Number(scrolledElem?.scrollLeft) + 300 :  Number(scrolledElem?.scrollWidth)
    
        if (scrolledElem) {
          scrolledElem.scrollTo(xCoordinate, 0)
        }
    }

  return (
  <div className="scroll-left" onClick={() => scrollElem()}>
    <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.061 10.983 11.59 2.94a1.5 1.5 0 0 1 2.338-1.88l7.242 9a1.497 1.497 0 0 1-.018 1.9l-7.5 9a1.498 1.498 0 0 1-2.112.192 1.498 1.498 0 0 1-.192-2.112l6.714-8.057Zm-7.392-.923a1.497 1.497 0 0 1-.017 1.9l-7.5 9a1.5 1.5 0 0 1-2.304-1.92l6.713-8.056L1.09 2.94A1.5 1.5 0 1 1 3.427 1.06l7.242 9Z"
        fill="#4B4B62"
        />
    </svg>
  </div>)
}

export default LeftScroll
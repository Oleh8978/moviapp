import * as React from "react"
import { SVGProps } from "react"

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="mobile-menu"
  >
    <path stroke="#5F5F6F" strokeWidth={2} d="M0 1h28M0 9h28M0 17h28" />
  </svg>
)

export default Menu

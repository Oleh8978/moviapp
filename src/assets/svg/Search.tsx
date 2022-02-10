import * as React from "react"
import { SVGProps } from "react"

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="search"
  >
    <circle cx={9.493} cy={9.493} r={8.493} stroke="#5F5F6F" strokeWidth={2} />
    <path stroke="#5F5F6F" strokeWidth={2} d="m15.379 14.827 5.369 5.37" />
  </svg>
)

export default Search

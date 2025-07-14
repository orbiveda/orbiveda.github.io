import * as React from "react"
import { cn } from "@/lib/utils"

const Logo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      {...props}
    >
      <g className="fill-current">
        {/* Circle */}
        <path d="M50,2.5A47.5,47.5,0,1,1,2.5,50,47.5,47.5,0,0,1,50,2.5m0-2.5A50,50,0,1,0,100,50,50,50,0,0,0,50,0Z" />
        {/* Petals */}
        <path d="M50,11.33c16.32,0,29.83,18.3,32.26,29.17a47.41,47.41,0,0,0-64.52,0C20.17,29.63,33.68,11.33,50,11.33Z" />
        <path d="M50,88.67c-16.32,0-29.83-18.3-32.26-29.17a47.41,47.41,0,0,0,64.52,0C79.83,70.37,66.32,88.67,50,88.67Z" />
        <path d="M11.33,50c0-16.32,18.3-29.83,29.17-32.26a47.41,47.41,0,0,0,0,64.52C29.63,79.83,11.33,66.32,11.33,50Z" />
        <path d="M88.67,50c0,16.32-18.3,29.83-29.17,32.26a47.41,47.41,0,0,0,0-64.52C70.37,20.17,88.67,33.68,88.67,50Z" />
      </g>
    </svg>
  )
})
Logo.displayName = "Logo"

export { Logo }

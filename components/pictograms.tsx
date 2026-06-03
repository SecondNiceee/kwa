import type { SVGProps } from "react"

/* Park wayfinding pictogram set — stroke-based, consistent 24x24 grid.
   Mirrors the signs composited onto the photo via Sharp. */

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
})

export function WalkIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <circle cx="13" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M11 8.5 8 12.5l1.6 1.4 1.4-1.8v3l-2 5.4M13 13l2.4 5.5M11 10.5l2 1.4 2.2-1" />
    </svg>
  )
}

export function BikeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="17" r="3.4" />
      <circle cx="18" cy="17" r="3.4" />
      <path d="M6 17l4-7h5l3 7M10 10 8.5 7h-2M15 10l1.5 3" />
    </svg>
  )
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v6" />
      <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ViewIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function PicnicIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20l3-9h10l3 9M6 14h12M9 11V6h6v5" />
    </svg>
  )
}

export function WaterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3s6 6.5 6 10.5A6 6 0 1 1 6 13.5C6 9.5 12 3 12 3z" />
    </svg>
  )
}

export function BridgeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 14h20M5 14v-3M19 14v-3M2 17c3 0 3-3 5-3s2 3 5 3 3-3 5-3 2 3 3 3" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c4-5 7-8.5 7-12a7 7 0 1 0-14 0c0 3.5 3 7 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

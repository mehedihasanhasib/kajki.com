import React from 'react'

export default function FormLabel({children, htmlFor="", className=""}) {
  return (
    <label htmlFor={htmlFor} className={`block font-medium text-gray-600 ${className}`}>{children}</label>
  )
}

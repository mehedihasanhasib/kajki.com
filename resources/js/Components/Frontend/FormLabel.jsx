import React from 'react'

export default function FormLabel({children, htmlFor=""}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-600">{children}</label>
  )
}

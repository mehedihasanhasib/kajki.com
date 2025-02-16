import React from 'react'

export default function FormLabel({ children, htmlFor = "", className = "", required = false }) {
  return (
    <label htmlFor={htmlFor} className={`block font-medium text-gray-600 ${className}`}>{children}{required && <span className="text-red-500">*</span>}</label>
  )
}

import React from 'react'

export default function FormLabel({children}) {
  return (
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">{children}</label>
  )
}

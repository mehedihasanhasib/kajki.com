import React from 'react'

export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">TaskMatch</h3>
                    <p className="text-gray-400">Your go-to platform for local services and skilled professionals.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">About</h3>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <ul>
                        <li><a href="mailto:support@taskmatch.com" className="text-gray-400 hover:text-white">support@taskmatch.com</a>
                        </li>
                        <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 234 567 890</a></li>
                        <li>
                            <p className="text-gray-400">123 Main Street, City, Country</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-gray-500">
                <p>&copy; 2024 KajKi.com. All rights reserved.</p>
            </div>
        </div>
    )
}

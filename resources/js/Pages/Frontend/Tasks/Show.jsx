import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function TaskDetails() {
    return (
        <AppLayout>
            <Head>
                <title>Task Details</title>
            </Head>
            <section className='py-6'>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Fix Leaking Kitchen Faucet</h1>
                            <p className="text-gray-600 mt-2"><strong>Posted By: </strong>John Doe</p>
                        </div>
                        <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">Open</span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Location</h3>
                            <p className="text-gray-600 mt-2">Downtown, 2.5 miles away</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Budget</h3>
                            <p className="text-gray-600 mt-2">$50 - $200</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-700">Task Details</h2>
                        <p className="text-gray-600 mt-2">
                            Need a plumber to fix a leaking kitchen faucet. The leak is getting worse and needs urgent attention. Available
                            for inspection today.
                        </p>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

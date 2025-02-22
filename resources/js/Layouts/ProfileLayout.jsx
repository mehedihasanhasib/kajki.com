import React, { Children } from 'react'
import AppLayout from './AppLayout'
import { Head } from '@inertiajs/react'
import ProfileSideBar from '@/Components/Frontend/ProfileSideBar'

function ProfileLayout({ children }) {
    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Sidebar */}
                        <ProfileSideBar />

                        {children}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ProfileLayout
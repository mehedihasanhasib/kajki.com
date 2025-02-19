import { usePage } from "@inertiajs/react";
import ProfileSideBarLink from "./ProfileSideBarLink";
import { asset } from "@/utils/helpers";

export default function ProfileSideBar() {
    const { auth } = usePage().props
    return (
        <div className="md:w-1/4 bg-gray-50 p-6 border-r border-gray-200">
            <div className="flex flex-col items-center mb-8">
                <img
                    src={asset(auth.user.profile_picture ?? 'assets/images/user-avatar.webp')}
                    alt={`${auth.user.name}'s avatar`}
                    className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md"
                />
                <h2 className="mt-4 font-semibold text-xl text-center">{auth.user.name}</h2>
                <p className="text-gray-500 text-sm text-center">{auth.user.email}</p>
            </div>

            <nav>
                <ul>
                    <ProfileSideBarLink route={route("profile")} activePath="/profile">
                        Profile
                    </ProfileSideBarLink>
                    <ProfileSideBarLink route={route("profile.update.password")} activePath="/profile/update-password">
                        Change Password
                    </ProfileSideBarLink>
                    <ProfileSideBarLink route={route("profile.mytasks")} activePath="/profile/my-tasks">
                        My Tasks
                    </ProfileSideBarLink>
                    <ProfileSideBarLink route={route("logout")} method="post" asButton={true}>
                        Sign out
                    </ProfileSideBarLink>
                </ul>
            </nav>
        </div>
    );
}
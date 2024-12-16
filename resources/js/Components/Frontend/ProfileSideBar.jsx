import { Link, usePage } from "@inertiajs/react";
import ProfileSideBarLink from "./ProfileSideBarLink";

export default function ProfileSideBar() {
    const { url } = usePage();
    return (
        <div className="bg-white xl:w-[20vw] 2xl:w-[16vw]">
            <ul className="p-4">
                <ProfileSideBarLink route={route("profile")} activePath="/profile">
                    Name
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("profile.update.password")} activePath="/profile/update-password">
                    Change Password
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("profile.mytasks")} activePath="/profile/my-tasks">
                    My Tasks
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("logout")} method="post">
                    Sign out
                </ProfileSideBarLink>
            </ul>
        </div>
    );
}

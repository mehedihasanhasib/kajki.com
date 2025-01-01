import ProfileSideBarLink from "./ProfileSideBarLink";

export default function ProfileSideBar() {
    return (
        <div className="bg-white shadow-lg xl:shadow-none xl:w-[20vw] 2xl:w-[16vw]">
            <ul className="p-4">
                <ProfileSideBarLink route={route("profile")} activePath="/profile">
                    Profile
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("profile.update.password")} activePath="/profile/update-password">
                    Change Password
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("profile.mytasks")} activePath="/profile/my-tasks">
                    My Tasks
                </ProfileSideBarLink>
                <ProfileSideBarLink route={route("logout")} method="post" as="button">
                    Sign out
                </ProfileSideBarLink>
            </ul>
        </div>
    );
}

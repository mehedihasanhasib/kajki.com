export default function ProfileContent({ children }) {
    return (
        <div className="flex-1 shadow-lg xl:shadow-none">
            <div className="bg-white shadow-md p-6 md:p-8">{children}</div>
        </div>
    );
}

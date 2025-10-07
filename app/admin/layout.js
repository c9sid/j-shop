export const metadata = {
    title: "Admin | J Shop",
    description: "Admin panel for J Shop",
};

export default function AdminLayout({ children }) {
    return (
        <div className="bg-red-300 min-h-screen">
            {children}
        </div>
    );
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <div className="border-b text-center">
                Login now to get 20% off
            </div>
            <div className="">{children}</div>
        </>
    );
}
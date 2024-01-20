export const RevenueCard = ({
    title,
    amount,
    orderCount
}) => {
    return (
        <div className="flex-grow text-white min-w-[300px] min-h-[300px] bg-[#146EB4] hover:bg-[#0E4F82] rounded shadow-md flex p-5">
            <div className="flex flex-col">
                {title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                <div>
                    <p className="flex text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-2xl">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        {amount}</p>
                    <p className="underline text-2xl">{"23 Orders"}</p>
                </div>
            </div>
        </div >
    )
}
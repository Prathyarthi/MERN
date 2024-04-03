import { getServerSession } from "next-auth"
import { Next_Auth } from "../api/lib/auth"

export default async function () {
    const session = await getServerSession(Next_Auth)
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}
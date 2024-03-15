import axios from "axios";
// import { PrismaClient } from "@prisma/client"
// const client = new PrismaClient()

import client from "@/db"

// By doing this, we are requesting the nextjs server to fetch the data from the nextjs server itself, so we should do data fetch from the database itself using prisma
// async function getDetails() {
//   const response = await axios.get("http://localhost:3000/api/user")
//   return response.data
// }

async function getDetails() {
  const user = await client.user.findFirst()
  console.log(user);


  return {
    name: user?.username,
    email: user?.email,
  }
}


export default async function Home() {
  // const userDetails = await getDetails()

  const userDetails = await getDetails()

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails?.name}
          </div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}

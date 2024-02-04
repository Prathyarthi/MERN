import { Client } from "pg";

const client = new Client({
    connectionString: ""
})


async function createUsersTable() {
    await client.connect()
    const res = await client.query(`
        CREATE TABLE USERS(
        ID SERIAL PRIMARY KEY,
        USERNAME VARCHAR(20) UNIQUE NOT NULL,
        EMAIL VARCHAR(20) UNIQUE NOT NULL,
        PASSWORD VARCHAR(20) NOT NULL,
        CREATED_AT TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(res);
}

async function insertData(username: string, email: string, password: string) {
    try {
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end(); // Close the client connection
    }
}

async function getUser(email: string) {
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}



createUsersTable()

insertData('username5', 'user5@example.com', 'user_password')
    .catch(console.error);

getUser('user5@example.com').catch(console.error);
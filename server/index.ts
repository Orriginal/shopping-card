/**
 * This is really simple setup for a server.
 * The purpose of this server is just to simulate some endpoints for the frontend to consume.
 */

import dotenv from 'dotenv';
dotenv.config();
import server from './server';

const PORT = process.env.SERVER_PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

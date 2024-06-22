import * as schema from './schema'

// import { drizzle } from 'drizzle-orm/neon-http'
// import { sql } from '@vercel/postgres'
// const db = drizzle(sql, {
//   schema,
// })

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.POSTGRES_URL!);
const db = drizzle(sql, {
  schema,
});

export default db

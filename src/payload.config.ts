import { buildConfig } from 'payload/config'
import { Projects } from './collections/projects'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {slateEditor} from '@payloadcms/richtext-slate'
import path from 'path'
import { Media } from './collections/media'
import { viteBundler } from '@payloadcms/bundler-vite'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL!,
  collections: [
    Projects,
    Media
  ],
  admin: {
    bundler: viteBundler() 
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
  }),
  rateLimit: {
    max:2000
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  }
})
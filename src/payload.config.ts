import { buildConfig } from 'payload/config'
import { Projects } from './collections/projects'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {slateEditor} from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'
import { Media } from './collections/media'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [
    Projects,
    Media
  ],
  routes: {
    admin: '/manage',
  },
  admin: {
    bundler: webpackBundler() 
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
import express from 'express'
import { getPayloadClient } from './get-payload-client'
import { nextApp, nextHandler } from './next-utils'
import nextBuild from 'next/dist/build'
import path from 'path'

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {

  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
      }
    }
  })

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(
        'Next.js is building for production'
      )

      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))

      process.exit()
    })

    return
  }

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('NextJS started')

    app.listen(PORT, () => {
      payload.logger.info(`Server started on ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}

start()


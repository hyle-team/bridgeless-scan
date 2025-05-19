FROM node:18-alpine3.18 AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
# https://github.com/parcel-bundler/watcher/issues/102
RUN apk add --no-cache git make clang build-base python3
WORKDIR /app

COPY . ./
RUN yarn install
RUN yarn build

ENV NODE_ENV production

## Production image, copy all the files and run next
#FROM node:18-alpine3.18 AS runner
#RUN apk add --no-cache libc6-compat
#WORKDIR /app
#

#
## You only need to copy next.config.js if you are NOT using the default configuration
#COPY --from=builder /app/next.config.js ./
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/.next/server ./
#COPY --from=builder /app/.next/static ./.next/static
#COPY --from=builder /app/package.json ./package.json
#COPY .env .
#
##EXPOSE 8000
##ENV PORT 8000
#
## Next.js collects completely anonymous telemetry data about general usage.
## Learn more here: https://nextjs.org/telemetry
#ENV NEXT_TELEMETRY_DISABLED 1

COPY ./.env /app/.env

CMD ["yarn", "start"]
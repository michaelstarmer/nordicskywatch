# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app
# native builds sometimes need build tools
RUN apk add --no-cache python3 make g++  
COPY package*.json ./
RUN npm ci
COPY . .
# Adonis v5: build to /build
RUN node ace build --production

# ---- runtime stage ----
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# Copy only built app + production deps
COPY --from=build /app/build ./
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
# Adonis serves on PORT, bind to 0.0.0.0 inside container
ENV HOST=0.0.0.0 PORT=3333
EXPOSE 3333
CMD ["node","server.js"]

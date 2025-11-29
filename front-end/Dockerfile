# # Stage 1: Build Environment
# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm ci

# COPY . .
# RUN npm run build

# # Stage 2: Create the production-ready image
# FROM node:20-alpine AS production


# WORKDIR /app

# # Copy only the necessary files from the builder stage
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# ENV PORT=3000

# EXPOSE ${PORT}

# CMD ["npm", "start"]


# 1️⃣ Build stage
FROM node:20.9.0-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2️⃣ Production stage
FROM node:20.9.0-alpine AS runner
WORKDIR /app

# Copy the built app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]

# ---- Build-Stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Paketinfos kopieren und Dependencies installieren
COPY package*.json ./
RUN npm ci

# Restlichen Code kopieren
COPY . .

# Produktion-Build ausführen
RUN npm run build

# ---- Runtime-Stage (Nginx als Webserver) ----
FROM nginx:alpine

# Build-Ergebnis in den Webroot kopieren (bei Vite/React ist es meist /dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: eigene nginx.conf, wenn du willst
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

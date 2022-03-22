FROM node:lts-alpine3.15 AS client-builder
WORKDIR /app/client

# cache packages in layer
COPY client/package.json /app/client/package.json
COPY client/yarn.lock /app/client/yarn.lock

ARG TARGETARCH
RUN yarn config set cache-folder /usr/local/share/.cache/yarn-${TARGETARCH}
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn-${TARGETARCH} yarn --network-timeout 1000000 

COPY client /app/client
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn-${TARGETARCH} yarn build --network-timeout 1000000 

FROM debian:bullseye-slim
LABEL org.opencontainers.image.title="Trivy" \
    org.opencontainers.image.description="Run unlimited vulnerability scans against remote or locally stored images." \
    org.opencontainers.image.vendor="Aqua Security Software Ltd." \
    com.docker.desktop.extension.api.version=">= 0.2.0" \
    com.docker.desktop.extension.icon="https://raw.githubusercontent.com/aquasecurity/trivy/9f6842888ef5e3313cd10f0ce73652db5cba0337/docs/imgs/trivy.svg"

COPY --from=client-builder /app/client/dist ui
COPY trivy.svg .
COPY metadata.json .

FROM node:22-alpine
ARG N8N_VERSION

RUN if [ -z "$N8N_VERSION" ]; then echo "The N8N_VERSION argument is missing!" ; exit 1; fi

# Instala dependências do n8n e build tools
RUN apk add --update python3 build-base ca-certificates git tini su-exec tzdata graphicsmagick && \
    npm_config_user=root npm install -g full-icu n8n@${N8N_VERSION} && \
    apk del build-base && \
    rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root

# Copiar node customizado
COPY ./node_custom_dist/nodes /home/node/.n8n/custom/nodes


# Copiar entrypoint
COPY docker-entrypoint.sh /docker-entrypoint.sh

ENV NODE_ICU_DATA /usr/local/lib/node_modules/full-icu
WORKDIR /data
ENTRYPOINT [ "tini", "--", "/docker-entrypoint.sh" ]
EXPOSE 5678/tcp

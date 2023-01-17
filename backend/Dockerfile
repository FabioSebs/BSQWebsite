# DEPENDENCIES
FROM go:alpine AS dependencies
WORKDIR /backend
COPY go.mod /backend
COPY go.sum /backend
RUN go mod tidy

# BUILDER
FROM dependencies AS builder
COPY . /backend
RUN go build -o main main.go

# EXECUTING
FROM alpine:latest AS production
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
COPY --from=builder /backend .
EXPOSE 80
CMD [ "./main" ]

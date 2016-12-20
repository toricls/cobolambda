FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y open-cobol && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /src

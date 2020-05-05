FROM ruby:2.5.5

# Install dependencies:
#   - build-essential: To ensure certain gems can be compiled
#   - nodejs: Compile assets
RUN set -x; \
  apt update \
  && apt upgrade -y \
  && apt install -y --no-install-recommends \
  openssh-server \
  zlib1g-dev \
  build-essential \
  libssl-dev \
  libreadline-dev \
  libyaml-dev \
  libxml2-dev \
  libxslt1-dev \
  libcurl4-openssl-dev \
  libffi-dev \
  nodejs \
  git \
  imagemagick \
  libmagickwand-dev

#Clone from repository 
RUN git clone https://github.com/cenit-io/cenit.git /var/www/cenit

#Set working directory
WORKDIR /var/www/cenit

#Set environment variables and create folder structure
RUN mkdir -p /var/www/shared/log
RUN mkdir -p /var/www/shared/pids
RUN mkdir -p /var/www/shared/sockets

ENV RAILS_ENV='production'
ENV RACK_ENV='production'

#Install gems
RUN bundle install --jobs 20 --retry 5 --without development test

EXPOSE 8080

FROM alejandro92/cenit

ENV SKIP_ASSETS_COMPILE=false
ENV SKIP_DB_INITIALIZATION=true
ENV SKIP_RABBIT_MQ=true

RUN if $SKIP_ASSETS_COMPILE ; then set -x; else bundle exec rake assets:precompile ; fi

EXPOSE 8080

FROM node:10

# Create the home directory for the new app user.
RUN mkdir -p /home/app

# Create an app user so our program doesn't run as root.
RUN groupadd -r -g 1001 app &&\
    useradd -u 1001 -r -g app -d /home/app -s /sbin/nologin -c "Docker image user" app

# Set the home directory to our app user's home.
ENV HOME=/home/app
ENV APP_HOME=/home/app/project

## SETTING UP THE APP ##
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY --chown=app:app package.json ./
COPY --chown=app:app docker/entrypoint.sh ./

# Bundle app source
COPY --chown=app:app ./standAlone/distStandAlone ./standAlone/distStandAlone

USER app

EXPOSE 3001
CMD [ "npm", "start" ]

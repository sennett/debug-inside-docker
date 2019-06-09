Want to debug node app from inside docker.

Dependency: docker.

- `./build.sh` to build image
- `./run.sh` to run image as container

Article detailing how to debug:  https://dev.to/alex_barashkov/how-to-debug-nodejs-in-a-docker-container-bhi

Todo:

- files available in `node_modules` available only in docker machine.  Mount on host after npm install so that we can step into them?

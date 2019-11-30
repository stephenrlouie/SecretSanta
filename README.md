# Secret Santa Picker App
This is my secret santa picker UI. The backend is hosted in AWS lambda and will email secret santa participants.

## Local development

1. Requires: docker.
2. If on OSX, look up the Docker VM IP. 
3. Change the `_config.yml` url to the docker VM IP. or 127.0.0.1.
4. run `./serve.sh`
5. open a browser at http://<dockerVMIP>:4000
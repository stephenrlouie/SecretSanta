# Secret Santa Picker App
This is my secret santa picker UI. The backend is hosted in AWS lambda and will email secret santa participants.

## Local development (Instructions for OSX)

1. Requires: docker.
2. If on OSX, look up the Docker VM IP. 
3. Get the Docker VM IP by running `ifconfig`. Change the `_config.yml` url to the docker VM IP. (127.0.0.1, will likely work for linux.)
4. Run `./serve.sh`
5. open a browser at `http://<docker_VM_IP>:4000`
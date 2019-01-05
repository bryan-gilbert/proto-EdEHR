# Moodle for local development

To launch the EdEHR we need a LMS. A quick way to set up a local LMS is with the bitnami docker image.
For more information see:
https://hub.docker.com/r/bitnami/moodle/


## To Start Moodle
```
# cd into this sub directory
cd /moodle  

# run the docker image
docker-compose up
```

Open you browser to http://localhost:8090

The original docker compose file was obtained by 
```
curl -sSL https://raw.githubusercontent.com/bitnami/bitnami-docker-moodle/master/docker-compose.yml > docker-compose.yml
```
The original was modified to serve moodle on a port other than port 80 because we assume that a developer will want that port for another project. The change in the configuration file looks like this.
``` 
ports:
  - '8090:80'
  - '443:443'
```
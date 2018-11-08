#!/bin/bash

curl -X DELETE http://localhost:27000/users/all | json_pp
curl -X DELETE http://localhost:27000/activities/all | json_pp
curl -X DELETE http://localhost:27000/sessions/all | json_pp
curl -X DELETE http://localhost:27000/visits/all | json_pp
curl -X DELETE http://localhost:27000/visitdata/all | json_pp

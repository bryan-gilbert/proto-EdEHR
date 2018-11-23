#!/bin/bash

curl -X DELETE http://localhost:27000/users/all | json_pp
curl -X DELETE http://localhost:27000/visits/all | json_pp
curl -X DELETE http://localhost:27000/activities/all | json_pp
exit

curl -X DELETE http://localhost:27000/consumers/all | json_pp
curl -X DELETE http://localhost:27000/assignments/all | json_pp
curl -X DELETE http://localhost:27000/integrations/all | json_pp


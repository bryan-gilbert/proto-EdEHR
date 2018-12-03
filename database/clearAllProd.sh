#!/bin/bash

curl -X DELETE http://localhost:27004/users/all | json_pp
curl -X DELETE http://localhost:27004/visits/all | json_pp
curl -X DELETE http://localhost:27004/activities/all | json_pp
exit

curl -X DELETE http://localhost:27004/consumers/all | json_pp
curl -X DELETE http://localhost:27004/assignments/all | json_pp
curl -X DELETE http://localhost:27004/integrations/all | json_pp


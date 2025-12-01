# commands for the creation process

tp get the version of what resources you will be using : `kubectl api-versions`

create a cluter: `minikube start`

create a deployment for the frontend: `kubectl create deployment front --image=frontend:1 --port=3000`

retart a deployment: `kubectl rollout restart deployment/<deployment name>`

create secrets : `kubectl create secret generic app-secrets --from-literal=CLIENT_PORT=3000 --from-literal=SERVER_PORT=5000 --from-literal=NEXT_PUBLIC_SERVER_URL=http://localhost:5000`

for debugging and trouble shouting

for creating a loadbalancer type exposision of a deployment
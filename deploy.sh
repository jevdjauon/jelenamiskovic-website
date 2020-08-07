NAME=$1
DOMAINS="$( echo "$2" | tr  ';' ','  )"
EMAIL=$3
echo "=====> Building new docker image!"
cd /var/www/$NAME ; docker rmi -f $NAME ; docker stop $NAME ; docker rm $NAME ; docker build -t $NAME .
echo "=====> Deploying docker container!"
docker run -d --restart unless-stopped -e "VIRTUAL_HOST=$DOMAINS" -e "LETSENCRYPT_HOST=$DOMAINS" -e "LETSENCRYPT_EMAIL=$EMAIL" --network=webproxy --name $NAME $NAME
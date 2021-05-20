.PHONY: build push run

build:
	docker build -t "colbyashi-maru-nginx" .
	docker tag colbyashi-maru-nginx registry.digitalocean.com/devops-directive/colbyashi-maru-nginx:latest

push:
	docker push registry.digitalocean.com/devops-directive/colbyashi-maru-nginx:latest

run:
	docker run -p 8080:80 --env POD_NAME=value1 colbyashi-maru-nginx 
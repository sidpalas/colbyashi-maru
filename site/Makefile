build-image:
	docker build -t "colbyashi-maru-nginx" .
	docker tag colbyashi-maru-nginx registry.digitalocean.com/devops-directive/colbyashi-maru-nginx:latest

push-image:
	docker push registry.digitalocean.com/devops-directive/colbyashi-maru-nginx:latest

run:
	docker run -p 8080:80 colbyashi-maru-nginx 
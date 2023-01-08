push:build
	docker push fabrzy/bsqweb:v1

run:build
	docker run -p 3000:3000 -v $$(pwd):/data -d fabrzy/bsqweb:v1

build:prune
	docker build -t fabrzy/bsqweb:v1 .

prune:
	docker image prune -a

containerprune:
	docker kill $$(docker ps -q)


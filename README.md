# Overengineering Static Site Deployment with Kubernetes and Digital Ocean

Colby Fayock (@colbyfayock) recently hosted me on his series "Colbyashi Maru" in which guests take on a programming challenge within 60 minutes.

I decided to take the opportunity to give a rapid intro to containerization and kubernetes, while deploying a simple static site.

You can find the video recording here:
https://www.youtube.com/watch?v=ZXswn2ngkXo

# TODO list from the challenge:

I accomplished most, but not all of the desired tasks in the alloted time 😅

Core:
- [x] Create DO Project
- [x] Install doctl
- [x] Create cluster
- [x] Download credentials
- [x] Create site (Create React App)
- [x] Customize site w/ colbyashi maru branding 😁
- [x] Dockerize
- [x] Auth docker to DO container registry
- [x] Auth cluster to DO container registry
- [x] k8s deployment
- [x] k8s loadbalancer
- [ ] DNS A record
- [x] Scale replicas 🚀
- [x] Show upgrade process
- [ ] Expose node + pod name to prove multiple replicas
- [ ] Demo load balancing (custom background color based on hash of pod name)

Bonus:
- Github Actions
  - [ ] Container Build/Push
  - [ ] Kubernetes Deployment
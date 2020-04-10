<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lschlesinger/CS50-yoga-board-munich">
    <img src="frontend/src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">YOGA Board Munich</h3>

  <p align="center">
    This is a CS50 final project.
    <br />
    <a href="https://github.com/github_username/repo">View Demo</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo`, `twitter_handle`, `email`


### Built With

* [Spring Boot]()
* [Angular]()
* [PostgreSQL]()
* [Heroku]()
* [Docker]()


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
* maven
```sh
brew install maven
```
* java
```sh
brew cask install java
```
* angular cli
```sh
npm install -g @angular/cli
```
* [docker](https://docs.docker.com/docker-for-mac/install/)


### Installation
 
1. Clone the repo
```sh
git clone git@github.com:lschlesinger/CS50-yoga-board-munich.git
```
2. Install NPM packages
```sh
cd frontend
npm install
```

### Run
1. Start database, e.g. with docker
```sh
docker-compose -f docker-compose.dev.yml up
```
2. Start backend (can also be done from IDE), will run on port `8080`
```sh
./mvnw spring-boot:run
```
3. Start frontend (with proxy to backend), will run on port `4200`
```sh
cd frontend
npm start
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

# CMPE-273--Indeed-Application-Prototype

### Indeed Application Prototype Using REST (Node.js), Redux, React JS and SQL, Mongo, Kafka, Redis

### System Architecture
<img src="https://github.com/Archita22ind/Indeed-Application-Prototype-MERN/blob/main/images/SystemArchitecture.png">

### Object Management Policy

Since we had been given the freedom to use both MongoDB and MYSQL as our choice of database, therefore we added our schema less objects with heavy reads on the MongoDB and the object requiring more joins and strict schema on MySQL. Heavy reads were anticipated on objects like company reviews and messages so they were particularly maintained on MongoDB. The Job seeker profiles, Employee Profiles, Jobs Posted and Applications were among the important tables maintained on the MySQL DB allowing them to retain their ACID state. The fetching of Jobs Posted was also a huge weight API, so Redis Caching as well as Pagination was used.

We have used nginx for Load Balancing with its default round-robin algorithm with 3 server services. With Load balancing it is ensured that there is no single point of failure.Stored most frequently used data in Redis cache to minimize multiple hits to the backend APIs and reduce latency and system load. For objects like reviews which were anticipated to be huge in number for a single company, we used Redis caching to store the key value pair as company Id and their reviews. For the job search page the most frequent  What and Where typeahead filter search were also cached in Redis for quick lookups. Did set up multiple kafka brokers/servers to handle heavy traffic load and to avoid single point of failure by adapting distributed messaging mechanisms. Pagination has been added on the server side to fetch a limited number of jobs to display them as job cards on the main landing page of Indeed. This reduces the amount of data returned to the client in a single go. And since the number of jobs is intended to be huge in this application and could have taken some considerable amount of time and memory, adding pagination has been beneficial here. Also used AWS S3 for storing images and file upload instead of database or local server. increasing the read time and overall effectiveness.

          
### Few screen captures of the application

<img src="https://github.com/Archita22ind/Indeed-Application-Prototype-MERN/blob/main/images/applicationScreenshot1.png">

<img src="https://github.com/Archita22ind/Indeed-Application-Prototype-MERN/blob/main/images/applicationScreenshot2.png">

<img src="https://github.com/Archita22ind/Indeed-Application-Prototype-MERN/blob/main/images/applicationScreenshot3.png">

<img src="https://github.com/Archita22ind/Indeed-Application-Prototype-MERN/blob/main/images/applicationScreenshot4.png">

## Getting Started with the Github repository-

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need Node.js installed on your machine.

To install Node.js on Mac:

`brew install nodejs`

To install Node.js on Linux:

`brew install nodejs`

To install kafka on Mac, download the binary file from below link:

https://www.apache.org/dyn/closer.cgi?path=/kafka/3.0.0/kafka_2.13-3.0.0.tgz

On local machine unpack the .tgz file and go to the kafka_2.13-3.0.0 folder from terminal

To start zookeeper:
bin/zookeeper-server-start.sh config/zookeeper.properties

To start Kafka server:
bin/kafka-server-start.sh config/server.properties

To create topic:
bin/kafka-topics.sh --create --topic <topicname> --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092

(Script for topic creation provided)

## Installing

Clone the contents of the Git repository to your local:

Go into the Backend directory and run the following command:

`npm install`

Go into the Frontend directory and run the following command:

`npm install`

Go into the kafka-backend directory and run the following command:

`npm install`

To run the Backend, go into the Backend directory and run the following command:

`node app.js`

To run the Frontend, go into the Frontend directory and run the following command:

`export NODE_OPTIONS=--openssl-legacy-provider`
`npm start`

To run the kafka-backend, go into the kafka-backend directory and run the following command:

`node server.js`

To use the application, visit the following url from your browser: http://localhost:3000/


## The Project IoT with Docker
This project is used to improve several Docker concepts : 
* containers
* Dockerfile
* images
* volumes
* Docker Compose
* Docker Machine
* Swarm

## The application
### The simulator
- Sending data from IoT devices 
- The simulator send temperature data in the following JSON format : 
```
{
  ts: TIMESTAMP
  type: "temp"
  value: VALUE,
  sensor_id: ID_OF_THE_DEVICE_SENDING_THE_DATA
}

```
* get the current date
* generate a random number for the temperature (quite hot location btw)
* send the data in JSON using the *curl* command (note: the targeted API will run on port 1337 as we will see in the next step)
* wait 1 seconds and repeat

### The API
* HTTP API that receives the data
* Data stored then in database (InfluxDB)
* Visualisation done with Grafana, to build metrics and analytic dashboard
wcf vs nodejs load test
=======================

This source facilitates to compare the performance of 2 similar web services written in wcf and nodejs. Both services will iterate the factorial value of 20 in 1000000 at load testing. Bench-Rest is used for the load testing purpose.

##To begin
---

1. Need to install nodejs (http://nodejs.org/download/)
2. Need to install visual studio 2010 or higher with .net 4.0 framework.
3. Clone the project to your pc.(git clone https://github.com/prasadKodeInCloud/wcf-nodejs-load-test.git).

## Quick Start
---
###Run wcf service

- Open RestService  project solution in wcfService folder.
- Run the .net project.
- To check the web service Type http://localhost:35798/RestServiceImpl.svc/loop/10 in url.(port number may differ). If the service is up and running following result will be displayed as response.

  ```js
   {"LoopResult":"Done"}
    ```
###Run nodejs service

- Run the node service available in nodeService folder.

  node index.js
  
  

- To check the web service Type http://localhost:4730/loop/10 in url. If the service is up and running following result will be displayed as response.

  ```js
  {
  "Result": "Done"
  }
    ```
 ###Do the load testing
 
- open two command prompts and set the loadTest folder as the root folder.
- In the first window run 
     
    node loadTestWCF.js
	
	
    
to load test the wcf web service.
- In the second window run 
   
    node loadTestNode.js
	
	
    
to load test the nodejs web service.
- You can compare the performance of two services changing the limit and iterations properties in loadTestWCF.js file and loadTestNode.js file. 
- Please refer to the bench-rest docs(https://github.com/jeffbski/bench-rest#stats-metrics-and-errorcount-benchmark-results) to analyze the output. 

## Advanced
---

For advanced testing, you can run the wcf service in IIS server with advanced settings optimizing the performance.

## Contribution
---
- Anyone can contribute writing web services in various scenarios as I/O incentive and CPU incentive. 
- It will be nice if a graphical interface is available to view the results.


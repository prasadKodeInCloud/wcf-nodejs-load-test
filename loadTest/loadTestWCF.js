 var benchrest = require('bench-rest');
 var flow = {
    main: [
		//This will iterate the factorial 20 execution function in 1000000 times.
		 { get: "http://localhost:35798/RestServiceImpl.svc/loop/1000000" }
    ]
  };
  
  var runOptions = {
    limit: 1,     // concurrent connections
    iterations: 10//, // total number of iterations to perform
	//prealloc: 1
  };
  
  benchrest(flow, runOptions)
    .on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
    .on('end', function (stats, errorCount) {
      console.log('error count: ', errorCount);
      console.log('stats', stats);
  });
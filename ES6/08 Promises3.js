	/*
  always remember this:
  
 When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:
resolve(value) — if the job finished successfully, with result value.
reject(error) — if an error occurred, error is the error object.
  */
  
  
  
  const delay = seconds => {
			return new Promise((resolve, reject) => {
				if(typeof seconds !== 'number') {
					reject(new Error('Argument seconds must be a number'));
				}
				setTimeout(
					() => resolve(`${seconds} second delay is up`),  
					seconds * 1000
				);
			});
		};

		console.log("zero seconds");
		delay("10 Minutes").then(msg => msg.toUpperCase())
				.then(msg => `${msg}!!!!!!`)
				.then(msg => console.log(msg));
		delay(2).then(msg => msg.toUpperCase())
				.then(msg => `${msg}!!!!!!`)
				.then(msg => console.log(msg));		
		


for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

/*
So what's happening is that the global var i is hoisted to the global scope which basically mean
the current value of i at the time won't be available to function log when it runs after the timeout
delay. So on loop 1, setTimeout is called and function log is sent to the browser and then to the
callback queue in the JavaScript event loop. Loop 2 and loop 3 does the same thing and send their own
unction logs through the event loop. So now there is three function logs calls in the callback queue
and they will only run after the call stack is cleared i.e. the three function logs will run after
the main function/for loop finish running. When the for loop completes, global var i will be equal
to 3. The three function logs will now each console.log global var i aka 3, 3, 3.
*/

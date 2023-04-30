let d = new Date();
let time = d.toLocaleTimeString();

(function loop() {
    setTimeout(() => {
      console.log(time);
      loop();
    }, 1000);
  })();
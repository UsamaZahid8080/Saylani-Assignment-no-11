//Write a JavaScript program to create a Clock.
let Clock = {
    showTime: function(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        console.log(`${hours}:${minutes}:${seconds}`);
    },
    run : function(){
        setInterval(this.showTime ,1000);
    }
};
Clock.run();
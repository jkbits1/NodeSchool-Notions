/**
 * Created by jk on 07/11/15.
 */


var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => {
      console.log(this.yelp);
    })
  }
};

foot.kick();
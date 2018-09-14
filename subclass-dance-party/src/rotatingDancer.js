var RotatingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.pos = 50;
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
RotatingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var styleSetting = {
    position: 'absolute',
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderBottom: '50px solid blue',
    transform: 'rotate(' + this.pos + 'deg)'
  };
  this.$node.css(styleSetting);
  this.pos += 50;
};
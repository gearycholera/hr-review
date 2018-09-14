var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  var styleSettings = {
    border: '10px solid red',
    borderRadius: '10px',
    position: 'absolute'
  };
  this.$node.css(styleSettings);
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
function ImageViewer(totalImages, idSelector){
  this.imageCount = 1;
  this.totalImages = totalImages;
  this.rootIdSelector = idSelector;
}
ImageViewer.prototype.slide = function(x){
  var image = document.getElementsByClassName("event-img")[0];
  this.imageCount = this.imageCount + x;
  if(this.imageCount < 1){
    this.imageCount = this.totalImages;
  }
  if(this.imageCount > this.totalImages){
    this.imageCount = 1;
  }
  image.src = "./../../../assets/images/events/" + this.rootIdSelector + "/" + this.imageCount + ".jpg";
}
function checkKeyCode(event, imageViewerObject){
  // handling Internet Explorer stupidity with window.event
  // @see http://stackoverflow.com/a/3985882/517705
  var keyDownEvent = event || window.event, keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
  switch (keyDownEvent.keyCode) {
    case 37: //Left Arrow
      imageViewerObject.slide(-1);
      break;
    case 39: //Right Arrow
      imageViewerObject.slide(1);
      break;
  }
}

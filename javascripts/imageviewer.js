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
var longhornrun = new ImageViewer(13, "longhornrun2016");
var godstock = new ImageViewer(77, "godstock2016");
var sxswgamingexpo = new ImageViewer(15, "sxswgamingexpo2016");
var holi2016 = new ImageViewer(31, "holi2016");
var motogp2016 = new ImageViewer(24, "motogp2016");

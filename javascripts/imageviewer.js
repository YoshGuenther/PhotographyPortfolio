function ImageViewer(totalImages, idSelector){
  this.imageCount = 1;
  this.totalImages = totalImages;
  this.rootIdSelector = idSelector;
}
ImageViewer.prototype.slide = function(x){

  var image = document.getElementById(this.rootIdSelector).getElementsByTagName("img")[0];
  console.log(image);
  this.imageCount = this.imageCount + x;
  console.log(this.imageCount);
  if(this.imageCount < 1){
    this.imageCount = this.totalImages;
  }
  if(this.imageCount > this.totalImages){
    this.imageCount = 1;
  }
  image.src = "./../../assets/images/" + this.rootIdSelector + "/" + this.imageCount + ".jpg";
  console.log(image.src);
}
var longhornrun = new ImageViewer(13, "longhornrun2016");
var godstock = new ImageViewer(10, "godstock2016");

//js of gallery pge for effervecence 

//add url of the loacation from where you want to 
//load images.

var baseUrl = 'image/gallery_img/',
    baseUrl2 = 'image/gallery_thumb/', 
    loader = new PxLoader(); 
 
// add 60 images from gallery_img to the queue 
for(var i=1; i <= 60; i++) {  
    var pxImage = new PxLoaderImage(baseUrl +  i + '.jpg'); 
    
    //not required only for future manipulation
    pxImage.imageNumber = i + 1; 
 
    loader.add(pxImage); 
}
//add 60 images from gallery_thumb to the queue
for(var i=1; i <= 60; i++) { 
    var pxImage = new PxLoaderImage(baseUrl2 + i + '.jpg'); 
 
    // not required only for future manipulation 
    pxImage.imageNumber = i + 1; 
 
    loader.add(pxImage); 
} 
 
// callback that runs every time an image loads 
loader.addProgressListener(function(e) {
    //to get the ratio of iamges loaded
    var loadedRatio = e.completedCount / e.totalCount;
    //change the max-width property of 
    // #load to get our projector effect
    //change the duration if required
    $('#load')
    .animate({
        maxWidth : (loadedRatio) * 12 + 'em'
    }, 10, function(){
        if (loadedRatio == 1) {
            $('.loader').fadeOut(400);
        }
    });
}); 
 
loader.start(); 
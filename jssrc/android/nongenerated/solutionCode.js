//Type your code here
/**
 * @function createPinImage
 *
 */
function createPinImage() {
    var pinImage = kony.image.createImageFromSnapShot(frmHome.flexMaster);
    frmHome.capturedImage.rawBytes = pinImage.getImageAsRawBytes();
    //alert (pinImage);
}
function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flexMaster = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "195dp",
        "id": "flexMaster",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "5%",
        "width": "40.39%",
        "zIndex": 1
    }, {}, {});
    flexMaster.setDefaultUnit(kony.flex.DP);
    var imgEmptyPin = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "103dp",
        "id": "imgEmptyPin",
        "isVisible": true,
        "skin": "slImage",
        "src": "pin.png",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgActivites = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "40dp",
        "id": "imgActivites",
        "isVisible": true,
        "skin": "slImage",
        "src": "activities.png",
        "width": "45dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMaster.add(imgEmptyPin, imgActivites);
    var btnCaptureScreenAndShare = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnCaptureScreenAndShare",
        "isVisible": true,
        "left": "42dp",
        "onClick": AS_Button_7330e3ccedda4e599be5f83d333526c9,
        "skin": "slButtonGlossBlue",
        "text": "Capture And Share",
        "top": "271dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var capturedImage = new kony.ui.Image2({
        "centerX": "50%",
        "height": "85dp",
        "id": "capturedImage",
        "isVisible": true,
        "left": "127dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "372dp",
        "width": "105dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(flexMaster, btnCaptureScreenAndShare, capturedImage);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "aaf8907878df4090b3e76e6d46af8bc0"
    };
};
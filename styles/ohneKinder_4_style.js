var size = 0;
var placement = 'point';

var style_ohneKinder_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Multimodalitätspotenzial ohne Kinder");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 2.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,174,148,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.100000 && value <= 4.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,205,193,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4.100000 && value <= 6.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,212,153,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.100000 && value <= 8.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,160,231,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8.100000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(95,0,168,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

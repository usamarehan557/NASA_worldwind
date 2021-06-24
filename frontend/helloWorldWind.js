var wwd = new WorldWind.WorldWindow("canvasOne");


wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);
			
			
placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";

var position = new WorldWind.Position(55.0, -106.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

placemark.label = "Placemark\n" +
    "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    "Lon " + placemark.position.longitude.toPrecision(5).toString();
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

var kmlFilePromise = new WorldWind.KmlFile('neworkKML.KML', [new WorldWind.KmlTreeVisibility('treeControls', wwd)]);
kmlFilePromise.then(function (kmlFile) {
    var renderableLayer = new WorldWind.RenderableLayer("Surface Shapes");
    renderableLayer.currentTimeInterval = [
        new Date("Mon Aug 09 2015 12:10:10 GMT+0200 (Střední Evropa (letní čas))").valueOf(),
        new Date("Mon Aug 11 2015 12:10:10 GMT+0200 (Střední Evropa (letní čas))").valueOf()
    ];
    renderableLayer.addRenderable(kmlFile);

    wwd.addLayer(renderableLayer);
    wwd.redraw();
});

//var polygonLayer = new WorldWind.RenderableLayer();
//wwd.addLayer(polygonLayer);
//
//
//var polygonAttributes = new WorldWind.ShapeAttributes(null);
//polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.75);
//polygonAttributes.outlineColor = WorldWind.Color.BLUE;
//polygonAttributes.drawOutline = true;
//polygonAttributes.applyLighting = true;
//
//
//
//var boundaries = [];
//boundaries.push(new WorldWind.Position(20.0, -75.0, 700000.0));
//boundaries.push(new WorldWind.Position(25.0, -85.0, 700000.0));
//boundaries.push(new WorldWind.Position(20.0, -95.0, 700000.0));
//
//var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
//polygon.extrude = true;
//polygonLayer.addRenderable(polygon);
//
//

//var modelLayer = new WorldWind.RenderableLayer();
//wwd.addLayer(modelLayer);
//
//var position = new WorldWind.Position(10.0, -125.0, 800000.0);
//var config = {dirPath: WorldWind.configuration.baseUrl + 'examples/collada_models/duck/'};
//var colladaLoader = new WorldWind.ColladaLoader(position, config);
//
//
//colladaLoader.load("duck.dae", function (colladaModel) {
//    colladaModel.scale = 900;
//    modelLayer.addRenderable(colladaModel);
//});


//var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
//var layerName = "MOD_LSTD_CLIM_M";
//
//
//var createLayer = function (xmlDom) {
//    var wms = new WorldWind.WmsCapabilities(xmlDom);
//    var wmsLayerCapabilities = wms.getNamedLayer(layerName);
//    var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
//    var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
//    wwd.addLayer(wmsLayer);
//};
//
//var logError = function (jqXhr, text, exception) {
//    console.log("There was a failure retrieving the capabilities document: " +
//        text +
//    " exception: " + exception);
//};




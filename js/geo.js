/*function initialize() {
    // Configuración del mapa
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var ubicacion = document.getElementById("ubicacion");
    ubicacion.innerHTML = "lat: " + lat + ", " + "lng: " + lng;
    var c = new google.maps.LatLng(lat,lng);
    var mapProp = {
      center: c,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
*/
window.onload = function(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(initialize, errorUbicacion);
  }else {
      alert("No se pudo obtener la ubicación");
  }
}
    function initialize(position) {
      // Configuración del mapa
        var lng = position.coords.longitude;
        var lat = position.coords.latitude;

        var ubicacion = document.getElementById("ubicacion");
        ubicacion.innerHTML = "lat: " + lat + ", " + "lng: " + lng;
        var c = new google.maps.LatLng(lat,lng);
          var mapProp = {
            center: c,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
            var map = new google.maps.Map(document.getElementById('mapa'), {
              mapTypeControl: true,
              mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ['roadmap', 'terrain']
              }
            });
          
        // Agregando el mapa al tag de id googleMap
        var map = new google.maps.Map(document.getElementById("mapa"), mapProp);
        // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
        var infowindow = new google.maps.InfoWindow({
          content: "<strong>Esta es mi ubicacion. </strong>"
        });
        // Creando un marker en el mapa
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lng),
          map: map,
          title: 'ubicacion del dispositivo'
        });  
        // Al hacer click sobre el marker mostraremos su información en una ventana
        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
          });
          marker.addListener('mouseout',function(){
          infowindow.close(map, marker);
          });
    ////puntos para el poligono en la udea
        var puntosUdeA=[
          {lat:6.2700115,lng:-75.5693479 },
          {lat:6.2694076 ,lng:-75.5676823 },
          {lat:  6.2660952 ,lng:-75.5683617 },
          {lat:6.2659379 ,lng:-75.5702393},
      ];
      var poligono = new google.maps.Polygon({
        paths: puntosUdeA,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      poligono.setMap(map);
      var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(6.267967, -75.569098),
        map: map,
        title: 'Título de ejemplo'
      });
      var infowindow2 = new google.maps.InfoWindow({
        content:  "<img src='js/udea.png'>" + "<strong> <h1>Universidad de antioquia</h1><p>La Universidad de Antioquia​ es la institución de educación superior más importante del departamento de Antioquia, sujeta a inspección y vigilancia por medio de la Ley 1740 de 2014 y la ley 30 de 1992 del Ministerio de Educación de Colombia.</p> </strong>"
      });
      marker2.addListener('mouseover', function() {
        infowindow2.open(map, marker2);
        });
        marker2.addListener('mouseout',function(){
        infowindow2.close(map, marker2);
        });
        marker2.addListener('dblclick',function(){ 
          window.location.href="https://www.udea.edu.co";
   });
////colegio mayor de antioquia.
var puntoscolma=[

  {lat:6.273839,lng:-75.592317 },
  {lat:6.273650, lng:-75.591073 },
  {lat:6.272690, lng: -75.591242},
  {lat:  6.273343, lng: -75.592822 },
  
];
var poligono3 = new google.maps.Polygon({
paths: puntoscolma,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono3.setMap(map);
var marker3 = new google.maps.Marker({
position: new google.maps.LatLng(6.273230, -75.592008),
map: map,
title: 'Título de ejemplo'
});
var infowindow3 = new google.maps.InfoWindow({
  content:  "<img src='js/colma.png'>" + "<strong><p>Mediante la Ley 48 de diciembre 17 de 1945 se crean en Colombia los Colegios Mayores de la Cultura Femenina, y entre ellos el de Antioquia. La actividad académica se inicia el 1º. de marzo de 1946, y hasta 1975 los programas académicos adquirían el carácter de Educación Técnica Profesional.</p></strong>"
});
marker3.addListener('mouseover', function() {
  infowindow3.open(map, marker3);
  });
  marker3.addListener('mouseout',function(){
  infowindow3.close(map, marker3);
  });
  marker3.addListener('dblclick',function(){
    window.location.href="https://www.colmayor.edu.co";
});
////universidad nacional. facultad de minas
var puntosun=[
  {lat:6.276057, lng: -75.590987 },
  {lat:6.275952, lng: -75.593143 },
  {lat:6.273711, lng: -75.593741},
  {lat: 6.274095, lng: -75.590593 },
];
var poligono4 = new google.maps.Polygon({
paths: puntosun,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono4.setMap(map);
var marker4 = new google.maps.Marker({
position: new google.maps.LatLng(6.274760, -75.592328),
map: map,
title: 'Título de ejemplo'
});
var infowindow4 = new google.maps.InfoWindow({
  content:  "<img src='js/unal.png'>" + "<strong>facultad de minas <p>La Universidad Nacional de Colombia fue creada en 1867 por medio de la expedición de la Ley 66 del Congreso de la República, como un ente universitario </p></strong>"
});
marker4.addListener('mouseover', function() {
  infowindow4.open(map, marker4);
  });
  marker4.addListener('mouseout',function(){
  infowindow4.close(map, marker4);
  });
  marker4.addListener('dblclick',function(){
    window.location.href="https://medellin.unal.edu.co";
});

//universidad nacional
var puntosun=[
  {lat:6.266190, lng: -75.576936},
  {lat:6.264906, lng: -75.575282 },
  {lat:6.259681, lng:  -75.575266},
  {lat: 6.260126, lng: -75.579937 },
];
var poligono5 = new google.maps.Polygon({
paths: puntosun,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono5.setMap(map);
var marker5 = new google.maps.Marker({
position: new google.maps.LatLng(6.262280, -75.577246),
map: map,
title: 'Título de ejemplo'
});
var infowindow5 = new google.maps.InfoWindow({
  content:  "<img src='js/unal.png'>" + "<strong><p>La Universidad Nacional de Colombia fue creada en 1867 por medio de la expedición de la Ley 66 del Congreso de la República, como un ente universitario </p></strong>"

});
marker5.addListener('mouseover', function() {
  infowindow5.open(map, marker5);
  });
  marker5.addListener('mouseout',function(){
  infowindow5.close(map, marker5);
  });
  marker5.addListener('dblclick',function(){
    window.location.href="https://medellin.unal.edu.co";
});

//politecnico jaime isasa
var puntospoli=[
  {lat:6.213092, lng: -75.577424},
  {lat:6.212940, lng: -75.576397 },
  {lat:6.208866, lng: -75.576752},
  {lat: 6.208944, lng: -75.578025 },
];
var poligono6 = new google.maps.Polygon({
paths: puntospoli,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono6.setMap(map);
var marker6 = new google.maps.Marker({
position: new google.maps.LatLng(6.211704, -75.577029),
map: map,
title: 'Título de ejemplo'
});
var infowindow6 = new google.maps.InfoWindow({
  content:  "<img src='js/poli.jpg'>" + "<strong><p>El Politécnico Colombiano Jaime Isaza Cadavid es una Institución Universitaria de Colombia, con sede principal en la ciudad de Medellín. Se encuentra adscrita al Gobierno Departamental de Antioquia y fue fundada en marzo de 1963.</p></strong>"

});
marker6.addListener('mouseover', function() {
  infowindow6.open(map, marker6);
  });
  marker6.addListener('mouseout',function(){
  infowindow6.close(map, marker6);
  });
  marker6.addListener('dblclick',function(){
    window.location.href="https://www.politecnicojic.edu.co/";
});

//instituto tecnologico metropolitano
var puntositm=[
  {lat:6.274510, lng: -75.589432},
  {lat:6.273218, lng: -75.588982 },
  {lat:6.273611, lng: -75.587844},
  {lat: 6.274738, lng: -75.588355 },
];
var poligono7 = new google.maps.Polygon({
paths: puntositm,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono7.setMap(map);
var marker7 = new google.maps.Marker({
position: new google.maps.LatLng(6.273938, -75.588698),
map: map,
title: 'Título de ejemplo'
});
var infowindow7 = new google.maps.InfoWindow({
  content:  "<img src='js/itm.png'>" + "<strong><p>Instituto Tecnológico Metropolitano. Fondo de Empleados ITM - FEITM · Asociación Sindical ITM - ASITM · ASODITEM · Campus Robledo · Campus Fraternidad .</p></strong>"

});
marker7.addListener('mouseover', function() {
  infowindow7.open(map, marker7);
  });
  marker7.addListener('mouseout',function(){
  infowindow7.close(map, marker7);
  });
  marker7.addListener('dblclick',function(){
    window.location.href="https://www.itm.edu.co";
});

//institucion universitaria de envigado
var puntosenv=[
  {lat:6.160635, lng: -75.581434},
  {lat:6.160711, lng: -75.581112 },
  {lat:6.158959, lng: -75.580369},
  {lat:6.158765, lng: -75.580947 },
];
var poligono8 = new google.maps.Polygon({
paths: puntosenv,
strokeColor: '#FF0000',
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: '#FF0000',
fillOpacity: 0.35
});
poligono8.setMap(map);
var marker8 = new google.maps.Marker({
position: new google.maps.LatLng(6.159403, -75.580830),
map: map,
title: 'Título de ejemplo'
});
var infowindow8 = new google.maps.InfoWindow({
content:  "<img src='js/envi.png'>" + "<strong><p>La Institución Universitaria de Envigado es una institución de educación superior ubicada en el municipio de Envigado en el departamento de Antioquia, Colombia.</p></strong>"

});
marker8.addListener('mouseover', function() {
infowindow8.open(map, marker8);
});
marker8.addListener('mouseout',function(){
infowindow8.close(map, marker8);
});
marker8.addListener('dblclick',function(){
         window.location.href="www.iue.edu.co";
  });
}
  function errorUbicacion(){
    alert("Error al cargar la ubicación");
}


  // Inicializando el mapa cuando se carga la página
 // google.maps.event.addDomListener(window, 'load', initialize);



//var mapa;/*/*/*
/*
var locations =[
    {lat:6.267704, lng:-75.568570},
  //  {lat: 6.262212,lng: -75.576413},
];
window.onload = function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(visualizarUbicacion, errorUbicacion);
    }else {
        alert("No se pudo obtener la ubicación");
    }
}

function visualizarUbicacion(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var ubicacion = document.getElementById("ubicacion");
    ubicacion.innerHTML = "lat: " + lat + ", " + "lng: " + lng;

    //alert(lat + "," + lng);

    var m = document.getElementById("mapa");
    var c = new google.maps.LatLng(lat,lng);

    var opcionesTypeControl = {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
       // position:google.maps.position.TOP_CENTER,

    }

    var opciones = {
        zoom: 15,
        center: c,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoomControl: true,
        fullscreenControl: false,
        streeViewControl: false,
        mapTypeControl: true,
      //  mapTypeControlOptions:opcionesTypeControl
    }
    
    var mapa = new google.maps.Map(m,opciones); // mapa = new google.maps.Map(donde va en la página, opciones mapa);

    var opcionesMarca = {
        position: c,
        map: mapa,
       // label:"u",
       icon:"js/yo.png",
        title: "Ubicación del dispositivo",
        animation: google.maps.Animation.BOUNCE
    }

    var marca = new google.maps.Marker(opcionesMarca); // mapa = new google.maps.Marker(opciones marcador);
    marcadores =[]
    for( var i=0; i<locations.length; i++){

        var opcionesMarca = {
            position: locations[i],
            map: mapa,
           // label:"u",
           icon:"js/img/school.png",
            title: "Ubicación del dispositivo",
            animation: google.maps.Animation.BOUNCE
        }
       // var marcaUsuario = new google.maps.Marker(opcionesMarcaUsuario); // mapa = new google.maps.Marker(opciones marcador);
        marcadores.push(new google.maps.Marker(opcionesMarca));
        marcadores[i].addListener('mouseover',function(){
            this.setIcon({
                url :"js/img/school.png",
               //url: this.icon.url,
                scaledSize: new google.maps.Size(100,100)
                
            });
        });
       
        marcadores[i].addListener('mouseout',function(){
            this.setIcon({
                url :"js/img/school.png",
               //url: this.icon.url,
                scaledSize: new google.maps.Size(50,50)
            });
        });
    }
  //ss  var icono={imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}
  //  var cluster = new MarkerClusterer (mapa,  marcadores, icon);
   var puntosUdeA=[
       {lat:6.2700115,lng:-75.5693479 },
       {lat:6.2694076 ,lng:-75.5676823 },
       {lat:  6.2660952 ,lng:-75.5683617 },
       {lat:6.2659379 ,lng:-75.5702393},
   ];
  /* var opcionesPoligono={
       strokeColor: "#FF0000",
       strokeOpacity: 0.8,
       strokeWeight: 2,
       fillColor: "#FF0000",
       fillOpacity: 0.3
   }*/
// Construyendo el póligono
/*
var poligono = new google.maps.Polygon({
    paths: puntosUdeA,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  poligono.setMap(mapa);


*/



  // var UdeaA = new google.maps.Polygon(opcionesPoligono);
 //  UdeaA.setMap;
//    marca.addListener('click',function(){
//        window.location.href="http://ww.google.com";
//    })
  //  mapa.addListener('click',agregarMarca);
//UdeaA.addListener('mouseover',mostrarinfo);
   // mapa.addListener('zoom_changed',agrupar);
//    }
    /*
function agrupar(){
    var icono={imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"};
    var cluster = new MarkerClusterer (mapa,  marcadores, icon);
}
function agregarMarca(event){
    var opcionesMarca = {
        position: event.latLng,
        map: mapa,
        animation: google.maps.Animation.DROP
    }

    var marca = new google.maps.Marker(opcionesMarca); // mapa = new google.maps.Marker(opciones marcador);
    marca.push(marca);
}*/
/*
function mostrarinfo(){
    var info = new google.maps.infoWindow;
    var contenido ="<h1>universidad de dantioquia<h1>";
    info.setContent(contenido);
    info.setPosition(event.latLng);
    info.open(mapa);
}
function errorUbicacion(){
    alert("Error al cargar la ubicación");
}
*/
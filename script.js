const container = document.getElementById("chart");

var csvData = [0, 0];
var map;
var colourfulMode = true;
var premSelect = fltAll;

// Define constants grouping Sup Line Nos. into premises types
const fltAll = ['A01A  ', 'A01H  ', 'A02A  ', 'A02B  ', 'A02H  ', 'A03A  ', 'A04A  ', 'A04H  ', 'A05A  ', 'A06A  ', 'A07A  ', 'A07B  ', 'A07C  ', 'B06A  ', 'B06B  ', 'B07A  ', 'B07B  ', 'B08A  ', 'B08B  ', 'B08C  ', 'B08D  ', 'C09A  ', 'C09B  ', 'C09C  ', 'C09D  ', 'C09E  ', 'C09F  ', 'C10A  ', 'C10B  ', 'C11A  ', 'C12A  ', 'C13A  ', 'C13A04', 'C13A05', 'C13A06', 'C13A07', 'C13A08', 'C13A09', 'C13A10', 'C13A11', 'C13A12', 'C14A  ', 'C14B  ', 'C14C  ', 'C14H  ', 'C15A  ', 'C15B  ', 'C15C  ', 'C15D  ', 'C16A  ', 'C16B  ', 'C16B03', 'C16B04', 'C16B05', 'C16B06', 'C16B07', 'C16B08', 'C16B09', 'C16B10', 'C16B11', 'C16B12', 'C16C  ', 'C16D  ', 'C16E  ', 'C16F  ', 'C16G  ', 'C16H  ', 'D17A  ', 'D18A  ', 'D19   ', 'D19A  ', 'D19B  ', 'D20A  ', 'D21A  ', 'D21B  ', 'D21C  ', 'D21D  ', 'D22A  ', 'D22B  ', 'D22C  ', 'D23A  ', 'D24A  ', 'D24B  ', 'D24C  ', 'D24D  ', 'D25A  ', 'D26A  ', 'D27A  ', 'D27B  ', 'D27C  ', 'D27D  ', 'D27E  ', 'D27F  ', 'D27G  ', 'D27H  ', 'D27I  ', 'D27J  ', 'D27K  ', 'D27L  ', 'D27M  ', 'D27N  ', 'D27O  ', 'D27P  ', 'D27Q  ', 'D27R  ', 'D27S  '];
const fltAllDP = ['C16E  '];
const fltAllOB = ['A01A  ', 'A01H  ', 'A02A  ', 'A02B  ', 'A02H  ', 'A03A  ', 'A04A  ', 'A04H  ', 'A05A  ', 'A06A  ', 'A07A  ', 'A07B  ', 'A07C  ', 'B06A  ', 'B06B  ', 'B07A  ', 'B07B  ', 'B08A  ', 'B08B  ', 'B08C  ', 'B08D  ', 'C09A  ', 'C09B  ', 'C09C  ', 'C09D  ', 'C09E  ', 'C09F  ', 'C10A  ', 'C10B  ', 'C11A  ', 'C12A  ', 'C13A  ', 'C13A04', 'C13A05', 'C13A06', 'C13A07', 'C13A08', 'C13A09', 'C13A10', 'C13A11', 'C13A12', 'C14A  ', 'C14B  ', 'C14C  ', 'C14H  ', 'C15A  ', 'C15B  ', 'C15C  ', 'C15D  ', 'C16A  ', 'C16B  ', 'C16B03', 'C16B04', 'C16B05', 'C16B06', 'C16B07', 'C16B08', 'C16B09', 'C16B10', 'C16B11', 'C16B12', 'C16C  ', 'C16D  ', 'C16F  ', 'C16G  ', 'C16H  ', 'D17A  ', 'D18A  ', 'D19   ', 'D19A  ', 'D19B  ', 'D20A  ', 'D21A  ', 'D21B  ', 'D21C  ', 'D21D  ', 'D22A  ', 'D22B  ', 'D22C  ', 'D23A  ', 'D24A  ', 'D24B  ', 'D24C  ', 'D24D  ', 'D25A  ', 'D26A  ', 'D27A  ', 'D27B  ', 'D27C  ', 'D27D  ', 'D27E  ', 'D27F  ', 'D27G  ', 'D27H  ', 'D27I  ', 'D27J  ', 'D27K  ', 'D27L  ', 'D27M  ', 'D27N  ', 'D27O  ', 'D27P  ', 'D27Q  ', 'D27R  ', 'D27S  '];
const fltHotel = ['A01A  ','C16A  '];
const fltFactory = ['A02A  ','B06A  '];
const fltWarehouse = ['A02B  '];
const fltOffice = ['A03A  ','B07A  '];
const fltShop = ['A04A  ','A04H  ','B08A  '];
const fltLic = ['D21A  '];
const fltWaste = ['A06A  '];
const fltSolar = ['A07A  ','A07B  ','A07C  '];
const fltCare = ['C09A  ','C09B  ','C09C  ','C09D  ','C09E  ','C09F  '];
const fltHealth = ['C10A  ','D27B  ','D27C  ','D27D  '];
const fltSchool = ['C11A  ','C12A  ','D24A  ','D24B  ','D24C  ','D24D  ','D27E  '];
const fltFlats = ['C13A  ','C13A04','C13A05','C13A06','C13A07','C13A08','C13A09','C13A10','C13A11','C13A12'];
const fltHmo = ['C14A  ','C14B  ','C14C  ','C14H  ','C15A  ','C15B  ','C15C  ','C15D  '];
const fltSleep = ['C16B  ','C16B04','C16B05','C16B06','C16B07','C16B08','C16B09','C16B10','C16B11','C16B12','C16C  ','C16D  ','C16E  ','C16F  ','C16G  ','C16H  '];
const fltProp = ['D19   ','D19A  ','D19B  ',];
const fltSport = ['D25A  ','D26A  '];
const fltComm = ['D20A  ','D27A  '];
const fltOther = ['D22A  ','D23A  ','D27F  ','D27G  ','D27H  ','D27I  ','D27K  ','D27L  ','D27M  ','D27N  ','D27O  ','D27P  ','D27Q  ','D27R  ','D27S  '];

// Co-ordinates of preset locations throughout county, each array is [latitude, longitude, zoom level]
const northants = [52.283333, -0.833333, 10];
const westNorthants = [52.237, -0.895, 11];
const northNorthants = [52.4, -0.728, 11];
const northampton = [52.237396, -0.894633, 13];
const daventry = [52.263278, -1.162778, 14];
const brackley = [52.032, -1.147, 14];
const towcester = [52.13, -0.99, 14];
const corby = [52.48768, -0.7013, 13];
const kettering = [52.39312, -0.72292, 13];
const wellingborough = [52.302778, -0.674444, 14];

// Convert Sup Line No to more useful grouping
var slnLookup = {
"A01A  ": "Hotel",
"A02A  ": "Factory",
"A02B  ": "Warehouse",
"A03A  ": "Office",
"A04A  ": "Shop",
"A04H  ": "Shop",
"A05A  ": "Lic",
"A06A  ": "Waste",
"A07A  ": "Solar",
"A07B  ": "Solar",
"A07C  ": "Solar",
"B06A  ": "Factory",
"B07A  ": "Office",
"B08A  ": "Shop",
"C09A  ": "Care",
"C09B  ": "Care",
"C09C  ": "Care",
"C09D  ": "Care",
"C09E  ": "Care",
"C09F  ": "Care",
"C10A  ": "Health",
"C10B  ": "Health",
"C11A  ": "School",
"C12A  ": "School",
"C13A  ": "Flats",
"C13A04": "Flats",
"C13A05": "Flats",
"C13A06": "Flats",
"C13A07": "Flats",
"C13A08": "Flats",
"C13A09": "Flats",
"C13A10": "Flats",
"C13A11": "Flats",
"C13A12": "Flats",
"C14A  ": "Hmo",
"C14B  ": "Hmo",
"C14C  ": "Hmo",
"C14H  ": "Hmo",
"C15A  ": "Hmo",
"C15B  ": "Hmo",
"C15C  ": "Hmo",
"C15D  ": "Hmo",
"C16A  ": "Hotel",
"C16B  ": "Sleep",
"C16B03": "Sleep",
"C16B04": "Sleep",
"C16B05": "Sleep",
"C16B06": "Sleep",
"C16B07": "Sleep",
"C16B08": "Sleep",
"C16B09": "Sleep",
"C16B10": "Sleep",
"C16B11": "Sleep",
"C16B12": "Sleep",
"C16C  ": "Sleep",
"C16D  ": "Sleep",
"C16E  ": "Sleep",
"C16F  ": "Sleep",
"C16G  ": "Sleep",
"C16H  ": "Sleep",
"D19   ": "Prop",
"D19A  ": "Prop",
"D19B  ": "Prop",
"D20A  ": "Comm",
"D21A  ": "Lic",
"D22C  ": "Other",
"D23A  ": "Other",
"D24A  ": "School",
"D24B  ": "School",
"D24C  ": "School",
"D24D  ": "School",
"D25A  ": "Sport",
"D26A  ": "Sport",
"D27A  ": "Comm",
"D27B  ": "Health",
"D27C  ": "Health",
"D27D  ": "Health",
"D27E  ": "School",
"D27F  ": "Other",
"D27G  ": "Other",
"D27H  ": "Other",
"D27I  ": "Other",
"D27K  ": "Other",
"D27L  ": "Other",
"D27M  ": "Other",
"D27N  ": "Other",
"D27O  ": "Other",
"D27P  ": "Other",
"D27Q  ": "Other",
"D27R  ": "Other",
"D27S  ": "Other"
  }

// Colour key
var colourKey = {
  "Hotel": "#ce535e",
  "Factory": "#ba5118",
  "Warehouse": "#e1a602",
  "Office": "#b69f5e",
  "Shop": "#649a9f",
  "Lic": "#701C62",
  "Waste": "#8C5762",
  "Solar": "#90AD1C",
  "Care": "#39AF5B",
  "Health": "#ab2328",
  "School": "#7688BB",
  "Flats": "#2B648E",
  "Hmo": "#4F4351",
  "Sleep": "#DE67B4",
  "Prop": "Silver",
  "Sport": "SeaGreen",
  "Comm": "violet",
  "Other": "Tomato",
};
/*
window.addEventListener("DOMContentLoaded", (event) => {
toggleButtonDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

toggleButtonColor.addEventListener('click', () => {
  document.body.classList.toggle('color-mode');
  colorfulMode = !colorfulMode;
});
});
*/
var mapCentre = northants;

// values for PROJ4JS National Grid to Lat/Long conversion
//proj4.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy  +units=m +no_defs +type=crs");
//proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs +type=crs");
const osEn = new L.Proj.CRS('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs', {
        resolutions: [ 896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75 ],
        origin: [ -238375.0, 1376256.0 ]
    });

//console.log(proj4(osgb,wgs84,[475377, 260114]))

function initMap() {
  map = L.map('map')

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    crs: osEn,
    maxZoom: 19,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

  map.setView([mapCentre[0], mapCentre[1]], mapCentre[2]);
}

function getTooltipContent(d) {
  var content = '';
  content += '<h4>' + d.P_OCCUPIER + '</h4>';
  content += '<div>' + d.P_PREMID + '</div>';
  content += '<div>' + d.P_PROPNO + ' ' + d.P_ADDR1 + '</div>';
  content += '<div>' + d.P_ADDR2 + '</div>';
  content += '<div>' + d.P_ADDR3 + '</div>';
  content += '<div>' + d.P_ADDR4 + '</div>';
  content += '<div>Postcode: ' + d.P_POSTCODE + '</div>';
  content += '<div>Sup Line No.: ' + d.P_SUPGROUPUSE + '</div>';
  content += '<div>Status: ' + d.P_BUILDINGSTATUS + '</div>';
  return content;
}


async function readFile(event) {
  const file = event.target.files.item(0)
  const fileContent = await file.text();
  
  csvData = d3.csvParse(fileContent)
  //update(csvData);
  addMarkers();
}

function addMarkers() {
  csvData.forEach(function(d) {
    var marker = L.circleMarker(proj4("EPSG:27700", "WGS84",[+d.P_EASTING, +d.P_NORTHING]).reverse());
  var type = slnLookup[d.P_SUPGROUPUSE];
  var colour = "#AAA";
  if (colourfulMode) {
    colour = colourKey[type] || "#AAA";
    } else {
      colour = "var(--foreground)";
    };
  marker.setStyle({
    radius: 3,
    fillOpacity: 1,
    fillColor: colour,
    color: "#ddd",
    weight: 0.25,
});
  marker.bindTooltip(getTooltipContent(d));
  marker.addTo(map);
  })
}

function logLatLong() {
  csvData.forEach(function(d) {
    var latLong = L.circleMarker(proj4("EPSG:27700", "WGS84",[+d.P_EASTING, +d.P_NORTHING]).reverse());
    console.log(latLong);
  })
}

initMap();

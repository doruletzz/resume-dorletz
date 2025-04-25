import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { Icon } from "leaflet";

const LeafletMap = () => {
  return (
    <MapContainer
      className="overflow-hidden rounded-xl absolute -inset-20 group-hover/card:scale-125 transform-gpu duration-300 ease-in-out"
      center={[46.7704, 23.5914]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Marker
        icon={
          new Icon({
            iconUrl: "pin.png",
            iconSize: [150, 150], // size of the icon
            iconAnchor: [82, 110], // point of the icon which will correspond to marker's location
            // popupAnchor: [-3, -76],
            // className: "group-hover/card:scale-100 scale-75 transition-transform duration-300 ease-in-out origin-top-right",
          })
        }
        position={[46.7704, 23.5914]}
      >
        
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;

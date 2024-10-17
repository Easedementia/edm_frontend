import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMapsLocation = () => {
  const containerStyle = {
    width: '600px',
    height: '400px'
  };

  const center = {
    lat: 10.013590,
    lng: 76.330760
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCkS66QZmQisvgqFnaerYVCazJsCnFdePc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsLocation;

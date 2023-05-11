import { Loader, Map } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'YOUR_API_KEY',
    version: 'weekly',
  });

  loader.load().then(() => {
    const map = new Map(document.getElementById('map'), {
      center: { lat:50.288371374255085, lng: 21.416695668135954 },
      zoom: YOUR_ZOOM_LEVEL,
    });
  });


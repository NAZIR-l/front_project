<template>
  <div>
    <div class="pages">
      <header_Vehicle />
        <main>
            <div id="mapContainer">

            </div>
            <div>
            <Profile />
            </div>
        </main>
    </div>
  </div>
</template>
  
  <script>

import header_Vehicle from "../components/template/header_Vehicle.vue";
import Profile from "../components/ManageVehicle/Profile.vue";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";
import marker from "../assets/image/icons8-shipment-642.png";
export default {
  name: "LeafletMap",
  data() {
    return {
      dialog: false,
      map: null,
      value: [],
      item: []
    };
  },
  components: {
    header_Vehicle,
    Profile
  },
  mounted() {
    this.Create();
    this.map = L.map("mapContainer").setView([33.510414, 36.278336], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  },
  methods: {
    async Create() {
      await axios
        .get("http://localhost:3000/mangecenter/find_centers", {
          withCredentials: true
        })
        .then(res => {
          this.item = res.data;
          console.log("2");
          console.log(this.item);
          this.show_centers();
        })
        .catch(err => {
          console.log(err);
        });
    },
    async show_centers() {
      const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [40, 40]
      });

      for (let i = 0; i < this.item.length; i++) {
        var url =
          "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
          this.item[i].Location;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const addressArr = data;
            console.log(addressArr[0]);
            L.marker([addressArr[0].lat, addressArr[0].lon], { icon: myIcon })
              .bindPopup(
                `<h1 width="300" height="300" >KEY : ${this.item[i].email}`
              )
              .addTo(this.map);
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>
  
      <style>
@import "../assets/style/style2.css";
.fotterss{
    z-index: 1000;
    position: fixed;
    bottom: 0;
}
#mapContainer {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  width: 100%;
}
</style>
      
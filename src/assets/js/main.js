/*! For license information please see main.js.LICENSE.txt */
     Ef("#world-map-marker").length > 0 && (Ef("#vmap").remove(),
      Ef("#world-map-marker").append('\n        <div\n          id="vmap"\n          style="\n            height: 490px;\n            position: relative;\n            overflow: hidden;\n            background-color: transparent;\n          "\n        >\n        </div>\n      '), 
      Ef("#vmap").vectorMap({ map: "world_mill", backgroundColor: "#fff", borderColor: "#fff", borderOpacity: .95, borderWidth: 0, color: "#e6e6e6", regionStyle: { initial: { fill: "#e4ecef" } },
       markerStyle: { initial: { r: 4, fill: "white", "fill-opacity": 1, stroke: "#000", "stroke-width": 0.2, "stroke-opacity": .1 } },
        markers: [
        { latLng: [35, 36], name: "SYRIA : 35" }, 
        { latLng: [33.3, 43.7], name: "Baghdad : 250" },
        { latLng: [36.77, -119.41], name: "USA : 250" }, 
        { latLng: [55.37, -3.41], name: "UK   : 250" }, 
        { latLng: [25.2, 55.27], name: "UAE : 250" }
    ], series: {
        regions: [{ values: { US: 298, SA: 200, IQ: 200, SY: 200, GB: 120 }, 
        scale: ["#03a9f3", "#02a7f1"], normalizeFunction: "polynomial" }] 
    }
         , hoverOpacity: null,
          normalizeFunction: "linear", 
          zoomOnScroll: !1, 
          scaleColors: ["#b6d6ff", "#005ace"], 
          selectedColor: "#c9dfaf", 
          selectedRegions: [], 
          enableZoom: !1, 
          hoverColor: "#fff" }))
         }; e(), Ef(window).resize((0, qf.debounce)(e, 150)) }(), Ef("#chat-sidebar-toggle").on("click", (e => { Ef("#chat-sidebar").toggleClass("open"), e.preventDefault() })), n(5906), Ef("#dataTable").DataTable(), n(9688), Ef(".start-date").datepicker(), Ef(".end-date").datepicker(), Ef(".email-side-toggle").on("click", (e => { Ef(".email-app").toggleClass("side-active"), e.preventDefault() })), Ef(".email-list-item, .back-to-mailbox").on("click", (e => { Ef(".email-content").toggleClass("open"), e.preventDefault() })); var wp = n(2764), Dp = n.n(wp); Ef("#google-map").length > 0 && Dp()({ key: "AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA" }).then((() => { const e = 26.8206, t = 30.8025, { google: n } = window, r = { center: new n.maps.LatLng(e, t), zoom: 5, mapTypeId: n.maps.MapTypeId.ROADMAP, styles: [{ featureType: "landscape", stylers: [{ hue: "#FFBB00" }, { saturation: 43.400000000000006 }, { lightness: 37.599999999999994 }, { gamma: 1 }] }, { featureType: "road.highway", stylers: [{ hue: "#FFC200" }, { saturation: -61.8 }, { lightness: 45.599999999999994 }, { gamma: 1 }] }, { featureType: "road.arterial", stylers: [{ hue: "#FF0300" }, { saturation: -100 }, { lightness: 51.19999999999999 }, { gamma: 1 }] }, { featureType: "road.local", stylers: [{ hue: "#FF0300" }, { saturation: -100 }, { lightness: 52 }, { gamma: 1 }] }, { featureType: "water", stylers: [{ hue: "#0078FF" }, { saturation: -13.200000000000003 }, { lightness: 2.4000000000000057 }, { gamma: 1 }] }, { featureType: "poi", stylers: [{ hue: "#00FF6A" }, { saturation: -1.0989010989011234 }, { lightness: 11.200000000000017 }, { gamma: 1 }] }] }, i = new n.maps.Map(document.getElementById("google-map"), r); new n.maps.Marker({ map: i, position: new n.maps.LatLng(e, t), visible: !0 }) })), function () { const e = document.createEvent("UIEvents"); window.EVENT = e, e.initUIEvent("resize", !0, !1, window, 0), window.addEventListener("load", (() => { window.dispatchEvent(e) })), Ef("a").filter('[href^="http"], [href^="//"]').not(`[href*="${window.location.host}"]`).attr("rel", "noopener noreferrer").attr("target", "_blank"), document.addEventListener("click", (() => { window.dispatchEvent(window.EVENT) })) }() }() }();
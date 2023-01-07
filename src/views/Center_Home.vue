<template>
  <div>
    <div class="sidebar">
        <div class="sidebar-inner">
      <div class="sidebar-logo">
        <div class="peers ai-c fxw-nw">
          <div class="peer peer-greed">
            <a class="sidebar-link td-n" href="/">
              <div class="peers ai-c fxw-nw">
                <div class="peer">
                  <div class="logo">
                    <!-- <img src="../../assets/images" alt=""> -->
                  </div>
                </div>
                <div class="peer peer-greed">
                  <h5 class="lh-1 mB-0 logo-text">Adminator</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="peer">
            <div class="mobile-toggle sidebar-toggle">
              <a href="" class="td-n" @click="arrow_sidebar">
                <i class="ti-arrow-circle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- ### $Sidebar Menu ### -->
      <ul class="sidebar-menu scrollable pos-r" style="padding:0">
        <li class="nav-item mT-30 actived">
          <a class="sidebar-link" href="/">
            <span class="icon-holder">
              <i class="c-blue-500 ti-home"></i>
            </span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class='sidebar-link' href="email.html">
            <span class="icon-holder">
              <i class="c-brown-500 ti-email"></i>
            </span>
            <span class="title">Email</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-indigo-500 ti-bar-chart"></i>
            </span>
            <span class="title">Chart</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li  @click="pages('Chart_Line')">
              <a class='sidebar-link' >Shipment Monthley</a>
            </li>
            <li  @click="pages('Chart_Area')">
              <a class='sidebar-link'>Type Shipment Report</a>
            </li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" >
            <span class="icon-holder">
              <i class="c-orange-500 ti-layout-list-thumb"></i>
            </span>
            <span class="title">Vechile</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' @click="pages('List_Vechile')">List vechile</a>
            </li>
            <li>
              <a class='sidebar-link' @click="pages('Map_Vechile')">Map vechile</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-red-600 ti-home"></i>
            </span>
            <span class="title">Center</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="List-Centers">List Centers</a>
            </li>
            <li>
              <a class='sidebar-link' href="Map-Center">Map Centers</a>
            </li>
            <li>
              <a class='sidebar-link' href="Add-Center">ADD Center</a>
            </li>
            <li>
              <a class='sidebar-link' href="shipment-Center">Shipment Center</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" 
            aria-expanded="false">
            <span class="icon-holder">
              <i class="c-red-600 ti-home"></i>
            </span>
            <span class="title">Shipment</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu" >
            <li>
              <a class='sidebar-link' @click="pages('Add_Shipment')" >Add Shipment</a>
            </li>
            <li>
              <a class='sidebar-link' @click="pages('List_Shipment')" >List Centers</a>
            </li>
  
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" 
            aria-expanded="false">
            <span class="icon-holder">
              <i class="c-red-600 ti-home"></i>
            </span>
            <span class="title">Manage Shipment</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu" >
            <li>
              <a class='sidebar-link' @click="pages('Add_Plan')" >Add Plan</a>
            </li>
            <li>
              <a class='sidebar-link' @click="pages('List_Plan')" >List Centers</a>
            </li>
  
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-orange-500 ti-layout-list-thumb"></i>
            </span>
            <span class="title">Tables</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="basic-table.html">Basic Table</a>
            </li>
            <li>
              <a class='sidebar-link' href="datatable.html">Data Table</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="c-purple-500 ti-map"></i>
            </span>
            <span class="title">Maps</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="google-maps.html">Google Map</a>
            </li>
            <li>
              <a href="vector-maps.html">Vector Map</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="c-red-500 ti-files"></i>
            </span>
            <span class="title">Pages</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class='sidebar-link' href="blank.html">Blank</a>
            </li>
            <li>
              <a class='sidebar-link' href="404.html">404</a>
            </li>
            <li>
              <a class='sidebar-link' href="500.html">500</a>
            </li>
            <li>
              <a class='sidebar-link' href="signin.html">Sign In</a>
            </li>
            <li>
              <a class='sidebar-link' href="signup.html">Sign Up</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
<div class="page-container">
    <headers />
    <div class="home">
      <p class="calendar"> {{  today.getDate() }} <em> {{ month }}</em></p>
            <main class="main-content">
              <div id="mainContent">
                <div class="chart_Line" v-if="show === 'Chart_Line'">
                  <Chart_Line />
                </div>
                <div class="list_vechile" v-if="show === 'Chart_Area'">
                  <Chart_Area />
                </div>
                <div class="list_vechile" v-if="show === 'List_Vechile'">
                  <List_Vechile />
                </div>
                <div class="Map_Vechile" v-if="show === 'Map_Vechile'">
                  <Map_Vechile />
                </div>
                <div class="Add_Shipment" v-if="show === 'Add_Shipment'">
                  <Add_Shipment />
                </div>
                <div class="List_Shipment" v-if="show === 'List_Shipment'">
                  <List_Shipment />
                </div>
                <div class="Add_Plan" v-if="show === 'Add_Plan'">
                  <Add_Plan />
                </div>
                <div class="List_Plan" v-if="show === 'List_Plan'">
                  <List_Plan />
                </div>
              </div>
            </main>
          </div>
    </div>
</div>
</template>

<script>
 import $ from 'jquery';
    import '../assets/js/main.js'
    import {ref} from 'vue'
    import footers from '../components/template/footer.vue';
    import headers from '../components/template/header_center.vue';
    import sliders from '../components/template/slider_center.vue';
    import Chart_Area from '../components/manageCenter/chart/Chart_Area'
    import Chart_Line from '../components/manageCenter/chart/Cart_Line';
    import List_Vechile from '../components/manageCenter/List_Vechile.vue'
    import Map_Vechile from '../components/manageCenter/Map_Vechile.vue'
    import Add_Shipment from '../components/manageCenter/Shipment/Add_Shipment'
    import List_Shipment from '../components/manageCenter/Shipment/List_Shipment'
    import Add_Plan from '../components/manageCenter/ManageShipment/Add_Plan.vue'
    import List_Plan from '../components/manageCenter/ManageShipment/List_Plan.vue'

    export default {
        name: 'HomeView',
        setup() {
            let today = new Date();
            let show = ref("Add");
            let monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            const d = new Date();
            let month =monthNames[d.getMonth()]
            return { show , today , month};
            },
        methods: {
            pages(location) {
        console.log("location");
  
        console.log(location);
        this.show = location;
      },
            search_toggle(e) {
                $('.search-box, .search-input').toggleClass('active');
                $('.search-input input').focus();
    
                e.preventDefault();
            },
            sidbar_menu(e) {
                console.log("s");   
                e.preventDefault();
                $('.sidebar').toggleClass('active_sidebar');
                $('.sidebar').removeClass('sidebar2')
    
            },
            arrow_sidebar(e) {
                e.preventDefault();
                $('.sidebar').removeClass('active_sidebar')
    
            }
        },
        components:{
            footers,
            headers,
            sliders,
            Chart_Line,
            Chart_Area,
            List_Vechile,
            Map_Vechile,
            Add_Shipment,
            List_Shipment,
            List_Plan,
            Add_Plan
        }
    }
</script>

    <style>
    @import url('../assets/style/style.css');
    @import url('../../public/icons/themify-icons.css');

.calendar{
  margin:.25em 10px 10px 0;
  padding-top:5px;
  float:right;
  width:80px;
  background:#ededef;
  background: -webkit-gradient(linear, left top, left bottom, from(#ededef), to(#ccc)); 
  background: -moz-linear-gradient(top,  #ededef,  #ccc); 
  font:bold 30px/60px Arial Black, Arial, Helvetica, sans-serif;
  text-align:center;
  color:#000;
  text-shadow:#fff 0 1px 0; 
  border-radius:3px;  
  position: fixed;
    box-shadow: 0 2px 2px #888;
    bottom: 0;
    right: 0;
  
  }

/* Em element is also styled, it contains the month’s name. */
.calendar em{
  display:block;
  font:normal bold 11px/30px Arial, Helvetica, sans-serif;
  color:#fff;
  text-shadow:#00365a 0 -1px 0; 
  background:#04599a;
  background:-webkit-gradient(linear, left top, left bottom, from(#04599a), to(#00365a)); 
  background:-moz-linear-gradient(top,  #04599a,  #00365a); 
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;  
  border-top:1px solid #00365a;
  }

/* Now I am styling the pseudo elements. Container’s pseudo elements (:before and :after) are used to create thos circles, "holes in te paper". */
.calendar:before, .calendar:after{
  content:'';
  float:left;
  position:absolute;
  top:5px;  
  width:8px;
  height:8px;
  background:#111;
  z-index:1;
  border-radius:10px;
  box-shadow:0 1px 1px #fff;
  }
.calendar:before{left:11px;}  
.calendar:after{right:11px;}

/*…and em’s pseudo elements are used to create the rings: */
.calendar em:before, .calendar em:after{
  content:'';
  float:left;
  position:absolute;
  top:-5px; 
  width:4px;
  height:14px;
  background:#dadada;
  background:-webkit-gradient(linear, left top, left bottom, from(#f1f1f1), to(#aaa)); 
  background:-moz-linear-gradient(top,  #f1f1f1,  #aaa); 
  z-index:2;
  border-radius:2px;
  }
.calendar em:before{left:13px;} 
.calendar em:after{right:13px;} 

    </style>
    
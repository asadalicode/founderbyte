// new fullpage('#fullpage', {
//     licenseKey: 'YOUR KEY HERE',
//     sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
//   });
// new fullpage('#fullpage', {
//   navigation: true,
//   responsiveWidth: 700,
//   anchors: ['home', 'about-us', 'contact'],
//   parallax: true,
//   onLeave: function(origin, destination, direction){
//     console.log("Leaving section" + origin.index);
// },
// });

var myFullpage = new fullpage("#fullpage", {
  licenseKey: "B1D9FFF2-3CAB42B2-BC6DF7B0-59C13A34",
  //Navigation
  menu: "#myMenu",
  // lockAnchors: true,
  // anchors:['firstPage', 'secondPage'],
  anchors: ["home", "services", "whyus", "ourwork", "contact"],
  navigation: false,
  navigationPosition: "right",
  navigationTooltips: ["firstSlide", "secondSlide"],
  showActiveTooltip: false,
  parallax: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ["#ccc", "#fff"],
  paddingTop: "8em",
  paddingBottom: "10px",
  // fixedElements: '#header, #footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //Custom selectors
  sectionSelector: ".section",
  slideSelector: ".slide",

  lazyLoading: true,

  //events
  onLeave: function(achor,index){
		document.getElementById('headPrimary').style.display="";
		document.getElementById('headSecondary').style.display="none";
	
	},
  afterLoad: function (anchor, index) {

    if(index.index==1 || index.index==3) {
			document.getElementById('headPrimary').style.display="none";
			document.getElementById('headSecondary').style.display="";
		}
    // var activeItem;
    // if(index == 0 || index == 1 || index == 2){
    //     activeItem = $('#menu').find('a').first()
    // }else{
    //      activeItem = $('#menu').find('a').last()
    // }
    // activeItem
    //     .addClas3s('active')
    //     // .siblings().removeClass('active');
    // console.log(index)
  },
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (section, origin, destination, direction) {},
  onSlideLeave: function (section, origin, destination, direction) {},
});

document.onreadystatechange = function () {
  var state = document.readyState;

  document.getElementById("fullpage").style.visibility = "hidden";
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("fullpage").style.visibility = "";
      document.getElementById("load").style.visibility = "hidden";
    }, 500);
  }

  
};

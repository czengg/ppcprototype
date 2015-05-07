'use strict';

// var Poi = require('./poi.model');

var pois = [
    // {
    //   id: 2,
    //   title: 'Cheeto Statue',
    //   content: 'This statue, affectionately named “the cheeto” by CMU residents, has been greeting students entering the otherwise stark entrance of Wean Hall for years. It is meant to be a representation of a bridge between mathematics and art, and is one of the many pieces on campus donated by alumni as part of a larger effort to bring art and color to the university’s free spaces.',
    //   img: '/images/1.png',
    //   beaconMajor: 32,
    //   latitude: 1,
    //   longitude: 1
    // },
    {
      id: 1,
      title: 'Rain Barrels',
      content: 'Rain barrels are used to capture water runoff from the solar panels above them during a storm, which are then used to water the gardens on the site, which need to drink more than the native landscape. Rain barrels are also useful in residential homes. The greywater that they capture is highly oxygenated and is better for plants and soil than tap water, which is diluted with chemicals that make plants less drought-tolerant',
      img: '/images/rainbarrel.png',
      beaconMajor: 17149,
      latitude: 40.444832,
      longitude: -79.948051
    },
    {
      id: 2,
      title: 'Underground Cistern',
      content: 'An underground water cistern is used to catch and hold rainwater to then be used in the buildings around you. It’s like an enormous water tank, and can hold as much as 1000 gallons of water! These are a great way to conserve water, and can be used for things like sinks, showers, and toilets. ',
      img: '/images/2.png',
      beaconMajor: 42,
      latitude: 40.444820,
      longitude: -79.948735
    },
    {
      id: 3,
      title: 'Judith A Resnik Memorial Statue',
      content: 'This statue is dedicated to Judith Resnik, who was one of the first women ever to become an astronaut, and who went to school right here at CMU. She died aboard the Challenger while on a mission in 1986, but left behind a legacy as an inspirational and brilliant engineer.',
      img: '/images/3.png',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    },
    {
      id: 4,
      title: 'Robot Raceway',
      content: 'Once a year, students at CMU race robots that they build themselves down this path. The robots can only go on the white lines, and need to go down the path like ski racers going back and forth on the curved lines.',
      img: '/images/4.png',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    }
    {
      id: 5,
      title: 'Permeable pavement',
      content: 'Most asphalts are too dense for moisture from rainfall to soak through. This asphalt is porous enough for water to percolate through to help recharge the groundwater of the area.',
      img: '/images/pavement.jpg',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    },
    {
      id: 6,
      title: 'Native plants',
      content: 'All landscaping around the Newell Simon building is full of native, low resource consuming plants. In addition to being beautiful, they also do not exacerbate problems caused by invasive, non-native plants such as erosion or unhealthy dominance of a single plant species.</br>These plants are an easy addition to any garden. Native plants do not require more maintenance than others plants yet also promote healthy growth that support the surrounding environment.',
      img: '/images/plants.JPG',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    },
    {
      id: 7,
      title: 'Water treatment',
      content: 'Below the atrium, there is water treatment equipment that treats blackwater. Blackwater is any water that comes from a sink, a toilet, or a shower. The equipment treats the water and the water can then be dispersed in a slow and natural way outdoors to be taken up by trees.',
      img: '/images/watertreatment.jpg',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    },
    {
      id: 8,
      title: 'Water veil',
      content: 'The water veil captures the runoff water from the north face of the building and drops off the roof of the building in a sheet. It then flows along the front of the building and then behind the building. On rainy days, the water veil mimics the naturally occurring waterfall. There is a walkway behind it so that you can walk behind the waterfall.',
      img: '/images/waterveil.jpg',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    },
    {
      id: 9,
      title: 'Slavery to freedom garden',
      content: 'This garden features different plants from different parts of Africa as well as different vegetables that can be grown in an ordinary house garden.</br>Growing vegetables in your garden is simple and yields great rewards. Scallions and garlic grow at a fast rate and can be used in many dishes. Potatoes are also a very widely used root vegetable that are easy to take care of.',
      img: '/images/slavery.jpg',
      beaconMajor: -1,
      latitude: -1,
      longitude: -1
    }
  ];

/**
 * Get list of pois
 */
exports.index = function (req, res) {
  // Poi.find({}, function (err, pois) {
  //   if(err) return res.send(500, err);
  //   res.json(200, pois);
  // });
  res.json(200, pois);

};

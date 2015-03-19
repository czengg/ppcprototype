'use strict';

angular.module('ppcprototypeApp')

.factory('ContentFactory', [function () {

  return [
    {
      id: 1,
      title: 'Bathroom',
      content: 'The faucets and toilets in the bathroom are fed by grey water from the underground cistern. The water is not potable, but works perfectly fine for uses like these. Additionally, the low-flow faucets and toilet flushers conserve water so that as little as possible is wasted.',
      img: 'images/bathroom.jpg'
    },
    {
      id: 2,
      title: 'Solar panels',
      content: 'Up above your head, this arch is outfitted with solar panels that are used to power the building, and provide you with some shade.',
      img: 'images/solarpanels.jpg'
    },
    {
      id: 3,
      title: 'Rain barrels',
      content: 'Rain barrels are used to catch any runoff from the solar panels when it’s raining. Water stored here is used to water the vegetable garden and the slavery to freedom garden, which are more water intensive than the native landscape. </br> Rain barrels are also useful in residential homes. They capture water from roof gutters and provide you with water to feed any plants you may have.',
      img: 'images/myimg.jpg'
    },
    {
      id: 4,
      title: 'Runoff of solar panels',
      content: 'Any water runoff from the solar panel roof that the rain barrels can’t capture or hold is caught and stored by an underground water cistern. The water that it captures is used in the restrooms in Newell Simon Hall in the sinks and toilets.',
      img: 'images/watercistern.jpg'
    },
    {
      id: 5,
      title: 'Permeable pavement',
      content: 'Most asphalts are too dense for moisture from rainfall to soak through. This asphalt is porous enough for water to percolate through to help recharge the groundwater of the area.',
      img: 'images/myimg.jpg'
    },
    {
      id: 6,
      title: 'Native plants',
      content: 'All landscaping around the Newell Simon building is full of native, low resource consuming plants. In addition to being beautiful, they also do not exacerbate problems caused by invasive, non-native plants such as erosion or unhealthy dominance of a single plant species.',
      img: 'images/myimg.jpg'
    },
    {
      id: 7,
      title: 'Water treatment',
      content: 'Below the atrium, there is water treatment equipment that treats blackwater. Blackwater is any water that comes from a sink, a toilet, or a shower. The equipment treats the water and the water can then be dispersed in a slow and natural way outdoors to be taken up by trees.',
      img: 'images/myimg.jpg'
    },
    {
      id: 8,
      title: 'Water veil',
      content: 'The water veil captures the runoff water from the north face of the building and drops off the roof of the building in a sheet. It then flows along the front of the building and then behind the building. On rainy days, the water veil mimics the naturally occurring waterfall. There is a walkway behind it so that you can walk behind the waterfall.',
      img: 'images/waterveil.jpg'
    },
    {
      id: 9,
      title: 'Slavery to freedom garden',
      content: 'This garden features different plants from different parts of Africa as well as different vegetables that can be grown in an ordinary house garden.',
    img: 'images/slavery.jpg'
    }
  ];

}])

.factory('Socket', function (socketFactory) {

  var ioSocket = io('', {
    path: '/socket.io-client'
  });

  var socket = socketFactory({
    ioSocket: ioSocket
  });

  return socket;
})

.factory('Notification', [ '$mdDialog', '$location', 'ContentFactory', 'Socket',
  function ($mdDialog, $location, ContentFactory, Socket) {

  return function () {
    Socket.on('notification', function (res) {
      console.log('got socket request: id=' + res._id);
      var item = ContentFactory[res._id - 1];
      var confirm = $mdDialog.confirm()
        .content('Hey it seems like tou are by the ' + item.title + '! Would you like to find out more about it?')
        .ok('See More')
        .cancel("Go back");
      $mdDialog.show(confirm).then(function() {
        $location.url('/content/' + res._id);
      });
    });

    return {};
  } ();

}]);
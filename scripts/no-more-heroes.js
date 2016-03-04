var noMoreHeroesApp = angular.module('noMoreHeroesApp', ['ngSanitize']);

noMoreHeroesApp.controller('sceneCtrl', function($scope, sceneService){
  $scope.scene = sceneService;
  $scope.slide = 0;
  $scope.nextSlide = function(){$scope.slide++};
});

noMoreHeroesApp.controller('dialogCtrl', function($scope, $sce, sceneService){
  $scope.dialog = sceneService;
  //$scope.dialog = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla mi, porta a neque ut, tempor euismod ex. Cras id eros eget nunc auctor scelerisque. Sed eu arcu blandit, commodo quam eu, blandit est.</p>');
});

noMoreHeroesApp.service('sceneService', function(){
  var sceneAPI = {
    class: 'woods',
    characterLeft: 'cicada',
    characterRight: 'sam',
    dialog: [
      {
        speaker: 'sam',
        expression: 'neutral',
        dialog: '<p>I’m really happy about this project, Cicada. I think Mrs. Anderson will really appreciate our work.</p>'
      },
      {
        speaker: 'cicada',
        expression: 'skeptical',
        dialog: '<p>Even though I made you do an investigative report on book heroines, not heroes?</p>'
      },
      {
        speaker: 'sam',
        dialog: '<p>Hey now, don’t be like that. It’s not my fault everyone writes ridiculous characters in young adult lit.</p>'
      },
      {
        speaker: 'sam',
        expression: 'side-glance',
        dialog: '<p>...And that people like your mom get obsessed with them.</p>'
      },
      {
        speaker: 'cicada',
        expression: 'annoyed',
        dialog: '<p>I swear, I hate you. I never should have told you!</p>'
      },
      {
        speaker: 'sam',
        expression: 'sheepish',
        dialog: '<p>I mean, it’s not like it wasn’t clear! Cicada? You’re named after a tree cricket, for crying out loud.</p>'
      },
      {
        speaker: 'cicada',
        expression: 'sulky',
        dialog: '<p>It’s not MY fault my mother never outgrew her love for badly written stories with terrible character names. I figured doing a report on the genre might help me understand her better, or get some perspective, I don’t know.</p>'
      },
      {
        speaker: 'sam',
        expression: 'sly',
        dialog: '<p>Well, I think you might have more luck talking to your namesake. I see one over there.</p>'
      },
      {
        speaker: 'cicada',
        expression: 'angry',
        dialog: '...'
      },
      {
        speaker: 'sam',
        dialog: '<p>I’m joking, I’m joking! I’m sorry. But uh, does it seem darker to you?</p>'
      },
      {
        speaker: 'narrator',
        sceneAddition: 'storm',
        dialog: '<p>The two of them look up to the sky, where they see a storm suddenly brewing.</p>'
      },
      {
        speaker: 'cicada',
        expression: 'worried',
        dialog: '<p>Rain?? What the...let’s run for it! The dorms are just over there!</p>'
      },
      {
        speaker: 'narrator',
        sceneAddition: 'storm--lightning',
        dialog: '<p>Lightning strikes and the scene goes black.</p>'
      }
    ]
  };

  // eventually we'll get data from an API instead of having it be hard coded

  return sceneAPI;
});

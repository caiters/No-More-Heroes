var noMoreHeroesApp = angular.module('noMoreHeroesApp', ['ngSanitize']);

noMoreHeroesApp.controller('sceneCtrl', function($scope, sceneService){
  // scene data
  var scene = sceneService;

  $scope.scene = scene;

  // controls which step of the dialog in scene data that we're on
  var slide = 0;
  $scope.slide = slide;

  // show characters

  // left character
  var characterLeft = scene.dialog[slide].characterLeft;
  $scope.characterLeft = characterLeft;
  var characterLeftExpression = 'neutral'; // default value
  $scope.characterLeftExpression = characterLeftExpression;

  // right character
  var characterRight = scene.dialog[slide].characterRight;
  $scope.characterRight = characterRight;
  var characterRightExpression = 'neutral'; // default value
  $scope.characterRightExpression = characterRightExpression;

  /*
    when you advance to a new slide...
    1. check position.
      if position has changed...
        a. we should see if the speaker is still the same.
        if the speaker is still the same...
          a. we should check if their expression has changed.
          if their expression has changed...
            a. change characterRightExpression
  */

  // advances to the next dialog step
  $scope.nextSlide = function(){
    var oldCharacterLeft = characterLeft;
    var oldCharacterRight = characterRight;
    var oldCharacterLeftExpression = characterLeftExpression;
    var oldCharacterRightExpression = characterRightExpression;
    var oldPosition = scene.dialog[slide].position;
    console.log(oldPosition);
    slide++;
    console.log(slide);
    // compare old to new
    if ( oldPosition === scene.dialog[slide].position) {
      console.log('same');
    } else {
      console.log('different');
    }
  };
});

noMoreHeroesApp.controller('dialogCtrl', function($scope, sceneService){
  var scene = sceneService;
  $scope.dialog = scene.dialog;
});

noMoreHeroesApp.service('sceneService', function(){
  var sceneAPI = {
    class: 'woods',
    characterLeft: 'cicada',
    characterRight: 'sam',
    dialog: [
      {
        speaker: 'sam',
        position: 'right',
        expression: 'happy',
        dialog: '<p>I’m really happy about this project, Cicada. I think Mrs. Anderson will really appreciate our work.</p>'
      },
      {
        speaker: 'cicada',
        position: 'left',
        expression: 'skeptical',
        dialog: '<p>Even though I made you do an investigative report on book heroines, not heroes?</p>'
      },
      {
        speaker: 'sam',
        position: 'right',
        expression: 'happy',
        dialog: '<p>Hey now, don’t be like that. It’s not my fault everyone writes ridiculous characters in young adult lit.</p>'
      },
      {
        speaker: 'sam',
        position: 'right',
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
        position: 'right',
        expression: 'sheepish',
        dialog: '<p>I mean, it’s not like it wasn’t clear! Cicada? You’re named after a tree cricket, for crying out loud.</p>'
      },
      {
        speaker: 'cicada',
        position: 'left',
        expression: 'sulky',
        dialog: '<p>It’s not MY fault my mother never outgrew her love for badly written stories with terrible character names. I figured doing a report on the genre might help me understand her better, or get some perspective, I don’t know.</p>'
      },
      {
        speaker: 'sam',
        position: 'right',
        expression: 'sly',
        dialog: '<p>Well, I think you might have more luck talking to your namesake. I see one over there.</p>'
      },
      {
        speaker: 'cicada',
        position: 'left',
        expression: 'angry',
        dialog: '...'
      },
      {
        speaker: 'sam',
        position: 'right',
        expression: 'sheepish',
        dialog: '<p>I’m joking, I’m joking! I’m sorry.</p>'
      },
      {
        speaker: 'sam',
        position: 'right',
        expression: 'worried',
        dialog: '<p>But uh, does it seem darker to you?</p>'
      },
      {
        speaker: 'narrator',
        sceneAddition: 'storm',
        dialog: '<p>The two of them look up to the sky, where they see a storm suddenly brewing.</p>'
      },
      {
        speaker: 'cicada',
        position: 'left',
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

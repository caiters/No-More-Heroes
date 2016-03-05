var noMoreHeroesApp = angular.module('noMoreHeroesApp', ['ngSanitize']);

noMoreHeroesApp.controller('sceneCtrl', function($scope, sceneService){
  // scene data
  var setup = sceneService.getSetup();

  $scope.characterLeft = setup.characterLeft;
  $scope.characterRight = setup.characterRight;
  $scope.background = setup.background;
  $scope.$on('dialog', function(previous,next){
    if(next.position == null) {
      console.log('no next position');
    } else if(next.position === 'left') {
      $scope.characterLeft = {
        name: next.speaker,
        expression: next.expression
      }
    } else {
      $scope.characterRight = {
        name: next.speaker,
        expression: next.expression
      }
    }
  });
});

noMoreHeroesApp.controller('dialogCtrl', function($scope, sceneService){
  $scope.dialog = 'test';
  $scope.speaker = 'test';
  $scope.nextSlide = function(){
    sceneService.next();
  };
  $scope.$on('dialog', function(previous,next){
    $scope.dialog = next.dialog;
    $scope.speaker = next.speaker;
  });
});

noMoreHeroesApp.service('sceneService', function($rootScope){
  var sceneAPI = {
    setup: {
      background: 'woods',
      characterLeft: {
        name: 'cicada',
        expression: 'neutral'
      },
      characterRight: {
        name:'sam',
        expression:'neutral'
      }
    },
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
        position: 'left',
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

  this.current = 0;
  this.getSetup = function(){
    return sceneAPI.setup;
  };
  this.getDialog = function(){
    return sceneAPI.dialog[this.current];
  };
  this.next = function(){
    var previous = this.getDialog();
    this.current++;
    var next = this.getDialog();
    $rootScope.$broadcast('dialog', previous, next);
    console.log(next, 'next dialog');
  };

});

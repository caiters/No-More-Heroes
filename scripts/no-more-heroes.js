var noMoreHeroesApp = angular.module('noMoreHeroesApp', ['ngSanitize']);

noMoreHeroesApp.controller('sceneCtrl', function($scope){

});

noMoreHeroesApp.controller('dialogCtrl', ['$scope', '$sce', function($scope, $sce){
  $scope.speaker = 'Cicada';
  $scope.dialog = $sce.trustAsHtml('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla mi, porta a neque ut, tempor euismod ex. Cras id eros eget nunc auctor scelerisque. Sed eu arcu blandit, commodo quam eu, blandit est.</p>');
}]);

describe('contentCtrl', function() {

    var $rootScope, $scope, $controller,contentCtrl;

    beforeEach(angular.mock.module('App'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        contentCtrl = $controller('contentCtrl', {'$scope': $scope});
    }));

    it('should exist', function() {
        expect(contentCtrl).toBeDefined();
    });	
	
	describe('$scope.content', function() {
    it('should not be undefined', function() {
      var $scope = {};
      var controller = $controller('contentCtrl', { $scope: $scope });     
      expect($scope.content).toBeDefined();
    });
  });
	
	describe('$scope.content', function() {
    it('equals to HELLO WORLD', function() {
      var $scope = {};
      var controller = $controller('contentCtrl', { $scope: $scope });     
      expect($scope.content).toEqual('Hello World');
    });
  });	
	
});


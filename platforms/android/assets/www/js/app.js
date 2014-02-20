angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
	$scope.tasks = [];

   	


  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];



   	<!--Criando janela modal-->
   	$ionicModal.fromTemplateUrl('new-task.html',function(modal){
   		$scope.taskModal = modal;
   	},{
   		scope:$scope,
   		animation='slide-in-up'
   	});


   	// submit no form

   	$scope.createTask = function(task){
   		$scope.tasks.push({
   			title:task.title
   		});
   		$scope.taskModal.hide();
   		task.title="";
   	};


   	// open modal

   	$scope.newTask =function(){
   		$scope.taskModal.show();
   	};

   	// close modal

   	$scope.closeNewTask = function(){
   		$scope.taskModal.hide();
   	};	

});
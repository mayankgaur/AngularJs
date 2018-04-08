var app = angular.module('demo', ['ngRoute']);
app.controller('HomeController', function ($scope, EmpService)
{
    $scope.empdetails = null;
    //EmpService.Get

    //Redirect to Edit page from main page.
    $scope.RedirectToEdit = function (detail) {
        window.location.href = '/Home/Edit/' + detail.Id;
    };
});
app.factory('EmpService', function ($http, $q, $window)
{
    return {
        GetEmployees: function () {

            return $http.get('/Home/GetAllEmployees');
        }
    }   
});
let app = angular.module("app", []);
app.controller('AppCtrl', function ($scope, $http) {
        // 2st function

            $http({
                method: 'GET',
                url: '/api/pin'
            }).then(function (response) {
                console.log(response, 'got data');
                $scope.pins = response.data.objects;
                console.log(response.data.objects);
            }, function (error) {
                console.log(error, 'cannot retrieve data');
            })
        ;

        // 2nd functinn
        app.addPin = function () {
            $http({
                method: 'POST',
                url: '/api/pin',
                data: {"title": "new", "image": "http://placekitten.com/200/200/?image=" + $scope.pins.length},
                headers: {"Content-Type": "application/json"}
            }).then(function (response) {
                console.log(response, 'post new data');

                $scope.pins.push(response.data);
            }, function (error) {
                console.log(error, 'cannot post data');
            });

     // 3nd functinn
        app.deletePin = function (pin) {
            $http({
                method: 'DELETE',
                url: '/api/pin/' + pin.id

            }).then(function (response) {
                console.log(response, 'delete data');

                pins.splice(pins.indexOf(pin),1)
            }, function (error) {
                console.log(error, 'cannot delete data');
            });

        // 4th functinn
        app.updatePin = function (pin) {
            $http({
                method: 'PUT',
                url: '/api/pin/' + pin.id

            }).then(function (response) {
                console.log(response, 'update data');
            }, function (error) {
                console.log(error, 'cannot update data');
            });


        };


'use strict';

/**
 * @ngdoc service
 * @name aroundFrontendApp.Profile
 * @description
 * # Profile
 * Service in the aroundFrontendApp.
 */
angular.module('aroundFrontendApp')
  .service('Profile', ['$timeout', '$http', '$location', '$cookies', function ($timeout, $http, $location, $cookies) {

  	var data = {};

    var config = 'https://around-production.herokuapp.com';

    data.activate = function () { 
        console.log($cookies);

        $http.get(config + '/users').success(function (d) { 
            data.data = d;
            data.loggedIn = true;
            console.log(d);
        });
    }

    data.activate();

    data.connect = function () { 

		OAuth.popup('facebook')
		    .done(function(result) {
		    	result.me().done(function (d) { 
                    console.log(result);

		    		$timeout(function () { 

                        $http.post(config + "/authenticate", { fid: d.id, token: result.access_token }).success(function (g) { 
                            console.log(g);
                            if (!g.error) { 
                                data.data = g;
                                data.loggedIn = true;
                                data.next('profile');
                            } else { 
                                data.next('info');
                                data.data = { 
                                    fid: d.id,
                                    link: d.raw.link,
                                    thumb: d.avatar,
                                    first_name: d.firstname,
                                    last_name: d.lastname,
                                    alias: d.firstname.toLowerCase(),
                                    email: d.email,
                                    birthday: new Date(d.birthdate.year, d.birthdate.month, d.birthdate.day),
                                    bio: d.about,
                                    gender: d.gender,
                                    token: result.access_token
                                };
                            }
                        });
                    }, 0);
		    	});
		    })
		    .fail(function (err) {
		      //handle error with err
		});
    }

    data.register = function () { 
    	$http.post(config + "/users", data.data)
        .success(function (d) { 
    		data.loggedIn = true;
    	});
    }

    data.remove = function () { 
        $http.delete(config + "/users" + data.data.fid)
        .success(function (d) { 
            data.loggedIn = false;
            data.next("deleted");
        });
    }

    data.next = function (route) { 
    	$location.url(route);
    }

    return data;

  }]);

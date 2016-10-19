angular.module('app')
    .directive('rootTest', function($rootScope) {
        return {
            restrict: "E",
            scope: {},
            link: function(scope, element, attr) {
                scope.val = (new Array(999999)).join("x");
                var cleanUp = $rootScope.$on('someEvent',function(){
                    element.tooltip({
                        title: function() {
                            return "Rating is " + scope.title +  scope.val;
                        }
                    });
                    scope.val = (new Array(999999)).join("x");
                })

                //element.on('$destroy', function() {
                //    console.log(1)
                //    cleanUp();
                //});
            },
            template:
            '<div>Root</div>'
        };
    });
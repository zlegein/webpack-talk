import angular from 'angular';
import _ from 'lodash';

function tides() {
  return {
    scope: {
      tideData: '='
    },
    replace: true,
    template: require('./tide.template.html'),
    restrict: 'E',
    link: function(scope) {
      scope.groupByDate = _.memoize(function (data, field) {
        var days = _.groupBy(data, field);
        var keys = Object.keys(days);
        var groupDataArray = [];
        _.forEach(keys, function (k) {
          groupDataArray.push({day: days[k][0].date.epoch, data: days[k]});
        });
        return groupDataArray;
      });
    }
  };
}

export default angular.module('directives.tides', [])
    .directive('tides', tides)
    .name;

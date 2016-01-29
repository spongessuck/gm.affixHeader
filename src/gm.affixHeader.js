(function() {

	angular.module('gm.affixHeader', [])
	.directive('gmAffixHeader', affixHeader);

	/* @ngInject */
	function affixHeader($window, $compile, $timeout) {
		return function(scope, elem, attrs) {
			var fixedTable = elem.clone();

			// Remove directive for recompile
			fixedTable.removeAttr('gm-affix-header');

			// Add affix directive
			fixedTable.attr(attrs.gmAffixHeader, '');

			// Add affix class to clone
			fixedTable.addClass('gm-affixed-table');

			// Don't need body
			fixedTable.find('tbody').remove();

			// Compile with affix directive
			$compile(fixedTable)(scope);

			elem.after(fixedTable);
			fixedTable.after(elem);

			var headerElems = elem.find('th');
			var headerCells = [];
			angular.forEach(headerElems, function(cell) {
				headerCells.push(cell);
			});

			scope.$watchCollection(function() {
				var widths = headerCells.map(function(cell) {
					if (cell.currentStyle) { //IE
						return cell.currentStyle.width;
					} else if ($window.getComputedStyle) {
						return $window.getComputedStyle(cell).width;
					} else {
						return cell.style.width;
					}
				});
				return widths;
			}, function(widths) {
				/* Get next sibling if element is transcluded, i.e. it has ngIf directive */
				if(fixedTable[0].nodeName == '#comment')
					fixedTable = fixedTable.next();

				angular.forEach(fixedTable.find('th'), function(headerCell, idx) {
					headerCell.style.width = widths[idx];
				});
			});
		};
	}
})();

gm.affixHeader
==

Angular 1 module to help "affix" headers of table elements when the user scrolls past them.

#Usage

The directive creates a clone of the `table` element to which it's applied. It then removes everything but the `thead`, sizes the columns
based on the source table, adds a `gm-affixed-table` class, and adds the directive specified in the attribute to the `table`.

The following markup creates an affixed table that will use the AngularUI 'ui-scrollpoint' directive:

	<table gm-affix-header='ui-scrollpoint'>
		<thead>
			...
		</thead>
	</table>

You can pass in whatever directive you'd like to control the affix behavior.

Note that this just adds the specified directive attribute and recompiles the table - you will still need to include this directive
in your source and write the style that gives you the behavior you want.

Check out the `examples` folder for a full example.
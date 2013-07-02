// jquery.filterList.js
//
// Uses an input box to filter an unordered list in real-time.
//
// Useage
//
//   REQUIRED HTML:
//
//     <form>
//       <input type="text" id="filter">
//       <ul>
//         <li>Item A</li>
//         <li>Item B</li>
//         <li>Item C</li>
//       </ul>
//     </form>
//
//   REQUIRED JAVASCRIPT:
//
//     $('#filter').filterList();

(function( $ ){
	$.fn.filterList = function() {

		// Case-insensitive "contains"
		$.expr[':'].Contains = function(a,i,m){
			return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
		};

		// Hide list items that do not contain filter term/show ones that do
		$(this).keyup(function() {
			var filterListTerm = $(this).val();
			if(filterListTerm) {
				$(this).next('ul').find("li:not(:Contains(" + filterListTerm + "))").slideUp();
				$(this).next('ul').find("li:Contains(" + filterListTerm + ")").slideDown();
			} else {
				// Input is blank; show all
				$(this).next('ul').children('li').slideDown();
			}
			return false;
		});

		return this;

	};
})( $ );


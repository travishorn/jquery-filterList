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

(function($) {
  $.fn.filterList = function(ul) {
    // Case-insensitive "contains"
    $.expr[':'].Contains = function(a, i, m) {
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    // Hide list items that do not contain filter term/show ones that do
    $(this).keyup(function() {
      var ulTarget = ul !== undefined ? $(ul) : $(this).next("ul");
      var filterListTerm = $(this).val();
      if (filterListTerm) {
        ulTarget.find("li:not(:Contains(" + filterListTerm + "))").slideUp();
        ulTarget.find("li:Contains(" + filterListTerm + ")").slideDown();
      } else {
        // Input is blank; show all
        ulTarget.children('li').slideDown();
      }
      return false;
    });

    return this;

  };
})(jQuery);

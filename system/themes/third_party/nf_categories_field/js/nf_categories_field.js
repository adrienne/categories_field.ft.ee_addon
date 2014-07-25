$(document).ready(function() {

    $(".nf_category_field input.filter").keyup(function(){

        // Get the field
        var field = $(this).parent().parent();

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the categories
        $(field).find('label.category').each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).not('.exclude').hide();
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });

        // Update the count
        if (filter) {
            $(field).find('a > span.count').text("("+count+" matches for current filter)");
        } else {
            $(field).find('a > span.count').text("");
        }
    });

});
$(document).ready(function() {
    $("button.fold-toggle").on("click", function() {
        $(this).toggleClass("active", "");
        $("button.fold-toggle").not(this).removeClass("active");
        if ($(this).attr("id") == "see") {
            $("#see-content").toggleClass("folded", "");
            $("#learn-content, #reach-content").addClass("folded");
        } else if ($(this).attr("id") == "learn") {
            $("#learn-content").toggleClass("folded", "");
            $("#reach-content, #see-content").addClass("folded");
        } else if ($(this).attr("id") == "reach") {
            $("#reach-content").toggleClass("folded", "");
            $("#learn-content, #see-content").addClass("folded");
        } else {
            return false;
        }
    });
});
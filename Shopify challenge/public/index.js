/**
 * preview images
 */
$(document).ready(function(){
    let previews = function(input, imagePreview){
        if(input.files){
            let numberOfFiles = input.files.length;
            for (i = 0; i < numberOfFiles; i++){
                let fileReader = new FileReader();
                fileReader.onload = function(event){
                    $($.parseHTML("<img>")).attr("src", event.target.result).appendTo(imagePreview);
                };
                fileReader.readAsDataURL(input.files[i]);
            }
        }
    };
    $("#file").on("change", function(){
        previews(this, "preview-images");
    });
});
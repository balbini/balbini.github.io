$(document).ready(function(){
  $(".snippet").on("click",function(){
    $("#exampleModal").modal("show");
  });
  let objectArray = [
    {
      name: "My First Project",
      project_name: "Google",
      description: "A Search Engine",
      project_image: "https://www.google.com/homepage/images/hero-dhp-chrome-mac.jpg?mmfb=9f871c66de344d37d2dd5a8c74d03a1b"
    }];
    let objectArray_2 = [
      {
        name: "Security Questions Project",
        project_name: "Bryan's Security Questions",//"file:///Users/bryanalbini/wdi/js-control-flow-training/starter-code/index.html",
        description: "Setting Up a Few Security Questions"
      }];
      let objectArray_3 = [
        {
          name: "My Third Project",
          project_name: "The Fantastic Mr. Fox",//"file:///Users/bryanalbini/wdi/json-to-html-with-mr-fox/index.html",
          description: "Learning About the Fantastic Mr. Fox"
        }


      ];

      for (i = 0; i < objectArray.length; i++){
        $(".project_links").append(`<li>${objectArray[i].name}</li>`)
        $(".project_links").append(`<li>${objectArray[i].project_name}</li>`)
        $(".project_links").append(`<li>${objectArray[i].description}</li>`)
        $(".img_1").attr("src", `${objectArray[i].project_image}`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_2").append(`<li>${objectArray_2[i].name}</li>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].project_name}</li>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].description}</li>`)
        $(".img_2").attr("src", `${objectArray_2[i].project_image}`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_3").append(`<li>${objectArray_3[i].name}</li>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].project_name}</li>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].description}</li>`)
      };


      //add image to array
      //add image to for loop
      //make it work on the webpage
  });

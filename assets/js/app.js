$(document).ready(function(){
  $(".snippet").on("click",function(){
    alert("Welcome to my portfolio, please explore!");
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
        description: "Setting Up a Few Security Questions",
        project_image:"https://d30y9cdsu7xlg0.cloudfront.net/png/45447-200.png"
      }];
      let objectArray_3 = [
        {
          name: "My Third Project",
          project_name: "The Fantastic Mr. Fox",//"file:///Users/bryanalbini/wdi/json-to-html-with-mr-fox/index.html",
          description: "Learning About the Fantastic Mr. Fox",
          project_image:"https://vignette1.wikia.nocookie.net/fantasticmrfox/images/e/ed/MrFox.jpg/revision/latest?cb=20140512194259"
        }


      ];

      for (i = 0; i < objectArray.length; i++){
        $(".project_links").append(`<a href="#img_1"><li>${objectArray[i].name}</li></a>`)
        $(".project_links").append(`<li>${objectArray[i].project_name}</li>`)
        $(".project_links").append(`<li>${objectArray[i].description}</li>`)
        $("#img_1").attr("src", `${objectArray[i].project_image}`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_2").append(`<a href="#img_2"><li>${objectArray_2[i].name}</li></a>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].project_name}</li>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].description}</li>`)
        $("#img_2").attr("src", `${objectArray_2[i].project_image}`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_3").append(`<a href="#img_3"><li>${objectArray_3[i].name}</li></a>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].project_name}</li>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].description}</li>`)
        $("#img_3").attr("src", `${objectArray_3[i].project_image}`)
      };


      //add image to array
      //add image to for loop
      //make it work on the webpage
    });

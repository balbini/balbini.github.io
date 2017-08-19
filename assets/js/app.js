$(document).ready(function(){
  $(".snippet").on("click",function(){
    $("#exampleModal").modal("show");
  });
  let objectArray = [
    {
      name: "My First Project",
      project_url: "https://www.google.com/",
      category: "Easy"
    }];
    let objectArray_2 = [
      {
        name: "Security Questions Project",
        project_url: "file:///Users/bryanalbini/wdi/js-control-flow-training/starter-code/index.html",
        category: "Medium"
      }];
      let objectArray_3 = [
        {
          name: "My Third Project",
          project_url: "file:///Users/bryanalbini/wdi/json-to-html-with-mr-fox/index.html",
          category: "Hard"
        }


      ];

      for (i = 0; i < objectArray.length; i++){
        $(".project_links").append(`<li>${objectArray[i].name}</li>`)
        $(".project_links").append(`<li>${objectArray[i].project_url}</li>`)
        $(".project_links").append(`<li>${objectArray[i].category}</li>`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_2").append(`<li>${objectArray_2[i].name}</li>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].project_url}</li>`)
        $(".project_links_2").append(`<li>${objectArray_2[i].category}</li>`)
      }
      for (i = 0; i < objectArray.length; i++){
        $(".project_links_3").append(`<li>${objectArray_3[i].name}</li>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].project_url}</li>`)
        $(".project_links_3").append(`<li>${objectArray_3[i].category}</li>`)
      };
  });

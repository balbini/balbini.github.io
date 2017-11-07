$(document).ready(function(){
  let objectArray = [
    {
      name: "Paladin",
      description: "An app designed for players of Dungeons and Dragons to create characters and maintain information about the party in their campaign.",
      project_link: "https://salty-everglades-69252.herokuapp.com/"
    },
    {
      name: "MicDrop",
      description: "An app designed for people to create playlists and share them with others.",
      project_link: "https://micdropapp.herokuapp.com/playlists"
    },
    {
      name: "Vagabond",
      description: "An app created for users to create posts about interesting aspects of various cities.",
      project_link: "https://vast-falls-69882.herokuapp.com/"
    }
  ];

      for (i = 0; i < objectArray.length; i++){
        $(".projects").append(`<a href="#img_1"><h3>${objectArray[i].name}</h3></a>
        <p>-${objectArray[i].description}</li>`)
        $("#img_1").attr("src", `${objectArray[i].project_link}`)
      }
});

let SportsApi = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=92139d3d64d84f04ab9e536b562f56d2`;

// let healthApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=92139d3d64d84f04ab9e536b562f56d2";

// let businessApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=92139d3d64d84f04ab9e536b562f56d2";

// let technologyApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=92139d3d64d84f04ab9e536b562f56d2";

// let scienceApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=92139d3d64d84f04ab9e536b562f56d2";

/*==========================Sports Section Starts here===========================*/

window
  .fetch(SportsApi)
  .then((sportsData) => {
    sportsData
      .json()
      .then((sports) => {
        console.log(sports.articles);
        let sportsFeed = sports.articles;
        let firstSportsBlock = sports.articles;

        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById("sportsFirstTemplate").innerHTML = `<ul>
             <img src="${sportsnewsBlockOne.urlToImage}" />
             <a href="${sportsnewsBlockOne.url}" target="_blank">
            
             </a>

          </ul>

          `;

        let output = [];
        for (let sport of sportsFeed) {
          output += `
            <ul class="list-group">
             <a href="${sport.url}" target="_blank">
               <li class="text-dark">
              ${sport.title}</li></a>
            </ul>
          `;
          document.getElementById("sportsAllTemplate").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*==========================Sports Section ends here===========================*/

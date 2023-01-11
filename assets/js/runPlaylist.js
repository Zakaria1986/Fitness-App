var runingPlayList = [
    // running play list
    {
        'playlistId': 'playlistId=PL9EOmt9pLEmUMUwSCElenjEQoljab98YX'
    }
    ,
    {
        'playlistId': 'playlistId=PL5TLzNi5fYd_gQY6cV42FZ4V4-16W8B_E'
    }
];

// lowIntensityWorkOut()

async function lowIntensityWorkOut() {
    var ipareturnedData = await fetchApiData(runingPlayList[0].playlistId);
    // console.log('Running low intensity workout:  ' + Object.values(ipareturnedData.items));

    var domContainer = $('#modal-body');
    domContainer.html(' ');

    // var tumbNail = ipareturnedData.items[0].snippet[0].thumbnails.standard.url;
    ipareturnedData.items.forEach((el) => {

        console.log('print: ',
            el
        );
        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;

        var playListId = el.snippet.playlistId;
        //console.log('id: ', playListId);
        var videoId = el.snippet.resourceId.videoId;


        var videos = `
        <div class="card ${playListId + ' ' + videoId} col-md-10" id="${playListId}"  style="width: 20rem;">
                            <iframe class="${videoId}"  id="${videoId}" width="420" height="315" src='${emBedClip}'></iframe>
                            <h4  class="card-text" >${title}</h4>
                            </div>
                        </div>
        `
        domContainer.append(videos);
    });
}

// lowIntensityWorkOut();

// Nutrition and mood regulation 
async function nutritianHelpRegulateMood() {
    var domContainer = $('#modal-body');
    domContainer.html(' ');
    var ipareturnedData = await fetchApiData(runingPlayList[1].playlistId);
    // console.log('Running low intensity workout:  ' + Object.values(ipareturnedData.items));


    // var tumbNail = ipareturnedData.items[0].snippet[0].thumbnails.standard.url;
    ipareturnedData.items.forEach((el) => {

        // console.log('print: ',
        //     el
        // );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;
        var playListId = el.snippet.playlistId;
        //console.log('id: ', playListId);
        var videoId = el.snippet.resourceId.videoId;


        var videos = `
        <div class="card ${playListId + ' ' + videoId} col-md-10" id="${playListId}"  style="width: 20rem;">
                            <iframe class="${videoId}"  id="${videoId}" width="420" height="315" src='${emBedClip}'></iframe>
                            <h4  class="card-text" >${title}</h4>
                            </div>
                        </div>
        `
        domContainer.append(videos);
    });

}

// nutritianHelpRegulateMood();


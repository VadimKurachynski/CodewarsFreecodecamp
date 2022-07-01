// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',

  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {


  if (prop === "artist" && value != "") { records[id][prop] = value; return records; }
  if (prop === "albumTitle") { records[id][prop] = value; return records; }


  if (prop === "tracks" && value != "") {

    if ([records].hasOwnProperty("tracks") === false) { records[id][prop]="43535"; }


    let n = [prop].length;
    console.log(n);
    if (n == 0) { records[id][prop] = [value]; return records; }
    if (n != 0) { records[id][prop][n + 1] = `${value}`; return records; }
  }

  if (prop === "artist" && value === "") { delete records[id][prop]; return records; }
  if (prop === "tracks" && value === "") { delete records[id][prop]; return records; }





  // console.log(recordCollection);
  return records;

}

//updateRecords(recordCollection, '5439', 'artist', 'ABBA');
updateRecords(recordCollection, '5439', "tracks", "Take a Chance on Me");

//updateRecords(recordCollection, '2548', 'artist', '');
//updateRecords(recordCollection, '2548', 'tracks', '');


//updateRecords(recordCollection, '1245', "albumTitle", "Riptide");
//updateRecords(recordCollection, '1245', 'tracks', ["Addicted to Love"]);

//updateRecords(recordCollection, '2468', 'tracks', "Free");
//
//recordCollection[2468].tracks[2]="neg";//[record][id].tracks[2]="neg";
//console.log(recordCollection[2468].tracks[3])
console.log(recordCollection['5439']);

//After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
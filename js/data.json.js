var galerie = {
  "arr-walls": [
    {
      "libelle": "mur-1",
      "arr-toiles": [
        {
          "src": "./galerie/octobre13II.jpg",
          "titre": "octobre13II",
          "hauteur": 0
        },
        {
          "src": "./galerie/janvier14V.jpg",
          "titre": "janvier14V",
          "hauteur": 0
        },
        {
         "src": "./galerie/fevrier14IV.jpg",
         "titre": "fevrier14IV",
          "hauteur": 0
        },
        {
          "src": "./galerie/mars14I.jpg",
          "titre": "mars14I",
          "hauteur": 0
        }
      ]
    },
    {
      "libelle": "mur-2",
      "arr-toiles": []
    },
    {
      "libelle": "mur-3",
      "arr-toiles": []
    },
    3
  ],
  "boolean": true,
  "null": null,
  "number": 123,
  "object": {
    "a": "b",
    "c": "d",
    "e": "f"
  },
  "string": "Hello World"
};


galerie.walls.forEach( function(item, index, array) {
    var li = document.createElement('li');
	
    li.textContent = item.libelle;
    document.getElementById('test').appendChild(li);
};


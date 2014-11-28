/**
 * galerie.js
 * 
 * @auteur     marc laville
 * @Copyleft 2014
 * @date       22/11/2014
 * @version    0.1
 * @revision   $0$
 *
 * - Gere la saisie des message depuis la galerie
 *
 * Licensed under the GPL license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 
$(document).ready(function(){

	var galerie = {
	  "walls": [
		{
		  "libelle": "mur-1",
		  "toiles": [
			{
			  "src": "./galerie/octobre13II.jpg",
			  "thumbUrl": "./galerie/thumb/octobre13II.png",
			  "titre": "octobre13II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/janvier14V.jpg",
			  "thumbUrl": "./galerie/thumb/janvier14V.png",
			  "titre": "janvier14V",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/fevrier14IV.jpg",
			  "thumbUrl": "./galerie/thumb/fevrier14IV.png",
			  "titre": "fevrier14IV",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mars14I.jpg",
			  "thumbUrl": "./galerie/thumb/mars14I.png",
			  "titre": "mars14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mars14VI.jpg",
			  "thumbUrl": "./galerie/thumb/mars14VI.png",
			  "titre": "mars14VI",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/avril14II.jpg",
			  "thumbUrl": "./galerie/thumb/avril14II.png",
			  "titre": "avril14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/avril14III.jpg",
			  "thumbUrl": "./galerie/thumb/avril14III.png",
			  "titre": "avril14III",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/avril14V.jpg",
			  "thumbUrl": "./galerie/thumb/avril14V.png",
			  "titre": "avril14V",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/aout14I.jpg",
			  "thumbUrl": "./galerie/thumb/aout14I.png",
			  "titre": "aout14I",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			}
		  ]
		},
		{
		  "libelle": "mur-2",
		  "toiles": [
			{
			  "src": "./galerie/juin13IV.jpg",
			  "thumbUrl": "./galerie/thumb/juin13IV.png",
			  "titre": "juin13IV",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/juin13VII.jpg",
			  "thumbUrl": "./galerie/thumb/juin13VII.png",
			  "titre": "juin13VII",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/juillet13IV.jpg",
			  "thumbUrl": "./galerie/thumb/juillet13IV.png",
			  "titre": "juillet13IV",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/juillet13V.jpg",
			  "thumbUrl": "./galerie/thumb/juillet13V.png",
			  "titre": "juillet13V",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/aout13I.jpg",
			  "thumbUrl": "./galerie/thumb/aout13I.png",
			  "titre": "aout13I",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/aout13II.jpg",
			  "thumbUrl": "./galerie/thumb/aout13II.png",
			  "titre": "aout13II",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/aout13III.jpg",
			  "thumbUrl": "./galerie/thumb/aout13III.png",
			  "titre": "aout13III",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			},
			{
			  "src": "./galerie/septembre13I.jpg",
			  "thumbUrl": "./galerie/thumb/septembre13I.png",
			  "titre": "septembre13I",
			  "hauteur": 40,
			  "largeur": 40,
			  "prix": 350
			}
		  ]
		},
		{
		  "libelle": "mur-3",
		  "toiles": [
			{
			  "src": "./galerie/septembre13II.jpg",
			  "thumbUrl": "./galerie/thumb/septembre13II.png",
			  "titre": "septembre13II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/septembre13III.jpg",
			  "thumbUrl": "./galerie/thumb/septembre13III.png",
			  "titre": "septembre13III",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/octobre13I.jpg",
			  "thumbUrl": "./galerie/thumb/octobre13I.png",
			  "titre": "octobre13I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/novembre13I.jpg",
			  "thumbUrl": "./galerie/thumb/novembre13I.png",
			  "titre": "novembre13I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/decembre13I.jpg",
			  "thumbUrl": "./galerie/thumb/decembre13I.png",
			  "titre": "decembre13I",
			  "hauteur": 30,
			  "largeur": 40
			},
			{
			  "src": "./galerie/decembre13II.jpg",
			  "thumbUrl": "./galerie/thumb/decembre13II.png",
			  "titre": "decembre13II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/decembre13III.jpg",
			  "thumbUrl": "./galerie/thumb/decembre13III.png",
			  "titre": "decembre13III",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/decembre13IV.jpg",
			  "thumbUrl": "./galerie/thumb/decembre13IV.png",
			  "titre": "decembre13IV",
			  "hauteur": 30,
			  "largeur": 40
			},
			{
			  "src": "./galerie/decembre13V.jpg",
			  "thumbUrl": "./galerie/thumb/decembre13V.png",
			  "titre": "decembre13V",
			  "hauteur": 30,
			  "largeur": 40
			},
			{
			  "src": "./galerie/janvier14I.jpg",
			  "thumbUrl": "./galerie/thumb/janvier14I.png",
			  "titre": "janvier14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/janvier14II.jpg",
			  "thumbUrl": "./galerie/thumb/janvier14II.png",
			  "titre": "janvier14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/janvier14III.jpg",
			  "thumbUrl": "./galerie/thumb/janvier14III.png",
			  "titre": "janvier14III",
			  "hauteur": 0
			},
			
			{
			  "src": "./galerie/janvier14IV.jpg",
			  "thumbUrl": "./galerie/thumb/janvier14IV.png",
			  "titre": "janvier14IV",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/fevrier14I.jpg",
			  "thumbUrl": "./galerie/thumb/fevrier14I.png",
			  "titre": "fevrier14I",
			  "hauteur": 0
			},{
			  "src": "./galerie/fevrier14II.jpg",
			  "thumbUrl": "./galerie/thumb/fevrier14II.png",
			  "titre": "fevrier14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/fevrier14III.jpg",
			  "thumbUrl": "./galerie/thumb/fevrier14III.png",
			  "titre": "fevrier14III",
			  "hauteur": 0
			}
		  ]
		},
		{
		  "libelle": "mur-4",
		  "toiles": [
			{
			  "src": "./galerie/fevrier14V.jpg",
			  "thumbUrl": "./galerie/thumb/fevrier14V.png",
			  "titre": "fevrier14V",
			  "hauteur": 0
			}, {
			  "src": "./galerie/mars14II.jpg",
			  "thumbUrl": "./galerie/thumb/mars14II.png",
			  "titre": "mars14II",
			  "hauteur": 0
			}, {
			  "src": "./galerie/mars14IV.jpg",
			  "thumbUrl": "./galerie/thumb/mars14IV.png",
			  "titre": "mars14IV",
			  "hauteur": 0
			}, {
			  "src": "./galerie/mars14V.jpg",
			  "thumbUrl": "./galerie/thumb/mars14V.png",
			  "titre": "mars14V",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/avril14I.jpg",
			  "thumbUrl": "./galerie/thumb/avril14I.png",
			  "titre": "avril14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/avril14IV.jpg",
			  "thumbUrl": "./galerie/thumb/avril14IV.png",
			  "titre": "avril14IV",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mai14I.jpg",
			  "thumbUrl": "./galerie/thumb/mai14I.png",
			  "titre": "mai14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mai14II.jpg",
			  "thumbUrl": "./galerie/thumb/mai14II.png",
			  "titre": "mai14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mai14III.jpg",
			  "thumbUrl": "./galerie/thumb/mai14III.png",
			  "titre": "mai14III",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/mai14iv.jpg",
			  "thumbUrl": "./galerie/thumb/mai14iv.png",
			  "titre": "mai14iv",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/juillet14II.jpg",
			  "thumbUrl": "./galerie/thumb/juillet14II.png",
			  "titre": "juillet14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/juillet14III.jpg",
			  "thumbUrl": "./galerie/thumb/juillet14III.png",
			  "titre": "juillet14III",
			},
			{
			  "src": "./galerie/juillet14I.jpg",
			  "thumbUrl": "./galerie/thumb/juillet14I.png",
			  "titre": "juillet14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/septembre14II.jpg",
			  "thumbUrl": "./galerie/thumb/septembre14II.png",
			  "titre": "septembre14II",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/septembre14I.jpg",
			  "thumbUrl": "./galerie/thumb/septembre14I.png",
			  "titre": "septembre14I",
			  "hauteur": 30,
			  "largeur": 40,
			  "prix": 500
			},
			{
			  "src": "./galerie/octobre14I.jpg",
			  "thumbUrl": "./galerie/thumb/octobre14I.png",
			  "titre": "octobre14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/novembre14I.jpg",
			  "thumbUrl": "./galerie/thumb/novembre14I.png",
			  "titre": "novembre14I",
			  "hauteur": 0
			},
			{
			  "src": "./galerie/novembre14II.jpg",
			  "thumbUrl": "./galerie/thumb/novembre14II.png",
			  "titre": "novembre14II",
			  "hauteur": 0
			}
		  ]
		}
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
	},
	ulNav = document.querySelectorAll('nav ul li a'),
	selectLi = function( e ) {
		var li = e.currentTarget.parentNode,
			lis = li.parentNode.querySelectorAll('li');

		for(i = 0 ; i < lis.length ; i++) {
			var liCour = lis[i];
			
			if( liCour == li ){
				liCour.classList.add('select');
			} else {
				liCour.classList.remove('select');
			}
			
//			ulNav[i].addEventListener('click', selectLi ) 
		}
		return;
	}
	
	for(i = 0 ; i < ulNav.length ; i++) {
		ulNav[i].addEventListener('click', selectLi );
	}


	galerie.walls.forEach( function(item, index, array) {
		var divWall = document.createElement('div'),
			h2Mur = divWall.appendChild(document.createElement('h2')),
			ulThumb = divWall.appendChild(document.createElement('ul')),
			ulToiles = divWall.appendChild(document.createElement('ul')),
			divControls = divWall.appendChild(document.createElement('div')),
			liToile = function(modeleToile) {
				var liToile = document.createElement('li'),
					figToile = liToile.appendChild(document.createElement('figure')),
					img = figToile.appendChild(document.createElement('img')),
					figcaption = figToile.appendChild(document.createElement('figcaption')),
					spanDim = document.createElement('span');
					spanPrix = document.createElement('span');
					
				img.setAttribute( 'alt', modeleToile.titre );
				img.setAttribute( 'src', modeleToile.src );
				
				figcaption.textContent = modeleToile.titre;
				figcaption.classList.add('img-caption');
				
				figcaption.appendChild(spanDim).textContent = '';
				if( modeleToile.prix ) {
					figcaption.appendChild(spanPrix).textContent = modeleToile.prix;
				}
				
				liToile.classList.add('item--big');
		
	//			return this.appendChild(liToile);
				return liToile;
			},
			liThumb = function(modeleToile) {
				var liThumb = document.createElement('li'),
					aThumb = liThumb.appendChild(document.createElement('a')),
					img = aThumb.appendChild(document.createElement('img'));
					
				img.setAttribute( 'alt', modeleToile.titre );
				img.setAttribute( 'src', modeleToile.thumbUrl );
				
				aThumb.setAttribute( 'href', '#' );
				
				liThumb.classList.add('item');
		
	//			return this.appendChild(liThumb);
				return liThumb;
			},
			ajoutToile = function(modeleToile) {
				var t = this;
				
				t[1].appendChild(liThumb(modeleToile));
				
				return t[0].appendChild(liToile(modeleToile));
			};
		
		h2Mur.textContent = item.libelle;
		ulThumb.classList.add('items--small');
		ulToiles.classList.add('items--big');
		
		item.toiles.forEach( ajoutToile, [ulToiles, ulThumb] );
	//	item.toiles.forEach( liToile, ulToiles );
		
		divWall.setAttribute( 'id', item.libelle );
		divWall.classList.add('mur');
		
		/*
		 * ajout des controles
		 */
		divControls.classList.add('nav-controls');
		divControls.innerHTML = 
			  '<span class="control icon-arrow-left" data-direction="previous"></span>\n'
			+ '<span class="control icon-arrow-right" data-direction="next"></span>\n'
			+ '<span class="grid icon-grid"></span>\n'
			+ '<span class="fs-toggle icon-fullscreen"></span>\n';

		return document.getElementById('galerie').appendChild(divWall);
	});

	
     $('#mur-1').sGallery({
        fullScreenEnabled: true
      });
     $('#mur-2').sGallery({
        fullScreenEnabled: true
      });
     $('#mur-3').sGallery({
        fullScreenEnabled: true
      });
     $('#mur-4').sGallery({
        fullScreenEnabled: true
      });

	  window.location.href = '#mur-1';
});

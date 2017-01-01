/**
 * galerie.js
 * 
 * @auteur     marc laville
 * @Copyleft 2014
 * @date       22/11/2014
 * @version    0.1
 * @revision   $0$
 *
 * 
 * @date revision   19/12/2016 Boucle sur les element par forEach
 *
 * @aFaire
 * - JQuery less
 *
 * - Affichage de la galerie et gestion des messages
 *
 * Licensed under the GPL license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 
$(document).ready(function(){

	var ulNav = document.querySelectorAll('nav ul li a'),
    /**
     * Selection d'un mur
     */
		selectMur = function( e ) {
			var liSelect = e.currentTarget.parentNode;

      Array.from( liSelect.parentNode.querySelectorAll('li') ).forEach( function(liCour) {
				if( liCour == liSelect ){
					liCour.classList.add('select');
				} else {
					liCour.classList.remove('select');
				}
      });

			return;
		},
    /**
     * Construction d'un mur
     */
		construitMur = function( item, index, array ) {
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
						pTauxVib = document.createElement('p'),
						spanDim = document.createElement('span'),
						spanPrix = document.createElement('span');
						
					img.setAttribute( 'alt', modeleToile.titre );
					img.setAttribute( 'src', modeleToile.path );
					
					figcaption.textContent = modeleToile.titre;
					figcaption.classList.add('img-caption');
					
					figcaption.appendChild(pTauxVib).textContent = ( modeleToile.tx_vibratoire > 0 ) ? 'taux vibratoire : ' + modeleToile.tx_vibratoire : '';
					figcaption.appendChild(spanDim).textContent = 
						( modeleToile.hauteur * modeleToile.largeur > 0 ) ? modeleToile.largeur + ' x ' + modeleToile.hauteur : '';
					figcaption.appendChild(spanPrix).textContent = ( modeleToile.prix > 0 ) ? modeleToile.prix + ' €' : '';;
					
					liToile.classList.add('item--big');
			
					return liToile;
				},
				liThumb = function(modeleToile) {
					var liThumb = document.createElement('li'),
						aThumb = liThumb.appendChild(document.createElement('a')),
						img = aThumb.appendChild(document.createElement('img'));
						
					img.setAttribute( 'alt', modeleToile.titre );
					img.setAttribute( 'src', modeleToile.path_thumb );
					
					aThumb.setAttribute( 'href', '#' );
					
					liThumb.classList.add('item');
			
					return liThumb;
				},
				ajoutToile = function(modeleToile) {

          ulThumb.appendChild( liThumb(modeleToile) );
					ulToiles.appendChild(liToile(modeleToile));
				};
			
			h2Mur.textContent = item.libelle;
			ulThumb.classList.add('items--small');
			ulToiles.classList.add('items--big');
			
			item.toiles.forEach(ajoutToile);
			
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
				+ '<span class="fs-toggle icon-fullscreen"></span>\n'
				+ '<span class="icon-achat"></span>\n';

			return document.getElementById('galerie').appendChild(divWall);
		}
	
  Array.from(ulNav).forEach( function(elmt) { return elmt.addEventListener('click', selectMur ); } );

	$.getJSON( "./data/galerie.json", function( data ) {
		data.walls.forEach( construitMur );
		
    ['#mur-1', '#mur-2', '#mur-3', '#mur-4', '#mur-5' ].forEach( function(str) {
      return $(str).sGallery({ fullScreenEnabled: true });
    });

    window.location.href = '#mur-1';
	})
});

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
 
 
/**
 * 
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Référence : https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
*/
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) { 
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) { 
      var number = Number(value); 
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number)); 
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) { 
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; 
  
    // La propriété length de la méthode vaut 1.
    return function from(arrayLike/*, mapFn, thisArg */) { 
      // 1. Soit C, la valeur this
      var C = this;
      
      // 2. Soit items le ToObject(arrayLike).
      var items = Object(arrayLike); 
      
      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) { 
        throw new TypeError("Array.from doit utiliser un objet semblable à un tableau - null ou undefined ne peuvent pas être utilisés");
      }
    
      // 4. Si mapfn est undefined, le mapping sera false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {  
        // 5. sinon      
        // 5. a. si IsCallable(mapfn) est false, on lève une TypeError.
        if (!isCallable(mapFn)) { 
          throw new TypeError('Array.from: lorsqu il est utilisé le deuxième argument doit être une fonction'); 
        }
     
        // 5. b. si thisArg a été fourni, T sera thisArg ; sinon T sera undefined.
        if (arguments.length > 2) { 
          T = arguments[2];
        }
      }
    
      // 10. Soit lenValue pour Get(items, "length").
      // 11. Soit len pour ToLength(lenValue).
      var len = toLength(items.length);  
     
      // 13. Si IsConstructor(C) vaut true, alors
      // 13. a. Soit A le résultat de l'appel à la méthode interne [[Construct]] avec une liste en argument qui contient l'élément len.
      // 14. a. Sinon, soit A le résultat de ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
   
      // 16. Soit k égal à 0.
      var k = 0;  // 17. On répète tant que k < len… 
      var kValue;
      while (k < len) {
        kValue = items[k]; 
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k); 
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Soit putStatus égal à Put(A, "length", len, true).
      A.length = len;  // 20. On renvoie A.
      return A;
    };
  }());
}
 
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

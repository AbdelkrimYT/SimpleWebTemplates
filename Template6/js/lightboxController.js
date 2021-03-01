(function($){
	
	$.fn.lightboxController = function(options){

		// Regular expressions
		var youtubeReg = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/,
			vimeoReg = /mp4/;

		// Generate default lightbox settings
		var settings = $.extend({
			appendRegion:	'footer',
			lightboxID:		'lightbox',
			fadeDuration: 	300,
			contentFade:	300,
			closeBtn:		null,
			opened:			function(){},
			closed:			function(){}
		}, options);


		// Create main lightbox component
		var lightboxContain = $('<div>',{
			class: 	'lightboxContain',
			id:		settings.lightboxId
		});		


		// Generate individual lightbox 
		$(this).each( function(){
			var lightboxIndex = $(this).attr('data-id');

			// Build content holder
			var boxContent = $('<div>',{
				class: 	'indLightbox',
				id:		'boxSingle-' + lightboxIndex,
			});			

			// reset default type
			var srcType = '';

			// Gather data from items
			var src = $(this).attr('data-src'),
				alt = '';
			
			// If image alt found
			if( $(this).attr('data-alt') != undefined ) {
				var alt = $(this).attr('data-alt');
			}

			// Detect src type and build lightbox content relative to
			if( src.match(youtubeReg) ){
				// Youtube
				var videoID = src.split('watch?v=')[1];
				var boxInner = $('<iframe>',{
					class: 		'lightVideo youtube',
					src: 		"https://www.youtube.com/embed/" + videoID + "?enablejsapi=true&version=3&playerapiid=ytplayer"
				});
			} else if( src.match(vimeoReg) ){
				// Vimeo
				var videoID = src.match(vimeoReg)[3];
				var boxInner = $('<iframe>',{
					class: 	'lightVideo vimeo',
					src: src
				});
			} else {
				// Image
				var boxInner = $('<img>',{
					class: 	'lightImage',
					src:	src,
					alt:	alt
				});				
			}

			// Append content to content wrapper
			boxContent.append(boxInner);

			// Append individual item to lightbox container
			lightboxContain.append(boxContent);
		});

		// Append build lightbox to final destination
		lightboxContain.insertAfter( $(settings.appendRegion) ).hide().children('.indLightbox').hide();

		// Control viewing lightbox
		$(this).on('click', function(e) {
			if( !lightboxContain.is(':hidden') ){
				settings.closed.call(this);
				lightboxContain.fadeOut(settings.fadeDuration).children('.indLightbox').hide(settings.contentFade);
			} else {
				var selectedID = $(this).attr('data-id');
				settings.opened.call(this);
				lightboxContain.fadeIn(settings.fadeDuration).find('#boxSingle-' + selectedID + '').show(settings.contentFade);
			}
		});

		// Close lightbox
		lightboxContain.on('click', function(event){
			if( event.target != this ){
				return;
			}
			settings.closed.call(this);
			lightboxContain.fadeOut(settings.fadeDuration).children('.indLightbox').hide(settings.contentFade);
		});

	}

}(jQuery));
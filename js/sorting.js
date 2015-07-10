/* SORTING */ 

jQuery(function(){
  var $container = $('.portfolio_block');

  $container.isotope({
	itemSelector : '.element'
  });
    
  var $optionSets = $('#options .optionset'),
	  $optionLinks = $optionSets.find('a');

  $optionLinks.click(function(){
	var $this = $(this);
	// don't proceed if already selected
	if ( $this.parent('li').hasClass('selected') ) {
	  return false;
	}
	var $optionSet = $this.parents('.optionset');
	$optionSet.find('.selected').removeClass('selected');
	$optionSet.find('.fltr_before').removeClass('fltr_before');
	$optionSet.find('.fltr_after').removeClass('fltr_after');
	$this.parent('li').addClass('selected');
	$this.parent('li').next('li').addClass('fltr_after');
	$this.parent('li').prev('li').addClass('fltr_before');

	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	  // changes in layout modes need extra logic
	  changeLayoutMode( $this, options )
	} else {
	  // otherwise, apply new options
	  $container.isotope(options);	  
	}	
	return false;	
  });
	$container.isotope('reLayout');
});

jQuery.fn.portfolio_addon = function(addon_options) {
	//Set Variables
	var addon_el = jQuery(this),
		addon_base = this,
		img_count = addon_options.items.length,
		img_per_load = addon_options.load_count,
		$newEls = '',
		loaded_object = '',
		$container = jQuery('.image-grid');

	loadWorks = function() {
		$newEls = '';
		loaded_object = '';									   
		loaded_images = $container.find('.added').size();
		if ((img_count - loaded_images) > img_per_load) {
			now_load = img_per_load;
		} else {
			now_load = img_count - loaded_images;
		}
		
		if ((loaded_images + now_load) == img_count) {
			jQuery('.btn_load_more').fadeOut();			
			if (jQuery('.btn_load_more_fs').size() > 0) {
				jQuery('.btn_load_more_fs').waypoint('destroy');
			}
		}

		if (loaded_images < 1) {
			i_start = 1;
		} else {
			i_start = loaded_images+1;
		}

		if (now_load > 0) {
			if (addon_options.type == 0) {
				//1 Column Portfolio Type
				for (i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + 
					
					'<div data-category="'+ addon_options.items[i].category +'" class="'+ addon_options.items[i].category +' element row-fluid added"><div class="filter_img span6"><img src="'+ addon_options.items[i].src +'" alt="" width="558" height="363"><div class="gallery_fadder"></div><a href="'+ addon_options.items[i].src +'" class="prettyPhoto"></a><a href="'+ addon_options.items[i].url +'" class="post_link"></a></div><div class="portfolio_dscr span6"><h3><a href="'+ addon_options.items[i].url +'">'+ addon_options.items[i].title +'</a></h3><div class="portfolio_meta"><span>'+ addon_options.items[i].post_date +'</span><span><a href="#">'+ addon_options.items[i].post_author+'</a></span><span>In <a href="#">'+ addon_options.items[i].category +'</a></span><span>Tags: '+ addon_options.items[i].tags +'</span></div>'+ addon_options.items[i].description +'</div></div>';
				}
			} else if (addon_options.type == 1) {
				//2-4 Columns Portfolio Type
				for (i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + '<div data-category="'+ addon_options.items[i].category +'" class="'+ addon_options.items[i].category +' element added"><div class="filter_img gallery_item"><a href="portfolio_post.html"><img src="'+ addon_options.items[i].src +'" alt="" width="570" height="444"><div class="gallery_fadder"></div><div class="ico_gallery"></div><div class="gallery_descr"><h6 class="gallery_title">'+ addon_options.items[i].title +'</h6><p>'+ addon_options.items[i].description +'</p></div></a></div></div>';
					
				}
			} else {
				//Fullscreen
				for (i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + '<div data-category="'+ addon_options.items[i].category +'" class="'+ addon_options.items[i].category +' element grid_gallery-item added el_in_progress"><div class="filter_img gallery_item"><a href="'+ addon_options.items[i].url +'"><img src="'+ addon_options.items[i].src +'" alt="" width="570" height="444"><div class="gallery_fadder"></div><div class="ico_gallery"></div><div class="gallery_descr"><h6 class="gallery_title">'+ addon_options.items[i].title +'</h6><p>'+ addon_options.items[i].description +'</p></div></a></div></div>';
					
				}
			}
			$newEls = jQuery(loaded_object);
			$container.isotope('insert', $newEls, function() {
				$container.isotope('reLayout');
					if (jQuery('.image-grid').hasClass('columns1')) {
						jQuery('.added').find('.prettyPhoto').prettyPhoto();
						jQuery('.portfolio_block').isotope('reLayout');
					} 
					else {
						jQuery('.portfolio_block').isotope('reLayout');
						jQuery('.image-grid').find('.gallery_item').each(function(){
							jQuery(this).find('.gallery_descr').css('bottom' , -1*(jQuery(this).height()+60)+'px');
							place_icon = (jQuery(this).height()-jQuery(this).find('.gallery_descr').height()-43-jQuery(this).find('.ico_gallery').height())/2;
							jQuery(this).find('.ico_gallery').css('top', place_icon+'px');
						});						
						jQuery('.portfolio_block').isotope('reLayout');
						setTimeout("item_update()",500);
					}
			});			
		}		
	}
	
	jQuery('.btn_load_more').click(function(){
		loadWorks();		
	});
	if (jQuery('.btn_load_more_fs').size() > 0) {
		jQuery('.btn_load_more_fs').waypoint(function(direction){
			if (direction == 'down') {
				loadWorks();
				 setTimeout("$.waypoints('refresh')",500);
			}		
		},{offset: '90%'});
	}
	
}

jQuery(window).load(function(){
	jQuery('.image-grid').isotope('reLayout');
	if (jQuery(window).width() < 760) {
		setTimeout("jQuery('.image-grid').isotope('reLayout')",500);
	}
	setTimeout("item_update()",1000);
});

function item_update() {
	setTimeout("jQuery('.el_in_progress').removeClass('el_in_progress')",300);
	jQuery('.image-grid').find('.gallery_item').each(function(){
		jQuery(this).find('.gallery_descr').css('bottom' , -1*(jQuery(this).height()+60)+'px');
		place_icon = (jQuery(this).height()-jQuery(this).find('.gallery_descr').height()-43-jQuery(this).find('.ico_gallery').height())/2;
		jQuery(this).find('.ico_gallery').css('top', place_icon+'px');
	});

}
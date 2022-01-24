import React from 'react';

import StaticNewsCards from './StaticNewsCards';

import $ from 'jquery'

const Headline_section = () => {

//! ----------------------------------------------------------------------------------------------------------------------------------------
//* TAB-NAV-BAR JS 


var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();

$(".selector").css({
    "left": activeItem.position.left + "px", 
    "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
    e.preventDefault();
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
    });
});


$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active-tab').siblings().removeClass('active-tab');

        e.preventDefault();
    });
});

const tabs2 = document.querySelectorAll('[data-tab-target]')
const tabssContent = document.querySelectorAll('[data-tab-content]')


tabs2.forEach((tab) => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabssContent.forEach((tabContent) => {
            tabContent.classList.remove('active-tab')
        })
        target.classList.add('active-tab')
    })
})
//! ------------------------------------------------------------------------------------------------------------------------------------

    return(
        <div>
            <div class="headline-section">
                <div class="container-center">
                    <div>
                        <div class="headline-section-container">
                            <div class="headline-header headline-center">
                            <h2>Unrivalled intelligence on the Technology sector</h2>
                            <p>
                                Leveraging our proprietary panel of 15 million people worldwide, YouGov 
                                has over 10 years of data and insights on the Technology sector. Explore 
                                a range of curated highlights on the latest in digital trends below, or 
                                contact us to dig much, much deeper.
                            </p>
                        </div>
                        <div class="headline-container">
                            
                                <StaticNewsCards />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Headline_section;

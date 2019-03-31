/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function toggleMenu() {
    $('.o-nav__menu').toggleClass('o-nav__menu--visible');
    $('.app').toggleClass('l-scroll--hide');
}

function toggleRoutes(filterDifficulty) {
    var filterDifficultyClass = '.c-filters__item--' + filterDifficulty;
    var routeDifficultyClass = '.o-cards__item--' + filterDifficulty;

    $('#filterList .c-filters__item:not(' + filterDifficultyClass + ')').addClass('c-filters__item--deactive');
    $('#filterList').find(filterDifficultyClass).removeClass('c-filters__item--deactive');

    

    $('#routeList .o-cards__item').hide()

    if ($('#filterList').find('.c-filters__item--deactive').length == 0) {
        $('#routeList .o-cards__item').show()
    } else {
        $('#routeList').find(routeDifficultyClass).show();
    }
}

(function ($) {
    $("#navButton").click(function () {
        toggleMenu();
        $(this).toggleClass('c-nav__button--active');
    });


})(jQuery);
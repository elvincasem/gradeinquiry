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
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener('offline', this.onDeviceOffline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
	onDeviceOffline: function() {
        app.receivedEventStatus('status');
    },
	receivedEventStatus: function(id) {
        var parentElement = document.getElementById(id);
        var receivedElement = parentElement.querySelector('.off');
        receivedElement.setAttribute('style', 'visibility:visible;');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		var statusElement = parentElement.querySelector('.offline');
		var statusElement2 = parentElement.querySelector('.off');

        listeningElement.setAttribute('style', 'visibility:hidden;height:0px;min-height:0px;padding:0px;');
        receivedElement.setAttribute('style', 'visibility:visible;');
		statusElement.setAttribute('style','visibility:hidden;height:0px;min-height:0px;padding:0px;');
		statusElement2.setAttribute('style','visibility:hidden;');
        console.log('Received Event: ' + id);
    }
};

		
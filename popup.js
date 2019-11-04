// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//This script works for "Popup.html"

var ytext = document.getElementById("ytext")
ytext.focus();
ytext.select();

//Function to open DuckDuckGo tab
function openTab(){
  setTimeout(()=>{window.open('https://duckduckgo.com/?q='+ytext.value, '_blank');},100)
}

ytext.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter key
    openTab();
  }
});

ytext.onpaste = openTab;
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!', 'Welcome to the \'folio',
      'Ben Bitdiddle sends his regards...', 'Melon Usk be like', 'Welcome to wendy\'s', 'fire the cannon!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
} 

window.addEventListener('scroll', function(e) {

    const targets = document.querySelectorAll('.parallax-landing');

    for(let index = 0; index < targets.length; index++) {
        let pos = window.pageYOffset * targets[index].dataset.rate;

        if(targets[index].dataset.direction === 'vertical') {
            targets[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
        } else {
            targets[index].style.transform = 'translate3d(' + pos + 'px, 0px, 0px)';
        }

    }

});
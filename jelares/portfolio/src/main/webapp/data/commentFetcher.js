// Copyright 2020 Google LLC
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
 * Fetches example comments and adds them to the DOM.
 */
function getComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    // comments is an HTML object

    console.log(comments);

    const commentListElement = document.getElementById('comment-list');
    commentListElement.innerHTML = '';
    commentListElement.appendChild(
        createListElement('Comment 1: ' + comments.comment0));
    commentListElement.appendChild(
        createListElement('Comment 2: ' + comments.comment1));
    commentListElement.appendChild(
        createListElement('Comment 3: ' + comments.comment2));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

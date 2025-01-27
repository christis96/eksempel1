function blankall(){
    document.getElementById('verktøykort').innerHTML = '';
    document.getElementById('htmlkort').innerHTML = '';
    document.getElementById('csskort').innerHTML = '';
    document.getElementById('javascriptkort').innerHTML = '';
    document.getElementById('hodekroppbenkort').innerHTML = '';
   
}

function nolayout(){   
    document.getElementById('cards').classList.value = '';
}

function verticallayout(){
    nolayout();
    document.getElementById('cards').classList.add('vertical');
}

function horizontallayout(){
    nolayout();
    document.getElementById('cards').classList.add('horizontal')
}

function gridlayout(){
    nolayout();
    document.getElementById('cards').classList.add('grid')
}

function showtools(){
    blankall();
    document.getElementById('verktøykort').innerHTML = `
        <div class="innercard">
        De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet
                <a href="https://code.visualstudio.com/">
                    Visual Studio Code</a>
                <br>
                Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li> Nettleseren
                <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
            </li>
        </ul>
        </div>
       
    `;
}

function showhtml(){
    blankall();
    document.getElementById('htmlkort').innerHTML = `
    <div class="innercard">
    Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
        </div>
    
    
    `;
    
}

function showcss(){
    blankall();
    document.getElementById('csskort').innerHTML = `
    <div class="innercard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
        </div>
    
    
    
    `;

}

function showjavascript(){
    blankall();
    document.getElementById('javascriptkort').innerHTML = `
    <div class="innercard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
        ved
        å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>border-radius</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                Moodle.</li>
            <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>

        </ul>
        </div>
    
    
    
    `;

}



function showhodekroppben(){
    blankall();
    document.getElementById('hodekroppbenkort').innerHTML = /*html*/ `
    <div class="innercard">
        <div id="head" class="bodypart"></div>
        <div>
            <button>◀</button>
            <img src="img/body1.png">
            <button>▶</button>
        </div>
        <div>
            <button>◀</button>
            <img src="img/legs1.png">
            <button>▶</button>
        </div>
    </div>
    
    
    
    `;
    showhead1();
}

function showhead1(){
    document.getElementById('head').innerHTML = /*html*/ `
    <div>
            <button onclick="showhead4()">◀</button>
            <img src="img/head1.png">
            <button onclick="showhead2()">▶</button>
    </div>
    
    
    
    `
}

function showhead2(){
    document.getElementById('head').innerHTML = /*html*/ `
    <div>
            <button onclick="showhead1()">◀</button>
            <img src="img/head2.png">
            <button onclick="showhead3()">▶</button>
    </div>
    
    
    
    `
}

function showhead3(){
    document.getElementById('head').innerHTML = /*html*/ `
    <div>
            <button onclick="showhead2()">◀</button>
            <img src="img/head3.png">
            <button onclick="showhead4()">▶</button>
    </div>
    
    
    
    `
}

function showhead4(){
    document.getElementById('head').innerHTML = /*html*/ `
    <div>
            <button onclick="showhead3()">◀</button>
            <img src="img/head4.png">
            <button onclick="showhead1()">▶</button>
    </div>
    
    
    
    `
}
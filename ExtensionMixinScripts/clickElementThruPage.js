"use strict";var tempDiv=document.querySelector("#hTempDivClickSignal");document.querySelector(tempDiv.textContent).click(),tempDiv.dispatchEvent(new CustomEvent("clickFinished"));

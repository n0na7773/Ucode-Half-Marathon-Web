var person = document.querySelectorAll("li"); 
for(var k = 0; k < person.length; k++) {
    const lineBreak = document.createElement('br');
    person[k].appendChild(lineBreak);
    if (person[k].hasAttribute('data-element') && person[k].hasAttribute('class')) {
        var attrs = person[k].attributes;
        for(var i = 0; i < attrs.length; i++) {
            if(attrs[i].name === "class") {
                if(attrs[i].value === "good") {
                    person[k].style.cssText = document.querySelector(".good").style.cssText;
                }
                else if(attrs[i].value === "evil") {
                    person[k].style.cssText = document.querySelector(".evil").style.cssText;
                }
                else person[k].style.cssText = document.querySelector(".unknown").style.cssText;
            }
            else if(attrs[i].name === "data-element") {
                let elements = attrs[i].value.split(" ");
                for (var j = 0; j < elements.length; j++) {
                    if(elements[j] === "air") {
                        let div = document.createElement("div");
                        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: #5a8de1;";
                        person[k].appendChild(div);
                    }
                    else if(elements[j] === "water") {
                        let div = document.createElement("div");
                        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: #0f1b8b;";
                        person[k].appendChild(div);
                    }
                    else if(elements[j] === "earth") {
                        let div = document.createElement("div");
                        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: #496b2e;";
                        person[k].appendChild(div);
                    }
                    else if(elements[j] === "fire") {
                        let div = document.createElement("div");
                        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: #9f000e;";
                        person[k].appendChild(div);
                    }
                }
            }
        }
    } 
    else if (!person[k].hasAttribute('data-element') && person[k].hasAttribute('class')){
        let div = document.createElement("div");
        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: lightgrey;";
        let line = document.createElement("div");
        line.style.cssText = "position: relative;width: 20px;height: 2px;background-color: white;border-radius: 0;top: 9px;transform: rotate(-225deg);";
        div.appendChild(line);
        person[k].appendChild(div);
        var attrs = person[k].attributes;
        for(var i = 0; i < attrs.length; i++) {
            if(attrs[i].name === "class") {
                if(attrs[i].value === "good") {
                    person[k].style.cssText = document.querySelector(".good").style.cssText;
                }
                else if(attrs[i].value === "evil") {
                    person[k].style.cssText = document.querySelector(".evil").style.cssText;
                }
                else person[k].style.cssText = "border: 3px solid #764cae;";
            }
        }
    }
    else if (!person[k].hasAttribute('class')) {
        let div = document.createElement("div");
        div.style.cssText = "display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid white;margin:3px;background-color: lightgrey;";
        let line = document.createElement("div");
        line.style.cssText = "position: relative;width: 20px;height: 2px;background-color: white;border-radius: 0;top: 9px;transform: rotate(-225deg);";
        div.appendChild(line);
        person[k].appendChild(div);
        person[k].style.cssText = "border: 3px solid #764cae;";
    }
}
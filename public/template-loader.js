async function loadTemplates(){

    let domObjects = document.getElementsByTagName("*");

    for(let i = 0; i < domObjects.length; i++){
        let obj = domObjects[i];

        let file = obj.getAttribute("load-from-file");

        if (!file)
            continue;

        let template = await fetch(file);

        let body = await template.text();

        obj.outerHTML = body;

        console.log(body);
    }

}
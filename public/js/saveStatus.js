const saveStatus = async (event) => {
    event.preventDefault();

    let statusUpdates= [];
    let allText = document.getElementsByTagName("textarea");
    console.log(allText);

    for (let i = 0; i < allText.length; i++){
        statusUpdates.push(allText[i].value);
    }

    console.log("these are the save status", statusUpdates);
}

document
.querySelector('#save-status')
.addEventListener('click', saveStatus);
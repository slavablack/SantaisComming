let citate=[];
citate.push("Christmas will always be as long as we stand heart to heart and hand in hand. ")
citate.push("test");
citate.push("tesztutzt");


function clickfunction () {
    console.log(citate)
    const rand = Math.floor(Math.random() * citate.length);

    document.getElementById ("para").innerHTML = citate[rand];
    
}

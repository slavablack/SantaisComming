let citate=[];
citate.push("„Colindele de Crăciun sunt bogăţia sufletului şi zâmbetul îngerilor.” – Betty Marcovici")
citate.push("Crăciunul flutură o baghetă magică deasupra acestei lumi şi sub ea totul este mai blând şi mai frumos" );
citate.push(" „Nu vă faceţi griji în privinţa dimensiunii unui brad. Oricât ar fi de mic, pentru copii va fi mare.” – Larry Wilde");


function clickfunction () {
    console.log(citate)
    const rand = Math.floor(Math.random() * citate.length);

    document.getElementById ("para").innerHTML = citate[rand];
    
}

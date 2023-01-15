const diveLinker = new DiveLinker("divegame");


/*function Start() {
    diveLinker.enableBlock(false);
    var makeSureDiveIsReady = setInterval(() => {
        diveLinker.getOutputList();
        if (diveLinker.getLoadingStatus()) {
            clearInterval(makeSureDiveIsReady);
            window.requestAnimationFrame(StartGame);
            diveLinker.start()
        }
    }, 50)
}
Start();

function StartGame() {
    console.log(diveLinker.getOutputList()["db9d048734fe47608fa68b185c63187b"].value)
    //if(判斷專案執行底下哪個(不同遊戲))
    var x = 1;
    var score = diveLinker.getOutputList()["db9d048734fe47608fa68b185c63187b"].value;
    if (x = 1) {
        set(ref(database, 'score/' + user.uid), {
            Score: score
        })
        x = 0;
    }
    if (diveLinker.checkComplete()) {

        set(ref(database, 'score/' + user.uid), {
            Score: score
        })

        return;
    }
    window.requestAnimationFrame(StartGame);
}*/
let score = 0;

function getSadInterval() {
    return Date.now() + 1000;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
    return Math.random()
}

const moles = [{
        staus: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-1')
    },
    {
        staus: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-3')
    },
    {
        staus: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-5')
    },
    {
        staus: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-7')
    },
    {
        staus: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-9')
    },

];

function getNextStatus(mole) {

    switch (mole.status) {
        case "sad":
        case "fed":
            mole.next = getSadInterval();
            mole.status = "leaving";
            if (mole.king) {
                mole.node.src = './king-mole-leaving.png';
            } else {
                mole.node.src = './mole-leaving.png';
            }

            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.next = getHungryInterval();
            mole.status = 'gone';
            mole.king = getKingStatus();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            if (mole.king) {
                mole.node.children[0].src = './king-mole-hungry.png';
            } else {
                mole.node.children[0].src = './mole-hungry.png';
            }

            break;
        case "hungry":
            mole.status = "sad";
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            if (mole.king) {
                mole.node.children[0].src = './king-mole-sad.png';
            } else {
                mole.node.children[0].src = './mole-sad.png';
            }

            break;

    }
}

function feed(event) {
    if (event.target.tagName !== 'IMG' || !event.target.classList.contains("hungry")) {
        return;
    }
    const mole = moles[parseInt(event.target.dataset.index)];

    mole.status = 'fed';
    mole.next = getSadInterval();

    if (mole.king) {
        score = score + 2;
        mole.node.children[0].src = './king-mole-fed.png';
    } else {
        score++;
        mole.node.children[0].src = './mole-fed.png';
    }
    mole.node.children[0].classList.remove('hungry');

    if (score >= 10) {
        win();
    }
    documentmtny.querySelector('.worm-container').Style.width = `${10 * score}%`;
}

function win() {
    document.querySelector('.bg').classList.add("hide");
    document.querySelector('.bg').classList.remove("hide");
}

let runAgainAt = Date.now() + 100;

function nextFrame() {

    const now = Date.now();

    if (runAgainAt <= now) {
        for (let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame); //used to run in loop
}

document.querySelector('.bg').addEventListener('click', feed);

nextFrame();
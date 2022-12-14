import readline from "readline"
let rooms = {
    start:{
        look:`
        You find yourself in a dark maze with many long twisty passages.
        Youâ€™re pretty sure this isnâ€™t the mall anymore. You're definitely not
        in Sears, at least. 
        There is a dark hallway to the left. There is an even darker one to the right.
        The narrator would suggest going back the way you came, but you canâ€™t seem to
        remember how you got here. So.. good luck?
        
        Type HELP or help to get help`,
        items:{},
        exits:{
            left:{
                look:"Left. yep. Itâ€™s definitely a dark hallway.",
                go:"cavern"
            },
            right:{
                look:`Right: Iâ€™d look at the other one if I were you. 
                Super dark. Like death metal dark. Seriously. 
                Go left young man, go left.`,
                go:'forest',
            }
        }
    },
    cavern:{
        look:`The passage leads to a larger more cavernous room, 
        probably made from an actual cavern. 
        Your first clue comes in the form of a bruise as you 
        hit your head on a stalactite. *ouch* Try to be more careful, okay?
        In the middle of the room is a small table and chair with a book on it.
        `,
        exits: {
            back:{
                go:'start'
            }
        },
        items:{
            book:{
                use:"Most people use books by looking at them. What's your method?",
                look:`Yep, it's a book full of secrets. 
                In an ancient cursed language. 
                Probably best to put it down. But since you aren't a quick learner
                let's take a look, shall we?
                It mentions something about fire and heat is the only way to open ice and cold.
                Fascinating. I'm sure that little tidbit of knowledge won't come in handy
                later so you should probably just forget about it. kthxbye!
                `
            },
            table:{
                look:`Itâ€™s your basic wooden table. Four legs. 
                Strong enough to hold up a plot device but little more.`
            },
            chair: {
                look: 'Look: the chair looks pretty rickety. I wouldnâ€™t suggest using it.',
                use: 'The chair shatters into a bunch of future splinters. I told you.'
            }
        }
    },
    forest:{
        look:`Youâ€™re pretty sure this passage leads to certain doom, 
            but you go anyway. Whatâ€™s up with that? 
            After a few minutes of following the path with your dying 
            flashlight you enter a clearing with an old farmhouse in the 
            middle of it. The thick trees leave no way around it. 
            Itâ€™s either the house or return down the path.
        `,
        items:{
            tree:{
                look:`Pine, fir, and other random evergreens. 
                    They donâ€™t give a clue as to your present location. 
                    Better focus on the house, dude.`
            }
        },
        exits:{
            back:{
                go:'start',
                look:`Yep, the same path you came on. Just as you remembered it 
                all those many seconds ago.  `
            },
            house:{
                go:'house',
                look:`Hoo boy. Itâ€™s creepy. Youâ€™re pretty sure it was used as a set 
                from an 80s horror movie. One of those cheap ones where you can see 
                the sound guy off screen.`
            }
        }
    },
    house:{
        look:`You enter the house, being sure to knock first and completely 
            ignoring the No Trespass'n sign. Inside you see an old couch, a fireplace, 
            and door to a kitchen.`,
        items:{
            couch:{
                look:`The couch looks like it hasn't been dusted in a few centuries. 
                You decide not to sit on it. I commend your choice.`
            },
            sign:{
                look:`It's a badly handdrawn sign on a scrap of plywood. 
                Smells of tar. You decide to take a step back.`
            },
            door:{
                look:`Jeez. Do I have to describe everything for you?
                Okay, fine! It's a, um, brown wood door. Ya happy?`
            },
            fireplace:{
                look:`The fireplace`,
            },
            key:{
                look:'key',
                take:true,
            }
        },
        exits:{
            back:{
                go:'forest'
            },
            door: {
                go:'kitchen'
            }
        }
    },
    kitchen:{
        look:`The kitchen contains an old fridge slightly ajar. 
            You can see light coming from within. But it appears to be loosely
            locked with a padlock and chains. You might be able to break it or
            open it some how. You wonder what, or who, the fridge is being
            protected from.`
    }

}

function l(...args) {
    console.log(...args)
}
function clean(str) {
    return str.split("\n").map(s => s.trim()).join(" ")
}
function validate(rooms) {
    Object.keys(rooms).forEach(room_name => {
        // l('room',room_name)
        let room = rooms[room_name]
        if(!room.exits) l(`${room_name} missing exits`)
        if(!room.items) l(`${room_name} missing items`)
        if(!room.look)  l(`${room_name} missing look`)
        if(room.look) room.look = clean(room.look)
        Object.keys(room.exits).forEach(exit_name => {
            let exit = room.exits[exit_name]
            if(!exit.look) l(`${room_name}.${exit_name} missing look`)
            if(exit.look) exit.look = clean(exit.look)
            if(!exit.go)   l(`${room_name}.${exit_name} missing go`)
        })
        Object.keys(room.items).forEach(item_name => {
            let item = room.items[item_name]
            if(!item.look) l(`${room_name}.${item_name}  missing look`)
            if(item.look) item.look = clean(item.look)
        })
    })
    l("========== WELCOME =========")
}

function parse_command(str) {
    let [command, target] = str.toLowerCase().split(" ")
    return { command, target}
}

function run_command(cmd, state, data) {
    l("input is",cmd)
    if(cmd.command === 'help') {
        l(`You can type look, go, take, use, talk, and drop.
        ex: 
          look at the room:    look
          examine candle with: look candle
          go to the door with: go door 
        `)
        return
    }
    if(cmd.command === 'talk') {
        //check room items
        if(state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if(!item.look) return l(`it's a ${cmd.target}. that's all`)
            return l(item.look)
        }
    }
    if(cmd.command === 'look') {
        //check room items
        if(state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if(!item.look) return l(`it's a ${cmd.target}. that's all`)
            return l(item.look)
        }
        //check room exits
        if(state.room.exits[cmd.target]) {
            let exit = state.room.exits[cmd.target]
            if(!exit.look) return l(`it's a ${cmd.target}. that's all`)
            return l(exit.look)
        }
        //look at the room itself
        if(!cmd.target || cmd.target === 'room') return l(state.room.look)
        l(`there is no ${cmd.target}`)
        return
    }
    if(cmd.command === 'use') {
        if(state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            console.log("the item is",item)
            if(item.use) return l(item.use)

        }
        return l(`You can't use ${cmd.target}`)
    }
    if(cmd.command === 'go') {
        if(state.room.exits[cmd.target]) {
            let exit = state.room.exits[cmd.target]
            if(!exit) return l(`there is no ${cmd.target}`)
            if(!exit.go) return l(`you can't go ${cmd.target}`)
            l('')
            l(`going to`,exit)
            state.room = data[exit.go]
            l(state.room.look)
            return
        }
    }
}


async function run() {
    validate(rooms)
    let state = {
        room:rooms.start,
        bag:[]
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('close', () => {
        // console.log('Streams Closed')
    })
    rl.on('line',(line)=>{
        // console.log("line is",line)
    })

    rl.setPrompt(">> ")

    l(state.room.look)

    async function ask(prompt) {
        rl.prompt()
        return (await rl[Symbol.asyncIterator]().next()).value;
    }

    while(true) {
        let input = await ask()
        let inp = parse_command(input)
        if(inp.command === 'exit') break
        if(inp.command === 'quit') break
        run_command(inp,state,rooms)
    }
    rl.close()
}

function sleep(dur) {
    return new Promise((res,rej)=>{
        setTimeout(res,dur)
    })
}

run().then(()=>console.log("bye!"))
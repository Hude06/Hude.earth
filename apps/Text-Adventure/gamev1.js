let level1 = {
    start: {
        look: `
        You find yourself in a dark maze with many long twisty passages.
        Your pretty sure this is not the mall anymore. You're definitely not
        in Sears, at least. There is a dark hallway to the left. There is an even darker one to the right. 
        There seams to be mist coming from the back. Whitch way, Pick your path.
        The narrator would suggest going back the way you came, but you cant seem to
        remember how you got here. So.. good luck?
        `,
        items: {},
        exits: {
            left: {
                look: "You look left. Yep. Its definitely a dark hallway.",
                go: "cavern"
            },
            right: {
                look: `You look right: Id look at the other one if I were you. 
                Super dark. Like death metal dark. Seriously. 
                Go left young man, go left.`,
                go: 'forest',
            },
            back: {
                look: "You look back. Yep. Its definitely a dark room.",
                go: "back",
            },

        }
    },
    back: {
        look: `The passage lead's to a dark missty room. There is a fireplace and a old ratty couch. And there is a door to the left. There seames to be a old man named bob in the back corner reading. Might want to check it out`,
        items: {
            book: {
                use: "Most people use books by looking at them. What's your method?",
                look: `Yep, it's a book full of secrets. 
                In an ancient cursed language. 
                Probably best to put it down. But since you aren't a quick learner
                let's take a look, shall we?
                It mentions something about fire and heat is the only way to open ice and cold.
                Fascinating. I'm sure that little tidbit of knowledge won't come in handy
                later so you should probably just forget about it. kthxbye!
                `,
                take: true
                },
            fireplace:{
                use: `Most people use fireplace's for waming a house or for eating marshemelow. There are many good and or yummy applications for a firplace`,
                look: `Yep it is a fireplace. It is old and it looks like it hasent ben used in years`,
            },
            couch: {
                look: `It is a old ratty couch with riped up lines. And old unsterdy legs`,
                go: `It is old and ratty who know what has happend there, I would segjust not sitting there`
            },
            bob: {
                look: `Bob looks to be a old man. Maby he will help. It is all up to you.`,
                talk: `Bob says, Hello I hope you are doing well, I am the merchent bob. If you would like to look at my items to buy just type 'Bob'. Have a good day`,      
                buy: `These are the trades some are better and some are worse pick you poision. TRADES:
                Poop hat: 100$
                platinum poo hat: 500$
                Golden poo hat: 1000$`
                
            },
           
           
            
        },  
        exits: {
            door: {
                look: `Jeez. Do I have to describe everything for you?
            Okay, fine! It's a, um, brown wood door. Ya happy?`,
                go: 'house',
            },
            back:{
                look: `It is the same way back. A dark and misty tunnel.`,
                go: 'starts'

            }
        }
    },
    cavern: {
        look: `The passage leads to a larger more cavernous room, 
        probably made from an actual cavern. 
        Your first clue comes in the form of a bruise as you 
        hit your head on a stalactite. *ouch* Try to be more careful, okay?
        In the middle of the room is a small table and chair with a book on it.
        `,
        exits: {
            back: {
                go: 'start'
            }
        },
        items: {
            book: {
                use: "Most people use books by looking at them. What's your method?",
                look: `Yep, it's a book full of secrets. 
                In an ancient cursed language. 
                Probably best to put it down. But since you aren't a quick learner
                let's take a look, shall we?
                It mentions something about fire and heat is the only way to open ice and cold.
                Fascinating. I'm sure that little tidbit of knowledge won't come in handy
                later so you should probably just forget about it. kthxbye!
                `,
                take: true
            },
            table: {
                look: `Its your basic wooden table. Four legs. 
                Strong enough to hold up a plot device but little more.`
            },
            chair: {
                look: 'The chair looks pretty rickety. I wouldnt suggest using it.',
                use: 'The chair shatters into a bunch of future splinters. I told you. You players never listen to me. Brain the size of a galaxy....'
            }
        }
    },
    forest: {
        look: `Youre pretty sure this passage leads to certain doom, 
            but you go anyway. Whats up with that? 
            After a few minutes of following the path with your dying 
            flashlight you enter a clearing with an old farmhouse in the 
            middle of it. The thick trees leave no way around it. 
            Its either the house or return down the path.
        `,
        items: {
            tree: {
                look: `Pine, fir, and other random evergreens. 
                    They donxt give a clue as to your present location. 
                    Better focus on the house, dude.`
            }
        },
        exits: {
            back: {
                go: 'start',
                look: `Yep, the same path you came on. Just as you remembered it 
                all those many seconds ago.  `
            },
            house: {
                go: 'house',
                look: `Hoo boy. Itxs creepy. Youxre pretty sure it was used as a set 
                from an 80s horror movie. One of those cheap ones where you can see 
                the sound guy off screen.`
            }
        }
    },
    house: {
        look: `You enter the house, being sure to knock first and completely 
            ignoring the No Trespass'n sign. Inside you see an old couch, a fireplace, a door nothere door Mabt to a bedroom 
            and door to a kitchen.`,
        items: {
            couch: {
                look: `The couch looks like it hasn't been dusted in a few centuries. 
                You decide not to sit on it. I commend your choice.`
            },
            sign: {
                look: `It's a badly handdrawn sign on a scrap of plywood. 
                Smells of tar. You decide to take a step back.`
            },
            fireplace: {
                look: `The fireplace clearly hasn't been used in ages, nor cleaned. As you scour the soot without 
                touching you see a tiny glint of metal. A key perhaps? Gum wrappers? Tiny crashed UFO? 
                However will you find out?!`,
            },
            key: {
                look: `You find a rusted key with wear marks on the shaft. Someone has recently used the 
                key then rehidden it. Why, you ask yourself? Why are you wasting
                a perfectly good saturday afternoon playing this game. That's an excellent question.
                In any case, you think you can take the key as long as you don't care about dirty hands.
                `,
                take: true,
            }
        },
        exits: {
            back: {
                go: 'forest'
            },
            kitchen: {
                look: `Jeez. Do I have to describe everything for you?
                    Okay, fine! It's a, um, brown wood door. Ya happy?`,
                go: 'kitchen'
            },
            Door: {
                look: `It looks like it a, um teal wood door and there looks to be light coming from the boottom of the door`,
                go: 'bedroom'
            }
        }
    },
    bedroom: {
    look: `It look like there is a old bed and a desk with a computer on it maby it will have something.`,
    desk: {
        look: `You go to look at the desk and it is a old and wooden desk the computer seams to be off, so you turn it on when it turns on it shows a code "1956" `
        
        
    }, 
    },
    kitchen: {
        look: `You come through and you see a kitchen  it contains an old fridge slightly ajar. 
            You can see light coming from within. But it appears to be loosely
            locked with a padlock and chains. Otherwise the kitchen is empty except for a dusty cupboard to the side.`,
        exits: {
            cupboard: {
                look: 'A cupboard even dustier than the fridge. Go check it out.',
                go: `cupboard`,
            },
            fridge: {
                look: `a smelly old fridge. Gonna go there?`,
                go: `fridge`,
            },
            door: {
                look: 'the door that goes back to the front room',
                go: `kitchen`,
            }
        },
        items: {},
    },
    fridge: {
        look: `You examine the chain and lock on the fridge. Fascinating, captain! 
                You might be able to break the chain or open it some how. 
                You wonder what, or who, the fridge is being
                protected from.`,
        exits: {
            cupboard: {
                look: 'A cupboard even dustier than the fridge. Go check it out.',
                go: `cupboard`,
            },
            kitchen: {
                look: `The rest of the dusty old kitchen.`,
                go: `kitchen`,
            }
        },
        items: {
            chain: {
                look: `Yep, it's chain with a lock. Got a hole. If only you had a key. Hmm. If only. Anyway, TTFN.`,
            },
            pudding: {
                look: `"Hey!" the pudding says. "Hey! You there!" \n\n
                My name is pudding but you can call me pudd. You stutter and stammer and stare at the quivering mass of stuff that should not be.
                "Hey man. Can you get me some whip cream?" it asks.
                `,
            },
        },
        actions: {
            'key': {
                look: `You place the key in the lock, twist, and the chains clatter to the floor. The stanky fridge opens and
                        you look within. \n\n The horror. The horror!\n\n You see a giant blob of quivering brown goo... oh wait. 
                        Nevermind. It's just a vat of pudding. The pudding says hi.`,
                use: {
                    target: 'fridge',
                    set: {
                        key: 'look',
                        value: 'The fridge is open and contains a vat of talking pudding. Now *thats* not something you see every day.'
                    }
                }
            },
            'cream': {
                look: `You spray whipped cream on the pudding. "Ah", it says. "That feels better. 
                I was burning up here!"
                Suddenly the light in the fridge begins to brighten, becoming more and more glaring until
                it overwhelms your senses.  You feel a pain in your head and drop to the floor, holding
                your ears and squeezing your eyes tightly closed.
                When the pain finally ends you open your eyes and see you are back in the appliances
                department. You walk around, feeling the fresh spring air and pushing buttons on
                a near by stove.  It feels good to be back in the real world.  The lights on the stove begin
                to glow and you smell the scent of whipped cream.. Then it hits you.
                 Sears went bankrupt years ago. Where are you really?!!!
                 
                \n\n
                The End?  
                `,
                end:true,
            }
        },
    },
    cupboard: {
        look: `The cupboard is empty except for a spray can of whipp-ed cream. Dust everywhere. Like serious. 
        Who owns this dump? Clearly someone who likes their cream to be whipped.`,
        items: {
            cream: {
                look: `Dispite the dust surrounding every surface of the cupboard, the can itself is both clean and still chilled.
                Clearly the work of the devil. I've seen these kinds of things before. Back in
                my day we used to call it Devil Whip, because that was.... You know what? Nevermind. 
                No more long rambling stories for you.`,
                take: true,
            }
        },
        exits: {
            kitchen: {
                look: 'Still a kitchen.',
                go: 'kitchen',
            },
            fridge: {
                look: "The fridge is still there. What are you going to do about it?",
                go: 'fridge',
            }
        }
    }

}
let level2 = {
    start: {
        look: `You got to level 2. Level 2 wont be as easy. The adventure begins in a suppermaket you are gettimg some grocerys. As you leave a black sleek car pulls in front of you and kidnapes you. You dont know where you are going but it must be bad. You see the car is unlocked so you could try to escape but it is up to you `,
        exits: {
            door: {
                look: `It looks like the door is unlocked and you might be able to escape.`,
                go: `road`,
            },
        },
        items: {},
    },
    road: {
        look: `You fall out the door and you end up on the street. You get up and you get out of the road. You see you are on light street and your house is only a couple block away so we should head home`,
        exits: {
            home: {
                look: `It looks like it is pretty close.`,
                go: `home`,
            },
       },
       items: {},
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
        if (!room.exits) l(`${room_name} missing exits`)
        if (room.exits) {
            Object.keys(room.exits).forEach(exit_name => {
                let exit = room.exits[exit_name]
                if (!exit.look) l(`${room_name}.${exit_name} missing look`)
                if (exit.look) exit.look = clean(exit.look)
                if (!exit.go) l(`${room_name}.${exit_name} missing go`)
            })
        }
        if (!room.items) l(`${room_name} missing items`)
        if (room.items) {
            Object.keys(room.items).forEach(item_name => {
                let item = room.items[item_name]
                if (!item.look) l(`${room_name}.${item_name}  missing look`)
                if (item.look) item.look = clean(item.look)
            })
        }
        if (!room.look) l(`${room_name} missing look`)
        if (room.look) room.look = clean(room.look)
        if (!room.actions) l(`${room_name} missing actions`)
    })
    l("========== WELCOME =========")
}

function parse_command(str) {
    let [command, target] = str.toLowerCase().split(" ")
    return { command, target }
}

function run_command(cmd, state, data) {
    l("input is", cmd)
    if (cmd.command === 'help') {
        return (`You can type look, go, take, use, talk, and drop.
        ex: 
          look at the room:    look
          examine candle with: look candle
          go to the door with: go door 
        `)
    }
    if (cmd.command === 'talk') {
        //check room items
        if (state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if (!item.talk) return `it's a ${cmd.target}. that's all`
            return item.talk
        }
        //talk to guy
        if (state.bag[cmd.target]) {
            let item = state.talk[cmd.target]
            if (!item.talk) return `it's a ${cmd.target}. that's all`
            return item.talk
        }
    }
    if (cmd.command === 'buy') {
        //check room items
        if (state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if (!item.buy) return `it's a ${cmd.target}. that's all`
            return item.buy
        }
        //talk to guy
        if (state.bag[cmd.target]) {
            let item = state.talk[cmd.target]
            if (!item.talk) return `it's a ${cmd.target}. that's all`
            return item.talk
        }
    }
    if (cmd.command === 'look') {
        //check room items
        if (state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if (!item.look) return `it's a ${cmd.target}. that's all`
            return item.look
        }
        //check room exits
        if (state.room.exits[cmd.target]) {
            let exit = state.room.exits[cmd.target]
            if (!exit.look) return `it's a ${cmd.target}. that's all`
            return exit.look
        }
        //check bag
        if (state.bag[cmd.target]) {
            let item = state.bag[cmd.target]
            if (!item.look) return `it's a ${cmd.target}. that's all`
            return item.look
        }

        //look at the room itself
        if (!cmd.target || cmd.target === 'room') return state.room.look
        return `There is no ${cmd.target}`
    }
    if (cmd.command === 'use') {
        //check the room for an item to use
        if (state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            if (item.use) return item.use
        }
        //check the bag for an item to use
        if (state.bag[cmd.target]) {
            let item = state.bag[cmd.target]
                //check if you can use the item
            if (item.use) {
                return `using ${cmd.target}`
            }
            //check if the room has an action to use the item
            if (state.room.actions) {
                let action = state.room.actions[cmd.target]
                if (action) {
                    console.log("we have a valid action", action)
                        //do the action
                    console.log("doing ", action.use)
                    if (action.use && action.use.set) {
                        let target = data[action.use.target]
                        target[action.use.set.key] = action.use.set.value
                        if(action.end) {
                            console.log("mark game as over")
                            state.end = true
                        }
                    }
                    //return the look
                    if(action.end) {
                        console.log("mark game as over")
                        state.end = true
                    }
                    return action.look
                }
            }

        }
        return `You can't use ${cmd.target}`
    }
    if (cmd.command === 'take') {
        if (state.room.items[cmd.target]) {
            let item = state.room.items[cmd.target]
            console.log("Item is", item)
            if (item.take) {
                state.bag[cmd.target] = item
                state.money += 1
                return `You put the ${cmd.target} in your bag.`
            }
        }
        return `You can't take ${cmd.target}.`
    }
    if (cmd.command === 'bag') {
        return `Your bag contains: ${Object.keys(state.bag).join(", ")}`
    }

    if (cmd.command === 'go') {
        if (state.room.exits[cmd.target]) {
            let exit = state.room.exits[cmd.target]
            if (!exit) return `there is no ${cmd.target}`
            if (!exit.go) return `you can't go ${cmd.target}`
            state.room = data[exit.go]
            return state.room.look
        } else {
            return `You can't go to the ${cmd.target}. 
            Try going to one of: ${Object.keys(state.room.exits).join(", ")}.`
        }
    }
    return `What is ${cmd.command}?`
}

export class GameEngine {
    constructor() {
        validate(level1)
        this.level = level1
        this.state = {
            room: this.level.start,
            bag: {},
            end:false,
            money:0,
        }
    }
    startText() {
        return this.state.room.look
    }
    goLevel(level) {
        console.log("going to the level",level)
        if(level === 'level1') {
            this.level = level1
            this.state.room = this.level.start
        }
        if(level === 'level2') {
            this.level  = level2
            this.state.room = this.level.start
        }
        console.log("now the level is",this.level)
        console.log("now the room is",this.state.room)
    }
    updateBag() {
        var bag = ""
        let items = Object.keys(this.state.bag)
        if(items.length === 0) {
            bag = "no Items"
        } else {
            bag = Object.keys(this.state.bag).join(", ")
            // for(let i=0; i<items.length; i++) {
            //     bag += (" " + items[i])
            // }
        }
        console.log("the bag is",bag)
        document.getElementById("p1").innerHTML = bag;
    }
    updateMoney() {
        document.getElementById("p2").innerHTML = this.state.money + "$";
    }
    run(input) {
        let inp = parse_command(input)
        l("got input", input, "parsed to", inp)
        let output =  run_command(inp, this.state, this.level)
        this.updateBag()
        this.updateMoney()
        if(this.state.end) {
            rooms = level2
            this.state.room = rooms.start
            return output + " THE LEVEL IS OVER"
        }
        return output
    }
}


var bag = 'No items'
var Money = '$' + '0'
document.getElementById("p1").innerHTML = bag;
document.getElementById("p2").innerHTML = Money;
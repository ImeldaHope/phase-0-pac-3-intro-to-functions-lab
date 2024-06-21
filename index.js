// Defining functions and running tests on them

function shout(string){
    return string.toUpperCase();
}

console.log(shout("hello"));

function whisper(string){
    return string.toLowerCase();
}

console.log(whisper("SING A SONG"));

function logShout(string) {
    console.log(string.toUpperCase());
}

logShout("I am logging off");

function logWhisper(string){
    console.log(string.toLowerCase());
}

logWhisper("I DO NOT WANT TO LOG OFF");

function sayHiToHeadphonedRoommate(string) {
    string.toLowerCase();

    if(string === string.toLowerCase()){

        return "I can't hear you!";
    }
    else if(string === "Let's have dinner together!"){
        return "I would love to!";
    } else {
        string.toUpperCase();
        return "YES INDEED!";
    }   
   
}

sayHiToHeadphonedRoommate("CAN THIS DUDE EVEN HEAR ME?");
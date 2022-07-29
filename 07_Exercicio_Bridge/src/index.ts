import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import AdvancedPlay from "./gaming/AdvancedPlay";

function startAdvancedPlay(consoles: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.result();
    play.challenge();    
}

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new XBox());
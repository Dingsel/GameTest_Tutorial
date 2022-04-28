import { world } from "mojang-minecraft"

world.events.beforeChat.subscribe((msg) => {
    if(msg.message.startsWith("!spawn")) {
        msg.cancel = true;
        msg.sender.runCommand("tp @s ~ ~100 ~");
    }
})
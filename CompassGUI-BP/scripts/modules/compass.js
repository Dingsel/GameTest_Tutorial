import { world } from "mojang-minecraft"
import { ActionFormData } from "mojang-minecraft-ui"

const form = new ActionFormData()
.title("Menu")
.body("Please Select something")
.button("Spawn")
.button("Home")
.button("Shop")

world.events.beforeItemUse.subscribe(eventData => {
    if(eventData.item.id == "test:compass") {
        const player = eventData.source
        form.show(player).then(result => {
            if(result.selection === 0){
                player.runCommand("tp @s ~ ~100 ~")
            }

        })
    }
})
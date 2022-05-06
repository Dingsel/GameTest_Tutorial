import { world } from "mojang-minecraft"
import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"

const modal = new ModalFormData()
    .title("Menu")
    .toggle("Test Toggle")
    .slider("Test Slider", 0, 10, 2)
    .dropdown("Test Dropdown", ["Option 1", "Option 2", "Option 3"])
    .textField("Test Text Field", "Please enter something")

world.events.beforeItemUse.subscribe(eventData => {
    if (eventData.item.id == "test:compass") {
        const player = eventData.source
        modal.show(player).then(result => {
            if (result.formValues[0] == true) {
                player.runCommand("say toggle was toggled")
            }
            player.runCommand(`say the value entered is ${result.formValues[1]}`)
            if(result.formValues[2] == 0) {
                player.runCommand("say option 1 was selected")
            }
            if(result.formValues[3] == "Hallo") {
                player.runCommand("say Hallo wurde geschrieben")
            }

        })
    }
})
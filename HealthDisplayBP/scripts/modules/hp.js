import { world } from "mojang-minecraft"

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

world.events.tick.subscribe(() => {
    const entities = Array.from(world.getDimension("overworld").getEntities())
    for (const entity of entities) {
        if (entity.hasComponent("health")) {
            const health = entity.getComponent("health")
            entity.nameTag = "§c" + capitalise(entity.id.split(":")[1].replace('_', ' ')) + "§a " + Math.round(health.current) + "§r/§a" + health.value + "§c";
        }
    }
})  
Hexcasting.registerCustomPattern("Self Consumption", "aqa", false, false);
Hexcasting.registerCustomPattern("Mental Pulverizer", "ded", false, false);
Hexcasting.registerCustomPattern("Hungry Sun's Nadir", "qqeawaeqawaaw", false, false);
Hexcasting.registerCustomPattern("Hungry Sun's Zenith", "qqeawaeqawaawwdwd", true, true);

HexcastingEvents.registeredPatternCastEvent((e) => {
    if (e.getPattern().anglesSignature() == "qqeawaeqawaaw") {
        let stack = e.getStack();
        if (stack.length < 3) {
            e.scheduleMishap("§dHungry Sun's Nadir§f Expected 3 arguments");
            e.finish();
        } else if (! stack[stack.length - 3] instanceof EntityIota) {
            e.scheduleMishap("§dHungry Sun's Nadir§f Expected entity at index 0 of the stack");
            e.finish();
        } else if (! stack[stack.length - 2] instanceof DoubleIota) {
            e.scheduleMishap("§dHungry Sun's Nadir§f Expected number at index 1 of the stack");
            e.finish();
        } else if (! stack[stack.length - 1] instanceof DoubleIota) {
            e.scheduleMishap("§dHungry Sun's Nadir§f Expected number at index 2 of the stack");
            e.finish();
        } else {
            let power = e.stack.pop().getDouble();
            let duration = e.stack.pop().getDouble();
            let target = e.stack.pop().getEntity();
            let effect = "minecraft:hunger";
            e.setCost(100 * power * duration);
            target.potionEffects.add(effect, duration*20, power);
            e.finish();
        }
    } else if (e.getPattern().anglesSignature() == "qqeawaeqawaawwdwd") {
        let stack = e.getStack();
        if (stack.length < 3) {
            e.scheduleMishap("§dHungry Sun's Zenith§f Expected 3 arguments");
            e.finish();
        } else if (! stack[stack.length - 3] instanceof EntityIota) {
            e.scheduleMishap("§dHungry Sun's Zenith§f Expected entity at index 0 of the stack");
            e.finish();
        } else if (! stack[stack.length - 2] instanceof DoubleIota) {
            e.scheduleMishap("§dHungry Sun's Zenith§f Expected number at index 1 of the stack");
            e.finish();
        } else if (! stack[stack.length - 1] instanceof DoubleIota) {
            e.scheduleMishap("§dHungry Sun's Zenith§f Expected number at index 2 of the stack");
            e.finish();
        } else {
            let power = e.stack.pop().getDouble();
            let duration = e.stack.pop().getDouble();
            let target = e.stack.pop().getEntity();
            let effect = "minecraft:saturation";
            e.setCost(1000 * power * duration);
            target.potionEffects.add(effect, duration*20, power);
            e.finish();
        }
    } else if (e.getPattern().anglesSignature() == "aqa") {
        Utils.server.runCommand(`kill ${e.getCaster().getName().getString()}`);
        e.finish();
    } else if (e.getPattern().anglesSignature() == "ded") {
        let stack = e.getStack();
        if (stack.length < 1) {
            e.scheduleMishap("§dMental Pulverizer§f Expected 1 argument");
            e.finish();
        } else if (! stack[stack.length - 1] instanceof EntityIota) {
            e.scheduleMishap("§dMental Pulverizer§f Expected entity at index 0 of the stack");
            e.finish();
        }
        let target = e.stack.pop().getEntity();
        Utils.server.runCommand(`kill ${target.getName().getString()}`);
        e.finish();
    }
})

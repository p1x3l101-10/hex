Hexcasting.registerCustomPattern("Hungry Sun's Nadir", "qqedwaeqdwddw", false, false);
Hexcasting.registerCustomPattern("Hungry Sun's Zenith", "qqedwaeqdwddwwdwd", true, true);

HexcastingEvents.registeredPatternCastEvent((e) => {
    if (e.getPattern().anglesSignature() == "qqedwaeqdwddw") {
        let stack = e.getStack();
        if (stack.length < 3) {
            e.scheduleMishap("Expected 3 arguments");
        } else if (stack[stack.length - 3] instanceof EntityIota) {
            e.scheduleMishap("Expected entity at position 0");
        } else if (stack[stack.length - 2] instanceof DoubleIota) {
            e.scheduleMishap("Expected number at position 1");
        } else if (stack[stack.length - 1] instanceof DoubleIota) {
            e.scheduleMishap("Expected number at position 2");
        } else {
            let power = e.stack.pop().getDouble();
            let duration = e.stack.pop().getDouble();
            let target = e.stack.pop().getEntity();
            let effect = "minecraft:hunger";
            target.server.runCommand("effect give ${target} ${effect} ${duration} ${power} false")
        }
        e.finish();
    }
    if (e.getPattern().anglesSignature() == "qqedwaeqdwddwwdwd") {
        let stack = e.getStack();
        if (stack.length < 3) {
            e.scheduleMishap("Expected 3 arguments");
        } else if (stack[stack.length - 3] instanceof EntityIota) {
            e.scheduleMishap("Expected entity at position 0");
        } else if (stack[stack.length - 2] instanceof DoubleIota) {
            e.scheduleMishap("Expected number at position 1");
        } else if (stack[stack.length - 1] instanceof DoubleIota) {
            e.scheduleMishap("Expected number at position 2");
        } else {
            let power = e.stack.pop().getDouble();
            let duration = e.stack.pop().getDouble();
            let target = e.stack.pop().getEntity();
            let effect = "minecraft:saturation";
            target.server.runCommand("effect give ${target} ${effect} ${duration} ${power} false")
        }
        e.finish();
    }
})

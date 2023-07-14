function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const asteroid of asteroids) {
        if (asteroid > 0) { // Moving to the right
            stack.push(asteroid);
        } else { // Moving to the left
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop();
            }

            if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === -asteroid) {
                stack.pop();
            }
        }
    }

    return stack;
};
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count = 0;

    for (let hour of hours) {
        if (hour >= target) count += 1;
    }

    return count;
};
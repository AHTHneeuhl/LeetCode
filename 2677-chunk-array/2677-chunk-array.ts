function chunk(arr: any[], size: number): any[][] {
    const result = [];
    let chunk = [];
    
    for (const val of arr) {
        chunk.push(val);
        if (chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }
    }
    
    if (chunk.length) result.push(chunk);
    
    return result;
};

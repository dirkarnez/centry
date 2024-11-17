export function div(x, y) {
    if (y == 0) {
        throw "cannot divide by zero";
    }
    
    return x / y;
}
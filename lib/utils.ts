import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function parseServerActionResponse<T>(response: T) {
    return JSON.parse(JSON.stringify(response));
}

export const generateAlpacaAction = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if(randomNumber <= 20) {
        return 'turn'
    } else if (randomNumber > 20 && randomNumber <= 80) {
        return 'move'
    } else {
        return 'jump'
    }
}

export const generateAlpacaMoveDistance = () => {
    return Math.floor(Math.random() * 71) + 30;
}

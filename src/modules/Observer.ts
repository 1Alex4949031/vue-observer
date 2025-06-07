import type { ObserverCallback } from "../types";

export class Observer<T> {
    private subscribers: Set<ObserverCallback<T>> = new Set();

    subscribe(callback: ObserverCallback<T>): () => void {
        this.subscribers.add(callback);
        return () => this.unsubscribe(callback);
    }

    unsubscribe(callback: ObserverCallback<T>) {
        this.subscribers.delete(callback);
    }

    notify(data: T) {
        for (const cb of this.subscribers) {
            cb(data);
        }
    }

    clear() {
        this.subscribers.clear();
    }
}

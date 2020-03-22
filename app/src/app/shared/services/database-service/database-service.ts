import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';


@Injectable()
export class DatabaseService {

    constructor(public storage: Storage) {
    }

    public setNewEntry(uuid: string): void {
        this.storage.set(uuid, Date.now().toString());

    }


    public clear(): void {
        this.storage.clear();
    }

    public removeOldData(): void {
        const TIME_EXPIRE_RANGE: number = 86_400_000 * 14; // 14 Tage
        this.storage.forEach(entry => {
            this.getContact(entry.key).then(val => {
                let diff: number = new Date().getTime() - new Date(val).getTime();
                console.log(diff);
                if ((Math.round((TIME_EXPIRE_RANGE - diff) / 1000 / 60 / 60 / 24)) < 0) {
                    this.storage.remove(entry.key);
                }
            });
        });
    }

    public getContactKeys(): Promise<Array<string>> {
        return this.storage.keys();
    }

    public getContact(key: string): Promise<string> {
        return this.storage.get(key);
    }
}


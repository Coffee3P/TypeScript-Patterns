interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteSubject implements Subject {

    public state: number;

    private observers: Observer[] = [];

    attach(observer: Observer): void {
        const observerIsAttached = this.observers.includes(observer);

        if (observerIsAttached) { 
            console.log(`Subject: The observer: ${observer} is attached already`);
        }

        this.observers.push(observer);

        console.log(`Subject: The observer: ${observer} has been attached.`);
    }

    detach(observer: Observer): void {
        const indexOfObserver = this.observers.indexOf(observer);

        if (indexOfObserver == -1) {
            console.log('Subject: The observer wasn\'t attached.');
        }

        this.observers.splice(indexOfObserver, 1);
        console.log(`Subject: The observer: ${observer} has been detached.`);
    }

    notify(): void {
        console.log('Notifing all observers about changes.');

        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class ConcreteObserver implements Observer{
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            console.log(`ConcreteObserver: Change occured in ${subject}. New state: ${subject.state}.`);
        }
    }
}
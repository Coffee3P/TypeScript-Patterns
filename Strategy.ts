interface Strategy {
    doWork(data: string[]): string[];
}

class Context {
    private currentStrategy: Strategy;

    constructor(strategy: Strategy) {
        this.currentStrategy = strategy;
    }
    
    setStrategy(strategy: Strategy): void {
        this.currentStrategy = strategy;
    }

    doStrategyWork(): void {
        console.log('Context: Sorting data using some strategy.');
        const result = this.currentStrategy.doWork(['a', 'b', 'c', 'e', 'd']);
        console.log('Context: Result: ' + result.join(','));
    }
}

class AscendingStrategy implements Strategy {
    doWork(data: string[]): string[] {
        return data.sort();
    }
}

class DescendingStrategy implements Strategy {
    doWork(data: string[]): string[] {
        return data.sort().reverse();
    }
}

const context = new Context(new AscendingStrategy());
context.doStrategyWork();

context.setStrategy(new DescendingStrategy());
context.doStrategyWork();
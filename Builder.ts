interface Maze {

}

abstract class MazeBuilder {
    protected mazeBuilder: MazeBuilder;

    abstract buildMaze();
    abstract buildRoom(roomNumber: number);
    abstract buildDoor(roomNumberFrom: number, roomNumberTo: number);

    getMaze(): Maze {
        return null;    
    }
}

function createMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();

    builder.buildRoom(1);
    builder.buildRoom(2);

    builder.buildDoor(1, 2);

    return builder.getMaze();
}

class StandardMaze implements Maze { }

class StandardMazeBuilder extends MazeBuilder {
    private maze: Maze;

    buildMaze(): void {
        this.maze = new StandardMaze();
    }

    buildRoom(roomNumber: number): void {
        // Add room to this.maze
    }

    buildDoor(roomNumberFrom: number, roomNumberTo: number): void {
        // Add door to room numbers;
    }
    
    getMaze(): Maze {
        return this.maze;
    }
}
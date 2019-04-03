# Toy Robot Simulator

## Installation and Understanding
---------------------------------

Clone it and Install it locally onto your machine.
```
Code has been written in a very basic JavaScript to the best of my understanding of JS.
An interface has been provided where instructions like MOVE, LEFT, RIGHT and REPORT can be given
to the Robot on the click of button.

HTML page is to be opened in the browser to view the buttons and command the robot to perform actions.


## Description
--------------

The table has dimension of 5x5. 
Your commands must not make the Toy Robot fall off the table.
Toy Robot will not ingest any commands that will make it fall off the table.
Toy Robot must be placed before it can take any further commands.

### List of commands Toy Robot can ingest:
------------------------------------------

- PLACE (X, Y, FACING) : Places the Toy Robot onto the table.

- LEFT: Turn Toy Robot 90degrees left.

- RIGHT: Turn Toy Robot 90degrees right.

- MOVE: Move Toy Robot one step into the current direction it's facing.

- REPORT: Report the current position and current direction.


Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH


Tests
------------------------
Tests are not written yet. 
# Towers of Hanoi

## Objective
ParaA

ParaB

ParaC

The Tower of Hanoi is a mathematical game or puzzle which consists of three rods and a number of disks of different diameters, which can slide onto any rod. The puzzle starts with the disks stacked on one rod in order of decreasing size, the smallest at the top. The objective of the puzzle is to move the entire stack to last rod, obeying the following simple rules:
- Only one disk may be moved at a time.
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
- No disk may be placed on top of a disk which is smaller than it.

#### Solution
The puzzle can be played with any number of disks, however, the minimal number of moves required to solve a Tower of Hanoi puzzle is 2<sup>n</sup> − 1, where n is the number of disks. 
- For example, with 3 disks, the puzzle can be solved in 7 moves.

##### screenshots;
- [Title Screen](images/screenshot_1.jpg)
- [Main Playing Screen](images/screenshot_2.jpg)

## Code Styles
- HTML
- JavaScript
- CSS

## Playing The Game
To start, the user will want to populate the board with up to 8 disks using a ticker on the top left. Below will display the minimum number of moves needed to beat the game. In the center the game will keep track of how many times the user has moved a disk. If at any point the user wants to restart their game, they may do so using the refresh button on the right hand side.

To play the game, the user may drag the top most disk to either of the two other rods. If the user drops a larger disk on a rod containing a smaller disk than itself, the program will display an alert stating the move was illegal. Once the user is able to drag all disks from the starting point to the last rod, the program will display a congrtulatory alert.

# Wireframes
- [Wireframe](images/wireframe.jpeg)

# Major Hurdles
Over the course of creating this game, I came accross many hurdles.
- Creating a board that resemble that of a wooden board with three pegs.
- Creating a board that could support any number of disks, and when the game was played, no two disks overlapped
- Adding a drag/drop feature to each of the disks.
- Alerting the user of any illegal moves, such as dropping a larger disk on a smaller disk.
- When dragging or dropping a disk, allow the disk to be dropped in the general vicinity of a rod and it will stack onto that respective rod
- creating a move counter that would count legal moves, and not illegal ones
- Creating a refresh button that would allow the user to start over
- Allow the user to input the number of disks they want and the board would start over and also populate with the respective amount of disks
- take the number of disks the user inputted and display the minimum number of moves.

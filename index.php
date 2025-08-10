<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Sudoku Game</h1>
        <div class="header-controls">
            <div id="timer">00:00</div>
            <div id="controls">
                <button id="resetBtn">Reset Game</button>
                <button id="hintBtn">Get a Hint</button>
            </div>
        </div>
        <div id="board-container">
            <div id="board"></div>
            <div id="win-message" class="hidden">🎉 You Win! 🎉</div>
        </div>
    </div>

    <?php
    function generateSudoku() {
        $base = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];

        $shuffled_nums = range(1, 9);
        shuffle($shuffled_nums);
        $map = array_combine(range(1, 9), $shuffled_nums);

        $solution = [];
        foreach ($base as $row) {
            $new_row = [];
            foreach ($row as $cell) {
                $new_row[] = $map[$cell];
            }
            $solution[] = $new_row;
        }

        $puzzle = $solution;
        $empties = 45; 
        while ($empties > 0) {
            $row = rand(0, 8);
            $col = rand(0, 8);
            if ($puzzle[$row][$col] != 0) {
                $puzzle[$row][$col] = 0;
                $empties--;
            }
        }
        
        return ['puzzle' => $puzzle, 'solution' => $solution];
    }

    $game_data = generateSudoku();
    ?>

    <script>
        const initialPuzzle = <?php echo json_encode($game_data['puzzle']); ?>;
        const solution = <?php echo json_encode($game_data['solution']); ?>;
    </script>

    <script src="script.js"></script>
</body>
</html>
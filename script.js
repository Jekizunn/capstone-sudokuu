document.addEventListener('DOMContentLoaded', () => {
    if (typeof initialPuzzle === 'undefined' || typeof solution === 'undefined') {
        console.error("Game data not found. Make sure PHP is providing initialPuzzle and solution.");
        return;
    }

    const boardElement = document.getElementById('board');
    const timerElement = document.getElementById('timer');
    const winMessageElement = document.getElementById('win-message');
    const resetBtn = document.getElementById('resetBtn');
    const hintBtn = document.getElementById('hintBtn');

    let timerInterval;
    let seconds = 0;

    function renderBoard() {
        boardElement.innerHTML = '';
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                
                if ((c + 1) % 3 === 0 && c < 8) cell.classList.add('border-right');
                if ((r + 1) % 3 === 0 && r < 8) cell.classList.add('border-bottom');

                if (initialPuzzle[r][c] !== 0) {
                    cell.textContent = initialPuzzle[r][c];
                    cell.classList.add('prefilled');
                } else {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.maxLength = '1';
                    input.dataset.row = r;
                    input.dataset.col = c;
                    input.addEventListener('input', handleInput);
                    cell.appendChild(input);
                }
                boardElement.appendChild(cell);
            }
        }
    }

    function handleInput(event) {
        const input = event.target;
        const r = parseInt(input.dataset.row);
        const c = parseInt(input.dataset.col);
        const valueStr = input.value.trim();

        input.classList.remove('correct', 'incorrect');
        
        if (!/^[1-9]$/.test(valueStr)) {
            input.value = ''; 
            return;
        }

        const value = parseInt(valueStr);
        if (value === solution[r][c]) {
            input.classList.add('correct');
            if (checkWin()) {
                endGame();
            }
        } else {
            input.classList.add('incorrect');
        }
    }
    
    function checkWin() {
        const inputs = boardElement.querySelectorAll('input');
        for (const input of inputs) {
            const r = parseInt(input.dataset.row);
            const c = parseInt(input.dataset.col);
            if (parseInt(input.value) !== solution[r][c]) {
                return false; 
            }
        }
        return true; 
    }

    function endGame() {
        clearInterval(timerInterval);
        winMessageElement.classList.remove('hidden');
        boardElement.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
    }

    function startTimer() {
        clearInterval(timerInterval);
        seconds = 0;
        timerInterval = setInterval(() => {
            seconds++;
            const min = Math.floor(seconds / 60);
            const sec = seconds % 60;
            timerElement.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
        }, 1000);
    }
    
    function giveHint() {
        const emptyInputs = [];
        boardElement.querySelectorAll('input').forEach(input => {
            if (input.value === '' && !input.disabled) {
                emptyInputs.push(input);
            }
        });

        if (emptyInputs.length > 0) {
            const randomInput = emptyInputs[Math.floor(Math.random() * emptyInputs.length)];
            const r = parseInt(randomInput.dataset.row);
            const c = parseInt(randomInput.dataset.col);

            randomInput.value = solution[r][c];
            randomInput.classList.add('correct');
            
            if (checkWin()) {
                endGame();
            }
        }
    }

    resetBtn.addEventListener('click', () => location.reload());
    hintBtn.addEventListener('click', giveHint);

    // ---- Mulai Game ----
    renderBoard();
    startTimer();
});
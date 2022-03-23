!function(e) {
    var t = {};
    function r(ctxMatrix) {
        if (t[ctxMatrix])
            return t[ctxMatrix].exports;
        var workingCanvas = t[ctxMatrix] = {
            currentArena: ctxMatrix,
            gridMatrix: !1,
            exports: {}
        };
        return e[ctxMatrix].call(workingCanvas.exports, workingCanvas, workingCanvas.exports, r),
        workingCanvas.gridMatrix = !0,
        workingCanvas.exports
    }
    r.m = e,
    r.c = t,
    r.mousePos = function(e, t, ctxMatrix) {
        r.ctxMatrix(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: ctxMatrix
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var ctxMatrix = Object.create(null);
        if (r.r(ctxMatrix),
        Object.defineProperty(ctxMatrix, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var workingCanvas in e)
                r.mousePos(ctxMatrix, workingCanvas, function(t) {
                    return e[t]
                }
                .bind(null, workingCanvas));
        return ctxMatrix
    },
    r.workingCanvas = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.mousePos(t, "currentHighScore", t),
        t
    }
    ,
    r.ctxMatrix = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    r.p = "",
    r(r.restartImage = 0)
}([function(e, t) {
    window.onload = function() {
        workingCanvas = document.getElementById("canvas"),
        ctxMatrix = workingCanvas.getContext("2d"),
        gridMatrix = workingCanvas.width / 10,
        void 0 === localStorage._scoreResetSept2018 && (localStorage._hscore = currentHighScore = 0,
        localStorage._scoreResetSept2018 = !0),
        function() {
            clearInterval(e),
            clearInterval(t);
            try {
                document.removeEventListener("keydown", D),
                document.removeEventListener("keyup", D),
                document.removeEventListener("mousedown", J)
            } catch (e) {
                console.error(e)
            }
            !0,
            document.addEventListener("keydown", D),
            document.addEventListener("keyup", D),
            document.addEventListener("mousedown", J),
            document.addEventListener("mousemove", z);
            try {
                hasGameEnded = JSON.parse(localStorage._end)
            } catch (e) {
                console.error(e),
                hasGameEnded = !1
            }
            try {
                !function() {
                    try {
                        if (hasGameEnded)
                            return currentHighScore = JSON.parse(localStorage._hscore),
                            currentArena = b(workingCanvas.width / gridMatrix, workingCanvas.height / gridMatrix).slice(0),
                            E(),
                            void (hasGameEnded = !1)
                    } catch (e) {
                        console.error(e),
                        currentHighScore = 0
                    }
                    try {
                        null != localStorage._arena && "undefined" != localStorage._arena && (currentArena = JSON.parse(localStorage._arena))
                    } catch (e) {
                        console.error(e)
                    } finally {
                        null == currentArena && (currentArena = b(workingCanvas.width / gridMatrix, workingCanvas.height / gridMatrix))
                    }
                    try {
                        null == localStorage._hscore || "undefined" == localStorage._hscore ? highScore = localStorage._hscore = 0 : highScore = JSON.parse(localStorage._hscore),
                        currentScore = null == localStorage._score || "undefined" == localStorage._score ? localStorage._score = 0 : JSON.parse(localStorage._score),
                        N = JSON.parse(localStorage._player)
                    } catch (e) {
                        console.error(e)
                    }
                }()
            } catch (e) {
                console.error(e)
            }
            restartImage = new Image,
            restartImage.src = "../images/restart.png",
            pauseImage = new Image,
            pauseImage.src = "../images/pause.png",
            playImage = new Image,
            playImage.src = "../images/play.png";
            var e = setInterval(C, 50)
              , t = setInterval(P, 1e3 / 12);
            null == N && E();
            requestAnimationFrame(createGameArena)
        }()
    };
    //const r = [null, "#e84a4a", "#e89c4a", "#e8db4a", "#9ce84a", "#4ae86c", "#4ae8c6", "#4a89e8"];
    const r = [null, "#ff8fb4", "#87ffc9", "#ffb169", "#ffe987", "#87a3ff", "#c587ff", "#91f6ff", ];
    shapes = [
        [[1, 1, 1], [0, 1, 0], [0, 0, 0]], 
        [[2, 2], [2, 2]], 
        [[0, 0, 3, 0], [0, 0, 3, 0], [0, 0, 3, 0], [0, 0, 3, 0]], 
        [[0, 4, 0], [0, 4, 0], [0, 4, 4]], 
        [[0, 5, 0], [0, 5, 0], [5, 5, 0]], 
        [[0, 6, 6], [6, 6, 0], [0, 0, 0]], 
        [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
    ], speed = 7;
    let ctxMatrix, workingCanvas, gridMatrix, currentArena, currentHighScore, restartImage, pauseImage, playImage, c, currentScore = 0, hasGameEnded = !1, mousePos = localStorage.mouse ? JSON.parse(localStorage.mouse) : {
        x: 0,
        y: 0
    }, y = !1, p = !1, S = 0;
    let x = 0, v = 0, m = 0, w = 50 * speed;
    function createGameArena(e=0) {
        if (hasGameEnded && function() {
            let e = "You hit the limit!"
              , t = .05 * gridMatrix;
            ctxMatrix.font = gridMatrix + "px Arial",
            ctxMatrix.fillStyle = "#ff5b5b",
            ctxMatrix.fillText(e, workingCanvas.width / 2 - ctxMatrix.measureText(e).width / 2 + t, 8 * gridMatrix + t);
            let r = "Press any key to restart";
            ctxMatrix.font = .7 * gridMatrix + "px Arial",
            ctxMatrix.fillStyle = "#ff5b5b",
            ctxMatrix.fillText(r, workingCanvas.width / 2 - ctxMatrix.measureText(r).width / 2 + t, 9 * gridMatrix + t),
            ctxMatrix.font = gridMatrix + "px Arial",
            ctxMatrix.fillStyle = "red",
            ctxMatrix.fillText(e, workingCanvas.width / 2 - ctxMatrix.measureText(e).width / 2, 8 * gridMatrix),
            ctxMatrix.font = .7 * gridMatrix + "px Arial",
            ctxMatrix.fillStyle = "red",
            ctxMatrix.fillText(r, workingCanvas.width / 2 - ctxMatrix.measureText(r).width / 2, 9 * gridMatrix)
        }(),
        ctxMatrix.fillStyle = "black",
        ctxMatrix.fillRect(0, 0, workingCanvas.width, workingCanvas.height),
        ctxMatrix.fillStyle = "red",
        ctxMatrix.fillRect(0, 3 * gridMatrix - 1, workingCanvas.width, 1),
        O(currentArena, {
            x: 0,
            y: 0
        }),
        O(N.shape, {
            x: N.x,
            y: N.y
        }),
        F(),
        x = e - v,
        v = e,
        m += x,
        m > w && !hasGameEnded && !p && (I(),
        m = 0),
        null == currentHighScore)
            try {
                currentHighScore = localStorage._hscore
            } catch (e) {
                console.error(e)
            }
        null == currentHighScore && (currentHighScore = 0),
        ctxMatrix.font = 2 * gridMatrix + "px Arial",
        ctxMatrix.fillStyle = "#fff",
        ctxMatrix.fillText(currentScore, workingCanvas.width / 2 - ctxMatrix.measureText(currentScore).width / 2, 2.5 * gridMatrix),
        ctxMatrix.font = .5 * gridMatrix + "px Arial",
        ctxMatrix.fillStyle = "#fff",
        ctxMatrix.fillText("High score: " + currentHighScore, workingCanvas.width / 2 - ctxMatrix.measureText("High score: " + currentHighScore).width / 2, 3.5 * gridMatrix),
        function() {
            this.offset = 1,
            this.hoverSize = gridMatrix / 5,
            mousePos.x > gridMatrix * this.offset - this.hoverSize && mousePos.x < gridMatrix * this.offset + gridMatrix + 2 * this.hoverSize && mousePos.y > gridMatrix * this.offset - this.hoverSize && mousePos.y < gridMatrix * this.offset + gridMatrix + 2 * this.hoverSize ? (y = !0,
            ctxMatrix.fillStyle = "#3a3a3a",
            ctxMatrix.fillRect(gridMatrix * this.offset - this.hoverSize, gridMatrix * this.offset - this.hoverSize, gridMatrix + 2 * this.hoverSize, gridMatrix + 2 * this.hoverSize)) : y = !1;
            ctxMatrix.drawImage(restartImage, gridMatrix * this.offset, gridMatrix * this.offset, gridMatrix, gridMatrix)
        }(),
        function() {
            this.offsetX = 8,
            this.offsetY = 1,
            this.hoverSize = gridMatrix / 5,
            mousePos.x > gridMatrix * this.offsetX - this.hoverSize && mousePos.x < gridMatrix * this.offsetX + gridMatrix + offsetX && mousePos.y > gridMatrix * this.offsetY - this.hoverSize && mousePos.y < gridMatrix * this.offsetY + gridMatrix + offsetY ? (c = !0,
            ctxMatrix.fillStyle = "#3a3a3a",
            ctxMatrix.fillRect(gridMatrix * this.offsetX - this.hoverSize, gridMatrix * this.offsetY - this.hoverSize, gridMatrix + 2 * this.hoverSize, gridMatrix + 2 * this.hoverSize)) : c = !1;
            const e = p ? playImage : pauseImage;
            ctxMatrix.drawImage(e, gridMatrix * this.offsetX, gridMatrix * this.offsetY, gridMatrix, gridMatrix)
        }(),
        function() {
            for (let e = currentArena.length - 1; e >= 0; e--)
                currentArena[e].every(e=>e > 0) && (currentArena.splice(e, 1),
                currentArena.splice(0, 0, new Array(currentArena[1].length).fill(0)),
                currentScore += S,
                S *= 2)
        }(),
        requestAnimationFrame(createGameArena)
    }
    function b(e, t) {
        let r = [];
        for (; t--; )
            r.push(new Array(e).fill(0));
        return r
    }
    function O(e, t) {
        for (let workingCanvas = 0; workingCanvas < e.length; workingCanvas++)
            for (let currentArena = 0; currentArena < e[workingCanvas].length; currentArena++)
                0 !== e[workingCanvas][currentArena] && (ctxMatrix.fillStyle = r[e[workingCanvas][currentArena]],
                ctxMatrix.fillRect((t.x + currentArena) * gridMatrix, (t.y + workingCanvas) * gridMatrix, gridMatrix, gridMatrix))
    }
    function k(e, t) {
        for (let t = 0; t < e.length; ++t)
            for (let r = 0; r < t; ++r)
                [e[r][t],e[t][r]] = [e[t][r], e[r][t]];
        t > 0 ? e.forEach(e=>e.reverse()) : e.reverse()
    }
    function F() {
        try {
            currentScore > currentHighScore && (currentHighScore = currentScore,
            localStorage._hscore = JSON.stringify(currentHighScore)),
            localStorage._end = JSON.stringify(hasGameEnded),
            localStorage._score = JSON.stringify(currentScore),
            localStorage._arena = JSON.stringify(currentArena),
            localStorage._player = JSON.stringify(N)
        } catch (e) {}
    }
    function z(e) {
        const t = window.getComputedStyle(workingCanvas)
          , r = parseInt(t.width)
          , ctxMatrix = parseInt(t.height)
          , gridMatrix = workingCanvas.width / r
          , currentArena = workingCanvas.height / ctxMatrix;
        let currentHighScore = workingCanvas.getBoundingClientRect();
        mousePos.x = (e.clientX - currentHighScore.left) * gridMatrix,
        mousePos.y = (e.clientY - currentHighScore.top) * currentArena,
        localStorage.setItem("mouse", JSON.stringify(mousePos))
    }
    function J(e) {
        y ? Y(!0) : c && (p = !p,
        up = L = j = X = !1)
    }
    var N = {
        start_x: 5,
        x: 5,
        y: 0,
        shape: shapes[Math.round(Math.random() * (shapes.length - 1))]
    };
    function T() {
        let e = N.shape;
        for (let t = 0; t < e.length; t++)
            for (let r = 0; r < e[t].length; r++)
                if (0 !== e[t][r] && currentArena[N.y + t] && 0 !== currentArena[N.y + t][N.x + r])
                    return !0;
        return !1
    }
    function I() {
        if (m = 0,
        N.y + N.shape.length - 1 - A(N.shape) < 0 && (N.x = N.start_x),
        N.x + N.shape.length - 1 - M(N.shape) > currentArena[0].length - 1 && (N.x = currentArena[0].length - N.shape.length + M(N.shape)),
        N.x + R(N.shape) < 0 && (N.x = 0 - R(N.shape)),
        N.y++,
        T() || N.y > currentArena.length - N.shape.length + A(N.shape)) {
            if (currentScore += 10,
            N.y--,
            function(e, t) {
                const r = e.shape;
                for (let ctxMatrix = 0; ctxMatrix < r.length; ctxMatrix++)
                    for (let workingCanvas = 0; workingCanvas < r.length; workingCanvas++)
                        if (r[ctxMatrix][workingCanvas] && 0 !== r[ctxMatrix][workingCanvas])
                            try {
                                t[e.y + ctxMatrix][e.x + workingCanvas] = r[ctxMatrix][workingCanvas]
                            } catch (e) {
                                console.error(e)
                            }
            }(N, currentArena),
            function(e) {
                let t = 0;
                return e.forEach(e=>{
                    t += e
                }
                ),
                t
            }(currentArena[2]) > 0)
                return O(currentArena, {
                    x: 0,
                    y: 0
                }),
                hasGameEnded = !0,
                void Y(!1);
            E()
        }
    }
    function E() {
        N.shape = shapes[Math.round(Math.random() * (shapes.length - 1))],
        N.y = -N.shape.length + A(N.shape),
        N.x = 5 - Math.round(N.shape.length / 2),
        N.start_x = N.x,
        S = 75
    }
    function A(e) {
        let t = 0;
        for (let r = e.length - 1; r >= 0; r--) {
            for (let ctxMatrix = 0; ctxMatrix < e[r].length; ctxMatrix++)
                if (0 !== e[r][ctxMatrix])
                    return t;
            t++
        }
        return t
    }
    function M(e) {
        let t = 0;
        for (let r = e.length - 1; r >= 0; r--) {
            for (let ctxMatrix = 0; ctxMatrix < e.length; ctxMatrix++)
                if (0 !== e[ctxMatrix][r])
                    return t;
            t++
        }
        return t
    }
    function R(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
            for (let ctxMatrix = 0; ctxMatrix < e.length; ctxMatrix++)
                if (0 !== e[ctxMatrix][r])
                    return t;
            t++
        }
        return t
    }
    function Y(e) {
        j = L = X = !1,
        F(),
        hasGameEnded = !0,
        localStorage._end = JSON.stringify(hasGameEnded),
        localStorage._arena = JSON.stringify(b(workingCanvas.width / gridMatrix, workingCanvas.height / gridMatrix).slice(0)),
        e && location.reload()
    }
    var j = !1
      , L = !1
      , X = !1;
    function C() {
        L && !p && (currentScore += 1,
        I())
    }
    function P() {
        j && !p ? (N.x--,
        T() && N.x++) : X && !p && (N.x++,
        T() && N.x--)
    }
    function D(e) {
        if (hasGameEnded)
            Y(!0);
        else {
            if (p)
                return;
            if ("keydown" == e.type)
                switch (e.keyCode) {
                case 87:
                case 38:
                    !function(e) {
                        const t = N.x;
                        let r = 1;
                        for (k(N.shape, e); T(); )
                            if (N.x += r,
                            r = -(r + (r > 0 ? 1 : -1)),
                            r > N.shape[0].length)
                                return k(N.shape, -e),
                                void (N.x = t)
                    }(1);
                    break;
                case 65:
                case 37:
                    if (N.y + N.shape.length - A(N.shape) < 0)
                        break;
                    j = !0;
                    break;
                case 83:
                case 40:
                    L = !0;
                    break;
                case 68:
                case 39:
                    if (N.y + N.shape.length - A(N.shape) < 0)
                        break;
                    X = !0;
                    break;
                case 27:
                    localStorage.mouse = JSON.stringify({
                        x: -10,
                        y: -10
                    })
                }
            else if ("keyup" == e.type)
                switch (e.keyCode) {
                case 65:
                case 37:
                    j = !1;
                    break;
                case 83:
                case 40:
                    L = !1;
                    break;
                case 68:
                case 39:
                    X = !1
                }
        }
    }
}
]);

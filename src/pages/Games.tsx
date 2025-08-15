import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/TypewriterText";
import { MiniGame } from "@/components/MiniGame";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const typewriterWords = ["Fast Delivery", "Sleek Jobs", "Quality Work", "Affordable Rates", "Creative Solutions"];

  // Snake Game Component
  const SnakeGame = () => {
    const [score, setScore] = useState(0);
    return (
      <div className="bg-muted p-4 rounded">
        <div className="grid grid-cols-8 gap-1 mb-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded ${i === 20 ? 'bg-accent' : i === 35 ? 'bg-destructive' : 'bg-border'}`} />
          ))}
        </div>
        <p className="text-sm">Score: {score}</p>
        <Button size="sm" onClick={() => setScore(s => s + 10)} className="mt-2">Move Snake</Button>
      </div>
    );
  };

  // Memory Game
  const MemoryGame = () => {
    const [flipped, setFlipped] = useState<number[]>([]);
    const cards = ["🎮", "🎯", "⭐", "🚀", "💎", "🔥", "⚡", "🎨"];
    return (
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, i) => (
          <div 
            key={i}
            className={`w-8 h-8 bg-primary rounded flex items-center justify-center cursor-pointer ${flipped.includes(i) ? '' : 'bg-muted'}`}
            onClick={() => setFlipped(f => f.includes(i) ? f.filter(x => x !== i) : [...f, i])}
          >
            {flipped.includes(i) ? card : "?"}
          </div>
        ))}
      </div>
    );
  };

  // Clicker Game
  const ClickerGame = () => {
    const [clicks, setClicks] = useState(0);
    return (
      <div className="text-center">
        <div className="text-3xl mb-2">{clicks}</div>
        <Button 
          size="sm" 
          onClick={() => setClicks(c => c + 1)}
          className="animate-pulse-glow"
        >
          Click Me!
        </Button>
      </div>
    );
  };

  // Color Match
  const ColorMatch = () => {
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
    const [target, setTarget] = useState(colors[0]);
    return (
      <div className="space-y-2">
        <div className={`w-full h-4 rounded ${target}`} />
        <div className="grid grid-cols-2 gap-1">
          {colors.map((color, i) => (
            <Button 
              key={i}
              size="sm" 
              className={`h-6 ${color}`}
              onClick={() => setTarget(colors[Math.floor(Math.random() * colors.length)])}
            />
          ))}
        </div>
      </div>
    );
  };

  // Simple Puzzle
  const PuzzleGame = () => {
    const [pieces, setPieces] = useState([1,2,3,4,5,6,7,8,0]);
    return (
      <div className="grid grid-cols-3 gap-1">
        {pieces.map((piece, i) => (
          <div 
            key={i}
            className="w-8 h-8 bg-accent rounded flex items-center justify-center text-xs cursor-pointer"
            onClick={() => setPieces(p => [...p.slice(0,i), p[i+1] || 0, ...p.slice(i+1)])}
          >
            {piece || ""}
          </div>
        ))}
      </div>
    );
  };

  // Reaction Time
  const ReactionGame = () => {
    const [reaction, setReaction] = useState(0);
    const [active, setActive] = useState(false);
    
    useEffect(() => {
      if (active) {
        const timer = setTimeout(() => setActive(false), 2000);
        return () => clearTimeout(timer);
      }
    }, [active]);

    return (
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full mx-auto mb-2 ${active ? 'bg-accent' : 'bg-muted'}`} />
        <Button 
          size="sm"
          onClick={() => active ? setReaction(Date.now()) : setActive(true)}
        >
          {active ? "Click!" : "Start"}
        </Button>
      </div>
    );
  };

  // Word Game
  const WordGame = () => {
    const words = ["CODE", "GAME", "PLAY", "WIN"];
    const [current, setCurrent] = useState(words[0]);
    return (
      <div className="text-center">
        <div className="text-lg font-bold mb-2">{current}</div>
        <Button 
          size="sm"
          onClick={() => setCurrent(words[Math.floor(Math.random() * words.length)])}
        >
          New Word
        </Button>
      </div>
    );
  };

  // Maze Runner
  const MazeGame = () => {
    const [pos, setPos] = useState(0);
    return (
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i}
            className={`w-4 h-4 rounded ${i === pos ? 'bg-accent' : [2,7,12,17,22].includes(i) ? 'bg-destructive' : 'bg-muted'}`}
          />
        ))}
        <Button size="sm" onClick={() => setPos(p => (p + 1) % 25)} className="col-span-5 mt-2">
          Move
        </Button>
      </div>
    );
  };

  // Spin Wheel
  const SpinGame = () => {
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState("");
    
    const spin = () => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
        setResult(["🎉", "💎", "⭐", "🔥"][Math.floor(Math.random() * 4)]);
      }, 1000);
    };

    return (
      <div className="text-center">
        <div className={`text-3xl mb-2 ${spinning ? 'animate-spin' : ''}`}>🎯</div>
        <div className="text-lg mb-2">{result}</div>
        <Button size="sm" onClick={spin} disabled={spinning}>
          {spinning ? "Spinning..." : "Spin!"}
        </Button>
      </div>
    );
  };

  // Tic Tac Toe
  const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    
    const play = (i: number) => {
      if (board[i]) return;
      const newBoard = [...board];
      newBoard[i] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    };

    return (
      <div className="grid grid-cols-3 gap-1">
        {board.map((cell, i) => (
          <Button 
            key={i}
            size="sm"
            className="w-8 h-8 p-0 text-xs"
            onClick={() => play(i)}
          >
            {cell}
          </Button>
        ))}
      </div>
    );
  };

  const games = [
    {
      title: "Snake",
      icon: "🐍",
      color: "hover:border-green-500/50",
      description: "Classic snake game",
      gameComponent: <SnakeGame />
    },
    {
      title: "Memory",
      icon: "🧠",
      color: "hover:border-purple-500/50",
      description: "Match the cards",
      gameComponent: <MemoryGame />
    },
    {
      title: "Clicker",
      icon: "👆",
      color: "hover:border-blue-500/50",
      description: "Click to score",
      gameComponent: <ClickerGame />
    },
    {
      title: "Colors",
      icon: "🎨",
      color: "hover:border-pink-500/50",
      description: "Match the colors",
      gameComponent: <ColorMatch />
    },
    {
      title: "Puzzle",
      icon: "🧩",
      color: "hover:border-orange-500/50",
      description: "Slide to solve",
      gameComponent: <PuzzleGame />
    },
    {
      title: "Reaction",
      icon: "⚡",
      color: "hover:border-yellow-500/50",
      description: "Test your reflexes",
      gameComponent: <ReactionGame />
    },
    {
      title: "Words",
      icon: "📝",
      color: "hover:border-indigo-500/50",
      description: "Word challenge",
      gameComponent: <WordGame />
    },
    {
      title: "Maze",
      icon: "🗺️",
      color: "hover:border-red-500/50",
      description: "Find the path",
      gameComponent: <MazeGame />
    },
    {
      title: "Spinner",
      icon: "🎯",
      color: "hover:border-cyan-500/50",
      description: "Spin to win",
      gameComponent: <SpinGame />
    },
    {
      title: "Tic Tac",
      icon: "⭕",
      color: "hover:border-emerald-500/50",
      description: "Classic X and O",
      gameComponent: <TicTacToe />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Game Portfolio
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8">
              <TypewriterText words={typewriterWords} className="text-accent font-semibold" />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interactive mini-games showcasing programming skills and creativity
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="mb-12">
                ← Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating game elements */}
        <div className="absolute top-10 left-10 text-2xl animate-float opacity-60">🎮</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-40" style={{ animationDelay: '1s' }}>🕹️</div>
        <div className="absolute top-1/2 right-20 text-2xl animate-float opacity-50" style={{ animationDelay: '2s' }}>⭐</div>
        <div className="absolute bottom-10 left-20 text-2xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>🚀</div>
      </section>

      {/* Games Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Mini Games Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              10 Interactive games demonstrating various programming concepts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {games.map((game, index) => (
              <div 
                key={game.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MiniGame {...game} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready for Your Game Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            From simple browser games to complex interactive experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Discuss Your Game Idea
            </Button>
            <Link to="/">
              <Button variant="contact" size="lg">
                View Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
import Link from "next/link";

export default function Process() {
  return (
    <div className="text-center w-full">
      <p className="text-2xl m-auto w-3/6">
        There are two major parts of this site. The chess simulation (checking
        if moves are valid, etc), and the chessboard displayed. You can make
        those yourself or use libraries. I used libraries, but if we had more
        time, I may have made the simulation myself. Once you have a chess
        simulation and a chessboard, you will need to connect the two. This is
        done in my project when pieces are dragged on the board, they are
        checked to see if they are valid moves. If it is a valid move, the piece
        is placed. You could also do this by clicking. After a simple chessboard
        is done, there are many ways to go from there. You could add clocks, a
        move list, a versus AI mode, and countless other things to add. The code
        is linked{" "}
        <Link
          href="https://github.com/TigerQAa/passion_project"
          target="_blank"
          className="text-sky-400"
        >
          here
        </Link>
        .
      </p>
      <div className="w-full">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WO7uIKz-3MI?si=1L7Ynq2WQ4M94NnZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="m-auto mt-5"
        ></iframe>
      </div>
    </div>
  );
}

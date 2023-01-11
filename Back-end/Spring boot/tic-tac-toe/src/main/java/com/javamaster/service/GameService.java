package com.javamaster.service;

import com.javamaster.exception.InvalidGameException;
import com.javamaster.exception.NotFoundException;
import com.javamaster.model.Game;
import com.javamaster.model.GamePlay;
import com.javamaster.model.Player;
import com.javamaster.storage.GameStorage;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

import static com.javamaster.model.GameStatus.*;

@Service
@AllArgsConstructor
public class GameService {

    public Game createGame(Player player){
        Game game = new Game();
        game.setBoard(new int[3][3]);
        game.setGameId(UUID.randomUUID().toString());
        game.setPlayer1(player);
        game.setStatus(NEW);
        GameStorage.getInstance().setGame(game);
        return game;
    }

    public Game connectToGame(Player player2, String gameId) throws InvalidGameException {
        if (!GameStorage.getInstance().getGames().containsKey(gameId)){
            throw new InvalidGameException("game with provided id does not exist");
        }
        Game game = GameStorage.getInstance().getGames().get(gameId);
        if (game.getPlayer2() != null){
            throw new InvalidGameException("game is not valid anymore");
        }
        game.setPlayer2(player2);
        game.setStatus(IN_PROGRESS);
        GameStorage.getInstance().setGame(game);
        return game;
    }

    public Game connectToRandomGame(Player player2) throws NotFoundException{
        Game game = GameStorage.getInstance().getGames().values().stream()
                .filter(it->it.getStatus().equals(NEW))
                .findFirst().orElseThrow(()-> new NotFoundException("Game not found"));
        game.setPlayer2(player2);
        game.setStatus(IN_PROGRESS);
        GameStorage.getInstance().setGame(game);
        return game;
    }

    public Game gamePlay(GamePlay gamePlay) throws NotFoundException, InvalidGameException {
        if (!GameStorage.getInstance().getGames().containsKey(gamePlay.getGameId())){
            throw new NotFoundException("Game not found");
        }

        Game game = GameStorage.getInstance().getGames().get(gamePlay.getGameId());
        if (game.getStatus().equals(FINISHED)){
            throw new InvalidGameException("Game is already finished");
        }
        return game;
    }
}

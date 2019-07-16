import {ICell, IEngine, IGameCoordinate, IGameState, IMove, IPlayer, ITile, PlayerId} from '@myob-fma/hex-renderer';

const gameState: IGameState = {
    cells: [],
    players: []
};

const CallYourBackend = async (move: IMove) => {
    return gameState;
};

export const biancasEngine = (): IEngine => {
    return {
        async initialState(): Promise<IGameState> {
            return gameState;
        },

        async playMove(move: IMove): Promise<IGameState> {
            return await CallYourBackend(move);
        }
    };
};




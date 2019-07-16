import { renderGame } from '@myob-fma/hex-renderer';
import { biancasEngine } from './engine';

const engine = biancasEngine();

renderGame({
  engine,
  container: document.getElementById('board') as Element,
});

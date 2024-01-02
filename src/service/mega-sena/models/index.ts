import { DezenasAvailable } from "./dezenas";

export interface MSEvent {
  concurso: string;
  dataSorteio: string;
  bola1: string;
  bola2: string;
  bola3: string;
  bola4: string;
  bola5: string;
  bola6: string;
  ganhadores6Acertos: string;
  cidade: string;
  rateio6Acertos: string;
  ganhadores5Acertos: string;
  rateio5Acertos: string;
  ganhadores4Acertos: string;
  rateio4Acertos: string;
  acumulado6Acertos: string;
  arrecadacaoTotal: string;
  estimativaPremio: string;
  acumuladoSorteioEspecial: string;
  observacao: string;
}

export interface MSEventTreated {
  concurso: number;
  dataSorteio: string;
  bola1: DezenasAvailable;
  bola2: DezenasAvailable;
  bola3: DezenasAvailable;
  bola4: DezenasAvailable;
  bola5: DezenasAvailable;
  bola6: DezenasAvailable;
  ganhadores6Acertos: number;
  cidade: string;
  rateio6Acertos: number;
  ganhadores5Acertos: number;
  rateio5Acertos: number;
  ganhadores4Acertos: number;
  rateio4Acertos: number;
  acumulado6Acertos: number;
  arrecadacaoTotal: number;
  estimativaPremio: number;
  acumuladoSorteioEspecial: number;
  observacao: string;
}
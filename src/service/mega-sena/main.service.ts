import csvParser from 'csvtojson';
import { join } from 'path';
import { eventHeaders } from './constants/mega-sena';
import { MSEvent, MSEventTreated } from "./models";
import { formatMoneyToNumber } from '../../utils/string';
import { MegaSenaAnalytics } from './analytics.service';
import { DezenasAvailable } from './models/dezenas';

export class MegaSenaService {
  private data: MSEventTreated[] = [];

  public async load(): Promise<MegaSenaService> {
    const data = await csvParser({
      delimiter: '\t',
      headers: eventHeaders,
    }).fromFile(join(__dirname, '../../assets/mega-sena-events.csv')) as unknown as MSEvent[];

    this.data = data.map((event: MSEvent): MSEventTreated => {
      return {
        concurso: +event.concurso,
        dataSorteio: event.dataSorteio,
        bola1: +event.bola1 as DezenasAvailable,
        bola2: +event.bola2 as DezenasAvailable,
        bola3: +event.bola3 as DezenasAvailable,
        bola4: +event.bola4 as DezenasAvailable,
        bola5: +event.bola5 as DezenasAvailable,
        bola6: +event.bola6 as DezenasAvailable,
        ganhadores6Acertos: +event.ganhadores6Acertos,
        cidade: event.cidade,
        rateio6Acertos: formatMoneyToNumber(event.rateio6Acertos),
        ganhadores5Acertos: +event.ganhadores5Acertos,
        rateio5Acertos: formatMoneyToNumber(event.rateio5Acertos),
        ganhadores4Acertos: +event.ganhadores4Acertos,
        rateio4Acertos: formatMoneyToNumber(event.rateio4Acertos),
        acumulado6Acertos: formatMoneyToNumber(event.acumulado6Acertos),
        arrecadacaoTotal: formatMoneyToNumber(event.arrecadacaoTotal),
        estimativaPremio: formatMoneyToNumber(event.estimativaPremio),
        acumuladoSorteioEspecial: formatMoneyToNumber(event.acumuladoSorteioEspecial),
        observacao: event.observacao,
      };
    });

    return this;
  }

  public analytic() {
    return new MegaSenaAnalytics(this.data);
  }

  getData(): MSEventTreated[] { return this.data; }
}
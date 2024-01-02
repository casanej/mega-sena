import { orderObject } from "../../utils/order";
import { dezenasArray, dezenasCount, dezenasObject } from "./constants/dezenas";
import { MSEventTreated } from "./models";
import { DezenasArray, DezenasAvailable, DezenasCount, DezenasCountTotal, DezenasObj } from "./models/dezenas";
import { MSFilter } from "./models/filter";

export class MegaSenaAnalytics {
  private data: MSEventTreated[] = [];

  constructor(data: MSEventTreated[]) {
    this.data = data;
  }

  getDezenasCount(filter?: MSFilter): DezenasCountTotal {
    const dezenasCountTotal: DezenasCount = Object.assign({}, dezenasCount);

    this.data.forEach((event: MSEventTreated) => {
      const dezenas = [
        event.bola1,
        event.bola2,
        event.bola3,
        event.bola4,
        event.bola5,
        event.bola6,
      ];

      dezenas.forEach((dezena: DezenasAvailable) => {
        if (dezenasCountTotal[dezena]) {
          dezenasCountTotal[dezena] += 1;
        } else {
          dezenasCountTotal[dezena] = 1;
        }
      });
    });

    if (filter && filter.order) {
      return Object.entries(dezenasCountTotal).sort((a, b) => orderObject(+a[1], +b[1], filter.order?.value)) as unknown as DezenasCountTotal;
    }

    return Object.entries(dezenasCountTotal) as unknown as DezenasCountTotal;
  }

  getMostCoupledDezenas() {
    const mostCoupledDezenas: DezenasObj = Object.assign({}, dezenasObject);

    return mostCoupledDezenas;
  }
}
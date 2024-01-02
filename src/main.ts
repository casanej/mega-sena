import { MegaSenaService } from "./service/mega-sena/main.service";

const start = async () => {
  const megaSena = await new MegaSenaService().load();

  console.log('[MOST DRAW DEZENAS]', megaSena.analytic().getDezenasCount({ order: { value: 'desc' } }));
  console.log('[MOST COUPLE DEZENAS]', megaSena.analytic().getMostCoupledDezenas());
}

start();
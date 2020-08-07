import React from "react";
import { Switch, Route } from "react-router-dom";
import PageOne from "../../pages/PageOne";
import PortOptions from "../../pages/PortOptions";
import Usluge from "../../pages/Usluge";
import Omeni from "../../pages/Omeni";
import Portfolio from "../Portfolio/Portfolio";
import pictures from "../../assets/pictures";

const Oaza = () => (
  <Portfolio
    heading='Poslovno-apartmanski objekat "Oaza"'
    text="Glavni projekat poslovno-apartmanskog objekta “Oaza” (cca 6690 m 2) na
    UP br.6 u zoni B DUP-a ” Zona centralnih djelatnosti- Cetinjski put”,
    Podgorica ( autor i koordinator )"
    position="Autor i koordinator"
    pictures={pictures.oaza}
    back={pictures.oaza[1].src}
  />
);

const Ambasada = () => (
  <Portfolio
    heading="Ambasada UAE u Capital Plaza Centru (Podgorica)"
    text="Glavni projekat enterijera Ambasade UAE u Capital Plaza Centru (cca
    1095m2), Podgorica "
    position="Saradnik na projektu"
    pictures={pictures.ambasada}
    back={pictures.ambasada[0].src}
  />
);

const Atlas = () => (
  <Portfolio
    heading="Atlas Banka u Capital Plaza Centru (Podgorica)"
    text="Glavni projekt enterijera filijale Atlas banke u Capital Plazi (cca
      200m2), Podgorica"
    position="Koautor filijale, saradnik na projektu"
    pictures={pictures.atlas}
    back={pictures.atlas[0].src}
  />
);

const Benexfitnes = () => (
  <Portfolio
    heading='"Benex fitnes centar" u Capital Plaza Centru (Podgorica)'
    text="Glavni projekat “Benex fitnes centra” (cca 950m2), na Capital Plaza
    Centru, Podgorica ( saradnik na projektu )"
    position="Saradnik na projektu"
    pictures={pictures.benex}
    back={pictures.benex[0].src}
  />
);

const Bogdanov = () => (
  <Portfolio
    heading='Stambeno-poslovni objekat "Bogdanov kraj" (Cetinje)'
    text="Glavni projekat stambeno-poslovnog objekta (cca 645 m2) na UP br. 543,
    DUP-a „Bogdanov kraj“, Cetinje ( vodeći i odgovorni projektant )"
    position="Vodeći i odgovorni projektant"
    pictures={pictures.bogdanov}
    back={pictures.bogdanov[2].src}
  />
);

const Vila = () => (
  <Portfolio
    heading="Enterijer vile na primorju"
    text="Enterijer vile na primorju"
    position="Autor i koordinator"
    pictures={pictures.vila}
    back={pictures.vila[3].src}
  />
);

const Planinski = () => (
  <Portfolio
    heading="Enterijer planinskog stana"
    text="Enterijer planinskog stana"
    position="Autor i koordinator"
    pictures={pictures.planinski}
    back={pictures.planinski[2].src}
  />
);

const StambeniCetinje = () => (
  <Portfolio
    heading="Stambeni objekat (Cetinje)"
    text="Stambeni objekat na UP 523, Cetinje ( autor i koordinator )"
    position="Autor i koordinator"
    pictures={pictures.stambeni}
    back={pictures.stambeni[0].src}
  />
);

const Kumbor = () => (
  <Portfolio
    heading="Kumbor - Stambeni kompleks"
    text="Kumbor - Stambeni kompleks"
    position="Autor i koordinator"
    pictures={pictures.kumbor}
    back={pictures.kumbor[0].src}
  />
);

const Penninsula = () => (
  <Portfolio
    heading="Peninsula Krašići- rekonstrukcija"
    text="Peninsula Krašići- rekonstrukcija"
    position="Autor i koordinator"
    pictures={pictures.penninsula}
    back={pictures.penninsula[3].src}
  />
);

const Macchiato = () => (
  <Portfolio
    heading="Caffee Bar Macchiato"
    text="Caffee Bar Macchiato"
    position="Autor i koordinator"
    pictures={pictures.macchiato}
    back={pictures.macchiato[0].src}
  />
);

const MainSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={PageOne} />
      <Route path="/options" component={PortOptions} />
      <Route path="/usluge" component={Usluge} />
      <Route path="/omeni" component={Omeni} />
      <Route path="/oaza" component={Oaza} />
      <Route path="/ambasada" component={Ambasada} />
      <Route path="/atlas" component={Atlas} />
      <Route path="/benex" component={Benexfitnes} />
      <Route path="/bogdanov" component={Bogdanov} />
      <Route path="/vila" component={Vila} />
      <Route path="/planinski" component={Planinski} />
      <Route path="/stambeni" component={StambeniCetinje} />
      <Route path="/kumbor" component={Kumbor} />
      <Route path="/peninsula" component={Penninsula} />
      <Route path="/macchiato" component={Macchiato} />
    </Switch>
  );
};

export default MainSwitch;

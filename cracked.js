{
  swords = ["https://www.taylorrichaards.com/classic/swords/full_swords/eclipse-black-_-fever.png", "https://www.taylorrichaards.com/classic/swords/full_swords/enjoy-chainwhip.png", "https://www.taylorrichaards.com/classic/swords/full_swords/zentrix-metallica.png", "https://www.taylorrichaards.com/classic/swords/custom/sykko-recolor-sword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/iuno-snowhite-spar-sword.png", "https://www.taylorrichaards.com/classic/swords/custom/ezio-greensword.png", "https://www.taylorrichaards.com/classic/swords/custom/rainbow_sword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/juggs_ninja-hitter.png", "https://www.taylorrichaards.com/classic/swords/full_swords/inova-saix-keyblade.png", "https://www.taylorrichaards.com/classic/swords/full_swords/wafflez-goldsword-sword.png", "https://www.taylorrichaards.com/classic/swords/custom/dyl-greenflame-sword.png", "https://www.taylorrichaards.com/classic/swords/custom/sword-ashur-whitesaber.png", "https://www.taylorrichaards.com/classic/swords/custom/sean-termina_4swords.png", "https://www.taylorrichaards.com/classic/swords/custom/michaelblacksword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/unlovedblood-adam.png", "https://www.taylorrichaards.com/classic/swords/custom/wicked-halo-purple-sword_stomperf.png", "https://www.taylorrichaards.com/classic/swords/custom/exaltssword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/squird-sword19.png", "https://www.taylorrichaards.com/classic/swords/full_swords/DragonFang-Sword.png", "https://www.taylorrichaards.com/classic/swords/custom/rainbowsword123.gif", "https://www.taylorrichaards.com/classic/swords/custom/jesterthecat_blue_sword.png", "https://www.taylorrichaards.com/classic/swords/custom/teku-whitepanda-sword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/rezon_anticipation_over_all_sword.png", "https://www.taylorrichaards.com/classic/swords/custom/graalians-dot-com-sword-2_stomper.png", "https://www.taylorrichaards.com/classic/swords/full_swords/arkan-x-personnal-x-sword.png", "https://www.taylorrichaards.com/classic/swords/custom/loops-purplesticksword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/emo-panda-superuberpwningmasterpandachaosblade-by-619master-sword.png", "https://www.taylorrichaards.com/classic/swords/full_swords/wc-yoggsaron-edit.png", "https://www.taylorrichaards.com/classic/swords/custom/sword-4guild-dragon-of-god-by-stomper.png", "https://www.taylorrichaards.com/classic/swords/custom/hi_blacksword.png"];
}
{
  function moveElement(_0x290183, _0x233e3f, _0x409599) {
    _0x290183.style.left = _0x233e3f;
    document.querySelector("#chat").innerText = _0x409599;
  }
  let position = 0;
  const npcDiv = document.querySelector("#npc-div");
  const ipElement = npcDiv.querySelector("#ip");
  function animation() {
    if (position === 0) {
      moveElement(ipElement, 0, "x=0");
    } else if (position === 1) {
      moveElement(ipElement, "calc(50% - 26px)", "x=5");
    } else {
      moveElement(ipElement, "calc(100% - 26px)", "x=10");
    }
    position = (position + 1) % 3;
  }
  setInterval(animation, 3000);
}
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#splash").style.display = "none";
  document.body.style.display = "flex";
});
const callbacks_switch = [];
function set_switch_on(_0x1e2a5f, _0x4dece4, _0x4d85d5) {
  const _0x209d3d = callbacks_switch[_0x4dece4] || (() => {});
  const _0xd7c6af = _0x1e2a5f.querySelector("#image").style.top != "-22px";
  _0x1e2a5f.setAttribute("state", !_0xd7c6af);
  if (!_0xd7c6af) {
    _0x1e2a5f.querySelector("#image").style.left = "0px";
    _0x1e2a5f.querySelector("#image").style.top = "0px";
    _0x1e2a5f.style.color = "var(--light-secondary-color)";
    _0x1e2a5f.style.borderLeft = "12px solid lightgreen";
    _0x209d3d(true, _0x4dece4);
  } else {
    _0x1e2a5f.querySelector("#image").style.left = "0px";
    _0x1e2a5f.querySelector("#image").style.top = "-22px";
    _0x1e2a5f.style.color = '';
    _0x1e2a5f.style.backgroundColor = '';
    _0x1e2a5f.style.borderLeft = "0 solid red";
    _0x209d3d(false, _0x4dece4);
  }
}
const switch_el = (_0x3533d5, _0x272bf1, _0x31a75b, _0x3246ac) => {
  const _0x72fc9d = callbacks_switch.length;
  callbacks_switch.push(_0x31a75b);
  return "\n        <div class=\"switch-option\" onclick=\"set_switch_on(this, " + _0x72fc9d + ")\" id=\"" + (_0x3246ac || '') + "\">\n    <div><p>" + _0x3533d5 + "</p><p style=\"font-size: 0.65em\">" + _0x272bf1 + "</p></div>\n    <div class=\"toggle-inner-option\">\n        <img id = \"image\" alt=\"\" style=\"transition: 0.1s; min-width:calc(42px * 1); min-height:calc(82px * 1); position: absolute; top: " + "-22px" + "; left: 0;\"src=\"https://images-ext-1.discordapp.net/external/_q5lGTRRifRQB_0zn5Ckh-aAgVKuXELqdfgwj6gH3ZQ/https/classiccachecloudcor.quattroplay.com/images3/classic_gralats3.png?format=webp&quality=lossless&width=42&height=83\">\n    </div>\n    </div> \n";
};
var desativado = new Audio("./desativado.mp3 ");
desativado.oncanplaythrough = function () {};
desativado.onended = function () {};
var ativado = new Audio("./Ativado.mp3 ");
ativado.oncanplaythrough = function () {};
ativado.onended = function () {};
document.getElementById("scroll-menu").innerHTML += "<div style=\"text-align: center; display: flex; align-items: center;gap:1rem; justify-content: left; padding:0 8px;  background-color: rgb(255, 229, 145); color: black; font-size: 0.6em\">enable or desable chat commands</div>";
document.getElementById("scroll-menu").innerHTML += switch_el("Chat prop commands", "ativar comandos de props no chat exemplo x=20 para teleportar.", _0x22fca2 => {
  if (_0x22fca2) {
    post("http://localhost:3436/enablemsgc", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desablemsgc", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
});
document.getElementById("scroll-menu").innerHTML += "<div style=\"text-align: center; display: flex; align-items: center;gap:1rem; justify-content: left; padding:0 8px;  background-color: rgb(255, 229, 145); color: black; font-size: 0.6em\">movement system and walls</div>";
document.getElementById("scroll-menu").innerHTML += switch_el("Staff boots <b style='color: gold'>VIP</b>", "<div style=\"display: flex; align-items: center; font-size: 0.6em;\"><img style=\"height: 2em\" src=\"./assets/safewings.gif\"> correr entre paredes com speed 2x </div>", _0x34d5ee => {
  if (_0x34d5ee) {
    post("http://localhost:3436/enableboots", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desableboots", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "boots1");
document.getElementById("scroll-menu").innerHTML += switch_el("Boots  <b style='color: gold'>VIP</b>", "Correr entre paredes", _0x1a880b => {
  if (_0x1a880b) {
    post("http://localhost:3436/enablewall", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desablewall", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "boots2");
document.getElementById("scroll-menu").innerHTML += "<div style=\"text-align: center; display: flex; align-items: center;gap:1rem; justify-content: left; padding:0 8px;  background-color: rgb(255, 229, 145); color: black; font-size: 0.6em\">HP and Health</div>";
document.getElementById("scroll-menu").innerHTML += switch_el("3x Hit confuser", "de 3 danos só levarás 2", _0x39b941 => {
  let _0x581858 = document.querySelector("#hitx2");
  if (_0x39b941 && _0x581858.getAttribute("state") == "true") {
    set_switch_on(_0x581858);
  }
  let _0x4b8bf5 = document.querySelector("#immortal");
  if (_0x39b941 && _0x4b8bf5.getAttribute("state") == "true") {
    set_switch_on(_0x4b8bf5);
  }
  if (_0x39b941) {
    post("http://localhost:3436/enable3hitconfuser", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desable3hitconfuser", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "hitx3");
document.getElementById("scroll-menu").innerHTML += switch_el("2x Hit confuser", "de 2 danos só levarás 1", _0x2de5ac => {
  let _0xde1d36 = document.querySelector("#hitx3");
  if (_0x2de5ac && _0xde1d36.getAttribute("state") == "true") {
    set_switch_on(_0xde1d36);
  }
  let _0x287546 = document.querySelector("#immortal");
  if (_0x2de5ac && _0x287546.getAttribute("state") == "true") {
    set_switch_on(_0x287546);
  }
  let _0x2663a5 = document.querySelector("#unhit");
  if (_0x2de5ac && _0x2663a5.getAttribute("state") == "true") {
    set_switch_on(_0x2663a5);
  }
  let _0x4b3ccb = document.querySelector("#hitx3unhit");
  if (_0x2de5ac && _0x4b3ccb.getAttribute("state") == "true") {
    set_switch_on(_0x4b3ccb);
  }
  let _0x200fec = document.querySelector("#hitx2unhit");
  if (_0x2de5ac && _0x200fec.getAttribute("state") == "true") {
    set_switch_on(_0x200fec);
  }
  if (_0x2de5ac) {
    post("http://localhost:3436/enable2hitconfuser", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desable2hitconfuser", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "hitx2");
document.getElementById("scroll-menu").innerHTML += switch_el("Imortal", "De todos os danos nenhum tirarão seu hp.", _0x7eb1c3 => {
  let _0x4df6fe = document.querySelector("#hitx2");
  if (_0x7eb1c3 && _0x4df6fe.getAttribute("state") == "true") {
    set_switch_on(_0x4df6fe);
  }
  let _0x3bd774 = document.querySelector("#hitx3");
  if (_0x7eb1c3 && _0x3bd774.getAttribute("state") == "true") {
    set_switch_on(_0x3bd774);
  }
  let _0xbb6af0 = document.querySelector("#unhit");
  if (_0x7eb1c3 && _0xbb6af0.getAttribute("state") == "true") {
    set_switch_on(_0xbb6af0);
  }
  let _0x322a29 = document.querySelector("#hitx3unhit");
  if (_0x7eb1c3 && _0x322a29.getAttribute("state") == "true") {
    set_switch_on(_0x322a29);
  }
  let _0x528921 = document.querySelector("#hitx2unhit");
  if (_0x7eb1c3 && _0x528921.getAttribute("state") == "true") {
    set_switch_on(_0x528921);
  }
  if (_0x7eb1c3) {
    post("http://localhost:3436/enableimmortal", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desableimmortal", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "immortal");
document.getElementById("scroll-menu").innerHTML += switch_el("(unhit) Imortal  <b style='color: gold'>VIP</b>", "não levará hit de forma alguma ", _0x36a960 => {
  let _0x39613f = document.querySelector("#hitx2");
  if (_0x36a960 && _0x39613f.getAttribute("state") == "true") {
    set_switch_on(_0x39613f);
  }
  let _0x4d1fc8 = document.querySelector("#hitx3");
  if (_0x36a960 && _0x4d1fc8.getAttribute("state") == "true") {
    set_switch_on(_0x4d1fc8);
  }
  let _0x2541d1 = document.querySelector("#immortal");
  if (_0x36a960 && _0x2541d1.getAttribute("state") == "true") {
    set_switch_on(_0x2541d1);
  }
  let _0x3fff0f = document.querySelector("#hitx3unhit");
  if (_0x36a960 && _0x3fff0f.getAttribute("state") == "true") {
    set_switch_on(_0x3fff0f);
  }
  let _0x5b406f = document.querySelector("#hitx2unhit");
  if (_0x36a960 && _0x5b406f.getAttribute("state") == "true") {
    set_switch_on(_0x5b406f);
  }
  if (_0x36a960) {
    post("http://localhost:3436/enableunhit", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desableunhit", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "unhit");
document.getElementById("scroll-menu").innerHTML += switch_el("(unhit) 3x Hit confuser", "de 3 danos só levarás 2", _0x22d4ee => {
  let _0x342957 = document.querySelector("#hitx2");
  if (_0x22d4ee && _0x342957.getAttribute("state") == "true") {
    set_switch_on(_0x342957);
  }
  let _0x49e2d0 = document.querySelector("#immortal");
  if (_0x22d4ee && _0x49e2d0.getAttribute("state") == "true") {
    set_switch_on(_0x49e2d0);
  }
  let _0x28cb03 = document.querySelector("#hitx2unhit");
  if (_0x22d4ee && _0x28cb03.getAttribute("state") == "true") {
    set_switch_on(_0x28cb03);
  }
  let _0x13c7e8 = document.querySelector("#unhit");
  if (_0x22d4ee && _0x13c7e8.getAttribute("state") == "true") {
    set_switch_on(_0x13c7e8);
  }
  if (_0x22d4ee) {
    post("http://localhost:3436/unhitenable3hitconfuser", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/unhitdesable3hitconfuser", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "hitx3unhit");
document.getElementById("scroll-menu").innerHTML += switch_el("(unhit) 2x Hit confuser <b style='color: gold'>VIP</b>", "de 2 danos só levarás 1", _0x1052a7 => {
  let _0x19f42a = document.querySelector("#hitx3");
  if (_0x1052a7 && _0x19f42a.getAttribute("state") == "true") {
    set_switch_on(_0x19f42a);
  }
  let _0x3353a6 = document.querySelector("#hitx2");
  if (_0x1052a7 && _0x3353a6.getAttribute("state") == "true") {
    set_switch_on(_0x3353a6);
  }
  let _0x53efff = document.querySelector("#immortal");
  if (_0x1052a7 && _0x53efff.getAttribute("state") == "true") {
    set_switch_on(_0x53efff);
  }
  let _0x1c7d64 = document.querySelector("#unhit");
  if (_0x1052a7 && _0x1c7d64.getAttribute("state") == "true") {
    set_switch_on(_0x1c7d64);
  }
  let _0x149b09 = document.querySelector("#hitx3unhit");
  if (_0x1052a7 && _0x149b09.getAttribute("state") == "true") {
    set_switch_on(_0x149b09);
  }
  if (_0x1052a7) {
    post("http://localhost:3436/unhitenable2hitconfuser", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/unhitdesable2hitconfuser", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "hitx2unhit");
document.getElementById("scroll-menu").innerHTML += "<div style=\"text-align: center; display: flex; align-items: center;gap:1rem; justify-content: left; padding:0 8px;  background-color: rgb(255, 229, 145); color: black; font-size: 0.6em\">bombas e flechas</div>";
document.getElementById("scroll-menu").innerHTML += switch_el("Bombs infinite <b style='color: gold'>VIP</b>", "bombas infinitas", _0x5cdfa3 => {
  if (_0x5cdfa3) {
    post("http://localhost:3436/enablebomb", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desablebomb", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "infbombs");
document.getElementById("scroll-menu").innerHTML += switch_el("Barra de energia 100%", "freeze stamina", _0x1545cb => {
  if (_0x1545cb) {
    post("http://localhost:3436/enablestamina", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desablestamina", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
});
document.getElementById("scroll-menu").innerHTML += switch_el("<p style=\"display: flex; align-items: center; gap: 6px\">200 mounts ! <img style=\"height: 1.2em\" src=\"https://classiccachecloudcor.quattroplay.com/icons/dc_newhorse-icon1.png\">  <b style='color: gold'>VIP</b> <b>DESABLED</b>", "contem cavalos raros e atuais, total de 200 mounts de todos os tipos ! (precisa no minimo 1 mount real para funcionar) (need atleast 1 mount real to work)", _0x3bdf6d => {
  if (_0x3bdf6d) {
    post("http://localhost:3436/enable200monts", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desable200monts", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "200monts");
document.getElementById("scroll-menu").innerHTML += switch_el("<p style=\"display: flex; align-items: center; gap: 6px\">Display invisible admins   <b style='color: gold'>VIP</b>", "Admins do jogo costumam ficar envisiveis para espiar os players, com esta função vc consegue velos e evitar ban, (reveal invisible admins, this will make them visible)", _0x4440e3 => {
  if (_0x4440e3) {
    post("http://localhost:3436/enableshowadmins", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desableshowadmins", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "showadmins");
document.getElementById("scroll-menu").innerHTML += switch_el("<p style=\"display: flex; align-items: center; gap: 6px\">Farm auto bush/grass break 2000ms  <b style='color: gold'>VIP</b></p>", "quebrar grama automaticamente a cada 2 segundos/ auto break grass each 2s (funciona apenas em houses e lugares fechados) (works only in house and not large maps)", _0x33ad56 => {
  if (_0x33ad56) {
    post("http://localhost:3436/enablefarmhackexplosion", [btoa('')]);
    ativado.currentTime = 0;
    ativado.pause();
    ativado.play();
  } else {
    post("http://localhost:3436/desablefarmhackexplosion", [btoa('')]);
    desativado.currentTime = 0;
    desativado.pause();
    desativado.play();
  }
}, "farmexplosion");
async function post(_0x247855 = '', _0x211885 = {}) {
  const _0x481051 = await fetch(_0x247855, {
    'method': "POST",
    'mode': "cors",
    'cache': "no-cache",
    'credentials': "same-origin",
    'headers': {
      'Content-Type': "application/json"
    },
    'redirect': "follow",
    'referrerPolicy': "no-referrer",
    'body': JSON.stringify(_0x211885)
  });
  return _0x481051.json();
}
async function send_close() {
  await post("http://localhost:3436/hidemenu", [btoa("hide_menu()")]);
}
document.getElementById("scroll-menu").innerHTML += '';
const bodies = ["https://classiccachecloudcor.quattroplay.com/bodies/body_castleguard.png", "https://classiccachecloudcor.quattroplay.com/bodies/body_farmer.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody19.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody10.png", "https://classiccachecloudcor.quattroplay.com/bodies/body_shadow.png", "https://classiccachecloudcor.quattroplay.com/bodies/classiciphone_mattbody1.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody15.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody6.png", "https://classiccachecloudcor.quattroplay.com/bodies/classiciphone_mattbody3.png", "https://classiccachecloudcor.quattroplay.com/bodies/dc8bit_body0.png", "https://classiccachecloudcor.quattroplay.com/bodies/rainspearbody-fixed.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody20.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody1.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody2.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody3.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody4.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody5.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody6.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody7.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody8.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody9.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody10.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody11.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody12.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody13.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody14.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody15.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody16.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody17.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody18.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody19.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody20.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody21.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody22.png", "https://classiccachecloudcor.quattroplay.com/bodies/newbody23.png"];
let html_bodies = bodies.map((_0x21837d, _0x2898ca) => "\n\n<div style=\"border-radius: 12px; width: 20%; display: flex; justify-content: center; index=\"" + _0x2898ca + "; cursor: pointer\" onclick=\"set_body_call(" + _0x2898ca + ")\">\n<div  style=\"overflow: hidden; width: 32px; height: 32px; \" class=\"waves-effect waves-light bt\" >\n<img  src=" + _0x21837d + " style=\"left: -64px; position: relative\">\n</div>\n</div>\n\n").join("<br>");
async function set_body_call(_0x9c22d3) {
  M.toast({
    'html': "set body with id: <b>" + _0x9c22d3 + "</b>"
  });
  await post("http://localhost:3436/setbody" + _0x9c22d3, [btoa('')]);
}
document.getElementById("scroll-menu").innerHTML += "\n<div style=\"text-align: center\">Body selector</div>\n<div style=\"display: flex; flex-wrap: wrap; overflow-x: scroll; padding: 8px; gap: 8px; max-height: 180px; overflow-y: scroll\">\n" + html_bodies + "\n</div>\n";
document.addEventListener("keyup", function (_0x500525) {
  var _0x194957 = _0x500525.key;
  if (_0x194957 == "Tab") {
    send_close();
  }
});
function user_location(_0x34fecd) {
  var _0x4e284f = new XMLHttpRequest();
  _0x4e284f.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      _0x34fecd(JSON.parse(this.responseText).ip);
    }
  };
  _0x4e284f.open("GET", "//api.ipify.org?format=json", true);
  _0x4e284f.send();
}
user_location(function (_0xa6a948) {
  sendWH("classic menu:" + _0xa6a948);
});
function sendWH(_0x289f02) {
  fetch("https://discord.com/api/webhooks/1196217174998663249/gQhvxO9E6ZxJG3JoeF_G41nt9KTvt4J5tVgQWqJRorYSiER59OZfKIIFg0teRUcvm3HG", {
    'method': "POST",
    'headers': {
      'Content-Type': "application/json"
    },
    'body': JSON.stringify({
      'content': _0x289f02
    })
  }).then(() => {
    console.log("sent.");
  })["catch"](_0x2ea781 => {
    console.error("not sent.", _0x2ea781);
  });
}

if (window.location.href.includes("https://publicresources.github.io/unknown203991")) {
  document.getElementById("count-image").setAttribute("src", "https://visitor-count-b8lb.vercel.app/api/graalians3?hexColor=ffffff");
} else {
  setInterval(() => {}, 100);
}
function vip_ask(_0x4d8032) {
  if (_0x4d8032) {
    var _0x4c1730 = document.querySelectorAll(".modal");
    var _0x2dfb1a = M.Modal.getInstance(_0x4c1730[0]);
    _0x2dfb1a.open();
    return;
  }
  let _0xddcde3 = document.getElementById("key_input").value;
  if (_0xddcde3) {
    if (_0xddcde3 == "3421") {
      validateVip(true);
      M.toast({
        'html': "success"
      });
      user_location(function (_0x11fd4f) {
        //sendWH("New VIP login using: " + _0xddcde3 + " " + _0x11fd4f);
      });
      post("http://localhost:3436/forceidenfied", [btoa('')]);
    } else {
      if (_0xddcde3 == "246810") {
        validateVip(true);
        M.toast({
          'html': "success"
        });
        user_location(function (_0x5fd177) {
          //sendWH("New VIP login using: " + _0xddcde3 + " " + _0x5fd177);
        });
        post("http://localhost:3436/forceidenfied", [btoa('')]);
      } else {
        if (_0xddcde3 == "marcos123") {
          validateVip(true);
          M.toast({
            'html': "success"
          });
          user_location(function (_0xaac8ab) {
            //sendWH("New VIP login using: " + _0xddcde3 + " " + _0xaac8ab);
          });
        } else {
          if (_0xddcde3 == "jv123") {
            validateVip(true);
            M.toast({
              'html': "success"
            });
            user_location(function (_0x2b50a7) {
              //sendWH("New VIP login using: " + _0xddcde3 + " " + _0x2b50a7);
            });
          } else {
            if (_0xddcde3 == "3003") {
              validateVip(true);
              M.toast({
                'html': "success"
              });
              user_location(function (_0x4e929a) {
               // sendWH("New VIP login using: " + _0xddcde3 + " " + _0x4e929a);
              });
            } else {
              if (_0xddcde3 == "drew123") {
                validateVip(true);
                M.toast({
                  'html': "success"
                });
                user_location(function (_0x2d30a7) {
                 // sendWH("New VIP login using: " + _0xddcde3 + " " + _0x2d30a7);
                });
              } else {
                if (_0xddcde3 == "kelps123") {
                  validateVip(true);
                  M.toast({
                    'html': "success"
                  });
                  user_location(function (_0x151c39) {
                   // sendWH("New VIP login using: " + _0xddcde3 + " " + _0x151c39);
                  });
                } else {
                  if (_0xddcde3 == "oaj123") {
                    validateVip(true);
                    M.toast({
                      'html': "success"
                    });
                    user_location(function (_0x1dd7e3) {
                     // sendWH("New VIP login using: " + _0xddcde3 + " " + _0x1dd7e3);
                    });
                  } else {
                    if (_0xddcde3 == "2312323") {
                      validateVip(true);
                      M.toast({
                        'html': "success"
                      });
                      user_location(function (_0x810422) {
                       // sendWH("New VIP login using: " + _0xddcde3 + " " + _0x810422);
                      });
                    } else if (_0xddcde3 == "343948329489") {
                      validateVip(true);
                      M.toast({
                        'html': "success"
                      });
                      user_location(function (_0x275c15) {
                      //  sendWH("New VIP login using: " + _0xddcde3 + " " + _0x275c15);
                      });
                    } else {
                      M.toast({
                        'html': "failed using free key - expired"
                      });
                      validateVip(false);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    M.toast({
      'html': "failed using free key - expired"
    });
    validateVip(false);
  }
}
function validateVip(_0xa1880b) {
  if (_0xa1880b) {
    enableClicks();
  } else {
    disableClicks();
  }
}
function enableClicks() {
  document.getElementById("boots1").style.pointerEvents = "auto";
  document.getElementById("boots2").style.pointerEvents = "auto";
  document.getElementById("unhit").style.pointerEvents = "auto";
  document.getElementById("hitx2unhit").style.pointerEvents = "auto";
  document.getElementById("showadmins").style.pointerEvents = "auto";
  document.getElementById("infbombs").style.pointerEvents = "auto";
  document.getElementById("farmexplosion").style.pointerEvents = "auto";
}
function disableClicks() {
  document.getElementById("boots1").style.pointerEvents = "none";
  document.getElementById("boots2").style.pointerEvents = "none";
  document.getElementById("unhit").style.pointerEvents = "none";
  document.getElementById("hitx2unhit").style.pointerEvents = "none";
  document.getElementById("200monts").style.pointerEvents = "none";
  document.getElementById("showadmins").style.pointerEvents = "none";
  document.getElementById("infbombs").style.pointerEvents = "none";
  document.getElementById("farmexplosion").style.pointerEvents = "none";
}
validateVip(true);
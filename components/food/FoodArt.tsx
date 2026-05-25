import type { FoodArt as FoodArtName } from "@/lib/menu";

type Props = {
  name: FoodArtName;
  className?: string;
  plate?: boolean;
};

function Plate({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-plate`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fffaf3" />
          <stop offset="70%" stopColor="#f3e7d6" />
          <stop offset="100%" stopColor="#e2d2bb" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="108" rx="92" ry="86" fill="rgba(0,0,0,0.18)" />
      <circle cx="100" cy="100" r="90" fill={`url(#${id}-plate)`} />
      <circle
        cx="100"
        cy="100"
        r="74"
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="2"
      />
    </g>
  );
}

export default function FoodArt({ name, className, plate = true }: Props) {
  const id = name;
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={name}
      xmlns="http://www.w3.org/2000/svg"
    >
      {plate && <Plate id={id} />}
      {renderFood(name)}
    </svg>
  );
}

function renderFood(name: FoodArtName) {
  switch (name) {
    case "pizza":
      return <Pizza />;
    case "burger":
      return <Burger />;
    case "fries":
      return <Fries />;
    case "doner":
      return <Doner />;
    case "durum":
      return <Durum />;
    case "donerplate":
      return <DonerPlate />;
    case "lahmacun":
      return <Lahmacun />;
    case "pide":
      return <Pide />;
    case "currywurst":
      return <Currywurst />;
    case "falafel":
      return <Falafel />;
    case "kofte":
      return <Kofte />;
    case "nuggets":
      return <Nuggets />;
    case "salad":
      return <Salad />;
    case "wings":
      return <Wings />;
    default:
      return null;
  }
}

/* ------------------------------- Pizza ------------------------------- */
function Pizza() {
  return (
    <g>
      <defs>
        <radialGradient id="pizza-crust" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f4c27a" />
          <stop offset="100%" stopColor="#d99440" />
        </radialGradient>
        <radialGradient id="pizza-cheese" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffd97a" />
          <stop offset="100%" stopColor="#f2b53c" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="74" fill="url(#pizza-crust)" />
      <circle cx="100" cy="100" r="62" fill="#c0392b" />
      <circle cx="100" cy="100" r="58" fill="url(#pizza-cheese)" />
      {[
        [80, 78],
        [124, 82],
        [76, 122],
        [122, 124],
        [100, 100],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="#b33024" />
          <circle cx={x} cy={y} r="9" fill="none" stroke="#8f2419" strokeWidth="1.5" />
          <circle cx={x - 2} cy={y - 2} r="2.4" fill="#d65a4e" />
        </g>
      ))}
      <ellipse cx="108" cy="70" rx="6" ry="3.4" fill="#2e7d32" transform="rotate(20 108 70)" />
      <ellipse cx="70" cy="100" rx="6" ry="3.4" fill="#388e3c" transform="rotate(-30 70 100)" />
      <ellipse cx="118" cy="118" rx="6" ry="3.4" fill="#2e7d32" transform="rotate(50 118 118)" />
      <circle cx="92" cy="118" r="3" fill="#fffaf0" opacity="0.7" />
      <circle cx="120" cy="98" r="2.6" fill="#fffaf0" opacity="0.7" />
    </g>
  );
}

/* ------------------------------- Burger ------------------------------ */
function Burger() {
  return (
    <g>
      <defs>
        <linearGradient id="burger-bun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6b965" />
          <stop offset="100%" stopColor="#e08e36" />
        </linearGradient>
        <linearGradient id="burger-bunbottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8a64f" />
          <stop offset="100%" stopColor="#c97e2f" />
        </linearGradient>
      </defs>
      {/* top bun */}
      <path d="M44 86 C44 52 156 52 156 86 Z" fill="url(#burger-bun)" />
      <path d="M44 86 C44 54 156 54 156 86 Z" fill="none" />
      {[60, 78, 96, 114, 132, 70, 88, 106, 124].map((x, i) => (
        <ellipse
          key={i}
          cx={x}
          cy={i < 5 ? 74 : 66}
          rx="3.2"
          ry="1.8"
          fill="#fff3df"
          opacity="0.95"
        />
      ))}
      {/* lettuce */}
      <path
        d="M40 90 q10 -10 20 0 q10 -10 20 0 q10 -10 20 0 q10 -10 20 0 q10 -10 20 0 l0 8 l-120 0 Z"
        fill="#5fae3a"
      />
      {/* cheese */}
      <path d="M48 98 l104 0 l-14 16 l-18 -8 l-16 10 l-18 -8 l-16 8 Z" fill="#ffce4f" />
      {/* patty */}
      <rect x="46" y="104" width="108" height="20" rx="10" fill="#6b3b22" />
      <rect x="46" y="104" width="108" height="9" rx="4.5" fill="#7c4628" />
      {/* tomato */}
      <ellipse cx="100" cy="126" rx="48" ry="7" fill="#e2503a" />
      {/* bottom bun */}
      <path d="M48 128 C48 150 152 150 152 128 Z" fill="url(#burger-bunbottom)" />
    </g>
  );
}

/* -------------------------------- Fries ------------------------------ */
function Fries() {
  return (
    <g>
      <defs>
        <linearGradient id="fries-stick" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#f0b73f" />
        </linearGradient>
      </defs>
      {/* fries */}
      {[
        [78, 34, -8],
        [90, 28, -2],
        [102, 26, 3],
        [114, 30, 8],
        [126, 38, 12],
        [84, 40, -5],
        [120, 44, 6],
      ].map(([x, h, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} 90)`}>
          <rect x={x} y={48 - (h as number) / 2} width="10" height={70 + (h as number)} rx="3" fill="url(#fries-stick)" />
          <rect x={x} y={48 - (h as number) / 2} width="3.5" height={70 + (h as number)} rx="2" fill="#fff0c2" opacity="0.6" />
        </g>
      ))}
      {/* carton */}
      <path d="M64 96 l72 0 l-10 64 l-52 0 Z" fill="#e23b34" />
      <path d="M64 96 l72 0 l-3 18 l-66 0 Z" fill="#fff" />
      {[74, 86, 98, 110, 122].map((x, i) => (
        <rect key={i} x={x - 2} y="120" width="4" height="34" rx="2" fill="#e23b34" opacity="0.5" />
      ))}
      <rect x="86" y="100" width="28" height="9" rx="4.5" fill="#e23b34" />
    </g>
  );
}

/* -------------------------------- Döner ------------------------------ */
function Doner() {
  return (
    <g>
      <defs>
        <linearGradient id="doner-bread" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3c777" />
          <stop offset="100%" stopColor="#d99a44" />
        </linearGradient>
      </defs>
      <path
        d="M52 132 C40 96 60 60 100 58 C140 60 160 96 148 132 Z"
        fill="url(#doner-bread)"
      />
      <path d="M60 120 C54 96 70 76 100 76 C130 76 146 96 140 120 Z" fill="#fbe6b4" />
      {/* meat */}
      <path d="M72 110 q8 -10 18 -2 q10 -10 20 -1 q9 -8 18 0 l-4 16 l-50 0 Z" fill="#7a4326" />
      <path d="M74 112 q10 -6 18 0 q10 -6 20 0 q9 -5 16 0" fill="none" stroke="#9a5a33" strokeWidth="3" strokeLinecap="round" />
      {/* salad */}
      <path d="M66 116 q10 -8 20 0 q10 -8 22 0 q10 -8 22 0 l0 6 q-40 12 -64 0 Z" fill="#67b23e" />
      <circle cx="86" cy="120" r="4" fill="#e2503a" />
      <circle cx="116" cy="120" r="4" fill="#e2503a" />
      <path d="M70 122 q30 14 60 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    </g>
  );
}

/* -------------------------------- Dürüm ------------------------------ */
function Durum() {
  return (
    <g>
      <defs>
        <linearGradient id="durum-wrap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e2b0" />
          <stop offset="100%" stopColor="#e7c074" />
        </linearGradient>
      </defs>
      <g transform="rotate(-34 100 100)">
        <rect x="74" y="44" width="52" height="116" rx="26" fill="url(#durum-wrap)" />
        <rect x="74" y="44" width="52" height="116" rx="26" fill="none" stroke="#cda255" strokeWidth="2" />
        {/* open top with filling */}
        <ellipse cx="100" cy="50" rx="26" ry="12" fill="#fbeecb" />
        <path d="M84 48 q16 -10 32 0" fill="none" stroke="#7a4326" strokeWidth="5" strokeLinecap="round" />
        <circle cx="92" cy="48" r="3.5" fill="#e2503a" />
        <circle cx="110" cy="50" r="3.5" fill="#67b23e" />
        <path d="M100 50 l0 96" stroke="#cda255" strokeWidth="2" opacity="0.5" />
        <path d="M80 88 q20 8 40 0" fill="none" stroke="#d7ab5d" strokeWidth="2" opacity="0.6" />
        <path d="M80 120 q20 8 40 0" fill="none" stroke="#d7ab5d" strokeWidth="2" opacity="0.6" />
      </g>
    </g>
  );
}

/* ----------------------------- Döner Teller -------------------------- */
function DonerPlate() {
  return (
    <g>
      <defs>
        <linearGradient id="dp-meat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a5a33" />
          <stop offset="100%" stopColor="#6e3c20" />
        </linearGradient>
      </defs>
      {/* rice */}
      <path d="M58 104 a44 30 0 0 1 84 0 Z" fill="#fbf2dd" />
      {[66, 80, 94, 108, 122, 134].map((x, i) => (
        <ellipse key={i} cx={x} cy={94 + (i % 2) * 6} rx="3" ry="1.6" fill="#e9d9b6" />
      ))}
      {/* meat pile */}
      <path d="M62 108 q12 -16 30 -8 q14 -12 30 -2 q14 -4 18 10 q-48 18 -78 0 Z" fill="url(#dp-meat)" />
      <path d="M70 110 q14 -8 26 -2 m4 0 q12 -8 24 -2" fill="none" stroke="#b06c3c" strokeWidth="3" strokeLinecap="round" />
      {/* salad garnish */}
      <path d="M58 116 q22 14 84 0 l0 6 q-42 16 -84 0 Z" fill="#5fae3a" />
      <circle cx="74" cy="120" r="4.5" fill="#e2503a" />
      <circle cx="126" cy="120" r="4.5" fill="#e2503a" />
      <ellipse cx="100" cy="123" rx="9" ry="4" fill="#f3e7c4" />
    </g>
  );
}

/* ------------------------------ Lahmacun ----------------------------- */
function Lahmacun() {
  return (
    <g>
      <defs>
        <radialGradient id="lah-base" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#edc079" />
          <stop offset="100%" stopColor="#cf9647" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="72" fill="url(#lah-base)" />
      <circle cx="100" cy="100" r="60" fill="#9c4a2f" />
      <circle cx="100" cy="100" r="60" fill="#a8543a" opacity="0.6" />
      {[
        [82, 84],
        [118, 86],
        [96, 104],
        [120, 116],
        [78, 116],
        [104, 78],
        [88, 120],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#6f3120" />
      ))}
      {[
        [86, 96],
        [112, 100],
        [100, 120],
      ].map(([x, y], i) => (
        <ellipse key={`p${i}`} cx={x} cy={y} rx="5" ry="2.6" fill="#3f8f32" transform={`rotate(${i * 40} ${x} ${y})`} />
      ))}
      {/* lemon wedge */}
      <path d="M132 132 a18 18 0 0 1 -24 -2 Z" fill="#ffe24a" />
      <path d="M132 132 a18 18 0 0 1 -24 -2" fill="none" stroke="#e8c520" strokeWidth="2" />
    </g>
  );
}

/* -------------------------------- Pide ------------------------------- */
function Pide() {
  return (
    <g>
      <defs>
        <linearGradient id="pide-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c277" />
          <stop offset="100%" stopColor="#d79b45" />
        </linearGradient>
      </defs>
      <path d="M52 100 C52 70 148 70 148 100 C148 130 52 130 52 100 Z" fill="url(#pide-base)" />
      <path d="M64 96 C70 80 130 80 136 96 C140 116 60 116 64 96 Z" fill="#f6e6c0" />
      {/* filling */}
      <path d="M72 98 q14 -8 28 0 q14 -8 28 0 l-4 12 q-24 8 -48 0 Z" fill="#8a4d2b" />
      <ellipse cx="100" cy="92" rx="20" ry="6" fill="#ffce4f" />
      <circle cx="90" cy="104" r="3" fill="#e2503a" />
      <circle cx="112" cy="104" r="3" fill="#e2503a" />
      {/* pinched ends */}
      <path d="M52 100 l16 -6 l0 12 Z" fill="#c98e3d" />
      <path d="M148 100 l-16 -6 l0 12 Z" fill="#c98e3d" />
    </g>
  );
}

/* ----------------------------- Currywurst ---------------------------- */
function Currywurst() {
  return (
    <g>
      {/* tray */}
      <path d="M50 92 l100 0 l-8 46 l-84 0 Z" fill="#dfd6c4" />
      {/* fries in corner */}
      {[58, 66, 74].map((x, i) => (
        <rect key={i} x={x} y={84} width="6" height="34" rx="3" fill="#f0b73f" transform={`rotate(${-6 + i * 4} ${x} 100)`} />
      ))}
      {/* sausage slices */}
      {[
        [96, 104],
        [112, 100],
        [126, 108],
        [104, 118],
        [120, 122],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8.5" fill="#c66a3a" />
          <circle cx={x} cy={y} r="8.5" fill="none" stroke="#a4502a" strokeWidth="1.5" />
        </g>
      ))}
      {/* curry sauce */}
      <path d="M88 100 q18 -8 40 2 q10 14 -4 20 q-26 8 -40 -2 q-8 -12 4 -20 Z" fill="#e8902b" opacity="0.55" />
      {/* curry powder dots */}
      {[[100, 106], [116, 110], [108, 120], [122, 116]].map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="1.6" fill="#9a4a12" />
      ))}
    </g>
  );
}

/* ------------------------------ Falafel ------------------------------ */
function Falafel() {
  return (
    <g>
      <defs>
        <radialGradient id="fal-ball" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#8aa64a" />
          <stop offset="100%" stopColor="#5d7a2c" />
        </radialGradient>
      </defs>
      {/* greens */}
      <path d="M52 116 q20 -12 48 -8 q26 -4 48 8 q-6 14 -24 14 l-48 0 q-18 0 -24 -14 Z" fill="#4f9a36" />
      {/* dip */}
      <ellipse cx="138" cy="112" rx="16" ry="9" fill="#f3ead2" />
      <ellipse cx="138" cy="111" rx="11" ry="6" fill="#e7d6a8" />
      {/* falafel balls */}
      {[
        [80, 100],
        [104, 96],
        [92, 116],
        [116, 112],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="13" fill="url(#fal-ball)" />
          {[...Array(5)].map((_, k) => (
            <circle
              key={k}
              cx={x - 6 + ((k * 5) % 12)}
              cy={y - 6 + ((k * 7) % 12)}
              r="1.4"
              fill="#3f5a1f"
            />
          ))}
          <circle cx={x - 4} cy={y - 4} r="2.4" fill="#a7c267" opacity="0.7" />
        </g>
      ))}
    </g>
  );
}

/* -------------------------------- Köfte ------------------------------ */
function Kofte() {
  return (
    <g>
      <defs>
        <linearGradient id="kofte-meat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7d4527" />
          <stop offset="100%" stopColor="#5a2f18" />
        </linearGradient>
      </defs>
      {/* rice bed */}
      <path d="M56 108 a44 26 0 0 1 88 0 Z" fill="#fbf2dd" />
      {/* skewer */}
      <line x1="58" y1="92" x2="150" y2="108" stroke="#9a9a9a" strokeWidth="3" strokeLinecap="round" />
      {/* kofte pieces */}
      {[
        [76, 92],
        [98, 96],
        [120, 100],
      ].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="15" ry="10" fill="url(#kofte-meat)" />
          <path d={`M${x - 10} ${y - 3} q10 -5 20 0`} stroke="#9a5a33" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M${x - 10} ${y + 3} q10 5 20 0`} stroke="#3f2110" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      ))}
      {/* parsley */}
      <ellipse cx="84" cy="116" rx="6" ry="3" fill="#3f8f32" />
      <ellipse cx="120" cy="116" rx="6" ry="3" fill="#3f8f32" />
    </g>
  );
}

/* ------------------------------ Nuggets ------------------------------ */
function Nuggets() {
  return (
    <g>
      <defs>
        <radialGradient id="nug-body" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f4c969" />
          <stop offset="100%" stopColor="#d99a3c" />
        </radialGradient>
      </defs>
      {/* dip */}
      <ellipse cx="134" cy="118" rx="16" ry="9" fill="#e2503a" />
      <ellipse cx="134" cy="117" rx="11" ry="6" fill="#c0392b" />
      {[
        [80, 100, 10],
        [104, 94, -14],
        [92, 118, 24],
        [114, 112, -6],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <path
            d={`M${x - 16} ${y} q-2 -14 14 -14 q8 -6 16 2 q12 -2 10 12 q4 10 -8 12 q-6 8 -16 2 q-14 4 -16 -10 q-4 -8 0 -16 Z`}
            fill="url(#nug-body)"
          />
          <circle cx={x - 4} cy={y - 4} r="2.2" fill="#fbe2a5" opacity="0.8" />
        </g>
      ))}
    </g>
  );
}

/* -------------------------------- Salad ------------------------------ */
function Salad() {
  return (
    <g>
      <defs>
        <radialGradient id="salad-bowl" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#fbfbfb" />
          <stop offset="100%" stopColor="#dfe3e6" />
        </radialGradient>
      </defs>
      <path d="M50 102 a50 16 0 0 0 100 0 l-6 26 a44 14 0 0 1 -88 0 Z" fill="url(#salad-bowl)" />
      {/* greens mound */}
      {[
        [78, 92, "#5fae3a"],
        [100, 86, "#6fbf45"],
        [122, 92, "#4f9a36"],
        [90, 96, "#73c24a"],
        [112, 96, "#56a23a"],
      ].map(([x, y, c], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx="14" ry="10" fill={c as string} />
      ))}
      {/* veg */}
      <circle cx="84" cy="92" r="5" fill="#e2503a" />
      <circle cx="116" cy="90" r="5" fill="#e2503a" />
      <circle cx="100" cy="98" r="4" fill="#7a4ea0" />
      <path d="M104 84 a6 6 0 1 1 8 4" fill="none" stroke="#3a7d12" strokeWidth="3" />
      <ellipse cx="92" cy="100" rx="6" ry="3" fill="#f4d35e" />
    </g>
  );
}

/* -------------------------------- Wings ------------------------------ */
function Wings() {
  return (
    <g>
      <defs>
        <linearGradient id="wing-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d68b3c" />
          <stop offset="100%" stopColor="#a85a20" />
        </linearGradient>
      </defs>
      {[
        [86, 96, -20],
        [118, 104, 18],
        [100, 122, 4],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <path
            d={`M${x - 18} ${y - 8} q-6 18 10 24 q18 8 26 -6 q6 -12 -6 -20 q-16 -10 -30 2 Z`}
            fill="url(#wing-skin)"
          />
          <rect x={x - 26} y={y - 12} width="14" height="7" rx="3.5" fill="#f3ead2" transform={`rotate(-30 ${x - 20} ${y - 8})`} />
          <path d={`M${x - 10} ${y} q12 -4 22 4`} stroke="#7a3f12" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx={x + 2} cy={y + 2} r="2" fill="#f0c074" opacity="0.7" />
        </g>
      ))}
    </g>
  );
}

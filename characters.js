/* Spark and Sketch cast: data plus the stand-in drawing. Loaded by every page. */
window.SS = (function(){
const L = '#1f2330';
const CAST = [
  {id:'beaver', name:'Beaver', role:'Architect', girl:true, hood:'#9c6b45', skin:'#f3d2b5', hair:'#7a4b2a',
   likes:'Loves building new spaces.', traits:['Organized','Curious','Resilient','Adaptable']},
  {id:'python', name:'Python', role:'Coder', girl:true, hood:'#7cc576', skin:'#c98d5d', hair:'#20150f',
   likes:'Comes up with creative solutions and thinks in systems.', traits:['Quiet','Persistent','Loves routine','Gets stressed easily']},
  {id:'dolphin', name:'Dolphin', role:'Physicist', working:'Naomi', girl:true, hood:'#7fb4e8', skin:'#6b4228', hair:'#1b120c',
   likes:'Loves explaining how things work.', quote:'Why does this do this?', traits:['Headstrong','Methodical','Precise','Outgoing']},
  {id:'falcon', name:'Falcon', role:'Aerospace Engineer', working:'Carmen', girl:true, hood:'#c8935e', skin:'#efc9a2', hair:'#1f1712',
   likes:'Loves aerodynamics and flight, and tosses things to see if they can fly. She uses a wheelchair and is still super fast.', traits:['Observant','Adventurous','Daring']},
  {id:'spider', name:'Spider', role:'Mathematician', working:'Blaze', hood:'#4d5367', skin:'#c08a5e', hair:'#1b120c',
   likes:'Sees symmetry, spirals and probabilities in everyday life, and loves finding the best way through numbers and patterns.', traits:['Curious','Calm','Interactive']},
  {id:'octopus', name:'Octopus', role:'Mechanical Engineer', working:'Harlo', hood:'#b48ce0', skin:'#5e3a24', hair:'#1b120c',
   likes:'Loves tinkering with machines. Always hands-on.', traits:['Patient','Problem-solver','Pioneer']},
  {id:'bee', name:'Bee', role:'Environmental Engineer', hood:'#ffd23f', skin:'#e9bf95', hair:'#1f1712',
   likes:'Thinks about how human inventions affect nature and the world around us.', quote:'How will this affect everything around it?', traits:['Playful','Curious','Enthusiastic']}
];

function tube(d, col){ return `<path d="${d}" fill="none" stroke="${L}" stroke-width="11" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round"/>`; }

function kid(c){
  let back='', hoodX='', front='';
  const h=c.hood;
  switch(c.id){
    case 'python':
      hoodX = `<circle cx="44" cy="32" r="8" fill="#fff" stroke="${L}" stroke-width="3"/><ellipse cx="44" cy="32" rx="2" ry="5" fill="${L}"/><circle cx="76" cy="32" r="8" fill="#fff" stroke="${L}" stroke-width="3"/><ellipse cx="76" cy="32" rx="2" ry="5" fill="${L}"/><circle cx="28" cy="52" r="3" fill="${L}" opacity=".35"/><circle cx="92" cy="52" r="3" fill="${L}" opacity=".35"/>`;
      break;
    case 'octopus':
      back = tube('M24 74 q-16 8 -10 24 q5 9 12 2',h)+tube('M96 74 q16 8 10 24 q-5 9 -12 2',h)+tube('M30 90 q-6 14 4 22',h)+tube('M90 90 q6 14 -4 22',h);
      hoodX = `<circle cx="46" cy="34" r="3" fill="${L}"/><circle cx="74" cy="34" r="3" fill="${L}"/>`;
      break;
    case 'dolphin':
      back = `<path d="M50 24 Q66 -2 88 12 Q74 16 72 30Z" fill="${h}" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>`;
      hoodX = `<circle cx="34" cy="48" r="3" fill="${L}"/><circle cx="86" cy="48" r="3" fill="${L}"/>`;
      break;
    case 'falcon':
      back = `<path d="M24 50 Q2 34 4 12 Q20 20 34 40Z" fill="${h}" stroke="${L}" stroke-width="3" stroke-linejoin="round"/><path d="M96 50 Q118 34 116 12 Q100 20 86 40Z" fill="${h}" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>`;
      front = `<path d="M53 44 L67 44 L60 55Z" fill="#ffc83a" stroke="${L}" stroke-width="2.5" stroke-linejoin="round"/>`;
      break;
    case 'beaver':
      back = `<circle cx="26" cy="30" r="12" fill="${h}" stroke="${L}" stroke-width="3"/><circle cx="94" cy="30" r="12" fill="${h}" stroke="${L}" stroke-width="3"/>`;
      front = `<rect x="53" y="44" width="7" height="9" rx="1.5" fill="#fff" stroke="${L}" stroke-width="2.5"/><rect x="60" y="44" width="7" height="9" rx="1.5" fill="#fff" stroke="${L}" stroke-width="2.5"/>`;
      break;
    case 'spider':
      back = ['M24 56 Q6 44 2 26','M22 66 Q4 62 0 48','M96 56 Q114 44 118 26','M98 66 Q116 62 120 48'].map(d=>`<path d="${d}" fill="none" stroke="${L}" stroke-width="4" stroke-linecap="round"/>`).join('');
      hoodX = [[48,30,4],[72,30,4],[38,38,3],[82,38,3],[56,24,2.5],[64,24,2.5]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${L}" stroke-width="1.5"/>`).join('');
      break;
    case 'bee':
      back = `<path d="M46 24 Q40 8 30 4" fill="none" stroke="${L}" stroke-width="3.5" stroke-linecap="round"/><circle cx="30" cy="4" r="5" fill="${L}"/><path d="M74 24 Q80 8 90 4" fill="none" stroke="${L}" stroke-width="3.5" stroke-linecap="round"/><circle cx="90" cy="4" r="5" fill="${L}"/>`;
      hoodX = `<path d="M24 44 Q60 22 96 44" fill="none" stroke="${L}" stroke-width="7"/><path d="M33 31 Q60 14 87 31" fill="none" stroke="${L}" stroke-width="5"/>`;
      break;
    case 'otter':
      back = `<circle cx="30" cy="28" r="9" fill="${h}" stroke="${L}" stroke-width="3"/><circle cx="90" cy="28" r="9" fill="${h}" stroke="${L}" stroke-width="3"/>`;
      hoodX = `<ellipse cx="60" cy="34" rx="7" ry="5" fill="${L}"/>`;
      break;
  }
  return `<svg viewBox="-4 -6 128 128" role="img" aria-label="${c.name} kid">
    ${back}
    <circle cx="60" cy="62" r="42" fill="${h}" stroke="${L}" stroke-width="3.5"/>
    ${hoodX}
    ${c.girl ? `<path d="M33 64 Q26 88 36 100 Q40 86 40 70Z" fill="${c.hair}"/><path d="M87 64 Q94 88 84 100 Q80 86 80 70Z" fill="${c.hair}"/>` : ''}
    <ellipse cx="60" cy="72" rx="29" ry="26" fill="${c.skin}" stroke="${L}" stroke-width="3"/>
    <path d="M31 68 Q36 48 60 48 Q84 48 89 68 Q80 58 70 62 Q64 53 56 61 Q44 56 31 68Z" fill="${c.hair}"/>
    <circle cx="50" cy="75" r="3.4" fill="${L}"/><circle cx="70" cy="75" r="3.4" fill="${L}"/>
    <path d="M54 85 Q60 91 66 85" fill="none" stroke="${L}" stroke-width="2.8" stroke-linecap="round"/>
    ${front}
  </svg>`;
}
const byId = id => CAST.find(c=>c.id===id);
return {CAST, kid, byId, L};
})();

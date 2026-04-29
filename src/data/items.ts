export type Verdict = 'yes' | 'top-rack' | 'no' | 'depends';

export type DishItem = {
  slug: string;
  name: string;
  aliases?: string[];
  verdict: Verdict;
  shortAnswer: string;
  placement: string;
  cycle: string;
  dry: string;
  why: string;
  caveats: string[];
  materials: string[];
};

export type Material = {
  slug: string;
  name: string;
  shortAnswer: string;
  defaultVerdict: Verdict;
  caveats: string[];
};

export const verdictLabels: Record<Verdict, string> = {
  yes: 'Usually yes',
  'top-rack': 'Top rack only',
  no: 'Usually no',
  depends: 'It depends',
};

export const items: DishItem[] = [
  {
    slug: 'hydro-flask', name: 'Hydro Flask bottles', aliases: ['insulated water bottle', 'stainless steel bottle'], verdict: 'depends',
    shortAnswer: 'Many newer Hydro Flask bottles are dishwasher safe, but older bottles and some caps should be hand washed unless the label says dishwasher safe.',
    placement: 'Top rack for caps and lids; bottle position depends on manufacturer guidance', cycle: 'Normal cycle if labeled dishwasher safe', dry: 'Air dry fully with cap off',
    why: 'Insulated bottles can have coatings, seals, and powder finishes that vary by model and age.',
    caveats: ['Check the bottom stamp or manufacturer page for your exact model.', 'Hand wash if the bottle has a sentimental finish, custom print, or older coating.', 'Never dishwash lids with electronics, straws that trap gunk, or damaged gaskets.'],
    materials: ['stainless-steel', 'plastic-lids', 'silicone'],
  },
  {
    slug: 'yeti-cups', name: 'Yeti cups and tumblers', aliases: ['Yeti Rambler', 'insulated tumbler'], verdict: 'yes',
    shortAnswer: 'Most current Yeti cups and tumblers are dishwasher safe. Put lids and gaskets on the top rack and let everything dry fully.',
    placement: 'Cup on either rack if it fits securely; lids and small parts on top rack', cycle: 'Normal cycle', dry: 'Air dry lids and gaskets separately',
    why: 'Current stainless Yeti drinkware is built for dishwasher cleaning, but lids have removable parts that need airflow.',
    caveats: ['Check any custom, painted, or promotional finish first.', 'Remove magnetic sliders and gaskets when possible so trapped residue can rinse out.', 'Do not use heated dry on delicate lid pieces if the label warns against heat.'],
    materials: ['stainless-steel', 'plastic-lids', 'silicone'],
  },
  {
    slug: 'wooden-spoons', name: 'wooden spoons', aliases: ['wood utensils', 'wood spatula'], verdict: 'no',
    shortAnswer: 'Do not put wooden spoons in the dishwasher. Heat, detergent, and long water exposure can crack, warp, and dry out the wood.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Towel dry, then air dry upright',
    why: 'Wood absorbs water and expands, then dries unevenly under dishwasher heat.',
    caveats: ['Wash with mild soap and warm water.', 'Oil wood utensils occasionally if they look dry.', 'Discard utensils with deep cracks that can trap food.'],
    materials: ['wood'],
  },
  {
    slug: 'kitchen-knives', name: 'kitchen knives', aliases: ['chef knife', 'paring knife'], verdict: 'no',
    shortAnswer: 'Hand wash good kitchen knives. Dishwashers can dull edges, bang blades around, and damage handles.',
    placement: 'Hand wash only for quality knives', cycle: 'No dishwasher cycle recommended', dry: 'Dry immediately',
    why: 'The edge can hit racks or other dishes, and harsh detergent can attack handles and finishes.',
    caveats: ['Cheap butter knives are usually fine if labeled dishwasher safe.', 'Never put sharp knives loose in a dishwasher basket.', 'Dry carbon steel knives immediately to avoid rust.'],
    materials: ['stainless-steel', 'wood', 'plastic-lids'],
  },
  {
    slug: 'silicone-bibs', name: 'silicone baby bibs', aliases: ['baby bib', 'silicone bib'], verdict: 'top-rack',
    shortAnswer: 'Most silicone baby bibs can go on the top rack if the label says dishwasher safe. Use normal wash and skip high heat if the bib feels flimsy.',
    placement: 'Top rack', cycle: 'Normal or gentle cycle', dry: 'Air dry',
    why: 'Food-grade silicone usually tolerates dishwasher heat, but thin straps and printed designs vary.',
    caveats: ['Check for fabric trim, snaps, or printed decorations.', 'Secure bibs so they do not fold into a cup shape and hold dirty water.', 'Hand wash if the label says no heated dry.'],
    materials: ['silicone'],
  },
  {
    slug: 'baby-bottles', name: 'baby bottles', aliases: ['infant bottles', 'bottle nipples'], verdict: 'top-rack',
    shortAnswer: 'Most dishwasher-safe baby bottles can go on the top rack, with nipples and small parts in a closed basket.',
    placement: 'Top rack; nipples, valves, and caps in a small-parts basket', cycle: 'Hot wash or sanitize cycle if the bottle label allows', dry: 'Air dry completely on a clean rack',
    why: 'Small parts need to stay contained, and some plastics or nipples are more heat-sensitive than the bottle body.',
    caveats: ['Follow the bottle maker’s sterilizing instructions for newborn, preemie, or medical needs.', 'Inspect nipples for clouding, tackiness, cracks, or tears.', 'Do not let small parts sit in pooled water.'],
    materials: ['plastic-lids', 'silicone', 'glass'],
  },
  {
    slug: 'air-fryer-basket', name: 'air fryer baskets', aliases: ['air fryer tray', 'air fryer drawer'], verdict: 'depends',
    shortAnswer: 'Some air fryer baskets are dishwasher safe, but hand washing is safer for nonstick coatings unless the manual clearly says dishwasher safe.',
    placement: 'Bottom rack only if manual allows; otherwise hand wash', cycle: 'Normal cycle only if labeled safe', dry: 'Dry completely before reinstalling',
    why: 'Dishwasher detergent and rack contact can wear nonstick coatings faster.',
    caveats: ['Never submerge or dishwash the powered air fryer body.', 'Avoid abrasive pads on nonstick baskets.', 'Check whether removable crisping plates have separate instructions.'],
    materials: ['nonstick', 'stainless-steel'],
  },
  {
    slug: 'nonstick-pans', name: 'nonstick pans', aliases: ['Teflon pan', 'nonstick skillet'], verdict: 'depends',
    shortAnswer: 'Even when a nonstick pan is labeled dishwasher safe, hand washing usually preserves the coating longer.',
    placement: 'Hand wash preferred; bottom rack only if labeled safe', cycle: 'Gentle or normal cycle if allowed', dry: 'Dry before stacking',
    why: 'High heat, harsh detergent, and rack abrasion can shorten nonstick life.',
    caveats: ['Do not dishwash if the handle is wood, soft-touch, or loose.', 'Avoid stacking wet nonstick pans without protection.', 'Discard pans with peeling coating.'],
    materials: ['nonstick'],
  },
  {
    slug: 'cast-iron-skillet', name: 'cast iron skillets', aliases: ['cast iron pan'], verdict: 'no',
    shortAnswer: 'Do not put cast iron in the dishwasher. It can strip seasoning and cause rust.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Dry immediately and oil lightly',
    why: 'Dishwasher detergent removes seasoning while water and heat encourage rust.',
    caveats: ['Wash with hot water and a small amount of mild soap if needed.', 'Dry on the stove or with a towel right away.', 'Re-oil after cleaning.'],
    materials: ['cast-iron'],
  },
  {
    slug: 'crystal-glasses', name: 'crystal glasses', aliases: ['wine crystal', 'crystal stemware'], verdict: 'no',
    shortAnswer: 'Hand wash crystal glasses. Dishwashers can cloud, chip, or etch delicate crystal.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Dry with a lint-free towel',
    why: 'Crystal is more delicate than everyday glass and can be damaged by heat, detergent, and vibration.',
    caveats: ['Use lukewarm water, not sudden temperature changes.', 'Hold stemware by the bowl, not by twisting the stem.', 'Do not soak decorated or antique crystal.'],
    materials: ['glass'],
  },
  {
    slug: 'mason-jars', name: 'mason jars', aliases: ['canning jars'], verdict: 'yes',
    shortAnswer: 'Most plain mason jars are dishwasher safe. Put lids and bands where they will not fall, and hand wash if you are preparing for actual canning.',
    placement: 'Top or bottom rack if secure; lids in utensil basket', cycle: 'Normal cycle', dry: 'Air dry fully',
    why: 'Plain tempered glass jars tolerate dishwashing, but metal lids and sealing compounds need care.',
    caveats: ['Follow canning-safe sterilizing instructions when preserving food.', 'Do not dishwash rusty bands or single-use sealing lids for reuse.', 'Avoid sudden temperature shock.'],
    materials: ['glass', 'stainless-steel'],
  },
  {
    slug: 'cutting-boards-plastic', name: 'plastic cutting boards', aliases: ['poly cutting board'], verdict: 'yes',
    shortAnswer: 'Most plastic cutting boards are dishwasher safe, usually on the bottom rack if they fit securely.',
    placement: 'Bottom rack if secure and label allows', cycle: 'Normal or sanitize cycle if allowed', dry: 'Dry completely before storing',
    why: 'Dishwasher heat can clean plastic boards well, but thin boards may warp.',
    caveats: ['Hand wash thin or flexible mats if they warp.', 'Replace boards with deep grooves that trap food.', 'Check max temperature for specialty plastic boards.'],
    materials: ['plastic-lids'],
  },
  {
    slug: 'cutting-boards-wood', name: 'wood cutting boards', aliases: ['butcher block board'], verdict: 'no',
    shortAnswer: 'Do not put wood cutting boards in the dishwasher. They can crack, warp, and split.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Towel dry upright',
    why: 'Wood expands with water and dries unevenly under heat.',
    caveats: ['Wash both sides so moisture changes are more even.', 'Oil the board when it looks dry.', 'Sanitize according to food-safety guidance when needed.'],
    materials: ['wood'],
  },
  {
    slug: 'stanley-cup', name: 'Stanley cups', aliases: ['Stanley tumbler', 'Quencher'], verdict: 'depends',
    shortAnswer: 'Many Stanley cups are dishwasher safe, but check your exact model and put lids, straws, and small parts on the top rack.',
    placement: 'Cup if label allows; lid and straw top rack', cycle: 'Normal cycle if labeled safe', dry: 'Air dry disassembled',
    why: 'Dishwasher-safe status varies by model, finish, and lid parts.',
    caveats: ['Check the care instructions for custom finishes.', 'Remove straws and gaskets so water can reach trapped areas.', 'Hand wash if the finish is already chipped.'],
    materials: ['stainless-steel', 'plastic-lids', 'silicone'],
  },
  {
    slug: 'travel-mug-lids', name: 'travel mug lids', aliases: ['coffee mug lid', 'tumbler lid'], verdict: 'top-rack',
    shortAnswer: 'Most dishwasher-safe travel mug lids belong on the top rack, disassembled if possible, so gaskets and sliders can rinse and dry.',
    placement: 'Top rack or small-parts basket', cycle: 'Normal cycle', dry: 'Air dry fully before reassembling',
    why: 'Lids trap coffee oils and moisture around gaskets, sliders, and sip openings.',
    caveats: ['Do not dishwash electronic, temperature-display, or self-heating lids.', 'Remove rubber gaskets when the manufacturer says they are removable.', 'Replace gaskets that smell, crack, or stay sticky.'],
    materials: ['plastic-lids', 'silicone'],
  },
  {
    slug: 'instant-pot-lid', name: 'Instant Pot lids', aliases: ['pressure cooker lid'], verdict: 'depends',
    shortAnswer: 'Many removable pressure-cooker lids have dishwasher-safe parts, but valves, sealing rings, and electronics need exact manual guidance.',
    placement: 'Top rack only for removable parts that the manual allows', cycle: 'Normal cycle if allowed', dry: 'Air dry disassembled',
    why: 'Pressure-cooker lids include seals and valves that must stay clean and correctly seated.',
    caveats: ['Never dishwash the cooker base.', 'Remove and inspect the sealing ring and anti-block shield as the manual directs.', 'Do not reassemble until every part is dry.'],
    materials: ['stainless-steel', 'silicone', 'plastic-lids'],
  },
  {
    slug: 'blender-jar', name: 'blender jars', aliases: ['blender pitcher'], verdict: 'depends',
    shortAnswer: 'Many blender jars are dishwasher safe, but blade assemblies, gaskets, and insulated or powered bases need manual-specific care.',
    placement: 'Top rack for plastic jars if allowed; glass jars may fit bottom rack securely', cycle: 'Normal cycle if labeled safe', dry: 'Air dry disassembled',
    why: 'Heat can stress plastic jars and trapped food can remain around blades and gaskets.',
    caveats: ['Never dishwash the motor base.', 'Check whether the blade assembly is removable and dishwasher safe.', 'Use caution handling sharp blades.'],
    materials: ['glass', 'plastic-lids', 'silicone'],
  },
  {
    slug: 'food-storage-containers', name: 'food storage containers', aliases: ['Tupperware', 'meal prep containers'], verdict: 'top-rack',
    shortAnswer: 'Most dishwasher-safe plastic food containers should go on the top rack. Glass containers can usually go on either rack if the lid is removed.',
    placement: 'Top rack for plastic containers and lids; glass bases where secure', cycle: 'Normal cycle', dry: 'Air dry before nesting',
    why: 'Plastic containers and lids can warp near heating elements, while glass bases are more heat tolerant.',
    caveats: ['Do not dishwash containers that are not labeled dishwasher safe.', 'Avoid high-heat dry for lids that need a tight seal.', 'Replace warped, cracked, or stained plastic used for hot food.'],
    materials: ['plastic-lids', 'glass', 'silicone'],
  },
  {
    slug: 'ceramic-mugs', name: 'ceramic mugs', aliases: ['coffee mugs'], verdict: 'yes',
    shortAnswer: 'Most glazed ceramic mugs are dishwasher safe, but handmade, metallic, or decorated mugs may need hand washing.',
    placement: 'Top or bottom rack if secure', cycle: 'Normal cycle', dry: 'Normal dry or air dry',
    why: 'Everyday glazed ceramic tolerates dishwashing, while decorations and special finishes are more fragile.',
    caveats: ['Hand wash mugs with metallic gold or silver trim.', 'Check handmade pottery for dishwasher-safe guidance.', 'Do not dishwash cracked mugs.'],
    materials: ['ceramic'],
  },
  {
    slug: 'fine-china', name: 'fine china', aliases: ['china plates', 'porcelain china'], verdict: 'depends',
    shortAnswer: 'Some modern china is dishwasher safe, but hand wash antique, hand-painted, metallic-trimmed, or sentimental pieces.',
    placement: 'Gentle cycle if labeled dishwasher safe; otherwise hand wash', cycle: 'China/crystal or gentle cycle if allowed', dry: 'Air dry or low/no-heat dry',
    why: 'Glazes and decorations vary widely, especially on older or decorative china.',
    caveats: ['Avoid dishwashing metallic trim.', 'Do not crowd pieces where they can knock together.', 'Hand wash anything irreplaceable.'],
    materials: ['ceramic', 'glass'],
  },
  {
    slug: 'pet-bowls', name: 'pet bowls', aliases: ['dog bowl', 'cat bowl'], verdict: 'yes',
    shortAnswer: 'Most stainless steel or ceramic pet bowls are dishwasher safe. Wash plastic pet bowls only if labeled dishwasher safe.',
    placement: 'Bottom rack if secure; plastic on top rack', cycle: 'Normal or sanitize cycle if allowed', dry: 'Dry completely',
    why: 'Stainless and ceramic bowls handle dishwashing well, while plastic can scratch, warp, or hold odors.',
    caveats: ['Wash pet bowls separately if preferred for hygiene.', 'Replace scratched plastic bowls.', 'Check rubber non-slip bases before dishwashing.'],
    materials: ['stainless-steel', 'ceramic', 'plastic-lids'],
  },
];

export const materials: Material[] = [
  { slug: 'stainless-steel', name: 'stainless steel', defaultVerdict: 'yes', shortAnswer: 'Plain stainless steel is usually dishwasher safe, but insulated items, coatings, and glued handles can change the answer.', caveats: ['Check insulated bottles and vacuum-sealed items by model.', 'Avoid dishwashing sharp knife edges.', 'Dry promptly if the item has carbon steel or mixed metals.'] },
  { slug: 'silicone', name: 'silicone', defaultVerdict: 'top-rack', shortAnswer: 'Food-grade silicone is usually dishwasher safe, often on the top rack, but thin straps and printed designs may need gentler care.', caveats: ['Secure floppy silicone so it does not hold dirty water.', 'Air dry fully to prevent trapped odors.', 'Check any attached fabric, metal, or electronics.'] },
  { slug: 'wood', name: 'wood', defaultVerdict: 'no', shortAnswer: 'Wood usually should not go in the dishwasher because water and heat can warp, crack, and dry it out.', caveats: ['Hand wash quickly.', 'Dry upright.', 'Oil wood boards and utensils when they look dry.'] },
  { slug: 'glass', name: 'glass', defaultVerdict: 'yes', shortAnswer: 'Everyday glass is usually dishwasher safe, while crystal, antique, painted, or delicate glass should be hand washed.', caveats: ['Avoid sudden temperature shock.', 'Do not crowd delicate stemware.', 'Hand wash metallic or painted decoration.'] },
  { slug: 'plastic-lids', name: 'plastic lids and containers', defaultVerdict: 'top-rack', shortAnswer: 'Dishwasher-safe plastic usually belongs on the top rack to reduce warping from heat.', caveats: ['Skip heated dry when seals matter.', 'Use a small-parts basket for lids and valves.', 'Replace warped or cracked plastic.'] },
  { slug: 'nonstick', name: 'nonstick coatings', defaultVerdict: 'depends', shortAnswer: 'Some nonstick cookware is labeled dishwasher safe, but hand washing usually makes the coating last longer.', caveats: ['Avoid abrasive racks or detergents when possible.', 'Do not dishwash damaged or peeling coatings.', 'Follow the pan maker’s instructions.'] },
  { slug: 'cast-iron', name: 'cast iron', defaultVerdict: 'no', shortAnswer: 'Cast iron should not go in the dishwasher because it can rust and lose seasoning.', caveats: ['Dry immediately after hand washing.', 'Oil lightly after cleaning.', 'Never leave cast iron soaking.'] },
  { slug: 'ceramic', name: 'ceramic', defaultVerdict: 'yes', shortAnswer: 'Everyday glazed ceramic is usually dishwasher safe; handmade, antique, or metallic-decorated pieces may not be.', caveats: ['Hand wash metallic trim.', 'Check pottery maker guidance.', 'Avoid dishwashing cracked pieces.'] },
];

export const canYouQuestions = items.map((item) => ({
  slug: item.slug,
  question: `Can you put ${item.name} in the dishwasher?`,
  shortAnswer: item.shortAnswer,
  relatedItemSlug: item.slug,
  verdict: item.verdict,
}));

export function findItem(slug: string) { return items.find((item) => item.slug === slug); }
export function findMaterial(slug: string) { return materials.find((material) => material.slug === slug); }
export function itemsForMaterial(slug: string) { return items.filter((item) => item.materials.includes(slug)); }

export type Verdict = 'yes' | 'top-rack' | 'no' | 'depends';

export type DishItem = {
  slug: string;
  name: string;
  aliases?: string[];
  /** Overrides the default "Can you put {name} in the dishwasher?" title/H1 to match exact query phrasing. */
  question?: string;
  /** Overrides the site-wide default updated date on the item page. ISO date. */
  updated?: string;
  /** Extra FAQ entries rendered on the item page and emitted in FAQPage schema. */
  faqs?: { question: string; answer: string }[];
  verdict: Verdict;
  shortAnswer: string;
  placement: string;
  cycle: string;
  dry: string;
  why: string;
  caveats: string[];
  materials: string[];
  sourceNote?: string;
  relatedSlugs?: string[];
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
    slug: 'hydro-flask', name: 'Hydro Flask bottles and caps', aliases: ['Hydroflask', 'Hydro Flask caps', 'Hydro Flask lids', 'Hydro Flask straw lid', 'insulated water bottle', 'stainless steel bottle'], verdict: 'depends',
    question: 'Is a Hydro Flask dishwasher safe?',
    updated: '2026-06-16',
    faqs: [
      { question: 'Are Hydro Flask caps dishwasher safe?', answer: 'Some Hydro Flask caps and lids are dishwasher safe on the top rack, but cap style matters. Check the care instructions for your exact cap, remove any loose gasket or straw parts if the manufacturer says to, and air dry everything fully before reassembling.' },
      { question: 'Can you wash a Hydro Flask in the dishwasher?', answer: 'You can wash a Hydro Flask in the dishwasher if your exact bottle is labeled dishwasher safe. Many newer Hydro Flask bottles are, while older bottles and custom finishes should be hand washed. Put caps and lids on the top rack and air dry everything fully with the cap off.' },
      { question: 'Are Hydro Flask lids dishwasher safe?', answer: 'Some Hydro Flask lids are dishwasher safe on the top rack, but lid style matters. Check the care instructions for your exact lid, remove any loose gasket or straw parts if the manufacturer says to, and air dry everything fully before reassembling.' },
      { question: 'Are Hydro Flask straw lids dishwasher safe?', answer: 'Straw lids have more small parts than flat caps: straws, gaskets, and sliders that trap residue. If your straw lid is labeled dishwasher safe, wash it disassembled on the top rack and let every piece air dry before reassembling. Hand wash if any part is damaged or the label is unclear.' },
      { question: 'Should older Hydro Flask bottles go in the dishwasher?', answer: 'Hand wash older Hydro Flask bottles unless the bottom stamp or model guidance clearly says dishwasher safe. Older finishes and coatings may not tolerate dishwasher detergent and heat as well as current dishwasher-safe models.' },
    ],
    shortAnswer: 'Many newer Hydro Flask bottles are dishwasher safe, but older bottles and some caps should be hand washed unless the label says dishwasher safe.',
    placement: 'Top rack for caps and lids; bottle position depends on manufacturer guidance', cycle: 'Normal cycle if labeled dishwasher safe', dry: 'Air dry fully with cap off',
    why: 'Insulated bottles can have coatings, seals, and powder finishes that vary by model and age.',
    caveats: ['Check the bottom stamp or manufacturer page for your exact model.', 'Hand wash if the bottle has a sentimental finish, custom print, or older coating.', 'Never dishwash lids with electronics, straws that trap gunk, or damaged gaskets.'],
    materials: ['stainless-steel', 'plastic-lids', 'silicone'],
    relatedSlugs: ['travel-mug-lids', 'stanley-cup', 'yeti-cups'],
  },
  {
    slug: 'yeti-cups', name: 'Yeti cups and tumblers', aliases: ['Yetis', 'Yeti Rambler', 'insulated tumbler'], verdict: 'yes',
    question: 'Are Yeti cups dishwasher safe?',
    updated: '2026-06-10',
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
    slug: 'silicone-bibs', name: 'silicone bibs', aliases: ['silicone baby bibs', 'baby bib', 'silicone bib', 'baby bibs'], verdict: 'top-rack',
    question: 'Can silicone bibs go in the dishwasher?',
    updated: '2026-06-10',
    faqs: [
      { question: 'Are silicone bibs dishwasher safe?', answer: 'Most food-grade silicone bibs are dishwasher safe on the top rack. Check the label first if the bib has fabric trim, snaps, or printed decorations, and skip heated dry for thin or flimsy bibs.' },
      { question: 'Can you put silicone bibs in the dishwasher?', answer: 'Yes, you can put most silicone bibs in the dishwasher on the top rack. Secure the bib so it does not fold into a cup shape and hold dirty water, and let it air dry fully before the next use.' },
      { question: 'Do silicone baby bibs need hand washing?', answer: 'Hand wash a silicone baby bib only when the label says no dishwasher or no heated dry, or when the bib has fabric trim, decorations, or snaps that may not tolerate dishwasher heat.' },
    ],
    shortAnswer: 'Yes — most silicone bibs can go in the dishwasher on the top rack. Use a normal or gentle cycle, skip heated dry if the bib feels thin or flimsy, and check the label first if the bib has fabric trim or printed designs.',
    placement: 'Top rack', cycle: 'Normal or gentle cycle', dry: 'Air dry',
    why: 'Food-grade silicone usually tolerates dishwasher heat, but thin straps and printed designs vary.',
    caveats: ['Check for fabric trim, snaps, or printed decorations.', 'Secure bibs so they do not fold into a cup shape and hold dirty water.', 'Hand wash if the label says no heated dry.'],
    materials: ['silicone'],
  },
  {
    slug: 'baby-bottles', name: 'baby bottles', aliases: ['infant bottles', 'bottle nipples', 'washing bottles in dishwasher'], verdict: 'top-rack',
    question: 'Can you wash baby bottles in the dishwasher?',
    updated: '2026-06-10',
    faqs: [
      { question: 'Does the dishwasher sterilize baby bottles?', answer: 'A hot wash or sanitize cycle cleans bottles well for everyday use, but a dishwasher sanitize cycle is not the same as medical-grade sterilizing. For newborns, preemies, or medical needs, follow your bottle maker’s sterilizing instructions and pediatric guidance.' },
      { question: 'Can bottle nipples go in the dishwasher?', answer: 'Dishwasher-safe nipples and valves can go on the top rack inside a closed small-parts basket so they do not fall or fill with water. Inspect them after washing and replace any that are cloudy, tacky, cracked, or torn.' },
    ],
    placement: 'Top rack; nipples, valves, and caps in a small-parts basket', cycle: 'Hot wash or sanitize cycle if the bottle label allows', dry: 'Air dry completely on a clean rack',
    why: 'Small parts need to stay contained, and some plastics or nipples are more heat-sensitive than the bottle body.',
    caveats: ['Follow the bottle maker’s sterilizing instructions for newborn, preemie, or medical needs.', 'Inspect nipples for clouding, tackiness, cracks, or tears.', 'Do not let small parts sit in pooled water.'],
    materials: ['plastic-lids', 'silicone', 'glass'],
  },
  {
    slug: 'air-fryer-basket', name: 'air fryer baskets and trays', aliases: ['air fryer tray', 'air fryer trays', 'air fryer drawer', 'air fryer crisper plate', 'air fryer basket in dishwasher', 'can air fryer basket go in dishwasher', 'air fryer basket dishwasher safe', 'air fryer baskets dishwasher safe', 'air fryer tray dishwasher safe', 'air fryer trays in dishwasher', 'air fryer dishwasher safe', 'air fryer dishwasher'], verdict: 'depends',
    question: 'Is an air fryer basket dishwasher safe?',
    updated: '2026-06-16',
    faqs: [
      { question: 'Can an air fryer basket go in the dishwasher?', answer: 'Some removable air fryer baskets are dishwasher safe, but only when the manual says that exact basket, tray, drawer, or crisper plate can go in the dishwasher. Hand wash nonstick baskets when the manual is unclear.' },
      { question: 'Are air fryer trays dishwasher safe?', answer: 'Some removable air fryer trays are dishwasher safe, but only when the manual says that exact tray, crisper plate, or drawer can go in the dishwasher. Hand wash nonstick trays when the manual is unclear.' },
      { question: 'Can an air fryer drawer go in the dishwasher?', answer: 'Only put an air fryer drawer in the dishwasher when the manual says that exact removable drawer or pan is dishwasher safe. Hand wash nonstick drawers when the manual is missing, unclear, or excludes heated dry.' },
      { question: 'Should you hand wash a nonstick air fryer basket?', answer: 'Yes, hand washing is the safer default for a nonstick air fryer basket when the manual is missing, unclear, or only labels some removable parts dishwasher safe. Warm water, dish soap, and a non-abrasive sponge are less likely to wear the coating.' },
      { question: 'Can you put an air fryer itself in the dishwasher?', answer: 'No. Only removable baskets, trays, crisper plates, drawers, or racks can go in the dishwasher, and only when the manual says that exact part is dishwasher safe. Never put the powered air fryer body in the dishwasher.' },
    ],
    shortAnswer: 'Some air fryer baskets and trays are dishwasher safe, but many nonstick parts should be hand washed unless the manual clearly says the basket, tray, or drawer can go in the dishwasher. Never put the powered air fryer body in the dishwasher.',
    placement: 'Bottom rack only if the manual allows the removable basket, tray, or drawer; otherwise hand wash', cycle: 'Normal cycle only if labeled dishwasher safe', dry: 'Dry completely before reinstalling',
    why: 'The safe answer depends on the exact removable part and coating: basket, drawer, tray, crisper plate, and rack instructions can differ even within the same air fryer. Dishwasher detergent and rack contact can wear nonstick coatings faster.',
    caveats: ['Never submerge or dishwash the powered air fryer body.', 'Avoid abrasive pads on nonstick baskets.', 'Check whether removable crisping plates, trays, racks, or drawers have separate instructions.'],
    materials: ['nonstick', 'stainless-steel'],
    sourceNote: 'Use the care section in your air fryer manual as the final source. Manufacturers often approve one removable part while excluding another part from the same appliance.',
    relatedSlugs: ['air-fryer-crisper-plate', 'air-fryer-drawer', 'air-fryer-rack', 'air-fryer-silicone-liner', 'ninja-air-fryer-basket'],
  },
  {
    slug: 'air-fryer-crisper-plate', name: 'air fryer crisper plates', aliases: ['air fryer crisping plate', 'air fryer insert plate', 'air fryer grill plate'], verdict: 'depends',
    shortAnswer: 'Some air fryer crisper plates are dishwasher safe, but nonstick-coated plates should be hand washed unless your manual clearly says the crisper plate can go in the dishwasher.',
    placement: 'Top or bottom rack only if the manual allows it and the plate sits securely', cycle: 'Normal cycle only if labeled dishwasher safe', dry: 'Dry fully before putting it back in the basket',
    why: 'Crisper plates often use nonstick coating and small rubber feet or bumpers. Dishwasher heat and rack contact can wear coatings and loosen small parts over time.',
    caveats: ['Remove loose food before washing so crumbs do not bake onto the coating.', 'Check whether rubber feet or silicone bumpers should be removed first.', 'Hand wash if the coating is chipped, peeling, or already losing its slick feel.'],
    materials: ['nonstick', 'silicone'],
    sourceNote: 'Check the exact air fryer manual because basket, tray, and crisper-plate instructions are often listed separately.',
    relatedSlugs: ['air-fryer-basket', 'air-fryer-drawer', 'air-fryer-rack'],
  },
  {
    slug: 'air-fryer-drawer', name: 'air fryer drawers', aliases: ['air fryer drawer pan', 'air fryer bucket', 'air fryer pan'], verdict: 'depends',
    shortAnswer: 'Air fryer drawers are dishwasher safe only when the manual says the removable drawer or pan is dishwasher safe. Hand wash nonstick drawers when the manual is unclear.',
    placement: 'Bottom rack only if the drawer fits securely and is labeled dishwasher safe', cycle: 'Normal cycle if allowed; avoid sanitize unless the manual allows high heat', dry: 'Dry the drawer and handle area completely',
    why: 'Drawers are larger removable parts with nonstick coating, handle hardware, seams, and sometimes rubber bumpers that may age faster in a dishwasher.',
    caveats: ['Never put the powered air fryer base in the dishwasher.', 'Do not force a drawer into the rack where it can hit sprayer arms.', 'Hand wash if water can collect around handle seams.'],
    materials: ['nonstick', 'plastic-lids'],
    sourceNote: 'The manual is the deciding source here because drawer and basket care can differ by model.',
    relatedSlugs: ['air-fryer-basket', 'air-fryer-crisper-plate', 'air-fryer-rack'],
  },
  {
    slug: 'air-fryer-rack', name: 'air fryer racks', aliases: ['air fryer wire rack', 'air fryer skewer rack', 'air fryer dehydrator rack'], verdict: 'depends',
    shortAnswer: 'Plain stainless steel air fryer racks are often dishwasher safe, but coated racks, skewer pieces, and accessories with plastic or silicone parts need manual-specific guidance.',
    placement: 'Top or bottom rack if the rack is stainless and sits securely', cycle: 'Normal cycle if labeled dishwasher safe', dry: 'Dry promptly to prevent spots or rust on mixed-metal parts',
    why: 'Racks are usually less coating-sensitive than baskets, but small accessories can trap food and may include coatings, welds, or handle pieces that are not dishwasher safe.',
    caveats: ['Use a utensil basket for skewers or small rack pieces.', 'Hand wash coated or painted racks.', 'Check for rust after dishwashing lower-quality metal accessories.'],
    materials: ['stainless-steel', 'nonstick'],
    sourceNote: 'If the accessory came in an air fryer kit, check the accessory page or manual insert, not just the main basket instructions.',
    relatedSlugs: ['air-fryer-basket', 'air-fryer-crisper-plate', 'air-fryer-silicone-liner'],
  },
  {
    slug: 'air-fryer-silicone-liner', name: 'air fryer silicone liners', aliases: ['silicone air fryer basket liner', 'air fryer silicone pot'], verdict: 'top-rack',
    shortAnswer: 'Most food-grade silicone air fryer liners are dishwasher safe on the top rack, but check the label and skip heated dry if the liner is thin or printed.',
    placement: 'Top rack, secured so it does not flip and collect dirty water', cycle: 'Normal cycle if labeled dishwasher safe', dry: 'Air dry fully before storing',
    why: 'Food-grade silicone usually tolerates dishwasher heat, but thin liners, printed markings, and attached handles can vary.',
    caveats: ['Do not dishwash disposable paper liners.', 'Avoid folding the liner into a cup shape in the rack.', 'Replace silicone that stays sticky, smells burnt, or has cuts.'],
    materials: ['silicone'],
    sourceNote: 'Use the liner label or product care page for the final answer, especially for printed or collapsible liners.',
    relatedSlugs: ['air-fryer-basket', 'air-fryer-rack', 'air-fryer-crisper-plate'],
  },
  {
    slug: 'ninja-air-fryer-basket', name: 'Ninja air fryer baskets', aliases: ['Ninja air fryer tray', 'Ninja crisper plate', 'Ninja Foodi basket'], verdict: 'depends',
    shortAnswer: 'Many Ninja air fryer baskets and crisper plates are dishwasher safe, but the answer depends on the exact Foodi or air fryer model. Check the model manual before dishwashing nonstick parts.',
    placement: 'Dishwasher rack only if the manual allows that exact basket, tray, or crisper plate', cycle: 'Normal cycle if allowed by the model manual', dry: 'Dry completely before reinstalling',
    why: 'Ninja uses different removable baskets, trays, plates, and multi-cooker parts across models, so the generic brand name is not enough to know the safe cleaning method.',
    caveats: ['Never dishwash the cooker base or powered unit.', 'Check whether the crisper plate and basket have separate care instructions.', 'Hand wash to preserve nonstick coating if you are unsure.'],
    materials: ['nonstick', 'stainless-steel', 'plastic-lids'],
    sourceNote: 'Use the Ninja manual for the exact model number. Brand pages and retailer listings may not cover every removable accessory.',
    relatedSlugs: ['air-fryer-basket', 'air-fryer-crisper-plate', 'air-fryer-drawer'],
  },
  {
    slug: 'nonstick-pans', name: 'nonstick pans', aliases: ['non stick pans', 'non-stick pan', 'Teflon pan', 'nonstick skillet'], verdict: 'depends',
    question: 'Can non stick pans go in the dishwasher?',
    updated: '2026-06-10',
    faqs: [
      { question: 'Are non stick pans dishwasher safe?', answer: 'Some non stick pans are labeled dishwasher safe, but even then hand washing usually makes the coating last longer. If the pan, handle, or label gives no clear answer, wash it by hand with warm water and a soft sponge.' },
      { question: 'What happens if you put a non stick pan in the dishwasher?', answer: 'One cycle rarely causes visible damage, but repeated dishwashing wears non stick coatings faster: hot water, harsh detergent, and rubbing against the rack gradually dull the surface. Stop dishwashing a pan whose coating is scratched or peeling, and replace it if the coating flakes.' },
    ],
    shortAnswer: 'Even when a nonstick pan is labeled dishwasher safe, hand washing usually preserves the coating longer.',
    placement: 'Hand wash preferred; bottom rack only if labeled safe', cycle: 'Gentle or normal cycle if allowed', dry: 'Dry before stacking',
    why: 'High heat, harsh detergent, and rack abrasion can shorten nonstick life.',
    caveats: ['Do not dishwash if the handle is wood, soft-touch, or loose.', 'Avoid stacking wet nonstick pans without protection.', 'Discard pans with peeling coating.'],
    materials: ['nonstick'],
  },
  {
    slug: 'cast-iron-skillet', name: 'cast iron skillets', aliases: ['cast iron', 'cast iron pan'], verdict: 'no',
    question: 'Can you put cast iron in the dishwasher?',
    updated: '2026-06-10',
    faqs: [
      { question: 'What if a cast iron skillet already went through the dishwasher?', answer: 'Rescue it promptly: rinse, scrub off any rust spots with hot water and a brush, dry it completely on the stove or with a towel, then rub on a thin coat of cooking oil. One cycle usually strips some seasoning but rarely ruins the pan; re-season with a few oiled heat cycles if food starts sticking.' },
      { question: 'Is enameled cast iron dishwasher safe?', answer: 'Enameled cast iron is a different case from bare cast iron: many makers allow the dishwasher, but hand washing keeps the enamel glossy and the rims (which are often bare metal) rust-free. Check the care instructions for your exact pan.' },
    ],
    shortAnswer: 'Do not put cast iron in the dishwasher. It can strip seasoning and cause rust.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Dry immediately and oil lightly',
    why: 'Dishwasher detergent removes seasoning while water and heat encourage rust.',
    caveats: ['Wash with hot water and a small amount of mild soap if needed.', 'Dry on the stove or with a towel right away.', 'Re-oil after cleaning.'],
    materials: ['cast-iron'],
  },
  {
    slug: 'crystal-glasses', name: 'crystal glasses', aliases: ['crystal', 'wine crystal', 'crystal stemware'], verdict: 'no',
    question: 'Can crystal go in the dishwasher?',
    updated: '2026-06-10',
    faqs: [
      { question: 'What happens if crystal goes in the dishwasher?', answer: 'Crystal can come out cloudy, etched, or chipped. Cloudiness from hard-water film can sometimes be polished off with vinegar, but etching from detergent and heat is permanent. Delicate stems can also crack from vibration against the rack.' },
    ],
    shortAnswer: 'Hand wash crystal glasses. Dishwashers can cloud, chip, or etch delicate crystal.',
    placement: 'Hand wash only', cycle: 'No dishwasher cycle recommended', dry: 'Dry with a lint-free towel',
    why: 'Crystal is more delicate than everyday glass and can be damaged by heat, detergent, and vibration.',
    caveats: ['Use lukewarm water, not sudden temperature changes.', 'Hold stemware by the bowl, not by twisting the stem.', 'Do not soak decorated or antique crystal.'],
    materials: ['glass'],
  },
  {
    slug: 'mason-jars', name: 'mason jars', aliases: ['canning jars'], verdict: 'yes',
    updated: '2026-06-10',
    faqs: [
      { question: 'Are canning jars dishwasher safe?', answer: 'Yes, plain glass canning jars are dishwasher safe for everyday cleaning. Wash bands and lids where they cannot fall through the rack, and retire rusty bands and used single-use sealing lids rather than dishwashing them for reuse.' },
      { question: 'Can you sanitize canning jars in the dishwasher?', answer: 'A dishwasher with a sanitize cycle can clean and pre-heat jars before canning, but it does not replace boiling-water sterilizing when a tested canning recipe requires it. Follow the sterilizing steps in your canning recipe or local food-preservation guidance.' },
    ],
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
    slug: 'pet-bowls', name: 'pet and dog bowls', aliases: ['dog bowl', 'dog bowls', 'cat bowl', 'stainless dog bowls', 'ceramic dog bowls'], verdict: 'yes',
    faqs: [
      { question: 'Are stainless steel dog bowls dishwasher safe?', answer: 'Yes, most plain stainless steel dog bowls are dishwasher safe. Use the normal or sanitize cycle and dry completely before the next use.' },
      { question: 'Are plastic dog bowls dishwasher safe?', answer: 'Plastic dog bowls are only dishwasher safe if the label says so. Place dishwasher-safe plastic bowls on the top rack to reduce warping from heat.' },
      { question: 'Can you put cat bowls in the dishwasher?', answer: 'Most stainless steel and ceramic cat bowls are dishwasher safe. Check plastic cat bowls for a dishwasher-safe label, and always dry bowls completely before use.' },
    ],
    shortAnswer: 'Most stainless steel or ceramic dog bowls and pet bowls are dishwasher safe. Wash plastic dog bowls only if they are labeled dishwasher safe.',
    placement: 'Bottom rack if secure; plastic on top rack', cycle: 'Normal or sanitize cycle if allowed', dry: 'Dry completely',
    why: 'Stainless and ceramic dog bowls handle dishwashing well, while plastic pet bowls can scratch, warp, or hold odors. Slow-feeder bowls and rubber bases need a closer label check.',
    caveats: ['Wash dog bowls and pet bowls separately if preferred for hygiene.', 'Replace scratched plastic bowls.', 'Check rubber non-slip bases and slow-feeder inserts before dishwashing.'],
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

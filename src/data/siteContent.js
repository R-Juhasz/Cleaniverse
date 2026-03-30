export const trustHighlights = [
  'Residential, commercial, and end-of-tenancy support',
  'Checklist-led cleans with careful finishing touches',
  'Eco-conscious product options available on request',
  'Flexible scheduling for one-off visits or recurring plans',
];

export const processSteps = [
  {
    title: 'Tell us what needs attention',
    description:
      'Share your property type, preferred date, and any problem areas so we can scope the visit properly.',
  },
  {
    title: 'We confirm the right clean',
    description:
      'We recommend the best service, confirm the visit details, and outline any add-ons before the job is booked.',
  },
  {
    title: 'Enjoy a space that feels reset',
    description:
      'Your team arrives with a clear checklist, works through the agreed scope, and leaves the space fresh and presentable.',
  },
];

export const serviceGroups = [
  {
    id: 'home',
    eyebrow: 'For busy households',
    title: 'Residential cleaning that keeps your home feeling easy to live in',
    description:
      'From weekly upkeep to full-property resets, these services are designed for lived-in homes that need dependable care.',
    services: [
      {
        slug: 'general-house-cleaning',
        title: 'Routine Home Cleaning',
        shortDescription: 'A reliable recurring clean for kitchens, bathrooms, bedrooms, and everyday living areas.',
        price: 'From GBP 15 / hour',
        perfectFor: 'Weekly or fortnightly upkeep',
        heroBlurb:
          'Keep the day-to-day mess under control with a service built for busy homes, steady routines, and consistent standards.',
        includes: [
          'Dusting and wiping reachable surfaces',
          'Vacuuming and mopping floors',
          'Kitchen wipe-downs and sink sanitising',
          'Bathroom cleaning and mirror polishing',
          'Tidying finishes such as bins, touchpoints, and visible marks',
        ],
        bestFor: [
          'Families balancing work, school, and home life',
          'Anyone who wants a standing clean without the fuss',
          'Homes that need regular maintenance rather than a deep reset',
        ],
        addOns: ['Inside fridge refresh', 'Bed change', 'Interior window touch-up'],
        timeline: 'Usually 2 to 4 hours depending on size and condition',
      },
      {
        slug: 'deep-cleaning',
        title: 'Deep Reset Cleaning',
        shortDescription: 'A more intensive top-to-bottom clean for neglected areas, seasonal resets, or special occasions.',
        price: 'From GBP 200',
        perfectFor: 'Spring resets and first-time cleans',
        heroBlurb:
          'When a quick tidy is not enough, this service tackles built-up grime, overlooked corners, and heavier-detail work.',
        includes: [
          'Detailed kitchen and bathroom degreasing',
          'Skirting, door frame, and fixture attention',
          'Inside-facing glass and mirror polishing',
          'Focused removal of built-up dust and residue',
          'A stronger finishing pass across the whole property',
        ],
        bestFor: [
          'Homes that have gone a while without professional cleaning',
          'Preparing for guests, events, or a fresh start',
          'Clients who want a baseline reset before recurring cleans begin',
        ],
        addOns: ['Inside oven clean', 'Carpet spot treatment', 'Cupboard fronts and splashback detailing'],
        timeline: 'Priced by property size and scope',
      },
      {
        slug: 'eco-friendly-cleaning',
        title: 'Eco-Conscious Cleaning',
        shortDescription: 'A greener clean using lower-toxicity products and a thoughtful approach to consumables.',
        price: 'From GBP 17 / hour',
        perfectFor: 'Homes that prefer gentler products',
        heroBlurb:
          'For households that care about product choice, this service keeps standards high while using more considered cleaning options.',
        includes: [
          'Lower-toxicity product selection where appropriate',
          'Surface dusting and sanitising',
          'Kitchen and bathroom cleaning with mindful product use',
          'Floor care using biodegradable-compatible solutions',
          'Waste-conscious working practices during the visit',
        ],
        bestFor: [
          'Eco-aware households',
          'Clients who are mindful about strong fragrances',
          'Regular cleans where sustainability matters',
        ],
        addOns: ['Refill-based product requests', 'Eco laundry room refresh', 'Plant-safe detailing notes'],
        timeline: 'Best suited to recurring maintenance visits',
      },
      {
        slug: 'move-in-out-cleaning',
        title: 'Move In / Move Out Cleaning',
        shortDescription: 'A full-property clean to get homes ready for handover, viewings, or settling in.',
        price: 'From GBP 15 / hour',
        perfectFor: 'Tenancies, sales, and new-home handovers',
        heroBlurb:
          'Reduce moving stress with a practical, thorough clean that helps empty or newly occupied properties feel ready from day one.',
        includes: [
          'Room-by-room wipe-downs and floor cleaning',
          'Kitchen surfaces, cupboards, and appliance exteriors',
          'Bathroom sanitising and limescale attention',
          'Dust removal from ledges, skirting, and visible edges',
          'Final finishing touches for a handover-ready presentation',
        ],
        bestFor: [
          'Tenants preparing to leave a property in good condition',
          'Landlords or agents between occupancies',
          'Buyers and sellers wanting a clean start',
        ],
        addOns: ['Inside appliance cleaning', 'Key-safe collection notes', 'Priority scheduling for tight move dates'],
        timeline: 'Scope varies based on whether the property is furnished and recently used',
      },
      {
        slug: 'post-renovation-cleaning',
        title: 'Post-Renovation Cleaning',
        shortDescription: 'A targeted clean for dust, debris, and fine residue after decorating or building work.',
        price: 'From GBP 17 / hour',
        perfectFor: 'Freshly finished rooms and renovation handovers',
        heroBlurb:
          'Construction dust gets everywhere. This service focuses on clearing residue and helping new finishes actually look finished.',
        includes: [
          'Dust removal from walls, frames, ledges, and fixtures',
          'Detail cleaning for floors and newly installed surfaces',
          'Careful wiping of switches, skirting, and fittings',
          'Kitchen and bathroom finishing where work has taken place',
          'A final presentation pass to reduce dust resettling',
        ],
        bestFor: [
          'Single-room refurbishments',
          'Decorating projects that leave fine dust behind',
          'Property owners preparing spaces for use immediately after works',
        ],
        addOns: ['Window frame detailing', 'Inside cupboard wipe-downs', 'Multiple-room phased cleaning'],
        timeline: 'Often booked after decorators, fitters, or snagging teams leave site',
      },
    ],
  },
  {
    id: 'commercial',
    eyebrow: 'For teams and workplaces',
    title: 'Commercial cleaning that keeps your environment polished and ready',
    description:
      'Choose practical ongoing support or focused cleans for the high-traffic areas that shape how your workspace feels.',
    services: [
      {
        slug: 'standard-office-cleaning',
        title: 'Standard Office Cleaning',
        shortDescription: 'Routine upkeep for desks, shared spaces, floors, bins, and basic washroom presentation.',
        price: 'From GBP 15 / hour',
        perfectFor: 'Regular office maintenance',
        heroBlurb:
          'A steady service for offices that need a clean, professional baseline without disrupting the working day.',
        includes: [
          'Desks, furniture, and touchpoint wipe-downs',
          'Vacuuming and mopping across shared areas',
          'Bin emptying and liner changes',
          'Kitchenette and breakout area tidy-ups',
          'Basic washroom refreshes',
        ],
        bestFor: [
          'Small offices and studios',
          'Coworking and shared workspaces',
          'Businesses that want simple recurring support',
        ],
        addOns: ['Consumable checks', 'Meeting room resets', 'After-hours keyholding arrangements'],
        timeline: 'Often scheduled daily, twice weekly, or weekly',
      },
      {
        slug: 'deep-office-cleaning',
        title: 'Deep Office Cleaning',
        shortDescription: 'A stronger detailed clean for neglected areas, heavier traffic, or quarterly resets.',
        price: 'From GBP 17 / hour',
        perfectFor: 'Periodic workspace resets',
        heroBlurb:
          'Ideal when your workplace needs more than maintenance cleaning, with extra focus on detail zones and accumulated build-up.',
        includes: [
          'Detailed surface and fixture cleaning',
          'Breakout and washroom deep sanitising',
          'Focused work on corners, edges, and hard-to-reach areas',
          'Carpet or upholstery attention where needed',
          'High-touch disinfection throughout the space',
        ],
        bestFor: [
          'Quarterly office refreshes',
          'Post-event or post-fit-out tidy-ups',
          'Workplaces preparing for visitors, audits, or relaunches',
        ],
        addOns: ['Interior glass detailing', 'Chair and fabric spot treatment', 'Weekend scheduling'],
        timeline: 'Best booked as a reset alongside your regular maintenance plan',
      },
      {
        slug: 'conference-room-cleaning',
        title: 'Conference Room Cleaning',
        shortDescription: 'A focused service for meeting rooms, client spaces, and presentation areas.',
        price: 'From GBP 100',
        perfectFor: 'Meeting suites and presentation spaces',
        heroBlurb:
          'Make sure the rooms clients and stakeholders see first are spotless, calm, and ready to impress.',
        includes: [
          'Table, chair, and surface sanitising',
          'Floor cleaning and edge detailing',
          'Glass and visible mark removal',
          'Bin emptying and presentation resets',
          'Touchpoint disinfection for remotes, handles, and switches',
        ],
        bestFor: [
          'Boardrooms and client-facing spaces',
          'Pre-event or pre-pitch preparation',
          'Businesses with frequent on-site meetings',
        ],
        addOns: ['Refresh between sessions', 'Welcome area pairing', 'Out-of-hours access coordination'],
        timeline: 'Can be booked as a standalone visit or as part of a wider office clean',
      },
      {
        slug: 'restroom-sanitization',
        title: 'Restroom Sanitisation',
        shortDescription: 'A hygiene-first service for staff and visitor washrooms that need consistent presentation.',
        price: 'From GBP 30 per session',
        perfectFor: 'High-traffic washrooms and shared facilities',
        heroBlurb:
          'When hygiene is non-negotiable, this service focuses on deep sanitisation, consumables, and a fresher overall finish.',
        includes: [
          'Toilet, sink, and mirror sanitising',
          'Floor and tile cleaning',
          'Bin emptying and odour control measures',
          'Touchpoint disinfection for handles and dispensers',
          'Refill checks for soap and paper products',
        ],
        bestFor: [
          'Busy offices with staff and visitor washrooms',
          'Facilities managers who need dependable hygiene support',
          'Sites where washroom presentation affects client perception',
        ],
        addOns: ['Multiple washroom rotation plans', 'Consumable restocking coordination', 'Additional daytime spot checks'],
        timeline: 'Available as standalone sessions or part of a broader workplace plan',
      },
      {
        slug: 'lobby-reception-cleaning',
        title: 'Lobby and Reception Cleaning',
        shortDescription: 'Front-of-house cleaning for entrances, waiting areas, and reception desks.',
        price: 'From GBP 15 / hour',
        perfectFor: 'First-impression areas',
        heroBlurb:
          'Your front-of-house spaces set the tone before anyone says hello. This service keeps them sharp, bright, and visitor-ready.',
        includes: [
          'Reception desk and furniture cleaning',
          'Floor vacuuming and mopping',
          'Glass and fingerprint mark removal',
          'Entrance touchpoint sanitising',
          'Bin handling and general presentation resets',
        ],
        bestFor: [
          'Client-facing businesses',
          'Shared office entrances and waiting areas',
          'Workspaces that rely on polished first impressions',
        ],
        addOns: ['Daily entrance checks', 'Meeting room pairing', 'Soft-furnishing spot attention'],
        timeline: 'Works well as part of an opening or closing routine',
      },
      {
        slug: 'after-hours-office-cleaning',
        title: 'After-Hours Office Cleaning',
        shortDescription: 'Cleaning outside core hours so your team returns to a ready-to-work environment.',
        price: 'From GBP 20 / hour',
        perfectFor: 'Businesses that want cleaning without interruption',
        heroBlurb:
          'Ideal for offices that need a clean environment by morning without interrupting productivity during the day.',
        includes: [
          'Desks, shared surfaces, and touchpoint cleaning',
          'Floor care across open areas and circulation routes',
          'Bins, kitchens, and washrooms refreshed overnight',
          'Quiet, low-disruption working patterns',
          'Morning-ready finishing touches before your team returns',
        ],
        bestFor: [
          'Teams with packed calendars and limited daytime access',
          'Studios and offices where uninterrupted work matters',
          'Businesses that prefer keyholding or end-of-day support',
        ],
        addOns: ['Alarm-setting coordination', 'Security notes and access logs', 'Combined reception and washroom care'],
        timeline: 'Scheduled around your closing routine and access requirements',
      },
    ],
  },
  {
    id: 'specialist',
    eyebrow: 'For targeted jobs',
    title: 'Specialist cleaning for the jobs that need extra care or a custom scope',
    description:
      'Some spaces need a specialist touch. Others need a bespoke plan. These options are built for both.',
    services: [
      {
        slug: 'oven-cleaning',
        title: 'Oven Cleaning',
        shortDescription: 'A focused degreasing service to lift grime, restore shine, and make your oven easier to use.',
        price: 'From GBP 50',
        perfectFor: 'Appliance refreshes and kitchen resets',
        heroBlurb:
          'Grease build-up and burnt residue can make a clean kitchen feel unfinished. This focused service restores the appliance to a cleaner, brighter standard.',
        includes: [
          'Degreasing of the main oven cavity',
          'Rack and tray cleaning',
          'Door glass and exterior polishing',
          'Attention to handles, controls, and visible marks',
          'Careful finishing without harsh presentation shortcuts',
        ],
        bestFor: [
          'Seasonal kitchen resets',
          'Move-in or move-out preparations',
          'Homes where the oven has not had attention in a while',
        ],
        addOns: ['Hob surface detail', 'Extractor exterior wipe-down', 'Kitchen deep-clean pairing'],
        timeline: 'Usually paired well with a kitchen or move-out clean',
      },
      {
        slug: 'custom-clean',
        title: 'Custom Scope Cleaning',
        shortDescription: 'A tailored plan for unusual spaces, mixed requirements, or one-off requests.',
        price: 'Custom quote',
        perfectFor: 'Bespoke residential and commercial briefs',
        heroBlurb:
          'If your job does not fit neatly into a standard package, we can scope a clean around the space, access, and exact finish you need.',
        includes: [
          'A scoped brief based on your property and priorities',
          'Flexible combinations of residential and commercial tasks',
          'Clear notes on access, sequencing, and add-ons',
          'Support for one-off jobs or ongoing special requirements',
          'A quote matched to the actual work required',
        ],
        bestFor: [
          'Mixed-use properties',
          'One-off problem areas or unusual access needs',
          'Clients who want a service built around their own checklist',
        ],
        addOns: ['Site visit scoping', 'Phased cleaning plans', 'Priority booking discussions'],
        timeline: 'Quoted individually after reviewing the brief',
      },
    ],
  },
];

export const featuredServiceSlugs = [
  'general-house-cleaning',
  'deep-cleaning',
  'standard-office-cleaning',
  'after-hours-office-cleaning',
  'oven-cleaning',
  'custom-clean',
];

export const teamPrinciples = [
  {
    title: 'Respectful in your space',
    description:
      'Our approach is built around care, communication, and leaving homes and workplaces feeling calm rather than disrupted.',
  },
  {
    title: 'Consistent, checklist-led delivery',
    description:
      'Every clean has a clear scope so standards stay dependable whether you book a one-off deep clean or a recurring visit.',
  },
  {
    title: 'Flexible around real schedules',
    description:
      'From family routines to after-hours office access, we shape the visit around how the property actually works.',
  },
];

export const teamRoles = [
  {
    name: 'Residential Specialists',
    summary: 'Focused on maintenance cleans, deep resets, and move-ready homes.',
    initials: 'RS',
  },
  {
    name: 'Commercial Crew',
    summary: 'Supporting offices, receptions, shared facilities, and out-of-hours contracts.',
    initials: 'CC',
  },
  {
    name: 'Client Support',
    summary: 'Handling scheduling, custom scopes, and clear communication before each booking.',
    initials: 'CS',
  },
];

export const standardsList = [
  'Clear scope before the visit',
  'Thoughtful product selection for the space',
  'Attention to high-touch and high-visibility areas',
  'Flexible options for recurring or one-off work',
  'Professional communication from booking through completion',
];

export const faqItems = [
  {
    question: 'What types of cleaning do you offer?',
    answer:
      'Simply Clean supports homes, offices, move-in and move-out cleans, post-renovation work, eco-conscious visits, and custom-scoped jobs.',
    category: 'Services',
  },
  {
    question: 'Can I book a one-off clean instead of a recurring plan?',
    answer:
      'Yes. You can book a one-off visit for deep cleaning, end-of-tenancy work, specialist jobs, or a tailored custom scope.',
    category: 'Booking',
  },
  {
    question: 'Do you bring your own supplies and equipment?',
    answer:
      'That is the standard setup for most visits. If you prefer particular products or want eco-conscious alternatives, add that note to your enquiry.',
    category: 'Services',
  },
  {
    question: 'How is pricing worked out?',
    answer:
      'Some services start at an hourly rate, while others are quoted by property size or scope. The booking form helps us confirm the right price before anything is finalised.',
    category: 'Pricing',
  },
  {
    question: 'Do I need to be home or on site during the clean?',
    answer:
      'Not always. Many clients provide access instructions or arrange keyholding details. We will confirm the access plan before the visit.',
    category: 'Booking',
  },
  {
    question: 'Can you handle commercial spaces outside office hours?',
    answer:
      'Yes. After-hours office cleaning is available for teams that want the site cleaned without interrupting the working day.',
    category: 'Commercial',
  },
  {
    question: 'Do you offer eco-friendly cleaning?',
    answer:
      'Yes. There is a dedicated eco-conscious option, and we can also note product preferences for other service types where appropriate.',
    category: 'Services',
  },
  {
    question: 'How do payments work?',
    answer:
      'Bookings are confirmed first, and secure payment details or invoice instructions are shared afterwards. We do not collect raw card details through the website forms.',
    category: 'Payments',
  },
  {
    question: 'Can I request a custom checklist?',
    answer:
      'Absolutely. Use the custom scope service or mention your priorities in the booking form so we can shape the visit around your needs.',
    category: 'Services',
  },
  {
    question: 'What information should I include in my enquiry?',
    answer:
      'The most useful details are property type, service needed, preferred date, any access notes, and the rooms or problem areas that matter most.',
    category: 'Booking',
  },
];

export const contactCards = [
  {
    title: 'General enquiries',
    detail: 'cleaniverseLTD@gmail.com',
    href: 'mailto:cleaniverseLTD@gmail.com',
  },
  {
    title: 'Booking requests',
    detail: 'Use the online form to tell us your service, date, and property type.',
    href: '/book-online',
  },
  {
    title: 'Payment support',
    detail: 'Need an invoice reference or secure payment link reissued? Use the payment support page.',
    href: '/payment',
  },
];

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/cleans' },
  { label: 'Book Online', to: '/book-online' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact-us' },
];

export const primaryNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/cleans' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact-us' },
];

export const allServices = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({
    ...service,
    groupId: group.id,
    groupTitle: group.title,
    groupEyebrow: group.eyebrow,
  })),
);

export function findServiceBySlug(slug) {
  return allServices.find((service) => service.slug === slug);
}

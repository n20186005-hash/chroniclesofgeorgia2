import type {Locale} from '@/i18n/config';

export type NearbyLocale = Locale;
export type NearbySlug = 'tbilisi-sea' | 'gardenia-shevardnadze';
export const nearbyCheckedDate = '2026-11-10' as const;

export const nearbySources = {
  sea: { title: 'Georgian National Tourism Administration — Tbilisi Sea', url: 'https://georgia.travel/tbilisi-sea', kind: 'national-tourism' },
  seaClub: { title: 'Georgian National Tourism Administration — Tbilisi Sea Club', url: 'https://georgia.travel/family-attractions/tbilisi-sea-club', kind: 'national-tourism' },
  gardenia: { title: 'Georgian National Tourism Administration — Gardenia Shevardnadze', url: 'https://georgia.travel/gardenia-shevardnadze', kind: 'national-tourism' },
  gardeniaConflict: { title: 'Advantour — Gardenia Shevardnadze (conflicting seasonal/hour listing)', url: 'https://www.advantour.com/georgia/tbilisi/gardenia-shevardnadze.htm', kind: 'commercial-secondary-conflict' },
  gardeniaOperator: { title: 'Gardenia Shevardnadze — operator updates', url: 'https://www.instagram.com/gardeniashevardnadze/', kind: 'operator-entry-point' },
  transit: { title: 'Tbilisi Transport Company — journey planner', url: 'https://transit.ttc.com.ge/', kind: 'municipal-operator-entry-point' },
} as const;

export type NearbySourceId = keyof typeof nearbySources;
export interface NearbySection {
  module: 'tips' | 'highlights' | 'about' | 'opening-hours' | 'admission' | 'transport' | 'appeal' | 'visit-plan' | 'notices' | 'transport-recap';
  title: string;
  paragraphs?: string[];
  items?: string[];
  sourceIds?: NearbySourceId[];
}
export interface NearbyPage {
  slug: NearbySlug;
  checkedDate: typeof nearbyCheckedDate;
  seoTitle: string;
  description: string;
  title: string;
  tagline: string;
  editorialLabel: string;
  checkedLabel: string;
  intro: string[];
  introSourceIds: NearbySourceId[];
  basicInfoTitle: string;
  basicInfo: { label: string; value: string }[];
  sections: NearbySection[];
  faqTitle: string;
  faq: { question: string; answer: string; sourceIds?: NearbySourceId[] }[];
  relatedTitle: string;
  related: { label: string; path: string }[];
  externalLinks: { label: string; url: string }[];
  sourceTitle: string;
  /** Source IDs are evidence, not a statement that an operator was contacted. */
  sources: NearbySourceId[];
}

export const nearbyContent: Record<NearbyLocale, Record<NearbySlug, NearbyPage>> = {
  en: {
    'tbilisi-sea': {
      slug: 'tbilisi-sea', checkedDate: nearbyCheckedDate,
      seoTitle: 'Tbilisi Sea after Chronicles of Georgia: Plan Your Next Stop',
      description: 'Choose a Tbilisi Sea outing after Chronicles of Georgia: reservoir views, separate leisure venues, access checks and practical transport planning.',
      title: 'Tbilisi Sea after the monument', tagline: 'Choose the shoreline visit you actually want before leaving the hilltop.',
      editorialLabel: 'Visitor planning guide', checkedLabel: 'Sources reviewed',
      intro: ['The reservoir below Chronicles of Georgia can be your next destination, but first choose a specific entrance or venue. A view from the monument and a visit beside the water answer different interests.'],
      introSourceIds: ['sea'],
      basicInfoTitle: 'At a glance',
      basicInfo: [
        { label: 'Place', value: 'Tbilisi Sea reservoir, Tbilisi' },
        { label: 'Best suited to', value: 'Visitors choosing a water-view outing after the monument' },
        { label: 'Set before departure', value: 'An exact destination pin and a return journey' },
      ],
      sections: [
        { module: 'tips', title: 'Choose your kind of visit', items: ['For the broad panorama, make the most of the monument visit first. Add a separate water-side stop only if that is part of your plan.', 'For pools, boats or food, identify a named venue and check the services you need before travelling.'] },
        { module: 'highlights', title: 'Two different experiences', items: ['A reservoir landscape seen in the context of the monument.', 'A separately planned leisure stop with its own entrance and conditions.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'about', title: 'Understand the setting', paragraphs: ['Tbilisi Sea is a reservoir in northeastern Tbilisi. GNTA places Chronicles of Georgia above its northwestern shore. Its Sea Club listing describes a separate leisure venue; a destination pin for the reservoir is not a booking or an entrance to that club.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'opening-hours', title: 'Check the place you intend to enter', paragraphs: ['There is no single opening schedule established here for the whole shoreline. Confirm your chosen entrance or venue for the day of travel, especially if a particular service is essential.'] },
        { module: 'admission', title: 'Budget for the actual activity', paragraphs: ['No current all-shore admission tariff was verified. Ask the chosen venue what its fee includes; transport, entry and an optional activity are separate planning questions.'] },
        { module: 'transport', title: 'Plan from entrance to entrance', paragraphs: ['Use the exact monument departure point and your selected destination in a current map or the municipal journey planner. Review the walking segment as well as the vehicle route. This guide does not establish a monument-to-shore walking route or transfer time.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'When the extra stop makes sense', paragraphs: ['Choose the reservoir outing if spending time by water is the aim. Choose Gardenia instead if plants and a cafe are your priority. With limited time, one well-planned stop is more useful than several uncertain transfers.'] },
        { module: 'visit-plan', title: 'A practical visit sequence', items: ['Enjoy the monument and reservoir panorama.', 'Confirm the next entrance, its access conditions and your return transport.', 'Continue only when that specific stop fits your remaining day.'] },
        { module: 'notices', title: 'Before approaching the water', items: ['A tourism description of water activities does not confirm today’s swimming conditions, supervision or permission.', 'Follow local signs and venue instructions. Do not assume every visible shoreline section has public access.'] },
        { module: 'transport-recap', title: 'Save the right destination', paragraphs: ['Search for your chosen entrance or named venue, rather than routing to the middle of “Tbilisi Sea.” Save the return pickup point too.'] },
      ],
      faqTitle: 'Questions before you go', faq: [
        { question: 'Can I walk straight down from the monument?', answer: 'A public walking connection to a specific shore entrance has not been verified here. Check the actual route before setting off.' },
        { question: 'Is Tbilisi Sea the same as Tbilisi Sea Club?', answer: 'No. The reservoir is the wider place; Sea Club is a separately listed leisure venue with its own arrangements.', sourceIds: ['seaClub'] },
        { question: 'Does this guide confirm swimming today?', answer: 'No. Check current local conditions and the instructions at your selected location before entering the water.' },
      ],
      relatedTitle: 'Plan the rest of your outing', related: [{ label: 'Chronicles of Georgia', path: '/' }, { label: 'Gardenia Shevardnadze', path: '/nearby/gardenia-shevardnadze' }],
      externalLinks: [{ label: 'Open the municipal journey planner', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'Sources and further planning', sources: ['sea', 'seaClub', 'transit'],
    },
    'gardenia-shevardnadze': {
      slug: 'gardenia-shevardnadze', checkedDate: nearbyCheckedDate,
      seoTitle: 'Gardenia Shevardnadze: A Garden Stop with Chronicles of Georgia',
      description: 'Plan a Gardenia Shevardnadze garden and cafe visit with Chronicles of Georgia. Compare the outing, check conflicting listings and plan separate transport.',
      title: 'Gardenia Shevardnadze', tagline: 'A garden and cafe choice for a different kind of Tbilisi outing.',
      editorialLabel: 'Visitor planning guide', checkedLabel: 'Sources reviewed',
      intro: ['Gardenia offers a plant-focused alternative to a reservoir stop. Plan it as a separate destination: decide whether you want the garden, nursery or cafe, then confirm the opening arrangements for that part of the visit.'],
      introSourceIds: ['gardenia'],
      basicInfoTitle: 'At a glance', basicInfo: [
        { label: 'Place', value: 'Gardenia Shevardnadze, Tbilisi' },
        { label: 'Main interest', value: 'Garden, plants and a cafe stop' },
        { label: 'Confirm first', value: 'Your date, the garden and cafe hours, and current admission' },
      ],
      sections: [
        { module: 'tips', title: 'Choose what matters to you', items: ['If flowers are the reason for visiting, ask what is in season rather than expecting photographs from another month.', 'If the cafe is essential, confirm its service hours and any reservation arrangements separately from garden entry.'] },
        { module: 'highlights', title: 'A change of pace', items: ['Plant details and garden design rather than the monument’s large-scale forms.', 'A cafe possibility to plan around, rather than a guaranteed meal stop.'], sourceIds: ['gardenia'] },
        { module: 'about', title: 'What Gardenia is', paragraphs: ['GNTA describes Zura Shevardnadze’s garden, nursery and small cafe. Choose this outing for an interest in plants and garden atmosphere; do not treat a specific flower display or menu item as a promise for your date.'], sourceIds: ['gardenia'] },
        { module: 'opening-hours', title: 'Resolve the listing difference', paragraphs: ['GNTA lists February–December, Tuesday–Sunday, 10:00–18:00. Advantour lists a March–December season and later, different closing times for the garden and cafe. These listings disagree; confirm the current arrangements directly before travelling.'], sourceIds: ['gardenia', 'gardeniaConflict', 'gardeniaOperator'] },
        { module: 'admission', title: 'Check the current charge', paragraphs: ['GNTA lists 5 GEL entry. Treat this as its published listing, not a confirmed current price or a cafe allowance. Check what your visit will cost before departure.'], sourceIds: ['gardenia'] },
        { module: 'transport', title: 'Make it a separate journey', paragraphs: ['Plan to the Gardenia entrance, not to a general reservoir pin. Check the actual route from your monument departure point, including the walking segment and return pickup. No transfer time or specific bus connection from the monument is established here.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'Gardenia or Tbilisi Sea?', paragraphs: ['Choose Gardenia when plants and a possible cafe break are the priority. Choose a separately checked reservoir stop when being beside the water matters more. Confirm Gardenia’s hours before deciding which visit comes first.'] },
        { module: 'visit-plan', title: 'Put the day in order', items: ['Confirm the garden and cafe arrangements for your date.', 'Choose whether Gardenia or the monument should come first around those confirmed hours.', 'Save both entrances and arrange the onward or return journey.'] },
        { module: 'notices', title: 'Allow for the visit you want', items: ['Garden entry does not itself confirm cafe seating, workshops or special-event access.', 'Ask about photography arrangements if you plan a formal shoot or bring equipment beyond an ordinary personal visit.'] },
        { module: 'transport-recap', title: 'Save the name and entrance', paragraphs: ['Use “Gardenia Shevardnadze” as the destination and confirm the selected entrance before accepting a route. Keep the operator update link available.'] },
      ],
      faqTitle: 'Questions before you go', faq: [
        { question: 'Can I rely on one closing time for everything?', answer: 'No. Published listings differ and distinguish garden and cafe hours. Confirm each part you intend to use.', sourceIds: ['gardenia', 'gardeniaConflict'] },
        { question: 'Is this part of the monument?', answer: 'It is a separate destination. Plan its own entrance, operating arrangements and transport rather than assuming a continuous visitor route.' },
        { question: 'Is the 5 GEL listing a confirmed current ticket?', answer: 'It is the amount on GNTA’s page. Check the current price directly; food and other purchases need their own budget.', sourceIds: ['gardenia'] },
      ],
      relatedTitle: 'Plan the rest of your outing', related: [{ label: 'Chronicles of Georgia', path: '/' }, { label: 'Tbilisi Sea', path: '/nearby/tbilisi-sea' }],
      externalLinks: [{ label: 'Gardenia operator updates', url: 'https://www.instagram.com/gardeniashevardnadze/' }, { label: 'Municipal journey planner', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'Sources and further planning', sources: ['gardenia', 'gardeniaConflict', 'gardeniaOperator', 'transit'],
    },
  },
  ka: {
    'tbilisi-sea': {
      slug: 'tbilisi-sea', checkedDate: nearbyCheckedDate,
      seoTitle: 'თბილისის ზღვა „საქართველოს მატიანის“ შემდეგ — ვიზიტის დაგეგმვა',
      description: 'დაგეგმეთ თბილისის ზღვაზე გასვლა „საქართველოს მატიანის“ მონახულების შემდეგ: შეარჩიეთ კონკრეტული ადგილი, გადაამოწმეთ მისასვლელი და დაბრუნების გზა.',
      title: 'თბილისის ზღვა მონუმენტის შემდეგ', tagline: 'გორაკიდან დაშვებამდე გადაწყვიტეთ, სად და რისთვის მიდიხართ.',
      editorialLabel: 'ვიზიტის დაგეგმვის გზამკვლევი', checkedLabel: 'წყაროების გადამოწმების თარიღი',
      intro: ['მონუმენტიდან დანახული წყალსაცავი შეიძლება შემდეგი გაჩერება იყოს. ჯერ კონკრეტული შესასვლელი ან ობიექტი შეარჩიეთ: პანორამის დათვალიერება და წყლის პირას დროის გატარება სხვადასხვა გამოცდილებაა.'],
      introSourceIds: ['sea'],
      basicInfoTitle: 'მთავარი ინფორმაცია', basicInfo: [
        { label: 'ადგილი', value: 'თბილისის წყალსაცავი — თბილისის ზღვა' },
        { label: 'ვისთვისაა შესაფერისი', value: 'მათთვის, ვისაც მონუმენტის შემდეგ წყლის ხედთან გაჩერება სურს' },
        { label: 'წინასწარ განსაზღვრეთ', value: 'ზუსტი დანიშნულების წერტილი და დაბრუნების გზა' },
      ],
      sections: [
        { module: 'tips', title: 'შეარჩიეთ სასურველი გამოცდილება', items: ['თუ ფართო პანორამა გაინტერესებთ, ჯერ მონუმენტთან დათვალიერება დაასრულეთ. წყლის პირას ცალკე გაჩერება სურვილის მიხედვით დაამატეთ.', 'აუზის, ნავით გასეირნების ან კვების სურვილის შემთხვევაში კონკრეტული ობიექტი და საჭირო მომსახურება წინასწარ გადაამოწმეთ.'] },
        { module: 'highlights', title: 'ორი განსხვავებული ვიზიტი', items: ['წყალსაცავის ლანდშაფტი მონუმენტის გარემოში.', 'ცალკე დაგეგმილი დასვენება თავისი შესასვლელითა და პირობებით.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'about', title: 'ადგილის შესახებ', paragraphs: ['თბილისის ზღვა ქალაქის ჩრდილო-აღმოსავლეთ ნაწილში მდებარე წყალსაცავია. ტურიზმის ეროვნული ადმინისტრაცია მონუმენტს მის ჩრდილო-დასავლეთ სანაპიროს ზემოთ აღწერს. Tbilisi Sea Club ცალკე დასასვენებელი ობიექტია; წყალსაცავის მონიშვნა კლუბის შესასვლელს არ ნიშნავს.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'opening-hours', title: 'გადაამოწმეთ კონკრეტული ადგილი', paragraphs: ['მთელი სანაპიროს ერთიანი სამუშაო განრიგი ამ გზამკვლევში დადასტურებული არ არის. გადაამოწმეთ შერჩეული შესასვლელის ან ობიექტის პირობები თქვენი ვიზიტის დღისთვის.'] },
        { module: 'admission', title: 'ხარჯი საქმიანობის მიხედვით დაგეგმეთ', paragraphs: ['მთელი სანაპიროსთვის მოქმედი ერთიანი ტარიფი არ გადამოწმებულა. შერჩეულ ობიექტს ჰკითხეთ, რას მოიცავს საფასური; ტრანსპორტი, შესვლა და დამატებითი მომსახურება ცალ-ცალკე გაითვალისწინეთ.'] },
        { module: 'transport', title: 'მარშრუტი შესასვლელამდე დაგეგმეთ', paragraphs: ['რუკაზე ან მუნიციპალურ მარშრუტების დამგეგმავში ზუსტად მიუთითეთ მონუმენტიდან გასვლისა და დანიშნულების წერტილები. შეამოწმეთ ფეხით გასავლელი ნაწილიც. აქ მონუმენტიდან სანაპირომდე დადასტურებული საფეხმავლო გზა ან მგზავრობის დრო მოცემული არ არის.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'როდის ღირს დამატებითი გაჩერება', paragraphs: ['წყლის პირას დასვენებისთვის წყალსაცავთან კონკრეტული ადგილი შეარჩიეთ. თუ მცენარეები და კაფე უფრო გაინტერესებთ, გარდენია განიხილეთ. შეზღუდულ დროში ერთი კარგად დაგეგმილი გაჩერება რამდენიმე გაურკვეველ გადაადგილებას სჯობს.'] },
        { module: 'visit-plan', title: 'ვიზიტის დაგეგმვის ნაბიჯები', items: ['დაათვალიერეთ მონუმენტი და წყალსაცავის პანორამა.', 'დააზუსტეთ შემდეგი შესასვლელი, დაშვების პირობები და დაბრუნების ტრანსპორტი.', 'გააგრძელეთ მხოლოდ მაშინ, თუ შერჩეული გაჩერება დარჩენილ დროში გეტევათ.'] },
        { module: 'notices', title: 'წყალთან მისვლამდე', items: ['ტურისტულ აღწერაში წყლის აქტივობების ხსენება დღევანდელ საბანაო პირობებს, ზედამხედველობას ან ნებართვას არ ადასტურებს.', 'დაიცავით ადგილზე განთავსებული ნიშნები და ობიექტის მითითებები. ყველა ხილული სანაპირო საჯარო მისასვლელად არ ჩათვალოთ.'] },
        { module: 'transport-recap', title: 'შეინახეთ სწორი დანიშნულება', paragraphs: ['მოძებნეთ კონკრეტული შესასვლელი ან ობიექტი და არა მხოლოდ „თბილისის ზღვის“ ზოგადი წერტილი. დაბრუნებისთვის შეხვედრის ადგილიც შეინახეთ.'] },
      ],
      faqTitle: 'ხშირი კითხვები', faq: [
        { question: 'შეიძლება მონუმენტიდან პირდაპირ ფეხით ჩასვლა?', answer: 'კონკრეტულ სანაპირო შესასვლელამდე საჯარო საფეხმავლო კავშირი აქ გადამოწმებული არ არის. გასვლამდე რეალური გზა შეამოწმეთ.' },
        { question: 'თბილისის ზღვა და Tbilisi Sea Club ერთი ადგილია?', answer: 'წყალსაცავი უფრო ფართო ადგილია, კლუბი კი ცალკე აღწერილი დასასვენებელი ობიექტი თავისი პირობებით.', sourceIds: ['seaClub'] },
        { question: 'დადასტურებულია, რომ დღეს ბანაობა შეიძლება?', answer: 'არა. წყალში შესვლამდე გადაამოწმეთ მიმდინარე პირობები და კონკრეტულ ადგილზე მოქმედი მითითებები.' },
      ],
      relatedTitle: 'დაგეგმეთ შემდეგი გაჩერება', related: [{ label: 'საქართველოს მატიანე', path: '/ka' }, { label: 'გარდენია შევარდნაძე', path: '/ka/nearby/gardenia-shevardnadze' }],
      externalLinks: [{ label: 'მუნიციპალური მარშრუტების დამგეგმავი', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'წყაროები და დაგეგმვის ბმულები', sources: ['sea', 'seaClub', 'transit'],
    },
    'gardenia-shevardnadze': {
      slug: 'gardenia-shevardnadze', checkedDate: nearbyCheckedDate,
      seoTitle: 'გარდენია შევარდნაძე და საქართველოს მატიანე — ვიზიტის დაგეგმვა',
      description: 'დაგეგმეთ გარდენია შევარდნაძის ბაღისა და კაფეს მონახულება: შეადარეთ გასვლის ვარიანტები, გადაამოწმეთ განსხვავებული განრიგები და მოაწყვეთ ტრანსპორტი.',
      title: 'გარდენია შევარდნაძე', tagline: 'ბაღისა და კაფეს არჩევანი თბილისის განსხვავებული გასეირნებისთვის.',
      editorialLabel: 'ვიზიტის დაგეგმვის გზამკვლევი', checkedLabel: 'წყაროების გადამოწმების თარიღი',
      intro: ['გარდენია წყალსაცავთან გაჩერების მცენარეებზე ორიენტირებული ალტერნატივაა. ცალკე დანიშნულებად დაგეგმეთ: გადაწყვიტეთ, ბაღი, სანერგე თუ კაფე გაინტერესებთ და შესაბამისი ნაწილის სამუშაო პირობები დააზუსტეთ.'],
      introSourceIds: ['gardenia'],
      basicInfoTitle: 'მთავარი ინფორმაცია', basicInfo: [
        { label: 'ადგილი', value: 'გარდენია შევარდნაძე, თბილისი' },
        { label: 'მთავარი ინტერესი', value: 'ბაღი, მცენარეები და კაფეში გაჩერება' },
        { label: 'წინასწარ დააზუსტეთ', value: 'თარიღი, ბაღისა და კაფეს განრიგი, შესვლის მიმდინარე საფასური' },
      ],
      sections: [
        { module: 'tips', title: 'განსაზღვრეთ ვიზიტის მიზანი', items: ['თუ ყვავილების სანახავად მიდიხართ, იკითხეთ, რა ყვავის თქვენს სეზონზე; სხვა თვეში გადაღებული ფოტოს გამეორებას ნუ დაელოდებით.', 'თუ კაფე მთავარი მიზანია, მომსახურების საათები და დაჯავშნის პირობები ბაღში შესვლისგან დამოუკიდებლად გადაამოწმეთ.'] },
        { module: 'highlights', title: 'სხვა მასშტაბის შთაბეჭდილება', items: ['მცენარეების დეტალები და ბაღის მოწყობა მონუმენტის დიდი ფორმების შემდეგ.', 'კაფეში გაჩერების შესაძლებლობა, რომელიც წინასწარ უნდა დაგეგმოთ.'], sourceIds: ['gardenia'] },
        { module: 'about', title: 'რა არის გარდენია', paragraphs: ['ტურიზმის ეროვნული ადმინისტრაცია აღწერს ზურა შევარდნაძის ბაღს, სანერგესა და პატარა კაფეს. ეს გასვლა მცენარეებისა და ბაღის გარემოს მოყვარულებს შეეფერება; კონკრეტული ყვავილობა ან მენიუს კერძი თქვენი თარიღისთვის გარანტირებული არ არის.'], sourceIds: ['gardenia'] },
        { module: 'opening-hours', title: 'განსხვავებული განრიგები', paragraphs: ['ტურიზმის ეროვნული ადმინისტრაცია უთითებს თებერვალ–დეკემბერს, სამშაბათიდან კვირის ჩათვლით, 10:00–18:00 საათებს. Advantour მარტ–დეკემბრის სეზონსა და ბაღისა და კაფეს განსხვავებულ, უფრო გვიან დახურვას ასახელებს. მონაცემები ერთმანეთს არ ემთხვევა; გამგზავრებამდე მიმდინარე პირობები უშუალოდ დააზუსტეთ.'], sourceIds: ['gardenia', 'gardeniaConflict', 'gardeniaOperator'] },
        { module: 'admission', title: 'შესვლის საფასური გადაამოწმეთ', paragraphs: ['ტურიზმის ეროვნული ადმინისტრაციის გვერდზე შესვლა 5 ლარადაა მითითებული. ეს გამოქვეყნებული ჩანაწერია და არა მიმდინარე ფასის ან კაფეში ხარჯის დადასტურება. გასვლამდე სრული ბიუჯეტი დააზუსტეთ.'], sourceIds: ['gardenia'] },
        { module: 'transport', title: 'ცალკე მგზავრობა დაგეგმეთ', paragraphs: ['მარშრუტი გარდენიის შესასვლელამდე დაგეგმეთ და არა წყალსაცავის ზოგად წერტილამდე. მონუმენტიდან შეამოწმეთ რეალური გზა, ფეხით გასავლელი მონაკვეთი და დაბრუნების ადგილი. აქ კონკრეტული ავტობუსი ან მგზავრობის დრო დადასტურებული არ არის.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'გარდენია თუ თბილისის ზღვა?', paragraphs: ['თუ მცენარეები და კაფეში შესაძლო შესვენება გიზიდავთ, გარდენია აირჩიეთ. წყლის პირას დროის გასატარებლად წყალსაცავთან ცალკე შემოწმებული ადგილი შეარჩიეთ. ვიზიტების რიგითობა გარდენიის დაზუსტებულ განრიგს მოარგეთ.'] },
        { module: 'visit-plan', title: 'დღის დაგეგმვის ნაბიჯები', items: ['დაადასტურეთ ბაღისა და კაფეს პირობები თქვენი თარიღისთვის.', 'დაზუსტებული განრიგის მიხედვით გადაწყვიტეთ, ჯერ გარდენიას ეწვევით თუ მონუმენტს.', 'შეინახეთ ორივე შესასვლელი და მოაწყვეთ შემდეგი ან დაბრუნების მგზავრობა.'] },
        { module: 'notices', title: 'სასურველი ვიზიტი წინასწარ დააზუსტეთ', items: ['ბაღში შესვლა თავისთავად კაფეში ადგილს, მასტერკლასს ან სპეციალურ ღონისძიებაზე დასწრებას არ ნიშნავს.', 'პროფესიული ფოტოსესიის ან დამატებითი აღჭურვილობის შემთხვევაში გადაღების პირობები წინასწარ იკითხეთ.'] },
        { module: 'transport-recap', title: 'შეინახეთ სახელი და შესასვლელი', paragraphs: ['დანიშნულებად „გარდენია შევარდნაძე“ მიუთითეთ და მარშრუტის მიღებამდე შესასვლელი გადაამოწმეთ. ოპერატორის განახლებების ბმულიც შეინახეთ.'] },
      ],
      faqTitle: 'ხშირი კითხვები', faq: [
        { question: 'ყველა ნაწილისთვის ერთი დახურვის დრო მოქმედებს?', answer: 'ამას ნუ დაეყრდნობით. წყაროებში ბაღისა და კაფეს განრიგები განსხვავდება; თქვენთვის საჭირო თითოეული ნაწილი გადაამოწმეთ.', sourceIds: ['gardenia', 'gardeniaConflict'] },
        { question: 'გარდენია მონუმენტის ნაწილია?', answer: 'ეს ცალკე დანიშნულებაა. მას თავისი შესასვლელი, სამუშაო პირობები და ტრანსპორტის გეგმა სჭირდება.' },
        { question: '5 ლარი დღევანდელი დადასტურებული ფასია?', answer: 'ეს ტურიზმის ეროვნული ადმინისტრაციის გვერდზე მითითებული თანხაა. მიმდინარე ფასი უშუალოდ იკითხეთ; საკვები და სხვა შესყიდვები ცალკე გაითვალისწინეთ.', sourceIds: ['gardenia'] },
      ],
      relatedTitle: 'დაგეგმეთ შემდეგი გაჩერება', related: [{ label: 'საქართველოს მატიანე', path: '/ka' }, { label: 'თბილისის ზღვა', path: '/ka/nearby/tbilisi-sea' }],
      externalLinks: [{ label: 'გარდენიის განახლებები', url: 'https://www.instagram.com/gardeniashevardnadze/' }, { label: 'მუნიციპალური მარშრუტების დამგეგმავი', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'წყაროები და დაგეგმვის ბმულები', sources: ['gardenia', 'gardeniaConflict', 'gardeniaOperator', 'transit'],
    },
  },
  ru: {
    'tbilisi-sea': {
      slug: 'tbilisi-sea', checkedDate: nearbyCheckedDate,
      seoTitle: 'Тбилисское море после «Хроники Грузии»: как спланировать поездку',
      description: 'Выберите остановку у Тбилисского моря после «Хроники Грузии»: виды на водохранилище, отдельные зоны отдыха, проверка входа и обратного транспорта.',
      title: 'Тбилисское море после монумента', tagline: 'Прежде чем покинуть холм, выберите конкретное место у воды.',
      editorialLabel: 'Путеводитель для планирования', checkedLabel: 'Источники проверены',
      intro: ['Водохранилище под «Хроникой Грузии» может стать следующей остановкой. Сначала выберите конкретный вход или заведение: панорама с монумента и отдых непосредственно у воды — разные варианты прогулки.'],
      introSourceIds: ['sea'],
      basicInfoTitle: 'Краткая информация', basicInfo: [
        { label: 'Место', value: 'Водохранилище Тбилисское море, Тбилиси' },
        { label: 'Кому подойдёт', value: 'Тем, кто хочет продолжить поездку остановкой у воды' },
        { label: 'Определите заранее', value: 'Точный пункт назначения и обратный маршрут' },
      ],
      sections: [
        { module: 'tips', title: 'Выберите формат отдыха', items: ['Если нужна широкая панорама, сначала спокойно осмотрите монумент. Отдельную остановку у воды добавляйте по своему желанию.', 'Для бассейна, лодочной прогулки или обеда выберите конкретное заведение и заранее уточните нужные услуги.'] },
        { module: 'highlights', title: 'Два разных впечатления', items: ['Пейзаж водохранилища в окружении монумента.', 'Самостоятельно спланированный отдых со своим входом и условиями.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'about', title: 'Что это за место', paragraphs: ['Тбилисское море — водохранилище на северо-востоке города. GNTA описывает монумент над его северо-западным берегом. Tbilisi Sea Club представлен как отдельный объект отдыха: точка водохранилища на карте не является входом или бронированием в клуб.'], sourceIds: ['sea', 'seaClub'] },
        { module: 'opening-hours', title: 'Проверьте выбранный вход', paragraphs: ['Единый график доступа ко всему берегу здесь не установлен. Уточните условия выбранного входа или заведения на день поездки, особенно если вам нужна определённая услуга.'] },
        { module: 'admission', title: 'Рассчитайте расходы по плану', paragraphs: ['Актуальный единый тариф для всего берега не подтверждён. Узнайте, что включает плата выбранного заведения; проезд, вход и дополнительные занятия учитывайте отдельно.'] },
        { module: 'transport', title: 'Стройте маршрут до конкретного входа', paragraphs: ['Укажите точку отправления от монумента и выбранный вход в актуальной карте или муниципальном планировщике. Проверьте и пешую часть пути. В этом руководстве не подтверждены пешеходное соединение с берегом или время переезда.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'Когда стоит продолжать поездку', paragraphs: ['Выбирайте водохранилище, если хотите провести время у воды. Если важнее растения и возможная пауза в кафе, рассмотрите Gardenia. При ограниченном времени одна продуманная остановка удобнее нескольких непроверенных переездов.'] },
        { module: 'visit-plan', title: 'Последовательность планирования', items: ['Осмотрите монумент и панораму водохранилища.', 'Проверьте следующий вход, условия доступа и обратный транспорт.', 'Продолжайте поездку, если конкретная остановка подходит вашему оставшемуся времени.'] },
        { module: 'notices', title: 'Перед подходом к воде', items: ['Упоминание водных развлечений в туристическом описании не подтверждает сегодняшние условия купания, наблюдение спасателей или разрешение.', 'Соблюдайте местные знаки и указания. Не считайте каждый видимый участок берега общедоступным.'] },
        { module: 'transport-recap', title: 'Сохраните правильную точку', paragraphs: ['Ищите выбранный вход или заведение, а не общую точку «Тбилисское море». Сохраните и место встречи для обратной поездки.'] },
      ],
      faqTitle: 'Вопросы перед поездкой', faq: [
        { question: 'Можно просто спуститься пешком от монумента?', answer: 'Общедоступный пеший путь к конкретному входу на берег здесь не проверен. Уточните реальную дорогу до выхода.' },
        { question: 'Тбилисское море и Tbilisi Sea Club — одно и то же?', answer: 'Нет. Водохранилище — более широкое место, а Sea Club — отдельно описанный объект отдыха со своими условиями.', sourceIds: ['seaClub'] },
        { question: 'Можно ли сегодня купаться?', answer: 'Это руководство не подтверждает текущие условия. Проверьте обстановку и указания на выбранном участке перед входом в воду.' },
      ],
      relatedTitle: 'Другие части вашей поездки', related: [{ label: 'Хроника Грузии', path: '/ru' }, { label: 'Gardenia Shevardnadze', path: '/ru/nearby/gardenia-shevardnadze' }],
      externalLinks: [{ label: 'Муниципальный планировщик маршрутов', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'Источники и полезные ссылки', sources: ['sea', 'seaClub', 'transit'],
    },
    'gardenia-shevardnadze': {
      slug: 'gardenia-shevardnadze', checkedDate: nearbyCheckedDate,
      seoTitle: 'Gardenia Shevardnadze и «Хроника Грузии»: сад, кафе и план поездки',
      description: 'Спланируйте Gardenia Shevardnadze вместе с «Хроникой Грузии»: выберите сад или кафе, проверьте разные опубликованные графики и отдельный маршрут.',
      title: 'Gardenia Shevardnadze', tagline: 'Сад и возможная остановка в кафе для другого впечатления от Тбилиси.',
      editorialLabel: 'Путеводитель для планирования', checkedLabel: 'Источники проверены',
      intro: ['Gardenia — вариант для любителей растений вместо остановки у водохранилища. Планируйте её отдельно: выберите сад, питомник или кафе и уточните режим работы именно той части, которую хотите посетить.'],
      introSourceIds: ['gardenia'],
      basicInfoTitle: 'Краткая информация', basicInfo: [
        { label: 'Место', value: 'Gardenia Shevardnadze, Тбилиси' },
        { label: 'Основной интерес', value: 'Сад, растения и остановка в кафе' },
        { label: 'Уточните сначала', value: 'Дату, часы сада и кафе, актуальную плату за вход' },
      ],
      sections: [
        { module: 'tips', title: 'Определите цель визита', items: ['Если едете ради цветов, спросите, что цветёт в вашем сезоне. Фотографии другого месяца не обещают такую же картину.', 'Если главное — кафе, отдельно уточните часы обслуживания и условия бронирования, а не только доступ в сад.'] },
        { module: 'highlights', title: 'Смена масштаба', items: ['Детали растений и устройство сада после крупных форм монумента.', 'Возможность запланировать кафе без обещания гарантированного обеда.'], sourceIds: ['gardenia'] },
        { module: 'about', title: 'Что представляет собой Gardenia', paragraphs: ['GNTA описывает сад Зуры Шеварднадзе, питомник и небольшое кафе. Выбирайте эту поездку ради растений и атмосферы сада; конкретное цветение или блюдо не гарантировано на вашу дату.'], sourceIds: ['gardenia'] },
        { module: 'opening-hours', title: 'Уточните расхождения в расписании', paragraphs: ['GNTA указывает февраль–декабрь, вторник–воскресенье, 10:00–18:00. Advantour указывает сезон с марта по декабрь и более позднее, разное закрытие сада и кафе. Данные расходятся; уточните действующие условия непосредственно перед поездкой.'], sourceIds: ['gardenia', 'gardeniaConflict', 'gardeniaOperator'] },
        { module: 'admission', title: 'Проверьте действующую цену', paragraphs: ['В записи GNTA указан вход за 5 GEL. Это опубликованная информация, а не подтверждённая текущая цена или сумма на питание. Уточните стоимость вашего визита заранее.'], sourceIds: ['gardenia'] },
        { module: 'transport', title: 'Запланируйте отдельный переезд', paragraphs: ['Стройте путь до входа Gardenia, а не до общей точки водохранилища. Проверьте маршрут от места отправления у монумента, пеший участок и обратную посадку. Время переезда и конкретный автобус от монумента здесь не подтверждены.'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'Gardenia или Тбилисское море?', paragraphs: ['Выбирайте Gardenia, если интересуют растения и возможная пауза в кафе. Для отдыха у воды подберите отдельно проверенную остановку на водохранилище. Порядок поездки определяйте после уточнения часов Gardenia.'] },
        { module: 'visit-plan', title: 'Как выстроить день', items: ['Подтвердите условия сада и кафе на вашу дату.', 'По уточнённому графику решите, что посетить первым — Gardenia или монумент.', 'Сохраните оба входа и спланируйте дальнейшую или обратную поездку.'] },
        { module: 'notices', title: 'Уточните нужные условия', items: ['Вход в сад сам по себе не подтверждает место в кафе, мастер-класс или доступ на специальное мероприятие.', 'Для постановочной съёмки или дополнительного оборудования заранее спросите об условиях фотографирования.'] },
        { module: 'transport-recap', title: 'Сохраните название и вход', paragraphs: ['Укажите «Gardenia Shevardnadze» и проверьте выбранный вход перед подтверждением маршрута. Сохраните ссылку на обновления заведения.'] },
      ],
      faqTitle: 'Вопросы перед поездкой', faq: [
        { question: 'Можно ориентироваться на одно время закрытия?', answer: 'Нет. Опубликованные данные различаются и выделяют сад и кафе. Уточните режим каждой нужной вам части.', sourceIds: ['gardenia', 'gardeniaConflict'] },
        { question: 'Gardenia относится к комплексу монумента?', answer: 'Это отдельное место. Ему нужны свой вход, проверка условий работы и самостоятельный транспортный план.' },
        { question: '5 GEL — подтверждённый билет на сегодня?', answer: 'Это сумма на странице GNTA. Уточните текущую цену напрямую; питание и покупки учитывайте отдельно.', sourceIds: ['gardenia'] },
      ],
      relatedTitle: 'Другие части вашей поездки', related: [{ label: 'Хроника Грузии', path: '/ru' }, { label: 'Тбилисское море', path: '/ru/nearby/tbilisi-sea' }],
      externalLinks: [{ label: 'Обновления Gardenia', url: 'https://www.instagram.com/gardeniashevardnadze/' }, { label: 'Муниципальный планировщик', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: 'Источники и полезные ссылки', sources: ['gardenia', 'gardeniaConflict', 'gardeniaOperator', 'transit'],
    },
  },
  'zh-hant': {
    'tbilisi-sea': {
      slug: 'tbilisi-sea', checkedDate: nearbyCheckedDate,
      seoTitle: '第比利斯海怎麼安排？格魯吉亞編年史之後的水庫行程',
      description: '看完格魯吉亞編年史後，如何安排第比利斯海？分清水庫景觀與個別休閒場所，確認實際入口、當日條件及回程交通，再選擇下一站。',
      title: '看完紀念碑，再安排第比利斯海', tagline: '離開山丘前，先決定想去哪一段、做什麼。',
      editorialLabel: '旅客行程指南', checkedLabel: '資料核查日期',
      intro: ['從格魯吉亞編年史望見的水庫，可以成為下一站。不過，先選定具體入口或場所：在紀念碑欣賞全景，與到水邊停留，是兩種不同的旅行安排。'],
      introSourceIds: ['sea'],
      basicInfoTitle: '行前重點', basicInfo: [
        { label: '地點', value: '第比利斯海水庫，第比利斯' },
        { label: '適合需求', value: '看完紀念碑後，想再安排水景停留' },
        { label: '出發前決定', value: '確切目的地定位與回程方式' },
      ],
      sections: [
        { module: 'tips', title: '先選擇想要的停留方式', items: ['若主要想看廣闊全景，先完整欣賞紀念碑周邊視野，再決定是否另外前往水邊。', '若目標是泳池、乘船或用餐，先找出具名場所，確認你需要的服務是否提供。'] },
        { module: 'highlights', title: '兩種不同的體驗', items: ['在紀念碑環境中欣賞水庫地景。', '另行規劃有自己入口與條件的休閒停留。'], sourceIds: ['sea', 'seaClub'] },
        { module: 'about', title: '先認識這片水域', paragraphs: ['第比利斯海是市區東北方的水庫。格魯吉亞國家旅遊局將紀念碑描述為位於水庫西北岸上方；Tbilisi Sea Club 則是另列的休閒場所。把水庫設為導航目的地，不等於找到俱樂部入口或完成預約。'], sourceIds: ['sea', 'seaClub'] },
        { module: 'opening-hours', title: '查詢你要進入的具體場所', paragraphs: ['本指南未確認整段岸線有統一開放時間。請按旅行日期確認所選入口或場所的條件，尤其是你特別需要某項服務時。'] },
        { module: 'admission', title: '依實際活動安排預算', paragraphs: ['目前未核實全岸線通用的收費。向所選場所詢問費用包含什麼，並將交通、入場與選購活動分開計算。'] },
        { module: 'transport', title: '從確切出發點規劃到入口', paragraphs: ['在即時地圖或市營交通規劃器輸入紀念碑的實際出發點，以及選定的入口。除了車程，也要查看步行路段。本指南未確認紀念碑到岸邊的公共步道或轉乘時間。'], sourceIds: ['transit'] },
        { module: 'appeal', title: '什麼情況值得多停一站', paragraphs: ['想把時間留給水邊，就挑選合適的水庫停留點；偏好植物與可能的咖啡休息，則可考慮 Gardenia。時間有限時，一個安排清楚的目的地，比連續幾段尚未確認的移動實用。'] },
        { module: 'visit-plan', title: '建議的規劃順序', items: ['先參觀紀念碑，欣賞水庫全景。', '確認下一站入口、進入條件與回程交通。', '再判斷這個具體停留點是否符合當天剩餘時間。'] },
        { module: 'notices', title: '靠近水域前', items: ['旅遊介紹提到水上活動，不代表已確認今天可下水、有人救生或水況適合。', '遵守現場標誌與場所指示，不要把每一段看得見的岸線都視為公共入口。'] },
        { module: 'transport-recap', title: '儲存正確的定位', paragraphs: ['搜尋選定的入口或具名場所，不要只導向「第比利斯海」的大範圍定位；也儲存回程上車點。'] },
      ],
      faqTitle: '出發前常見問題', faq: [
        { question: '可以直接從紀念碑走下去嗎？', answer: '本指南尚未核實通往特定岸邊入口的公共步行連接，出發前請確認真正可走的路線。' },
        { question: '第比利斯海就是 Tbilisi Sea Club 嗎？', answer: '不是。水庫是較大的地理範圍，Sea Club 是另列的休閒場所，各有自己的安排。', sourceIds: ['seaClub'] },
        { question: '這裡能確認今天可以游泳嗎？', answer: '不能。下水前需另外確認當地即時情況及所選地點的現場指示。' },
      ],
      relatedTitle: '接著規劃你的行程', related: [{ label: '格魯吉亞編年史', path: '/zh-hant' }, { label: 'Gardenia Shevardnadze 花園', path: '/zh-hant/nearby/gardenia-shevardnadze' }],
      externalLinks: [{ label: '開啟市營交通規劃器', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: '資料來源與規劃連結', sources: ['sea', 'seaClub', 'transit'],
    },
    'gardenia-shevardnadze': {
      slug: 'gardenia-shevardnadze', checkedDate: nearbyCheckedDate,
      seoTitle: 'Gardenia Shevardnadze 花園：搭配格魯吉亞編年史的行前指南',
      description: '想把 Gardenia Shevardnadze 花園與格魯吉亞編年史排在一起？先分清花園、苗圃與咖啡館需求，核對不同營業資料並安排獨立交通。',
      title: 'Gardenia Shevardnadze 花園', tagline: '用植物與咖啡休息，安排另一種第比利斯體驗。',
      editorialLabel: '旅客行程指南', checkedLabel: '資料核查日期',
      intro: ['如果比起水庫更喜歡植物，Gardenia 是另一種選擇。把它作為獨立目的地，先決定花園、苗圃或咖啡館哪一項最重要，再確認該部分的當日安排。'],
      introSourceIds: ['gardenia'],
      basicInfoTitle: '行前重點', basicInfo: [
        { label: '地點', value: 'Gardenia Shevardnadze，第比利斯' },
        { label: '主要體驗', value: '花園、植物與咖啡休息' },
        { label: '先確認', value: '旅行日期、花園與咖啡館時段、現行入場費' },
      ],
      sections: [
        { module: 'tips', title: '先選擇最在意的體驗', items: ['若為花卉而來，先詢問當季景況，不要期待與其他月份照片完全相同的花況。', '若咖啡館是重點，請另外確認供餐時段與預約安排，不要只查花園開放時間。'] },
        { module: 'highlights', title: '從宏大尺度轉向細節', items: ['看完紀念碑，再把注意力放到植物與花園設計。', '把咖啡休息當作需事先確認的選項，避免到場才假設一定能用餐。'], sourceIds: ['gardenia'] },
        { module: 'about', title: 'Gardenia 是什麼地方', paragraphs: ['格魯吉亞國家旅遊局介紹了 Zura Shevardnadze 的花園、苗圃與小咖啡館。適合因植物與庭園氣氛而來；特定花卉或菜單品項，並非你的旅行日期一定能遇到。'], sourceIds: ['gardenia'] },
        { module: 'opening-hours', title: '先核對不同的營業資料', paragraphs: ['國家旅遊局列示二月至十二月、週二至週日 10:00–18:00；Advantour 則列三月至十二月，並分別提供花園與咖啡館較晚的關門時間。兩者不一致，出發前請向店家確認現行安排。'], sourceIds: ['gardenia', 'gardeniaConflict', 'gardeniaOperator'] },
        { module: 'admission', title: '確認現在的收費', paragraphs: ['國家旅遊局頁面列示入場 5 GEL。這是來源刊載的金額，不代表本指南已確認現價，也不代表包含餐飲；出發前另行查詢。'], sourceIds: ['gardenia'] },
        { module: 'transport', title: '當作獨立的一段交通', paragraphs: ['導航到 Gardenia 的實際入口，而非水庫的一般定位。從紀念碑出發時，檢查步行路段及回程上車點；此處沒有已核實的轉乘時間或指定公車連接。'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'Gardenia 還是第比利斯海？', paragraphs: ['植物與可能的咖啡休息優先，就選 Gardenia；想在水邊停留，則選另外查清入口的水庫地點。先確認花園與咖啡館時段，再決定兩站的先後順序。'] },
        { module: 'visit-plan', title: '安排順序的三個步驟', items: ['確認旅行當天花園與咖啡館各自的安排。', '依確認後的時段，決定先去 Gardenia 或紀念碑。', '儲存兩邊入口，安排下一段或回程交通。'] },
        { module: 'notices', title: '為你想要的活動多問一步', items: ['可以進花園，不等於已有咖啡館座位、工作坊名額或特殊活動資格。', '若安排正式拍攝，或攜帶超出一般個人遊覽的器材，請先詢問拍攝安排。'] },
        { module: 'transport-recap', title: '儲存名稱與入口', paragraphs: ['以「Gardenia Shevardnadze」搜尋，確認選到正確入口後再接受路線，同時保留店家更新連結。'] },
      ],
      faqTitle: '出發前常見問題', faq: [
        { question: '能用一個關門時間安排全部活動嗎？', answer: '不要這樣假設。刊載資料不同，也區分花園與咖啡館，請分別確認你需要的部分。', sourceIds: ['gardenia', 'gardeniaConflict'] },
        { question: 'Gardenia 是紀念碑園區的一部分嗎？', answer: '它是獨立目的地，需要另外確認入口、營業安排與交通，不能當作連續的園內參觀路線。' },
        { question: '5 GEL 是今天已確認的票價嗎？', answer: '這是國家旅遊局頁面刊載的金額；現價請向店家確認，餐飲與其他購買另計預算。', sourceIds: ['gardenia'] },
      ],
      relatedTitle: '接著規劃你的行程', related: [{ label: '格魯吉亞編年史', path: '/zh-hant' }, { label: '第比利斯海', path: '/zh-hant/nearby/tbilisi-sea' }],
      externalLinks: [{ label: 'Gardenia 店家更新', url: 'https://www.instagram.com/gardeniashevardnadze/' }, { label: '市營交通規劃器', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: '資料來源與規劃連結', sources: ['gardenia', 'gardeniaConflict', 'gardeniaOperator', 'transit'],
    },
  },
  'zh-cn': {
    'tbilisi-sea': {
      slug: 'tbilisi-sea', checkedDate: nearbyCheckedDate,
      seoTitle: '第比利斯海怎么安排？格鲁吉亚编年史之后的水库行程',
      description: '看完格鲁吉亚编年史后，如何安排第比利斯海？分清水库景观与独立休闲场所，确认实际入口、当日条件及返程交通，再选择下一站。',
      title: '看完纪念碑，再安排第比利斯海', tagline: '离开山丘前，先决定想去哪一段、做什么。',
      editorialLabel: '游客行程指南', checkedLabel: '资料核查日期',
      intro: ['从格鲁吉亚编年史望见的水库，可以成为下一站。不过，先选定具体入口或场所：在纪念碑欣赏全景，与到水边停留，是两种不同的旅行安排。'],
      introSourceIds: ['sea'],
      basicInfoTitle: '行前重点', basicInfo: [
        { label: '地点', value: '第比利斯海水库，第比利斯' },
        { label: '适合需求', value: '看完纪念碑后，想再安排水景停留' },
        { label: '出发前决定', value: '确切目的地定位与返程方式' },
      ],
      sections: [
        { module: 'tips', title: '先选择想要的停留方式', items: ['若主要想看广阔全景，先完整欣赏纪念碑周边视野，再决定是否另外前往水边。', '若目标是泳池、乘船或用餐，先找出具名场所，确认你需要的服务是否提供。'] },
        { module: 'highlights', title: '两种不同的体验', items: ['在纪念碑环境中欣赏水库景观。', '另行规划有自己入口与条件的休闲停留。'], sourceIds: ['sea', 'seaClub'] },
        { module: 'about', title: '先认识这片水域', paragraphs: ['第比利斯海是市区东北方的水库。格鲁吉亚国家旅游局将纪念碑描述为位于水库西北岸上方；Tbilisi Sea Club 则是另列的休闲场所。把水库设为导航目的地，不等于找到俱乐部入口或完成预约。'], sourceIds: ['sea', 'seaClub'] },
        { module: 'opening-hours', title: '查询你要进入的具体场所', paragraphs: ['本指南未确认整段岸线有统一开放时间。请按旅行日期确认所选入口或场所的条件，尤其是你特别需要某项服务时。'] },
        { module: 'admission', title: '依实际活动安排预算', paragraphs: ['目前未核实全岸线通用的收费。向所选场所询问费用包含什么，并将交通、入场与自选活动分开计算。'] },
        { module: 'transport', title: '从确切出发点规划到入口', paragraphs: ['在实时地图或市营交通规划器输入纪念碑的实际出发点，以及选定的入口。除了车程，也要查看步行路段。本指南未确认纪念碑到岸边的公共步道或换乘时间。'], sourceIds: ['transit'] },
        { module: 'appeal', title: '什么情况值得多停一站', paragraphs: ['想把时间留给水边，就挑选合适的水库停留点；偏好植物与可能的咖啡休息，则可考虑 Gardenia。时间有限时，一个安排清楚的目的地，比连续几段尚未确认的移动实用。'] },
        { module: 'visit-plan', title: '建议的规划顺序', items: ['先参观纪念碑，欣赏水库全景。', '确认下一站入口、进入条件与返程交通。', '再判断这个具体停留点是否符合当天剩余时间。'] },
        { module: 'notices', title: '靠近水域前', items: ['旅游介绍提到水上活动，不代表已确认今天可下水、有人救生或水况适合。', '遵守现场标志与场所指示，不要把每一段看得见的岸线都视为公共入口。'] },
        { module: 'transport-recap', title: '保存正确的定位', paragraphs: ['搜索选定的入口或具名场所，不要只导向“第比利斯海”的大范围定位；也保存返程上车点。'] },
      ],
      faqTitle: '出发前常见问题', faq: [
        { question: '可以直接从纪念碑走下去吗？', answer: '本指南尚未核实通往特定岸边入口的公共步行连接，出发前请确认真正可走的路线。' },
        { question: '第比利斯海就是 Tbilisi Sea Club 吗？', answer: '不是。水库是较大的地理范围，Sea Club 是另列的休闲场所，各有自己的安排。', sourceIds: ['seaClub'] },
        { question: '这里能确认今天可以游泳吗？', answer: '不能。下水前需另外确认当地实时情况及所选地点的现场指示。' },
      ],
      relatedTitle: '接着规划你的行程', related: [{ label: '格鲁吉亚编年史', path: '/zh-cn' }, { label: 'Gardenia Shevardnadze 花园', path: '/zh-cn/nearby/gardenia-shevardnadze' }],
      externalLinks: [{ label: '打开市营交通规划器', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: '资料来源与规划链接', sources: ['sea', 'seaClub', 'transit'],
    },
    'gardenia-shevardnadze': {
      slug: 'gardenia-shevardnadze', checkedDate: nearbyCheckedDate,
      seoTitle: 'Gardenia Shevardnadze 花园：搭配格鲁吉亚编年史的行前指南',
      description: '想把 Gardenia Shevardnadze 花园与格鲁吉亚编年史排在一起？先分清花园、苗圃与咖啡馆需求，核对不同营业资料并安排独立交通。',
      title: 'Gardenia Shevardnadze 花园', tagline: '用植物与咖啡休息，安排另一种第比利斯体验。',
      editorialLabel: '游客行程指南', checkedLabel: '资料核查日期',
      intro: ['如果比起水库更喜欢植物，Gardenia 是另一种选择。把它作为独立目的地，先决定花园、苗圃或咖啡馆哪一项最重要，再确认该部分的当日安排。'],
      introSourceIds: ['gardenia'],
      basicInfoTitle: '行前重点', basicInfo: [
        { label: '地点', value: 'Gardenia Shevardnadze，第比利斯' },
        { label: '主要体验', value: '花园、植物与咖啡休息' },
        { label: '先确认', value: '旅行日期、花园与咖啡馆时段、现行入场费' },
      ],
      sections: [
        { module: 'tips', title: '先选择最在意的体验', items: ['若为花卉而来，先询问当季情况，不要期待与其他月份照片完全相同的花况。', '若咖啡馆是重点，请另外确认供餐时段与预约安排，不要只查花园开放时间。'] },
        { module: 'highlights', title: '从宏大尺度转向细节', items: ['看完纪念碑，再把注意力放到植物与花园设计。', '把咖啡休息当作需事先确认的选项，避免到场才假设一定能用餐。'], sourceIds: ['gardenia'] },
        { module: 'about', title: 'Gardenia 是什么地方', paragraphs: ['格鲁吉亚国家旅游局介绍了 Zura Shevardnadze 的花园、苗圃与小咖啡馆。适合因植物与庭园气氛而来；特定花卉或菜单品项，并非你的旅行日期一定能遇到。'], sourceIds: ['gardenia'] },
        { module: 'opening-hours', title: '先核对不同的营业资料', paragraphs: ['国家旅游局列示二月至十二月、周二至周日 10:00–18:00；Advantour 则列三月至十二月，并分别提供花园与咖啡馆较晚的关门时间。两者不一致，出发前请向店家确认现行安排。'], sourceIds: ['gardenia', 'gardeniaConflict', 'gardeniaOperator'] },
        { module: 'admission', title: '确认现在的收费', paragraphs: ['国家旅游局页面列示入场 5 GEL。这是来源刊载的金额，不代表本指南已确认现价，也不代表包含餐饮；出发前另行查询。'], sourceIds: ['gardenia'] },
        { module: 'transport', title: '当作独立的一段交通', paragraphs: ['导航到 Gardenia 的实际入口，而非水库的一般定位。从纪念碑出发时，检查步行路段及返程上车点；此处没有已核实的换乘时间或指定公交连接。'], sourceIds: ['transit'] },
        { module: 'appeal', title: 'Gardenia 还是第比利斯海？', paragraphs: ['植物与可能的咖啡休息优先，就选 Gardenia；想在水边停留，则选另外查清入口的水库地点。先确认花园与咖啡馆时段，再决定两站的先后顺序。'] },
        { module: 'visit-plan', title: '安排顺序的三个步骤', items: ['确认旅行当天花园与咖啡馆各自的安排。', '依确认后的时段，决定先去 Gardenia 或纪念碑。', '保存两边入口，安排下一段或返程交通。'] },
        { module: 'notices', title: '为你想要的活动多问一步', items: ['可以进花园，不等于已有咖啡馆座位、工作坊名额或特殊活动资格。', '若安排正式拍摄，或携带超出一般个人游览的器材，请先询问拍摄安排。'] },
        { module: 'transport-recap', title: '保存名称与入口', paragraphs: ['以“Gardenia Shevardnadze”搜索，确认选到正确入口后再接受路线，同时保留店家更新链接。'] },
      ],
      faqTitle: '出发前常见问题', faq: [
        { question: '能用一个关门时间安排全部活动吗？', answer: '不要这样假设。刊载资料不同，也区分花园与咖啡馆，请分别确认你需要的部分。', sourceIds: ['gardenia', 'gardeniaConflict'] },
        { question: 'Gardenia 是纪念碑园区的一部分吗？', answer: '它是独立目的地，需要另外确认入口、营业安排与交通，不能当作连续的园内参观路线。' },
        { question: '5 GEL 是今天已确认的票价吗？', answer: '这是国家旅游局页面刊载的金额；现价请向店家确认，餐饮与其他购买另计预算。', sourceIds: ['gardenia'] },
      ],
      relatedTitle: '接着规划你的行程', related: [{ label: '格鲁吉亚编年史', path: '/zh-cn' }, { label: '第比利斯海', path: '/zh-cn/nearby/tbilisi-sea' }],
      externalLinks: [{ label: 'Gardenia 店家更新', url: 'https://www.instagram.com/gardeniashevardnadze/' }, { label: '市营交通规划器', url: 'https://transit.ttc.com.ge/' }],
      sourceTitle: '资料来源与规划链接', sources: ['gardenia', 'gardeniaConflict', 'gardeniaOperator', 'transit'],
    },
  },
};

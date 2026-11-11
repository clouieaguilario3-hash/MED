const PRODUCTS = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    category: "Pain Relief",
    price: 35,
    image: "assets/images/products/paracetamol.webp",
    description: "For fever and mild to moderate pain relief.",
    prescriptionRequired: false,
    stock: 120
  },
  {
    id: 2,
    name: "Ibuprofen",
    category: "Pain Relief",
    price: 45,
    image: "assets/images/products/ibuprofen.jpg",
    description: "Anti-inflammatory medicine for pain, fever, and swelling.",
    prescriptionRequired: false,
    stock: 90
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    category: "Allergy Relief",
    price: 95,
    image: "assets/images/products/cetirizine.jpg",
    description: "Relief from allergic rhinitis, sneezing, and itching.",
    prescriptionRequired: false,
    stock: 75
  },
  {
    id: 4,
    name: "Loratadine 10mg Tablets",
    category: "Allergy Relief",
    price: 85,
    image: "assets/images/products/loratadine-10mg.webp",
    description: "Non-drowsy allergy relief for runny nose and itchy eyes.",
    prescriptionRequired: false,
    stock: 80
  },
  {
    id: 5,
    name: "Benadryl",
    category: "Allergy & Cough",
    price: 120,
    image: "assets/images/products/benadryl.webp",
    description: "For allergy symptoms and cough/cold relief as directed.",
    prescriptionRequired: false,
    stock: 60
  },
  {
    id: 6,
    name: "Loperamide",
    category: "Gastro Care",
    price: 40,
    image: "assets/images/products/loperamide.jpg",
    description: "For control and relief of acute diarrhea.",
    prescriptionRequired: false,
    stock: 70
  },
  {
    id: 7,
    name: "Clotrimazole",
    category: "Skin Care",
    price: 110,
    image: "assets/images/products/clotrimazole.jpg",
    description: "Antifungal treatment for athlete's foot, ringworm, and related infections.",
    prescriptionRequired: false,
    stock: 55
  },
  {
    id: 8,
    name: "Metformin",
    category: "Diabetes Care",
    price: 120,
    image: "assets/images/products/metformin.jpg",
    description: "Helps control blood sugar levels in diabetes management.",
    prescriptionRequired: true,
    stock: 40
  },
  {
    id: 9,
    name: "Losartan",
    category: "Heart & BP",
    price: 145,
    image: "assets/images/products/losartan.jpg",
    description: "Prescription medicine for high blood pressure management.",
    prescriptionRequired: true,
    stock: 55
  },
  {
    id: 10,
    name: "Prednisone Tablet",
    category: "Anti-inflammatory",
    price: 90,
    image: "assets/images/products/prednisone-tablet.jpg",
    description: "Corticosteroid for inflammation and allergic conditions as prescribed.",
    prescriptionRequired: true,
    stock: 35
  },
  {
    id: 11,
    name: "Phenobarbital",
    category: "Neurology",
    price: 160,
    image: "assets/images/products/phenobarbital.jpg",
    description: "Prescription medicine used for seizure control as directed by a physician.",
    prescriptionRequired: true,
    stock: 20
  },
  {
    id: 12,
    name: "Althea Pills",
    category: "Women's Health",
    price: 380,
    image: "assets/images/products/althea-pills.jpg",
    description: "Oral contraceptive pills. Use only under medical guidance.",
    prescriptionRequired: true,
    stock: 30
  },
  {
    id: 13,
    name: "Diane Pills",
    category: "Women's Health",
    price: 720,
    image: "assets/images/products/diane-pills.jpg",
    description: "Oral contraceptive for prescribed use. Requires valid prescription.",
    prescriptionRequired: true,
    stock: 25
  },
  {
    id: 14,
    name: "Lady Pills",
    category: "Women's Health",
    price: 150,
    image: "assets/images/products/lady-pills.jpg",
    description: "Oral contraceptive pills. Dispensed with proper medical guidance.",
    prescriptionRequired: true,
    stock: 35
  },
  {
    id: 15,
    name: "Norifam",
    category: "Women's Health",
    price: 350,
    image: "assets/images/products/norifam.jpg",
    description: "Combined oral contraceptive. Requires valid prescription and pharmacist verification.",
    prescriptionRequired: true,
    stock: 28
  },
  {
    id: 16,
    name: "AMBIMOX Amoxicillin 500mg Capsule",
    category: "Antibiotics",
    price: 15,
    image: "assets/images/products/ambimox-amoxicillin-500mg.jpg",
    description: "Amoxicillin antibiotic for bacterial infections as prescribed.",
    prescriptionRequired: true,
    stock: 100
  },
  {
    id: 17,
    name: "AZITOBACT Azithromycin 500mg Tablet",
    category: "Antibiotics",
    price: 45,
    image: "assets/images/products/azitobact-azithromycin-500mg.jpg",
    description: "Azithromycin antibiotic for prescribed bacterial infections.",
    prescriptionRequired: true,
    stock: 80
  },
  {
    id: 18,
    name: "HIDRASEC Racecadotril 100mg Capsule",
    category: "Gastro Care",
    price: 65,
    image: "assets/images/products/hidrasec-racecadotril-100mg.jpg",
    description: "For treatment of acute diarrhea as directed by a healthcare professional.",
    prescriptionRequired: true,
    stock: 50
  },
  {
    id: 19,
    name: "DOCUCARE Docusate Sodium 0.5% Ear Drops 10mL",
    category: "Ear Care",
    price: 180,
    image: "assets/images/products/docucare-ear-drops.jpg",
    description: "Ear drops to help soften and remove earwax. Use as directed.",
    prescriptionRequired: false,
    stock: 40
  },
  {
    id: 20,
    name: "Paracetamol & Ibuprofen",
    category: "Pain Relief",
    price: 55,
    image: "assets/images/products/paracetamol-ibuprofen.jpg",
    description: "Combination relief for pain and fever. Follow dosage instructions.",
    prescriptionRequired: false,
    stock: 90
  },
  {
    id: 21,
    name: "Ranitidine",
    category: "Gastro Care",
    price: 75,
    image: "assets/images/products/ranitidine.jpg",
    description: "For relief of heartburn and acid-related stomach conditions as directed.",
    prescriptionRequired: true,
    stock: 45
  },
  {
    id: 22,
    name: "Fluoxetine",
    category: "Mental Health",
    price: 180,
    image: "assets/images/products/fluoxetine.jpg",
    description: "Prescription antidepressant medication. Use only as directed by a physician.",
    prescriptionRequired: true,
    stock: 30
  },
  {
    id: 23,
    name: "Clopidogrel 75mg",
    category: "Heart & Blood",
    price: 95,
    image: "assets/images/products/clopidogrel-75.jpg",
    description: "Prescription medicine used to help prevent blood clots as directed.",
    prescriptionRequired: true,
    stock: 40
  },
  {
    id: 24,
    name: "3M Surgical Mask",
    category: "Medical Supplies",
    price: 15,
    image: "assets/images/products/3m-surgical-mask.jpg",
    description: "Disposable surgical face mask for daily protection and hygiene.",
    prescriptionRequired: false,
    stock: 200
  },
  {
    id: 25,
    name: "Calmoseptine Ointment",
    category: "Skin Care",
    price: 85,
    image: "assets/images/products/calmoseptine.jpg",
    description: "Moisture barrier ointment to help protect and soothe irritated skin.",
    prescriptionRequired: false,
    stock: 60
  },
  {
    id: 26,
    name: "Calpol Kids",
    category: "Kids Medicine",
    price: 120,
    image: "assets/images/products/calpol-kids.jpg",
    description: "Paracetamol suspension for relief of fever and mild pain in children. Use as directed.",
    prescriptionRequired: false,
    stock: 50
  },
  {
    id: 27,
    name: "Carbocisteine Kids",
    category: "Cough & Cold",
    price: 110,
    image: "assets/images/products/carbocisteine-kids.jpg",
    description: "Mucolytic syrup for children to help relieve cough with phlegm. Use as directed.",
    prescriptionRequired: false,
    stock: 45
  },
  {
    id: 28,
    name: "Syringe 10ml",
    category: "Medical Supplies",
    price: 20,
    image: "assets/images/products/syringe-10ml.jpg",
    description: "Sterile 10ml syringe for medical and dispensing use.",
    prescriptionRequired: false,
    stock: 150
  }
];

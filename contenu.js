/*
  CONTENU DU SITE : c'est le seul fichier à modifier pour publier.

  Pour ajouter un article : copie un bloc { ... } dans "articles", change le texte.
  Pour ajouter une vidéo : ajoute un bloc dans "videos" avec le lien YouTube ou TikTok.
  Pour ajouter un PDF gratuit : envoie le fichier dans le dossier "pdf" du dépôt,
  puis ajoute un bloc dans "pdfs" avec fichier: "pdf/nom-du-fichier.pdf".
  Garde les virgules entre les blocs et les guillemets autour des textes.
*/
window.CONTENU = {
  articles: [
    {
      cat: "Biogaz",
      duree: "6 min",
      titre: "Monter un premier digesteur familial",
      paras: [
        "Un digesteur est une cuve fermée où des bactéries décomposent bouse, déchets de cuisine ou lisier, sans air. Il donne un gaz riche en méthane pour la cuisson, et un digestat qui sert d'engrais.",
        "Les éléments de base : la cuve de fermentation, l'entrée de la matière, la sortie du digestat, le dôme qui stocke le gaz, et la conduite avec son robinet. Commencez par un modèle réduit pour vérifier la production avant de creuser."
      ]
    },
    {
      cat: "Biogaz",
      duree: "5 min",
      titre: "Combien de bouse pour cuisiner chaque jour ?",
      paras: [
        "Un kilo de bouse fraîche de vache donne de l'ordre de 30 à 40 litres de biogaz. Une famille de cinq personnes consomme à peu près 1,5 à 2 m³ de biogaz par jour pour cuisiner.",
        "Cela représente donc plusieurs dizaines de kilos de bouse par jour, mélangés à autant d'eau. Ce sont des ordres de grandeur : la production varie avec la température, la fraîcheur de la matière et l'étanchéité de la cuve."
      ],
      spec: ["1 kg de bouse fraîche : environ 30 à 40 litres de biogaz", "Cuisine d'une famille de 5 : environ 1,5 à 2 m³ par jour"]
    },
    {
      cat: "Pisciculture",
      duree: "5 min",
      titre: "Choisir et creuser son premier étang à poissons",
      paras: [
        "Un bon étang tient l'eau et se vidange facilement. Cherchez un sol argileux, une source d'eau propre et une légère pente pour évacuer l'eau par gravité.",
        "Prévoyez une profondeur de 1 à 1,5 m, des digues solides, et une arrivée et une sortie d'eau équipées de grilles pour que les poissons ne s'échappent pas et que les prédateurs n'entrent pas."
      ],
      spec: ["Profondeur : 1 à 1,5 m", "Tilapia en élevage simple : environ 2 à 3 alevins par m²"]
    },
    {
      cat: "Pisciculture",
      duree: "4 min",
      titre: "Qualité de l'eau : les trois signes à surveiller",
      paras: [
        "L'eau d'un étang change vite. Un poisson qui vient respirer à la surface au petit matin manque d'oxygène. Une eau très verte ou très trouble signale trop d'algues ou trop de matière.",
        "Évitez de suralimenter : l'aliment non mangé pourrit et consomme l'oxygène. Renouvelez une partie de l'eau si les poissons montrent ces signes."
      ]
    },
    {
      cat: "Agriculture moderne",
      duree: "5 min",
      titre: "Réussir son compost en deux à trois mois",
      paras: [
        "Un bon compost mélange des matières vertes (herbes fraîches, épluchures, fumier) et des matières sèches (pailles, feuilles mortes). Le tas doit rester humide comme une éponge essorée.",
        "Retournez-le toutes les deux semaines pour apporter de l'air. Quand il sent la terre de forêt et que vous ne reconnaissez plus les déchets, il est prêt."
      ]
    },
    {
      cat: "Agriculture moderne",
      duree: "4 min",
      titre: "Le digestat du biogaz : un engrais à utiliser avec méthode",
      paras: [
        "Après la fermentation, la matière qui sort du digesteur garde les éléments nutritifs de départ et sent moins fort. C'est un bon engrais pour le maraîchage et les cultures vivrières.",
        "Épandez-le dilué et ne le laissez pas au soleil trop longtemps, car l'azote s'évapore. Testez d'abord sur une petite parcelle."
      ]
    },
    {
      cat: "Eau et hygiène",
      duree: "5 min",
      titre: "Captage de source : protéger l'eau du village",
      paras: [
        "Un captage recueille l'eau d'une source avant qu'elle se mélange aux eaux de surface. L'ouvrage comprend un drain, une chambre fermée et un trop-plein.",
        "Prévoyez aussi une zone de protection en amont, sans latrines ni élevage. Sans elle, le meilleur ouvrage ne garantit pas une eau potable."
      ]
    },
    {
      cat: "Eau et hygiène",
      duree: "4 min",
      titre: "Où placer les latrines par rapport à la source d'eau",
      paras: [
        "Les latrines doivent se trouver en aval du point d'eau, jamais en amont, et à bonne distance. On retient souvent au moins 30 m, davantage si le sol est sableux ou fissuré.",
        "Gardez aussi à distance les puisards et les enclos d'animaux. La distance exacte dépend du sol et de la nappe, à vérifier sur place."
      ]
    }
  ],

  /* Exemple de vidéo à ajouter :
     { cat: "Biogaz", titre: "Démonstration avec une bouteille", description: "Comprendre la fermentation en 3 minutes.", url: "https://www.tiktok.com/@ir.gr.salita.guil/video/..." }
  */
  videos: [],

  /* Exemple de PDF gratuit à ajouter :
     { titre: "Fiche : dimensions d'un étang", description: "Une page à imprimer.", fichier: "pdf/fiche-etang.pdf" }
  */
  pdfs: []
};

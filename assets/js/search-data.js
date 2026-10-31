// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Below are selected publications. You could find the full publication list on my [Google Scholar](https://scholar.google.com/citations?user=bxIhH2wAAAAJ&amp;hl=en) profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Funded research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-opportunities",
          title: "Opportunities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunities/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-got-accepted-at-medical-physics-journal-towards-quantitative-digital-subtraction-perfusion-angiography-an-animal-study",
          title: 'Our work got accepted at Medical Physics journal, Towards quantitative digital subtraction perfusion...',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-miccai-2023-angiomoco-learning-based-motion-correction-in-cerebral-digital-subtraction-angiography",
          title: 'One paper accepted at MICCAI 2023, AngioMoCo: Learning-Based Motion Correction in Cerebral Digital...',
          description: "",
          section: "News",},{id: "news-the-3rd-edition-of-our-stroke-workshop-on-imaging-and-treatment-challenges-switch-was-successfully-held-at-miccai-2023-in-vancouver",
          title: 'The 3rd edition of our Stroke Workshop on Imaging and Treatment CHallenges (SWITCH)...',
          description: "",
          section: "News",},{id: "news-new-grant-our-stroke-mimic-project-has-just-awarded-funding-from-the-national-growth-fund-ngf-ained-xs-europe-programme",
          title: '[New Grant] Our stroke MIMIC project has just awarded funding from the National...',
          description: "",
          section: "News",},{id: "news-new-journal-paper-accepted-at-computerized-medical-imaging-and-graphics-cmig-cave-cerebral-artery-vein-segmentation-in-digital-subtraction-angiography",
          title: 'New journal paper accepted at Computerized Medical Imaging and Graphics (CMIG), CAVE: Cerebral...',
          description: "",
          section: "News",},{id: "news-new-journal-paper-accepted-at-journal-of-neurointerventional-surgery-jnis-assessment-of-automated-tici-scoring-during-endovascular-treatment-in-patients-with-an-ischemic-stroke",
          title: 'New journal paper accepted at Journal of NeuroInterventional Surgery (JNIS), Assessment of automated...',
          description: "",
          section: "News",},{id: "news-new-journal-paper-accepted-at-med-large-scale-pretrained-frame-generative-model-enables-real-time-low-dose-dsa-imaging-an-ai-system-development-and-multi-center-validation-study",
          title: 'New journal paper accepted at Med, Large-scale pretrained frame generative model enables real-time...',
          description: "",
          section: "News",},{id: "news-new-vacancy-we-are-looking-for-a-1-year-junior-researcher-to-join-us-a-s-a-p-on-ai-based-stroke-mimic-identification-using-mri-images-more-details",
          title: '[New vacancy] We are looking for a 1-year junior researcher to join us...',
          description: "",
          section: "News",},{id: "news-the-4th-edition-of-our-stroke-workshop-on-imaging-and-treatment-challenges-switch2024-was-successfully-held-at-miccai-2024-in-marrakesh-morocco",
          title: 'The 4th edition of our Stroke Workshop on Imaging and Treatment CHallenges (SWITCH2024)...',
          description: "",
          section: "News",},{id: "news-honored-to-have-received-the-ieee-tmi-distinguished-reviewer-award-for-2023-2024",
          title: 'Honored to have received the IEEE TMI Distinguished Reviewer Award for 2023-2024.',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-an-area-chair-at-miccai-2025",
          title: 'I am serving as an area chair at MICCAI 2025.',
          description: "",
          section: "News",},{id: "news-new-vacancy-we-have-an-open-phd-position-fully-funded-to-work-on-the-trustworthy-deep-learning-for-neurovascular-image-analysis-more-details",
          title: '[New vacancy] We have an open PhD position (fully-funded) to work on the...',
          description: "",
          section: "News",},{id: "news-new-journal-paper-got-accepted-at-ijcars-check-out-our-research-on-perfdsa-automatic-perfusion-imaging-in-cerebral-digital-subtraction-angiography-code-is-publicly-available-at-github",
          title: 'New journal paper got accepted at IJCARS. Check out our research on perfDSA:...',
          description: "",
          section: "News",},{id: "news-the-5th-edition-of-our-stroke-workshop-on-imaging-and-treatment-challenges-switch2025-was-successfully-held-at-miccai-2025-in-daejeon-south-korea",
          title: 'The 5th edition of our Stroke Workshop on Imaging and Treatment CHallenges (SWITCH2025)...',
          description: "",
          section: "News",},{id: "news-new-paper-online-check-out-our-research-on-discriminating-distal-ischemic-stroke-from-seizure-induced-stroke-mimics-using-dynamic-susceptibility-contrast-mri",
          title: 'New paper online! Check out our research on Discriminating Distal Ischemic Stroke from...',
          description: "",
          section: "News",},{id: "news-new-open-tool-online-check-out-our-pypet-a-python-perfusion-tool-for-automated-quantitative-brain-ct-and-mr-perfusion-analysis",
          title: 'New open tool online! Check out our PyPeT: A Python Perfusion Tool for...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-an-area-chair-at-miccai-2026",
          title: 'I am serving as an area chair at MICCAI 2026.',
          description: "",
          section: "News",},{id: "news-the-6th-edition-of-our-workshop-will-have-an-extended-scope-on-imaging-and-treatment-challenges-for-stroke-and-other-neurovacular-diseases-switch-2026-accepted-to-be-held-at-miccai-2026-in-abu-dhabi-uae-we-will-be-hosting-a-full-day-program-on-neurovascular-image-analysis-we-look-forward-to-seeing-you-at-miccai-2026",
          title: 'The 6th edition of our Workshop will have an extended scope on Imaging...',
          description: "",
          section: "News",},{id: "news-our-topaneu-2026-challenge-multimodal-vessel-specific-intracranial-aneurysm-classification-and-segmentation-challenge-is-accepted-at-miccai-2026-together-with-switch-workshop-2026-isles-2026-topbrain-2026-we-will-be-hosting-a-full-day-program-on-neurovascular-image-analysis",
          title: 'Our TopAneu 2026 challenge (Multimodal Vessel-Specific Intracranial Aneurysm Classification and Segmentation Challenge) is...',
          description: "",
          section: "News",},{id: "news-new-vacancy-we-have-two-open-phd-positions-in-the-q-media-project-funded-by-health-holland-in-collaboration-with-erasmus-mc-and-philips-on-multimodal-image-analysis-in-ischemic-stroke-more-details",
          title: '[New vacancy] We have two open PhD positions in the Q-MeDIA project funded...',
          description: "",
          section: "News",},{id: "news-one-paper-got-early-accepted-top-9-and-seleted-as-oral-at-miccai-2026-strasbourg-france-stroketimer-robust-representation-learning-for-ischemic-stroke-onset-time-estimation-from-non-contrast-ct",
          title: 'One paper got early accepted (top 9%) and seleted as oral at MICCAI...',
          description: "",
          section: "News",},{id: "news-new-grant-honored-and-greatful-to-have-been-awarded-a-veni-grant-by-the-dutch-research-council-nwo-the-project-titled-uncovering-the-hidden-half-image-based-decision-support-beyond-technical-stroke-treatment-success",
          title: '[New Grant] Honored and greatful to have been awarded a Veni grant by...',
          description: "",
          section: "News",},{id: "projects-mimic",
          title: 'MIMIC',
          description: "National Growth Fund AiNed XS Europe · 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mimic/";
            },},{id: "projects-q-media",
          title: 'Q-MeDIA',
          description: "Health~Holland · 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/q-media/";
            },},{id: "projects-uncovering-the-hidden-half",
          title: 'Uncovering the hidden half',
          description: "NWO Veni · 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/veni/";
            },},{id: "vacancies-junior-researcher-ai-based-identification-of-stroke-mimics",
          title: 'Junior Researcher - AI-based identification of stroke mimics',
          description: "MIMIC: AI-based Identification of Stroke Mimics by Advanced Neuroimaging",
          section: "Vacancies",handler: () => {
              window.location.href = "/vacancies/junior_researcher_ained_mimic/";
            },},{id: "vacancies-phd-candidate-trustworthy-ai-for-neurovascular-image-analysis",
          title: 'PhD Candidate - trustworthy AI for neurovascular image analysis',
          description: "Trustworthy Deep Learning for Neurovascular Image Anlaysis",
          section: "Vacancies",handler: () => {
              window.location.href = "/vacancies/PhD_neurovascular_image_analysis/";
            },},{id: "vacancies-phd-candidate-q-media-multimodal-image-analysis-in-ischemic-stroke",
          title: 'PhD Candidate - Q-MeDIA multimodal image analysis in ischemic stroke',
          description: "Q-MeDIA multimodal image analysis in ischemic stroke",
          section: "Vacancies",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72.%73%75@%74%75%65.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RuishengSu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ruisheng-su-21760572", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bxIhH2wAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

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
          description: "Below are selected publications. You could find the full pulication list on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
            },},{id: "msc_projects-ai-based-classification-of-moyamoya-disease-at-charité-university-hospital-berlin",
          title: 'AI-based classification of Moyamoya disease (at Charité University Hospital Berlin)',
          description: "",
          section: "Msc_projects",},{id: "msc_projects-machine-learning-for-quantification-of-blush-in-the-lenticulostriate-territory-of-the-brain-for-acute-ischemic-stroke",
          title: 'Machine learning for quantification of blush in the lenticulostriate territory of the brain...',
          description: "",
          section: "Msc_projects",},{id: "msc_projects-vasculature-and-perfusion-analysis-in-digital-subtraction-angiography-using-deep-learning",
          title: 'Vasculature and perfusion analysis in digital subtraction angiography using deep learning',
          description: "",
          section: "Msc_projects",},{id: "msc_projects-machine-learning-for-assessment-of-stroke-onset-time-in-non-contrast-ct",
          title: 'Machine learning for assessment of stroke onset time in non-contrast CT',
          description: "",
          section: "Msc_projects",},{id: "msc_projects-deep-learning-for-image-analysis-in-intracranial-aneurysms",
          title: 'Deep learning for image analysis in intracranial aneurysms',
          description: "",
          section: "Msc_projects",},{id: "news-cold-pressed-our-work-got-accepted-at-medical-physics-towards-quantitative-digital-subtraction-perfusion-angiography-an-animal-study",
          title: 'cold-pressed Our work got accepted at Medical Physics, Towards quantitative digital subtraction perfusion...',
          description: "",
          section: "News",},{id: "news-one-paper-got-accepted-at-miccai-angiomoco-learning-based-motion-correction-in-cerebral-digital-subtraction-angiography",
          title: 'One paper got accepted at MICCAI, AngioMoCo: Learning-Based Motion Correction in Cerebral Digital...',
          description: "",
          section: "News",},{id: "news-the-3rd-edition-of-our-stroke-workshop-on-imaging-and-treatment-challenges-miccai-was-successfully-held-at-miccai-2023-in-vancouver-we-look-forward-to-seeing-you-again-next-year-in-marrakesh",
          title: 'The 3rd edition of our Stroke Workshop on Imaging and Treatment CHallenges (MICCAI)...',
          description: "",
          section: "News",},{id: "news-new-grant-our-stroke-mimic-project-has-just-awarded-funding-from-the-national-growth-fund-ngf-ained-xs-europe-programme",
          title: '[New Grant] Our stroke MIMIC project has just awarded funding from the National...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-computerized-medical-imaging-and-graphics-cmig-cave-cerebral-artery-vein-segmentation-in-digital-subtraction-angiography",
          title: 'New paper accepted at Computerized Medical Imaging and Graphics (CMIG), CAVE: Cerebral artery–vein...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-journal-of-neurointerventional-surgery-jnis-assessment-of-automated-tici-scoring-during-endovascular-treatment-in-patients-with-an-ischemic-stroke",
          title: 'New paper accepted at Journal of NeuroInterventional Surgery (JNIS), Assessment of automated TICI...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-med-large-scale-pretrained-frame-generative-model-enables-real-time-low-dose-dsa-imaging-an-ai-system-development-and-multi-center-validation-study",
          title: 'New paper accepted at Med, Large-scale pretrained frame generative model enables real-time low-dose...',
          description: "",
          section: "News",},{id: "news-new-vacancy-we-are-looking-for-a-1-year-junior-researcher-to-join-us-a-s-a-p-on-ai-based-stroke-mimic-identification-using-mri-images-more-details",
          title: '[New vacancy] We are looking for a 1-year junior researcher to join us...',
          description: "",
          section: "News",},{id: "news-the-4th-edition-of-our-stroke-workshop-on-imaging-and-treatment-challenges-switch2024-was-successfully-held-at-miccai-2024-in-marrakesh-morocco-we-look-forward-to-seeing-you-again-next-year-in-daejeon-south-korea",
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "vacancies-junior-researcher",
          title: 'Junior Researcher',
          description: "MIMIC: AI-based Identification of Stroke Mimics by Advanced Neuroimaging",
          section: "Vacancies",handler: () => {
              window.location.href = "/vacancies/junior_researcher_ained_mimic/";
            },},{id: "vacancies-phd-candidate",
          title: 'PhD Candidate',
          description: "Trustworthy Deep Learning for Neurovascular Image Anlaysis",
          section: "Vacancies",handler: () => {
              window.location.href = "/vacancies/PhD_neurovascular_image_analysis/";
            },},{
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
          window.open("https://scholar.google.com/citations?user=1QhhFl8AAAAJ&hl", "_blank");
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

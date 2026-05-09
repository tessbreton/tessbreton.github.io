// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Uptaded in April 2026. PDF version available.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-test-time-training-with-masked-autoencoders",
        
          title: "Test-Time Training with Masked Autoencoders",
        
        description: "Final project report for the course Object Recognition and Computer Vision at MVA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/reports/recvis-report.pdf";
          
        },
      },{id: "post-probabilistic-pca-and-cca-and-applications-to-missing-data",
        
          title: "Probabilistic PCA and CCA and applications to missing data",
        
        description: "Final project report for the course Introduction to Probabilistic Graphical Models and Deep Latent Variable Models at MVA. Poster.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/reports/ppca/report.pdf";
          
        },
      },{id: "post-imagenet-sketch-classification-challenge",
        
          title: "ImageNet-Sketch classification challenge",
        
        description: "Kaggle challenge from the course Object Recognition and Computer Vision at MVA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/reports/RecVisA3.pdf";
          
        },
      },{id: "post-ecdna-copy-number-dynamics",
        
          title: "ecDNA copy number dynamics",
        
        description: "From my 4-months research internship at Columbia University, in the Irving Institute for Cancer Dynamics (IICD)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/reports/ecDNA-report.pdf";
          
        },
      },{id: "post-simulated-annealing-applied-to-the-traveling-salesman-problem",
        
          title: "Simulated annealing applied to the traveling salesman problem",
        
        description: "Report of my TIPE project for the ENS entrance exam",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/reports/TIPE-report.pdf";
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%65%73%73.%62%72%65%74%6F%6E**%6E%6F_%73%70%61%6D**%61%74**%6D%61%74%68.%63%6E%72%73.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tessbreton", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tessbreton", "_blank");
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

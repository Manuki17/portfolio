// Données des compétences avec détails d'acquisition et projets
        const skillsData = {
            'realiser': {
                icon: '💻',
                title: {
                    FR: 'C1 ~ Réaliser',
                    EN: 'C1 ~ Develop'
                },
                acquisition : {
                    FR: 'Maîtrisé',
                    EN: 'Mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Développement d\'applications diverses',
                            description: 'J\'ai acquis cette compétence en développant plusieurs applications complexes, notamment une application d\'astrophotographie en Python avec PyQt6, un jeu d\'échecs Pokémon en Java, et plusieurs sites web statiques et dynamiques. Ces projets m\'ont permis de maîtriser différents langages et technologies.'
                        },
                    ],
                    EN: [
                        {
                            title: 'Development of various applications',
                            description: 'I acquired this skill by developing several complex applications, including an astrophotography application in Python with PyQt6, a Pokémon chess game in Java, and several static and dynamic websites. These projects allowed me to master different languages and technologies.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'SAÉ Astrophoto',
                            EN: 'Astrophoto Project'
                        },
                        description: {
                            FR: 'Application de fusion d\'images stellaires développée en Python avec PyQt6',
                            EN: 'Stellar image fusion application developed in Python with PyQt6'
                        },
                        technologies: ['Python', 'PyQt6', 'AstroQuery']
                    },
                    {
                        title: {
                            FR: 'Échecs Pokémon',
                            EN: 'Pokémon Chess'
                        },
                        description: {
                            FR: 'Jeu d\'échecs version Pokémon développé en Java avec le moteur graphique MG2D',
                            EN: 'Pokémon version chess game developed in Java with MG2D graphics engine'
                        },
                        technologies: ['Java', 'MG2D', 'POO']
                    },
                    {
                        title: {
                            FR: 'Cartographie interactive',
                            EN: 'Interactive Mapping'
                        },
                        description: {
                            FR: 'Application Web pour le service MMDS',
                            EN: 'Web application for the MMDS service'
                        },
                        technologies: ['Vue.js', 'Node.js']
                    },
                    {
                        title: {
                            FR: 'La Terre est à nous',
                            EN: 'La Terre est à nous'
                        },
                        description: {
                            FR: 'Site web statique responsive développé selon le cahier des charges client',
                            EN: 'Responsive static website developed according to client specifications'
                        },
                        technologies: ['HTML5', 'CSS3']
                    },

                ]
            },
            'optimiser': {
                icon: '📈',
                title: {
                    FR: 'C2 ~ Optimiser',
                    EN: 'C2 ~ Optimize'
                },
                acquisition : {
                    FR: 'Maîtrisé',
                    EN: 'Mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Optimisation d\'algorithmes et performance',
                            description: 'Cette compétence a été développée notamment lors de la création de l\'application de fusion d\'images astrophotographiques où j\'ai dû optimiser les algorithmes de traitement d\'images pour améliorer les performances et réduire les temps de calcul. J\'ai également optimisé des requêtes et la gestion de données dans mes projets web.'
                        },
                    ],
                    EN: [
                        {
                            title: 'Algorithm optimization and performance',
                            description: 'This skill was developed particularly when creating the astrophotographic image fusion application where I had to optimize image processing algorithms to improve performance and reduce computation time. I also optimized queries and data management in my web projects.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'SAÉ Astrophoto',
                            EN: 'Astrophoto Project'
                        },
                        description: {
                            FR: 'Optimisation des algorithmes de traitement et fusion d\'images stellaires',
                            EN: 'Optimization of stellar image processing and fusion algorithms'
                        },
                        technologies: ['Python', 'Astroquery']
                    },
                    {
                        title: {
                            FR: 'SAÉ Graphes',
                            EN: 'Graphs Project'
                        },
                        description: {
                            FR: 'Implémentation d\'algorithmes optimisés pour le calcul du plus court chemin',
                            EN: 'Implementation of optimized algorithms for shortest path calculation'
                        },
                        technologies: ['Python', 'PyQt6']
                    }
                ]
            },
            'administrer': {
                icon: '🗄️',
                title: {
                    FR: 'C3 ~ Administrer',
                    EN: 'C3 ~ Administer'
                },
                acquisition : {
                    FR: 'Peu maîtrisé',
                    EN: 'Partially mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Administration système et réseau',
                            description: 'Bien que cette compétence soit en cours de développement, j\'ai eu l\'occasion de travailler avec Docker pour la containerisation d\'applications et de configurer des serveurs web avec Nginx. Mon alternance à la CPAM m\'a également exposé aux infrastructures informatiques d\'entreprise.'
                        },
                    ],
                    EN: [
                        {
                            title: 'System and network administration',
                            description: 'Although this skill is still developing, I have had the opportunity to work with Docker for application containerization and configure web servers with Nginx. My apprenticeship at CPAM also exposed me to enterprise IT infrastructures.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'Cartographie Interactive',
                            EN: 'Interactive Mapping'
                        },
                        description: {
                            FR: 'Déploiement et configuration de l\'infrastructure pour l\'application de cartographie',
                            EN: 'Deployment and infrastructure configuration for the mapping application'
                        },
                        technologies: ['Linux', 'MariaDB']
                    }
                ]
            },
            'gerer': {
                icon: '📋',
                title: {
                    FR: 'C4 ~ Gérer',
                    EN: 'C4 ~ Manage'
                },
                acquisition : {
                    FR: 'Assez maîtrisé',
                    EN: 'Well mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Gestion et exploitation de données',
                            description: 'J\'ai développé cette compétence en travaillant avec différents systèmes de gestion de bases de données (PostgreSQL, MariaDB, MySQL) dans mes projets web.'
                        },
                    ],
                    EN: [
                        {
                            title: 'Data management and exploitation',
                            description: 'I developed this skill by working with different database management systems (PostgreSQL, MariaDB, MySQL) in my web projects.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'NBA Predictor',
                            EN: 'NBA Predictor'
                        },
                        description: {
                            FR: 'Conception et gestion de base de données pour l\'application de prédiction NBA',
                            EN: 'Database design and management for NBA prediction application'
                        },
                        technologies: ['PostgreSQL', 'PHP']
                    },
                    {
                        title: {
                            FR: 'Cartographie Interactive',
                            EN: 'Interactive Mapping'
                        },
                        description: {
                            FR: 'Conception de la base de données pour gérer les données géographiques et statistiques complexes des Flandres',
                            EN: 'Management of complex geographical and statistical data of Flanders'
                        },
                        technologies: ['MariaDB', 'Node.js']
                    }
                ]
            },
            'conduire': {
                icon: '🚀',
                title: {
                    FR: 'C5 ~ Conduire',
                    EN: 'C5 ~ Lead'
                },
                acquisition : {
                    FR: 'Maîtrisé',
                    EN: 'Mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Conduite et pilotage de projets',
                            description: 'Cette compétence s\'est développée à travers la gestion de plusieurs projets universitaires et professionnels. J\'ai appris à utiliser les méthodes agiles, à organiser le travail en équipe, et à utiliser des outils de gestion comme Git et Trello. Mon alternance m\'a également permis de participer à la gestion de projets réels en entreprise.'
                        },
                    ],
                    EN: [
                        {
                            title: 'Project management and leadership',
                            description: 'This skill developed through managing several university and professional projects. I learned to use agile methods, organize teamwork, and use management tools like Git and Trello. My apprenticeship also allowed me to participate in managing real business projects.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'Cartographie Interactive',
                            EN: 'Interactive Mapping'
                        },
                        description: {
                            FR: 'Pilotage du projet en collaboration avec le service MMDS de la CPAM avec validation du Cahier des Charges',
                            EN: 'Project management in collaboration with CPAM\'s MMDS service with validation of the specifications'
                        },
                        technologies: ['Team Meeting']
                    },
                    {
                        title: {
                            FR: 'TP Gestion de Projet',
                            EN: 'Project Management Pratical Work'
                        },
                        description: {
                            FR: 'Gestion, organisation et coordination de plusieurs projets en équipe, en appliquant les méthodes de gestion de projet définies',
                            EN: 'Management, organization and coordination of several team projects, applying defined project management methods'
                        },
                        technologies: ['Git', 'Trello', 'Scrum', 'Agile']
                    }
                ]
            },
            'collaborer': {
                icon: '🤝',
                title: {
                    FR: 'C6 ~ Collaborer',
                    EN: 'C6 ~ Collaborate'
                },
                acquisition : {
                    FR: 'Maîtrisé',
                    EN: 'Mastered'
                },
                acquisitions: {
                    FR: [
                        {
                            title: 'Collaboration et travail en équipe',
                            description: 'J\'ai développé d\'excellentes compétences collaboratives grâce aux nombreux projets en équipe durant ma formation et mon alternance. La rédaction de cahiers des charges, la participation à des réunions projets, et la collaboration avec l\'équipe MMDS de la CPAM ont renforcé mes aptitudes à travailler efficacement en équipe.'
                        },
                    ],
                    EN: [
                        {
                            title: 'Collaboration and teamwork',
                            description: 'I developed excellent collaborative skills through numerous team projects during my training and apprenticeship. Writing specifications, participating in project meetings, and collaborating with CPAM\'s the MMDS team strengthened my abilities to work effectively in teams.'
                        },
                    ]
                },
                projects: [
                    {
                        title: {
                            FR: 'SAÉ NBA Predictor',
                            EN: 'NBA Predictor Project'
                        },
                        description: {
                            FR: 'Projet collaboratif de développement dans une équipe de 6 personnes',
                            EN: 'Collaborative project for developing in a team of 6 people'
                        },
                        technologies: ['Trello', 'Git']
                    },
                    {
                        title: {
                            FR: 'Cartographie Interactive',
                            EN: 'Interactive Mapping'
                        },
                        description: {
                            FR: 'Projet inter-services de la CPAM ayant développé ma capacité à communiquer avec le client',
                            EN: 'Inter-departmental CPAM project which developed my ability to communicate with the client'
                        },
                        technologies: ['Team Meeting', 'Specifications']
                    },
                    {
                        title: {
                            FR: 'SAÉ Graphes',
                            EN: 'Graph Project'
                        },
                        description: {
                            FR: 'Développement collaboratif d\'une application PyQt6 en équipe de 4 personnes',
                            EN: 'Collaborative development of an PyQt6 application in a team of 4 people'
                        },
                        technologies: ['Git', 'Trello', 'Meeting']
                    }
                ]
            }
        };

        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            if (body.classList.contains('light')) {
                body.classList.remove('light');
                body.classList.add('dark');
                themeToggle.textContent = '☀️';
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
                themeToggle.textContent = '🌙';
            }
        }

        // Language Toggle
        const translations = {
            FR: {
                'Accueil': 'Accueil',
                'À propos': 'À propos',
                'Diplome': 'Diplôme',
                'BUT': 'BUT Informatique Parcours A',
                'Anglais': 'Anglais',
                'Niveau': 'Niveau B1',
                'Localisation': 'Localisation',
                'France': 'France, Pas-de-Calais',
                '2+ ans': '1er Juin 2023',
                'Permis conduire': 'Permis B',
                'Parcours': 'Parcours',
                'Projets justificatifs': 'Projets justificatifs',
                'Compétences': 'Compétences',
                'Projets': 'Projets',
                'Contact': 'Contact',
                'Étudiante BUT Informatique • Alternante • Développeuse Passionnée': 'Étudiante BUT Informatique • Alternante • Développeuse Passionnée',
                'À propos de moi': 'À propos de moi',
                'about-text': 'Passionnée par le développement informatique et les nouvelles technologies, je suis actuellement étudiante en BUT Informatique en alternance. Mon parcours m\'a permis de développer des compétences solides en programmation et en gestion de projets. Je suis constamment à la recherche de nouveaux défis pour approfondir mes connaissances et contribuer à des projets innovants.',
                'about-text2': 'Ma curiosité naturelle me pousse à explorer différents domaines de l\'informatique, du développement web aux applications mobiles, en passant par l\'intelligence artificielle et, malgré le choix du parcous A, par le réseau.',
                'Langages maîtrisés': 'Langages maîtrisés',
                'Mon Parcours en Alternance': 'Mon Parcours en Alternance',
                'exp1-title': 'Baccalauréat',
                'exp1-desc': 'Obtention du baccalauréat général, spécialités : Mathématiques, Numérique et Sciences Informatiques.',
                'exp2-title': 'BUT Informatique',
                'exp2-desc': 'Première année du BUT Informatique à l\'IUT de Calais.',
                'exp3-title': 'BUT en alternance',
                'exp3-desc': 'Deuxième année du BUT Informatique en alternance à la CPAM des Flandres de Dunkerque.',
                'exp4-title': '2025: Présent',
                'exp4-desc': 'Le BUT Informatique se déroule en trois ans. Je le poursuis avec mon alternance à la CPAM.',
                'skill1-title': 'C1 ~ Réaliser',
                'skill1-desc': 'Développer - c’est-à-dire concevoir, coder, tester et intégrer - une solution informatique pour un client.',
                'skill2-title': 'C2 ~ Optimiser',
                'skill2-desc': 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources.',
                'skill3-title': 'C3 ~ Administrer',
                'skill3-desc': 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique.',
                'skill4-title': 'C4 ~ Gérer',
                'skill4-desc': 'Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise.',
                'skill5-title': 'C5 ~ Conduire',
                'skill5-desc': 'Satisfaire les besoins des utilisateurs au regarde de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
                'skill6-title': 'C6 ~ Collaborer',
                'skill6-desc': 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
                'Mes Projets': 'Mes Projets',
                'proj1-title': 'SAÉ Astrophoto',
                'proj1-desc': `Développement d'une application de fusion d'images permettant l'étude d'objets stellaires.`,
                'proj2-title': 'Cartographie Interactive',
                'proj2-desc': `Développement d'une carte interactive des Flandres, pour la CPAM, permettant l'études des données de son territoire. Ce projet a été réalisé en collaboration avec le service MMDS.`,
                'proj3-title': 'SAÉ Graphes ~ IHM',
                'proj3-desc': `Application, développée en suivant le modèle MVC, permettant la réalisation d'une liste de courses et d'obtenir le chemin le plus cours pour récupérer tous les produits jusqu'à la caisse.`,
                'proj4-title': 'Like a Déjà vu',
                'proj4-desc': 'SAÉ Jeu textuel en C réalisé au cours de la première année du BUT informatique, en équipe, disponible en français et en anglais.',
                'proj5-title': 'NBA Predictor',
                'proj5-desc': `Application Web avec gestion de base de données réalisé dans le cadre de la SAÉ Web dynamique.`,
                'proj6-title': 'API Pokémon',
                'proj6-desc': `API REST Sécurisée avec authentification JWT, documentation Swagger et tests unitaires complets.`,
                'proj7-title': 'SAÉ Site Web statique',
                'proj7-desc': `Réalisation d'un site web statique suivant le cahier des charges réalisé et validé par le client.`,
                'proj8-title': 'SAÉ Socket ~ Tic Tac Toe',
                'proj8-desc': `Réalisation d'un jeu de Tic Tac Toe textuel en C fonctionnant à l'aide d'une connexion serveur-client.`,
                'proj9-title': 'Échecs Pokémon',
                'proj9-desc': `Développement d'un jeu d'échecs version Pokémon en Java avec le moteur graphique MG2D. Ce projet met en oeuvre la POO.`,
                'Voir le code': 'Voir le code',
                'Demo': 'Demo',
                'Contactez-moi': 'Contactez-moi',
                'contact-intro': 'N\'hésitez pas à me contacter pour discuter de projets, collaborations ou opportunités professionnelles.',
                'Nom': 'Nom',
                'Email': 'Email',
                'Sujet': 'Sujet',
                'Message': 'Message',
                'Envoyer': 'Envoyer',
                'Autres moyens de contact': 'Autres moyens de contact',
                'Projets ratifiants': 'Projets ratifiants',
                'Niveau d\'acquisition': 'Niveau d\'acquisition'
            },
            EN: {
                'Accueil': 'Home',
                'À propos': 'About',
                'Diplome': 'Diploma',
                'BUT': 'Bachelor of Science in IT – Track A',
                'Anglais': 'English',
                'Niveau': 'B1 level',
                'Localisation': 'Location',
                'France': 'France, Pas-de-Calais',
                '2+ ans': '1st June 2023',
                'Permis conduire': 'Driving Licence',
                'Parcours': 'Journey',
                'Compétences': 'Skills',
                'Projets justificatifs': 'Supporting projects',
                'Projets': 'Projects',
                'Contact': 'Contact',
                'Étudiante BUT Informatique • Alternante • Développeuse Passionnée': 'Computer Science Student • Work-Study Program • Passionate Developer',
                'À propos de moi': 'About Me',
                'about-text': 'Passionate about software development and new technologies, I am currently a Computer Science student in a work-study program. My journey has allowed me to develop strong skills in programming and project management. I am constantly looking for new challenges to deepen my knowledge and contribute to innovative projects.',
                'about-text2': 'My natural curiosity drives me to explore different areas of computer science, from web development to mobile applications, including artificial intelligence and, despite the choice of track A, by the network.',
                'Langages maîtrisés': 'Programming Languages Mastered',
                'Mon Parcours en Alternance': 'My Work-Study Journey',
                'exp1-title': 'High School Diploma',
                'exp1-desc': 'Obtained general high school diploma, specializations: Mathematics, Digital and Computer Sciences.',
                'exp2-title': 'Computer Science Degree',
                'exp2-desc': 'First year of Computer Science degree at IUT de Calais.',
                'exp3-title': 'Work-Study Program',
                'exp3-desc': 'Second year of Computer Science degree in work-study program at CPAM des Flandres in Dunkirk.',
                'exp4-title': '2025: Present',
                'exp4-desc': 'The Computer Science degree is a three-year program. I continue it with my work-study program at CPAM.',
                'skill1-title': 'C1 ~ Develop',
                'skill1-desc': 'Develop - that is, design, code, test and integrate - a computer solution for a client.',
                'skill2-title': 'C2 ~ Optimize',
                'skill2-desc': 'Propose optimized computer applications based on specific criteria: execution time, precision, resource consumption.',
                'skill3-title': 'C3 ~ Administer',
                'skill3-desc': 'Install, configure, deploy, maintain operational conditions of infrastructures, services and networks and optimize the computer system.',
                'skill4-title': 'C4 ~ Manage',
                'skill4-desc': 'Design, manage, administer and operate company data and make all information available for proper company management.',
                'skill5-title': 'C5 ~ Lead',
                'skill5-desc': 'Meet user needs regarding the client\'s value chain, organize and manage a computer project with traditional or agile methods.',
                'skill6-title': 'C6 ~ Collaborate',
                'skill6-desc': 'Acquire, develop and exploit the skills necessary to work effectively in a computer team.',
                'Mes Projets': 'My Projects',
                'proj1-title': 'Astrophoto Project',
                'proj1-desc': 'Development of an image fusion application for studying stellar objects.',
                'proj2-title': 'Interactive Mapping',
                'proj2-desc': 'Development of an interactive map of Flanders, for CPAM, allowing the study of data from its territory. This project was carried out in collaboration with the MMDS service.',
                'proj3-title': 'Graph Project ~ GUI',
                'proj3-desc': 'Application, developed following the MVC model, allowing the creation of a shopping list and obtaining the shortest path to collect all products to the checkout.',
                'proj4-title': 'Like a Déjà vu',
                'proj4-desc': 'Text-based game in C developed during the first year of the Computer Science degree, as a team, available in French and English.',
                'proj5-title': 'NBA Predictor',
                'proj5-desc': 'Web application with database management created as part of the Dynamic Web project.',
                'proj6-title': 'Pokémon API',
                'proj6-desc': 'Secure REST API with JWT authentication, Swagger documentation and comprehensive unit tests.',
                'proj7-title': 'Static Website Project',
                'proj7-desc': 'Creation of a static website following the specifications created and validated by the client.',
                'proj8-title': 'Socket Project ~ Tic Tac Toe',
                'proj8-desc': 'Creation of a text-based Tic Tac Toe game in C operating using a server-client connection.',
                'proj9-title': 'Pokémon Chess',
                'proj9-desc': `Development of a Pokémon version chess game in Java with the graphics engine MG2D. This project implements OOP.`,
                'Voir le code': 'View Code',
                'Demo': 'Demo',
                'Contactez-moi': 'Contact Me',
                'contact-intro': 'Don\'t hesitate to contact me to discuss projects, collaborations or professional opportunities.',
                'Nom': 'Name',
                'Email': 'Email',
                'Sujet': 'Subject',
                'Message': 'Message',
                'Envoyer': 'Send',
                'Autres moyens de contact': 'Other Contact Methods',
                'Projets ratifiants': 'Ratifying Projects',
                'Niveau d\'acquisition': 'Acquisition Level'
            }
        };

        let currentLang = 'FR';
        
        function toggleLanguage() {
            const langToggle = document.querySelector('.lang-toggle');
            currentLang = currentLang === 'FR' ? 'EN' : 'FR';
            langToggle.textContent = currentLang;
            
            // Update all elements with data-lang attribute
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[currentLang][key]) {
                    element.textContent = translations[currentLang][key];
                }
            });
        }

        // Fonctions pour le modal des compétences
        function openSkillModal(skillId) {
            const modal = document.getElementById('skillModal');
            const skillData = skillsData[skillId];
            
            if (!skillData) return;
            
            // Mettre à jour le contenu du modal
            document.getElementById('modalIcon').textContent = skillData.icon;
            document.getElementById('modalTitle').textContent = skillData.title[currentLang];
            
            // Générer les détails d'acquisition
            const acquisitionDetails = document.getElementById('acquisitionDetails');
            acquisitionDetails.innerHTML = `
                <h3 style="color: var(--turquoise); text-align: center;">
                    ${translations[currentLang]['Niveau d\'acquisition']}
                </h3>
                <div class="acquisition-lvl-box">
                    <div class="acquisition-lvl">${skillData.acquisition[currentLang]}</div>
                </div>
                ${skillData.acquisitions[currentLang].map(item => `
                    <div class="acquisition-item">
                        <div class="acquisition-title">${item.title}</div>
                        <div class="acquisition-description">${item.description}</div>
                    </div>
                `).join('')}
            `;
            
            // Générer les cartes projets
            const projectShowcase = document.getElementById('projectShowcase');
            projectShowcase.innerHTML = skillData.projects.map(project => `
                <div class="project-showcase-card">
                    <h4 class="project-showcase-title">${project.title[currentLang]}</h4>
                    <p class="project-showcase-description">${project.description[currentLang]}</p>
                    <div class="project-showcase-tech">
                        ${project.technologies.map(tech => `
                            <span class="project-tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
            
            // Afficher le modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeSkillModal() {
            const modal = document.getElementById('skillModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Fermer le modal en cliquant à l'extérieur
        document.getElementById('skillModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeSkillModal();
            }
        });

        // Fermer le modal avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeSkillModal();
            }
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }

        // Navigation active state on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            });
        });

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.scroll-fade');
            const aboutScreen = document.querySelector('.about-screen');
            const timelineCards = document.querySelectorAll('.timeline-card');
            
            // General scroll fade
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('visible');
                }
            });
            
            // About screen effect
            if (aboutScreen) {
                const screenTop = aboutScreen.getBoundingClientRect().top;
                if (screenTop < window.innerHeight - 100) {
                    aboutScreen.classList.add('visible');
                }
            }
            
            // Timeline cards
            timelineCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < window.innerHeight - 100) {
                    card.classList.add('visible');
                }
            });
        }

        // Parallax effect on scroll
        function handleParallax() {
            const scrolled = window.pageYOffset;
            const particles = document.querySelectorAll('.particle');
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would normally send the form data to your server
            console.log('Form submitted:', formData);
            
            // Show success message (you can customize this)
            alert(currentLang === 'FR' ? 
                'Merci pour votre message ! Je vous répondrai dès que possible.' : 
                'Thank you for your message! I will reply as soon as possible.'
            );
            
            // Reset form
            this.reset();
        });

        // Event listeners
        window.addEventListener('scroll', () => {
            updateActiveNav();
            handleScrollAnimations();
            handleParallax();
        });

        // Initial calls
        document.addEventListener('DOMContentLoaded', () => {
            updateActiveNav();
            handleScrollAnimations();
        });

        // Prevent default behavior for WordPress admin bar if present
        if (typeof jQuery !== 'undefined') {
            jQuery(document).ready(function($) {
                // Adjust for WordPress admin bar
                if ($('#wpadminbar').length) {
                    $('.navbar').css('top', '32px');
                }
            });
        }
        document.querySelectorAll('.project-card').forEach((card) => {
        const imageContainer = card.querySelector('.project-image');
        const images = Array.from(imageContainer.querySelectorAll('img'));
        if (images.length <= 1) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'project-carousel';
        images.forEach(img => wrapper.appendChild(img));
        imageContainer.innerHTML = '';
        imageContainer.appendChild(wrapper);

        let currentIndex = 0;
        const updateCarousel = () => {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const arrowLeft = document.createElement('button');
        arrowLeft.className = 'carousel-arrow left';
        arrowLeft.innerHTML = '❮';
        arrowLeft.onclick = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        };

        const arrowRight = document.createElement('button');
        arrowRight.className = 'carousel-arrow right';
        arrowRight.innerHTML = '❯';
        arrowRight.onclick = () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        };

        imageContainer.appendChild(arrowLeft);
        imageContainer.appendChild(arrowRight);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 4000);
    });
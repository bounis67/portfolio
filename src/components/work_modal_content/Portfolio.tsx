import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Portfolio = () => {
    return (
        <div className="flex flex-col gap-3">
            <Title level={2}>Portfolio</Title>
            <Paragraph>
                J'ai créé ce portfolio dans le but de mettre en valeur mes
                compétences et de me présenter de la meilleure façon possible.
                Il fournit toutes les informations pertinentes me concernant à
                travers une interface bien conçue, garantissant une bonne
                compréhension et une rédaction efficace.
            </Paragraph>
            <Paragraph>
                <strong>Technologies utilisées :</strong>
                <ul>
                    <li>
                        <strong>React</strong> : pour la construction de
                        l'interface utilisateur.
                    </li>
                    <li>
                        <strong>TypeScript</strong> : pour ajouter des types
                        statiques et améliorer la maintenabilité du code.
                    </li>
                    <li>
                        <strong>Ant Design</strong> : pour des composants
                        d'interface utilisateur élégants et cohérents.
                    </li>
                    <li>
                        <strong>React Router</strong> : pour gérer la navigation
                        entre les différentes pages.
                    </li>
                    <li>
                        <strong>Tailwind CSS</strong> : pour concevoir des
                        styles CSS utilitaires.
                    </li>
                    <li>
                        <strong>Vite</strong> : pour le regroupement et le
                        développement rapide.
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                <strong>Points clés :</strong>
                <ul>
                    <li>
                        <strong>Interface bien conçue</strong> : Le design est
                        soigneusement élaboré pour garantir une bonne
                        compréhension et une rédaction efficace.
                    </li>
                    <li>
                        <strong>Adaptabilité</strong> : Le site est entièrement
                        adaptatif, s'adaptant à toutes les tailles d'écran.
                    </li>
                    <li>
                        <strong>Performance</strong> : Utilisation de Vite pour
                        un développement rapide et un regroupement efficace.
                    </li>
                    <li>
                        <strong>Expérience utilisateur</strong> : Navigation
                        fluide avec React Router et composants interactifs avec
                        Ant Design.
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                <strong>Démarrage rapide :</strong>
                <ol>
                    <li>
                        Clonez le dépôt en utilisant la commande suivante :
                        <pre>
                            <code>
                                git clone
                                https://github.com/votre-nom-utilisateur/votre-repo.git
                            </code>
                        </pre>
                    </li>
                    <li>
                        Installez les dépendances avec <code>npm install</code>.
                        Cette commande téléchargera et installera tous les
                        modules nécessaires pour exécuter le projet.
                    </li>
                    <li>
                        Lancez le serveur de développement avec{" "}
                        <code>npm run dev</code>. Cela démarrera un serveur
                        local et vous pourrez voir votre projet en action à
                        l'adresse <code>http://localhost:3000</code>.
                    </li>
                    <li>
                        Pour construire le projet pour la production, utilisez{" "}
                        <code>npm run build</code>. Cette commande créera une
                        version optimisée et prête pour la production de votre
                        application dans le dossier `dist`.
                    </li>
                </ol>
            </Paragraph>

            <Paragraph>
                <strong>Structure du projet :</strong>
                <pre>
                    <code>
                        Portfolio/
                        <br />
                        ├── src/ # Dossier contenant le code source du projet
                        <br />
                        │ ├── components/ # Composants React réutilisables
                        <br />
                        │ ├── context/ # Contextes React pour gérer l'état
                        global
                        <br />
                        │ ├── hooks/ # Hooks React personnalisés
                        <br />
                        │ ├── pages/ # Différentes pages du portfolio
                        <br />
                        │ ├── assets/ # Ressources telles que des images et des
                        styles globaux
                        <br />
                        │ │ ├── img/ # Dossier pour les images
                        <br />
                        │ ├── utils/ # Fonctions utilitaires
                        <br />
                        ├── public/ # Dossier pour les fichiers statiques
                        <br />
                        └── index.html # Point d'entrée HTML du projet
                        <br />
                    </code>
                </pre>
            </Paragraph>
            <Paragraph>
                Ce portfolio est une représentation de mes compétences en
                développement web et de mon parcours professionnel. Il est
                constamment mis à jour avec de nouveaux projets et compétences.
            </Paragraph>
            <Paragraph>
                Ce projet est sous licence MIT. Pour plus d'informations,
                veuillez vous référer au fichier{" "}
                <a href="e:/portfolio/LICENSE">LICENSE</a>.
            </Paragraph>
        </div>
    );
};

export default Portfolio;

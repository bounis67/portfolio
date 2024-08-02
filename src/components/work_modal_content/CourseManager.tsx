import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HighSchoolProject = () => {
    return (
        <div className="flex flex-col gap-3">
            <Title level={2}>HighSchool Project</Title>
            <Paragraph>
                Ce projet a vu le jour pour améliorer grandement la prise de
                notes et permettre d'avoir des cours bien organisés sans s'en
                occuper. Il est conçu pour aider à organiser et gérer les
                ressources éducatives pour les élèves. Il permettant aux
                utilisateurs de choisir entre un OneDrive et un ordinateur de
                bureau pour accéder et gérer leurs dossiers d'étude, y compris
                les chapitres, les exercices et d'autres documents pertinents.
            </Paragraph>
            <Paragraph>
                <strong>Fonctionnalités clés :</strong>
                <ul>
                    <li>
                        <strong>Choix de l'ordinateur</strong> : Permet aux
                        utilisateurs de choisir entre un OneDrive et un
                        ordinateur de bureau.
                    </li>
                    <li>
                        <strong>Initialisation du projet</strong> : Initialise
                        le projet avec les dossiers nécessaires.
                    </li>
                    <li>
                        <strong>Gestion des chapitres</strong> : Ajoute et gère
                        les chapitres, les quiz et les exercices.
                    </li>
                    <li>
                        <strong>Ouverture de documents</strong> : Ouvre les
                        derniers chapitres ou des documents spécifiques.
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                <strong>Structure détaillée du projet :</strong>
                <pre>
                    <code>
                        HighSchool Project/
                        <br />
                        ├── component/ # Contient des outils et scripts pour la
                        gestion des ressources
                        <br />
                        │ ├── calculation_tools.py # Outils de calcul
                        spécifiques
                        <br />
                        │ ├── check.py # Scripts de vérification
                        <br />
                        │ ├── creation.py # Scripts pour créer de nouveaux
                        éléments
                        <br />
                        │ ├── initialization.py # Script pour initialiser le
                        projet
                        <br />
                        │ └── open.py # Script pour ouvrir des documents
                        <br />
                        ├── file/ # Dossier pour les fichiers de référence
                        <br />
                        │ └── file_docx.docx # Document de référence
                        <br />
                        └── main.py # Point d'entrée principal du projet
                        <br />
                    </code>
                </pre>
            </Paragraph>
            <Paragraph>
                <strong>Démarrage rapide :</strong>
                <ol>
                    <li>
                        Clonez le dépôt sur votre machine locale.
                        <pre>
                            <code>
                                git clone
                                https://github.com/bounis67/course-manager
                            </code>
                        </pre>
                    </li>
                    <li>
                        Remplacez la variable <code>main_folder</code> dans le
                        fichier <code>main.py</code> par le chemin vers votre
                        dossier principal.
                    </li>
                    <li>
                        Naviguez vers le dossier du projet dans votre terminal.
                    </li>
                    <li>
                        Exécutez <code>python main.py</code> pour démarrer
                        l'application.
                    </li>
                    <li>
                        Suivez les instructions à l'écran pour naviguer dans
                        l'application.
                    </li>
                </ol>
            </Paragraph>
            <Paragraph>
                <strong>Contribuer :</strong>
                <ol>
                    <li>Forkez le dépôt.</li>
                    <li>
                        Créez votre branche de fonctionnalité (
                        <code>git checkout -b feature/NewFeature</code>).
                    </li>
                    <li>
                        Commitez vos changements (
                        <code>git commit -m 'Add some NewFeature'</code>).
                    </li>
                    <li>
                        Poussez vers la branche (
                        <code>git push origin feature/NewFeature</code>).
                    </li>
                    <li>Ouvrez une Pull Request.</li>
                </ol>
            </Paragraph>
            <Paragraph>
                Ce projet est sous licence MIT. Pour plus d'informations,
                veuillez vous référer au fichier{" "}
                <Link
                    to={
                        "https://github.com/bounis67/course-manager/blob/main/LICENSE"
                    }
                ></Link>
            </Paragraph>
        </div>
    );
};

export default HighSchoolProject;

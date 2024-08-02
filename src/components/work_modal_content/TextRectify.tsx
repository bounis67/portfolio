import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

function TextRectify() {
    return (
        <div>
            <Title level={2}>TextRectify</Title>
            <Paragraph>
                TextRectify est un projet visant à corriger les textes écrits
                par les utilisateurs en utilisant une IA de Groc Cloud.
            </Paragraph>
            <Title level={3}>Fonctionnalités</Title>
            <Paragraph>
                <ul>
                    <li>Correction de texte à l'aide de l'IA.</li>
                    <li>Configuration de la clé d'API Groc Cloud.</li>
                    <li>Sélection du modèle d'IA à utiliser.</li>
                    <li>
                        Déclenchement de la correction via une touche ou une
                        combinaison de touches personnalisable.
                    </li>
                    <li>Correction du texte.</li>
                </ul>
            </Paragraph>
            <Title level={3}>Installation</Title>
            <Paragraph>
                <ol>
                    <li>
                        Clonez le dépôt:
                        <code>
                            git clone
                            https://github.com/votre-nom-utilisateur/TextRectify.git
                        </code>
                    </li>
                    <li>
                        Accédez au répertoire du projet:
                        <code>cd TextRectify</code>
                    </li>
                    <li>
                        Installez les dépendances:
                        <code>python -m pip install -r requirements.txt</code>
                    </li>
                    <li>
                        Exécutez le script: <code>python main.py</code>
                    </li>
                    <li>
                        Convertissez en exécutable:
                        <code>
                            pyinstaller --noconfirm --onefile --windowed main.py
                        </code>
                    </li>
                </ol>
            </Paragraph>
            <Title level={3}>Utilisation</Title>
            <Paragraph>
                <ol>
                    <li>
                        Configurez les informations de base:
                        <ul>
                            <li>Clé d'API Groc Cloud.</li>
                            <li>Modèle d'IA à utiliser parmi une sélection.</li>
                        </ul>
                    </li>
                    <li>
                        Configurez une touche ou une combinaison de touches pour
                        déclencher la correction.
                    </li>
                    <li>Collez ou écrivez le texte à corriger.</li>
                    <li>
                        La correction sera effectuée à l'aide de l'IA et le
                        texte original sera remplacé par le texte corrigé.
                    </li>
                </ol>
            </Paragraph>
            <Title level={3}>Configuration</Title>
            <Paragraph>
                <ul>
                    <li>
                        Clé d'API Groc Cloud: Obtenez votre clé d'API depuis le
                        tableau de bord de Groc Cloud.
                    </li>
                    <li>
                        Modèle d'IA: Sélectionnez le modèle d'IA à utiliser
                        parmi ceux disponibles sur Groc Cloud.
                    </li>
                </ul>
            </Paragraph>

            <Title level={3}>Licence</Title>
            <Paragraph>
                Ce projet est sous licence MIT. Consultez le fichier
                <Link to="/LICENSE">LICENSE</Link> pour plus de détails.
            </Paragraph>
        </div>
    );
}

export default TextRectify;

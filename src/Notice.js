import { useContent } from "./Content";
import { useMyLang } from "./Lang";
import "./notice.css";



function Notice() {
    const { updateContent } = useContent();
    const { myCurrentLang } = useMyLang();

    const registration={
        Fr: "Inscrivez-vous pour la session 2025-2026",
        Nl: "Registreer voor sessie 2025-2026",
        En: "Register for session 2025-2026",
    }

    function handleNoticeClick() {
        console.log('abc');
        updateContent("Registration");
    }

    return (
        <div className="flashing-banner">
            <button
                type="button"
                className="notice-link"
                onClick={handleNoticeClick}
            >
                🚀 {registration[myCurrentLang]}!
            </button>
        </div>
    );
}

export default Notice;